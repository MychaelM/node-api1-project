const express = require("express");
const db = require("./database");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({message: "Server is Running"});
})

server.get("/users", (req, res) => {
  const users = db.getUsers();
  res.json(users);
})

server.get("/users/:id", (req, res) => {
  const id = req.params.id
  const user = db.getUserById(id);

  user ? res.json(user) : res.status(404).json({message: `User Not Found: ${user}`});
})

server.listen(8080, () => {
  console.log("server started at http://localhost:8080");
})