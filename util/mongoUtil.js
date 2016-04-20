var mongoose = require('mongoose');
var dbURI = require("../config").database;
var db = mongoose.connection;
db.on('connecting', function () {
  console.log('connecting to MongoDB...');
});
db.on('error', function (error) {
  console.error('Error in MongoDb connection: ' + error);
  mongoose.disconnect();
});
db.on('connected', function () {
  console.log('MongoDB connected!');
});
db.once('open', function () {
  console.log('MongoDB connection opened!');
});
db.on('reconnected', function () {
  console.log('MongoDB reconnected!');
});
db.on('disconnected', function () {
  console.log('MongoDB disconnected!It will connecting every five seconds.');
  setTimeout(function () {
    mongoose.connect(dbURI, {server: {auto_reconnect: true}});
  }, 5000);
});
//mongoose.connect(dbURI, {server: {auto_reconnect: true}});

module.exports = mongoose;
