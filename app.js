'use strict';
const app = require('koa')();
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const config = require('./config');
const Jade = require('koa-jade')

app.use(logger());
app.use(bodyParser());

const jade = new Jade({
  viewPath: './views',
  debug: false,
  pretty: false,
  compileDebug: false,
  locals: {},
  app: app
});

app.use(function *(next) {
  this.body = this.request.body;
  yield next;
});

app.use(function *(next) {
  this.set('Access-Control-Allow-Origin', '*');
  this.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  this.set('Access-Control-Allow-Headers', 'Content-Type');
  yield next;
});

require('./routes')(app);

mongoose.connect(config.database, config.options);

app.on('error', function (err, ctx) {
  log.error('server error', err, ctx);
});

if (!module.parent) {
  app.listen(3000);
  console.log('%s|worker|%s|start|3000', new Date().toISOString(), process.pid);
}

module.exports = app;
