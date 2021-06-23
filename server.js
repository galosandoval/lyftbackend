const express = require("express");

const server = express();

const lyftRouter = require("./lyft/lyft-router")

server.use(express.json());

server.use('/test', lyftRouter)

server.get("/", (req, res) => {
  res.json({ lyft: "here I come" });
});

module.exports = server;
