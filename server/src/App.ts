import express from "express";

const server = express();
server.get('/', (req, res) => {
    res.send("Alive");
});

server.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log("Server started")
});