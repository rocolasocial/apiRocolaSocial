/*jslint node: true, indent: 2,nomen:true */
'use strict';

var express = require('express');
var router = express.Router();
var Course = require('../mongoose_models/course');

/* GET users listing. */

function getCourses(res, doIfError, query) {
  function callback(err, courses) {
    if (err) {
      doIfError(res, err);
    }
    res.send(courses);
  }
  if (query) {
    Course.find(query, callback);
  } else {
    Course.find(callback);
  }
}
/*jslint unparam: true */
router.get('/', function (req, res, next) {
  var mongoQuery = {
    },
    geoInfo = {
      radius: req.query.radius ? parseFloat(req.query.radius) : 50,
      longitud: 0,
      latitude: 0
    },
    doInError = null;
  if (req.query.longitude && req.query.latitude) {
    geoInfo.longitude = parseFloat(req.query.longitude);
    geoInfo.latitude = parseFloat(req.query.latitude);
    mongoQuery = {
      'locations.coordinates': {
        $geoWithin: {
          $center: [
            [ geoInfo.longitude, geoInfo.latitude ],
            geoInfo.radius / 3963.2
          ]
        }
      }
    };
    doInError = function (res, err) {
      res.send(err);
    };
    getCourses(res, doInError, mongoQuery);
  } else if (req.query.longitude || req.query.latitude) {
    res.send({
      error: '400 Bad Request',
      message: 'Longitude and latitude are both necessary'
    });
  } else {
    getCourses(res);
  }
});
/*jslint unparam: false */

/*jslint unparam: true */
router.get('/:username', function (req, res, next) {
  var mongoQuery = {
    user: req.params.username
  },
    doIfError = function (res) {
      res.send({
        status: '404 not found',
        error: req.params.courseId + 'is not a valid course id.'
      });
    };
  getCourses(res, doIfError, mongoQuery);
});
/*jslint unparam: false */

/*jslint unparam: true */
router.post('/', function (req, res, next) {
  // Consultar API last.fm
  var course = new Course({
    user: req.body.user,
    initialTime: req.body.initialTime,
    finishTime: req.body.finishTime
    // tracks: resultados last.fm
  });

  course.save(function (err) {
    if (err) {
      return console.error(err);
    }
    res
      .status(200)
      .send({
        saved: true,
        _id: course._id
      });
  });
});
/*jslint unparam: false */

module.exports = router;
