import express from "express";
import { buildSchema } from "graphql";
import graphqlHTTP, { Middleware } from "express-graphql";

const server = express();
server.get('/', (req, res) => {
    res.send("Alive");
});

const schema = buildSchema(`
    type Query{
        hello: String
    }
`)

const root = {
    hello: () => "aaaa"
}

server.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

server.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log("Server started")
});