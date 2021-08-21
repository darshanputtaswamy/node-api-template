const snippet = `
const express = require("express");
const __nameCapital__Controller = require("./__nameLowerCase___controller.js");
const __nameCapital__Validator = require("./__nameLowerCase___validator.js");
const __nameCapital__Router = express.Router();
const __nameCamelCase__Controller = new __nameCapital__Controller();
const __nameCamelCase__Validator = new __nameCapital__Validator();

__nameCapital__Router.route("/")
  .get(__nameCamelCase__Controller.index)
  .post(__nameCamelCase__Validator.validate.bind(__nameCamelCase__Validator), __nameCamelCase__Controller.create);

__nameCapital__Router.route("/:id")
  .get(__nameCamelCase__Controller.read)
  .put(__nameCamelCase__Validator.validate.bind(__nameCamelCase__Validator), __nameCamelCase__Controller.update)
  .delete(__nameCamelCase__Controller.delete);

module.exports ={
  router:__nameCapital__Router
}
`;

module.exports = snippet;