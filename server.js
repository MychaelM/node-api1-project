const express = require("express");
// const db = require("./database");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({message: "Server is Running"});
})

server.listen(8080, () => {
  console.log("server started at http://localhost:8080");
})