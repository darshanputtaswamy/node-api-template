
const { to } = require("await-to-js");
const ErrorHandler = require('../../utils/error_handler');
const UsersRepository = require("./users_repository");
const Logger = require("../../utils/logger");

module.exports = class UsersController {
  constructor() {
    this._controllerName = "users";
    this._repository = new UsersRepository();
    this._logger = new Logger(`controller-users`).getLogger();
  }

  async create(req, res, next) {
    try {
      let input = req.body;
      const [err, data] = await to(this._repository.create(input))
      ErrorHandler.handleError(err);

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).send(`Creating users failed.`);
    }
  }

  async update(req, res, next) {

    try {
        let input = req.body;
        const [err, data] = await to(this._repository.update(input));
        ErrorHandler.handleError(err);
  
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).send(`Updating users failed.`);
      }
  }

  async index(req, res, next) {
    try {
        let input = req.body;
        const [err, data] = await to(this._repository.index(input));
        ErrorHandler.handleError(err);
  
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).send(`Get all users failed.`);
      }
  }

  async read(req, res, next) {
    try {
        let input = req.body;
        const [err, data] = await to(this._repository.read(input));
        ErrorHandler.handleError(err);
  
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).send(`Get users failed.`);
      }
  }

  async delete(req, res, next) {
    try {
        let input = req.body;
        const [err, data] = await to(this._repository.delete(input));
        ErrorHandler.handleError(err);
  
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).send(`Deleting users failed.`);
      }
  }
};
