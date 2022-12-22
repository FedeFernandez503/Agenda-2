const route = require("express").Router();
const userHandlers = require('../controllers/userController.js');

    route.post('/createUser', userHandlers.createUser);
    route.get('/getUsers', userHandlers.getUsers);

module.exports = route;