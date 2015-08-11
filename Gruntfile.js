/*jslint node: true, indent: 2,nomen:true */
'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    watch: {
      js: {
        files: ['*.js', 'routes/*.js', 'mongoose_models/*.js', 'bin/www'],
        tasks: ['lint']
      }
    },
    jslint: {
      all : {
        src: [
          'Gruntfile.js',
          'app.js',
          'routes/*.js',
          'mongoose_models/*.js',
          'bin/www'
        ],
        directives : {
          indent : 2,
          node   : true,
          nomen  : true,
          regexp : true
        }
      }
    }
  });

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('lint', ['jslint']);
};
