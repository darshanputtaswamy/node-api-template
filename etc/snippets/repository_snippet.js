const snippet = `
import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()
const __nameCapital__Schema = require("./__nameLowerCase___schema");

module.exports = class __nameCapital__Repository  {
  constructor() {
    this._schema =  __nameCapital__Schema.getSchema()
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
`;

module.exports = snippet;
