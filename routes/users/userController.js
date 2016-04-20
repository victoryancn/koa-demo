/**
 * Created by victoryan on 16/4/20.
 */
const User = require("./userModel");

exports.addUser = function *() {
  try {
    const newUser = new User(this.request.body);
    const user = yield newUser.save();
    this.status = 200;
    this.body = {success: true, user_id: user._id};
  } catch (err) {
    console.log(err);
    this.throw(err);
  }
};

exports.getUserList = function *() {
  try {
    const users = yield User.find({}).exec();
    const count = yield User.count();
    this.status = 200;
    this.body = {
      data: users,
      count: count
    }
  } catch (err) {
    console.log(err);
    this.throw(err);
  }
};
