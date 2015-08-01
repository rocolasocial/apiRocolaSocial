/*jslint node: true, indent: 2,nomen:true */
'use strict';

var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  _idCourse: {
    type: String
  },
  tracks: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('Course', courseSchema);
