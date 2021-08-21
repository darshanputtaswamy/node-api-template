const express = require("express");
const BaseAuthMiddleWare =  require("../common/base_auth_middleware.js");
console.log(BaseAuthMiddleWare)
const baseAuthMiddleWare = new BaseAuthMiddleWare();

// add your routes
//const UsersRoute = require('./users/user_route');

exports.setRoutes =(app) => {
  app.use(baseAuthMiddleWare.checkAuthentication.bind(baseAuthMiddleWare));

  // add route here
  //app.use("/api/v1.0/user", UserRoute.router);

};