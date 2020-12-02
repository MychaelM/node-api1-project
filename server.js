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

// server.post("/users", (req, res) => {
//   req.body.name && req.body.bio
//     ?  {
//         const newUser = db.createUser({
//           name: req.body.name,
//           bio: req.body.bio,
//         });
//         res.json(newUser);
//       }
//     : res
//         .status(400)
//         .json({ errorMessage: "Please provide name and bio for the user." });
// })

server.post("/users", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      errorMessage: "Please provide name and bio for the user.",
    });
  }
  const newUser = db.createUser({
          name: req.body.name,
          bio: req.body.bio,
        });

  res.json(newUser);
});

server.listen(8080, () => {
  console.log("server started at http://localhost:8080");
})