/*jslint node: true, indent: 2,nomen:true */
'use strict';

var mongoose = require('mongoose');

var trackSchema = mongoose.Schema({
  _idUser: {
    type: String
  },
  _idTrack: {
    type: String
  },
  artist: {
    type: String,
    trim: true,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  album: {
    type: String,
    trim: true,
    required: true
  },
  latitude: {
    type: Number,
    trim: true,
    required: true
  },
  longitude: {
    type: Number,
    trim: true,
    required: true
  },
  genre: {
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: Date,
    trim: true,
    required: true
  },
  hour: {
    type: String,
    trim: true,
    required: true
  },
  url: {
    type: String,
    trim: true,
    required: true
  }
});

module.exports = mongoose.model('Track', trackSchema);
