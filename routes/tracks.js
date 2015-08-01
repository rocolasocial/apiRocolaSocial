/*jslint node: true, indent: 2,nomen:true */
'use strict';

var express = require('express');
var router = express.Router();
var Track = require('../mongoose_models/track');

/* GET users listing. */
/*jslint unparam: true */
router.get('/', function (req, res, next) {
  Track.find(function (err, tracks) {
    if (err) {
      return console.error(err);
    }
    res.send(tracks);
  });
});
/*jslint unparam: false */

module.exports = router;
