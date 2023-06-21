
    const express = require('express');
    const UserRouter = express.Router();
    const UserController = require('../controllers/UserController');

    // Define routes...

    UserRouter
    .route('/')
    .post(UserController.createUsersController)
    .get(UserController.getAllUsersController)

    UserRouter
    .route('/UserId')
    .get(UserController.getUsersController)
    .put(UserController.updateUserController)

    module.exports = UserRouter;
  