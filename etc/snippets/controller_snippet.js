const snippet = `
const { to } = require("await-to-js");
const ErrorHandler = require('../../utils/error_handler');
const __nameCapital__Repository = require("./__nameLowerCase___repository");

const Logger = require("../../utils/logger");

module.exports = class UsersController {
  constructor() {
    this._controllerName = "__nameLowerCase__";
    this._repository = new __nameCapital__Repository();
    this._logger = new Logger("controller-__nameLowerCase__").getLogger();
  }

  async create(req, res, next) {
    try {
      let input = req.body;
      const [err, data] = await to(this._repository.create(input))
      ErrorHandler.handleError(err);

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).send("Creating __nameLowerCase__ failed.");
    }
  }

  async update(req, res, next) {

    try {
        let input = req.body;
        const [err, data] = await to(this._repository.update(input));
        ErrorHandler.handleError(err);
  
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).send("Updating __nameLowerCase__ failed.");
      }
  }

  async index(req, res, next) {
    try {
        let input = req.body;
        const [err, data] = await to(this._repository.index(input));
        ErrorHandler.handleError(err);
  
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).send("Get all __nameLowerCase__ failed.");
      }
  }

  async read(req, res, next) {
    try {
        let input = req.body;
        const [err, data] = await to(this._repository.read(input));
        ErrorHandler.handleError(err);
  
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).send("Get __nameLowerCase__ failed.");
      }
  }

  async delete(req, res, next) {
    try {
        let input = req.body;
        const [err, data] = await to(this._repository.delete(input));
        ErrorHandler.handleError(err);
  
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).send("Deleting __nameLowerCase__ failed.");
      }
  }
};
`;


module.exports = snippet;