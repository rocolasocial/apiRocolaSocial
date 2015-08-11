/*jslint node: true, indent: 2,nomen:true */
'use strict';

var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  initialTime: {
    type: Date,
    required: true
  },
  finishTime: {
    type: Date,
    required: false,
    default: null
  },
  tracks: [{
    coordinates: {
      type: Array,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    album: {
      type: String,
      required: false
    },
    genre: {
      type: String,
      required: false
    },
    artist: {
      type: String,
      required: false
    },
    duration: {
      type: Number,
      required: false
    }
  }]
});

module.exports = mongoose.model('Course', courseSchema);
