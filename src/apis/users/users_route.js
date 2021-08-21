
const express = require("express");
const UsersController = require("./users_controller.js");
const UsersValidator = require("./users_validator.js");
const UsersRouter = express.Router();
const usersController = new UsersController();
const usersValidator = new UsersValidator();

UsersRouter.route("/")
  .get(usersController.index)
  .post(usersValidator.validate.bind(usersValidator), usersController.create);

UsersRouter.route("/:id")
  .get(usersController.read)
  .put(usersValidator.validate.bind(usersValidator), usersController.update)
  .delete(usersController.delete);

module.exports ={
  router:UsersRouter
}

