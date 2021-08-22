
/**
 *  Config manager provides loading all configurations when application is startup. Some configs gathered from environment variables, 
 *  some are from static fields. When a modicifation needed, if you think, a variable is static please you should add it as static, not use ENVIRONMENT_VARIABLES!!!! 
 */

const dotenv = require('dotenv');
const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
dotenv.config({ path: envFile })

 module.exports = class ConfigManager {
    constructor() {
         this.authentication = this._getBasicAuthenticationConfigs();
    }
    

    _getBasicAuthenticationConfigs() {
        let authentication = { admin: {
            username:process.env.ENTITY_SERVICE_ADMIN_USERNAME || "adminUser",
            password:process.env.ENTITY_SERVICE_ADMIN_PASSWORD || "whatAc00ls3cret"
        }};
        return authentication;
    }

    getConfigurations() {
        return {
            authentication: this.authentication,
            logLevel: process.env.LOG_LEVEL || "debug",
            rejectUnauthorized: process.env.REQUEST_REJECT_UNAUTHORIZED == "true" ? true : false,
            listenPort: process.env.PORT || 8085,
            salt:process.env.SALT
        }
    }
}