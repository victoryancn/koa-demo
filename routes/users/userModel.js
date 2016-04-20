/**
 * Created by victoryan on 16/4/20.
 */
'use strict';
const mongoose = require('../../util/mongoUtil');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  uid: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String,
    trim: true
  },
  type: String,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
