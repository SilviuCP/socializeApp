import express from "express";
import { mergeTypes, mergeResolvers, fileLoader } from "merge-graphql-schemas";
import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import models from "../models/index";
import bodyParser from "body-parser";
import cors from "cors";
import passport from "passport";
import { GraphQLLocalStrategy, buildContext } from "graphql-passport";
import bcrypt from "bcrypt";
import { ApolloServer } from "apollo-server-express";
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';
import cookieSession from "cookie-session";

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

passport.serializeUser(function (user: any, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    //@ts-ignore
    const user = await models.User.findOne({ where: { id } });
    done(null, user);
});

const server = express();
server.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(session({
    genid: (req) => uuidv4(),
    secret: "changeMeLater",
    resave: false,
    saveUninitialized: false,
  }));
server.use(passport.initialize());
server.use(passport.session());

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

apollo.applyMiddleware({app: server, cors: {
    credentials: true,
    origin: true,
} });

function startServer() {
    server.listen(3000, (error) => {
        if (error) {
            throw error;
        }
        console.log("Server started");
    });
}

models.sequelize.sync({}).then(startServer)

