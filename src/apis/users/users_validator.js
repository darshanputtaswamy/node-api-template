const BaseValidator = require("../../common/base_validator");
const UsersSchema = require("./users_schema");

module.exports = class UsersValidator extends BaseValidator {
    constructor() {
        super("users", UsersSchema.getSchema());
    }
};
