'use strict';
const Router = require("koa-router")();
const users = require('./users');

module.exports = function (app) {
  Router.use('/users', users.routes(), users.allowedMethods());
  Router.get("/", function *() {
    this.render('index');
  });
  app.use(Router.routes());
};
