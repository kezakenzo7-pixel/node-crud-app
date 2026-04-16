const { Router } = require('express');
const {getUsers} = require('../controller/users.controller');
Router.get('/users', getUsers);
module.exports = Router;