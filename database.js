const {nanoid} = require("nanoid");
// let id = nanoid();

const users = [
  {
    id: newUserId(), // hint: use the shortid npm package to generate it
    name: "Jane Doe", // String, required
    bio: "Not Tarzan's Wife, another Jane", // String, required
  },
  {
    id: newUserId(), // hint: use the shortid npm package to generate it
    name: "Bob Boberson", // String, required
    bio: "Just Bob", // String, required
  },
  {
    id: newUserId(), // hint: use the shortid npm package to generate it
    name: "Cat Catterson", // String, required
    bio: "Not a Cat", // String, required
  },
];

function newUserId() {
  return nanoid();
} 

function getUsers() {
  return users;
}

function getUserById(id) {
  return users.find((u) => u.id === id);
}

function createUser(data) {
  const payload = {
    id: String(users.length + 1),
    ...data,
  };

  users.push(payload);
  return payload;
}

function updateUser(id, data) {
  const index = users.findIndex((u) => u.id === id);
  users[index] = {
    ...users[index],
    ...data,
  };

  return users[index];
}

function deleteUser(id) {
  users = users.filter((u) => u.id != id);
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
