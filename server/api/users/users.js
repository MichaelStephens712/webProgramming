'use strict';

import uuidv4 from 'uuid/v4';

let users = [];

export function listContents(req, res) {
  res.json(users);
}

export function findOne(req, res) {
  let existingUser = findUser(req.params.id);
  if(existingUser) {
    res.status(200);
    res.json(existingUser);
  } else {
    res.status(404);
    res.json({message: 'Not Found'});
  }
}

export function createUser(req, res) {
  let id = uuidv4();
  let name = req.body.name;
  let address = req.body.address;
  let age = req.body.age;

  let user = {
    id,
    name,
    address,
    age
  };

  users.push(user);

  res.status(201);
  res.json(user);
}

export function updateUser(req, res) {
  let id = req.params.id;
  let name = req.body.name;
  let address = req.body.address;
  let age = req.body.age;
  let user = {
    id,
    name,
    address,
    age
  };
  let existingUser = findUser(id);

  if(!existingUser) {
    users.push(user);
    res.status(201);
    res.json(user);
  } else {
    existingUser.name = user.name;
    existingUser.address = user.address;
    existingUser.age = user.age;
    res.json(existingUser);
  }
}

export function removeUser(req, res) {
  let userIndex = findUserIndex(req.params.id);
  if(userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send();
  } else {
    res.status(404);
    res.json({message: 'Not Found'});
  }
}

function findUser(id) {
  let foundUsers = users.filter(function(user) {
    if(user.id === id) {
      return true;
    }
    return false;
  });

  if(foundUsers.length > 0) {
    return foundUsers[0];
  } else {
    return null;
  }
}

function findUserIndex(id) {
  return users.map(function(user) {
    return user.id;
  }).indexOf(id);
}
