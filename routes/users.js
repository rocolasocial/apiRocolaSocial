/*jslint node: true, indent: 2,nomen:true */
'use strict';

var express = require('express');
var router = express.Router();
var User = require('../mongoose_models/user');

/* GET users listing. */
/*jslint unparam: true */
router.get('/', function (req, res, next) {
  User.find(function (err, users) {
    if (err) {
      return console.error(err);
    }
    res.send(users);
  });
});
/*jslint unparam: false */

module.exports = router;
