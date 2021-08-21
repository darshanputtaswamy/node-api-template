
const UsersSchema = require("./users_schema");

module.exports = class UsersRepository  {
  constructor() {
    this._schema =  UsersSchema.getSchema()
  }

  async getCount() {
    throw new Error("Not implemented method");

    return null;
  }

  async create(args) {
    throw new Error("Not implemented method");

    return null;
  }

  async update(args) {
    throw new Error("Not implemented method");

    return null;
  }

  async get(args) {
    throw new Error("Not implemented method");

    return null;
  }

  async delete(args) {
    throw new Error("Not implemented method");

    return null;
  }
};
