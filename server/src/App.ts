import express from "express";
import { buildSchema } from "graphql";
import graphqlHTTP, { Middleware } from "express-graphql";
import { mergeTypes, mergeResolvers, fileLoader } from "merge-graphql-schemas";
import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import models from "../models/index";
import bodyParser from "body-parser";
import cors from "cors";
import passport from "passport";
import { GraphQLLocalStrategy, buildContext } from "graphql-passport";
import bcrypt from "bcrypt";
import cookieSession from "cookie-session";
import { ApolloServer } from "apollo-server-express";

passport.use(new GraphQLLocalStrategy((email, password, done) => {
    //@ts-ignore
    models.User.findOne({
        where: {
            email
        }
    }).then(async (user: any) => {
        const isValidPassword = await bcrypt.compare(password, user.password);
        console.log(isValidPassword)
        if(isValidPassword){
            done(null, user);
        }
        else{
            done(null, false);
        }
    });
}))

const server = express();
server.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieSession({
    name: "nenos",
    keys: [
        "key1", "key2"
    ]
}));
server.use(passport.initialize());

server.get('/', (req, res) => {
    res.send("Alive");
});

const schemas = mergeTypes(fileLoader(path.join(__dirname, "../schemas")));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, "../resolvers")));
const schema = makeExecutableSchema({
    typeDefs: schemas,
    resolvers,
})    

const apollo = new ApolloServer({
    schema: schema,
    rootValue: resolvers,
    context: ({ req, res }) => buildContext({ req, res, models })
});

apollo.applyMiddleware({app: server});

function startServer() {
    server.listen(3000, (error) => {
        if (error) {
            throw error;
        }
        console.log("Server started");
    });
}

models.sequelize.sync({}).then(startServer)

