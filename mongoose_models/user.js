/*jslint node: true, indent: 2,nomen:true */
'use strict';

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  _idUser: {
    type: String
    },
  username: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
