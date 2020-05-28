import express from "express";
import { buildSchema } from "graphql";
import graphqlHTTP, { Middleware } from "express-graphql";
import { mergeTypes, mergeResolvers, fileLoader } from "merge-graphql-schemas";
import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import models from "../models/index";
import bodyParser from "body-parser";

const server = express();
server.get('/', (req, res) => {
    res.send("Alive");
});

const schemas = mergeTypes(fileLoader(path.join(__dirname, "../schemas")));
console.log(schemas);
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, "../resolvers")));
const schema = makeExecutableSchema({
    typeDefs: schemas,
    resolvers,
})
server.use('/graphql', bodyParser.json(), graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
    context: {
        models
    }
}))

function startServer() {
    server.listen(3000, (error) => {
        if (error) {
            throw error;
        }
        console.log("Server started");
    });
}

models.sequelize.sync({}).then(startServer)

