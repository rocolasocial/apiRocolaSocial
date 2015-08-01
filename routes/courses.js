/*jslint node: true, indent: 2,nomen:true */
'use strict';

var express = require('express');
var router = express.Router();
var Course = require('../mongoose_models/course');

/* GET users listing. */
/*jslint unparam: true */
router.get('/', function (req, res, next) {
  Course.find(function (err, courses) {
    if (err) {
      return console.error(err);
    }
    res.send(courses);
  });
});
/*jslint unparam: false */

module.exports = router;
