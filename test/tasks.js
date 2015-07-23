'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('Gulp tasks', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(__dirname, 'temp'))
      .withOptions({'skip-install': true})
      .withPrompts({features: []})
      .on('end', done);
  });

  it('should contain necessary tasks', function () {
    [
      'styles',
      'html',
      'images',
      'fonts',
      'extras',
      'clean',
      'serve',
      'serve:dist',
      'wiredep',
      'build',
      'default'
    ].forEach(function (task) {
      assert.fileContent('gulpfile.babel.js', 'gulp.task(\'' + task);
    });
  });

});
