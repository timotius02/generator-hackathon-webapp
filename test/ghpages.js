'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('Github Pages', function () {
  before(function(done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(__dirname, 'temp'))
      .withOptions({'skip-install': true})
      .withPrompts({features: [
        'includeGHPages'
      ]})
      .on('end', done);
  });

  it('should add correct dependencies', function(){
    assert.fileContent('package.json', '"gulp-gh-pages"');
  });

  it('should create deploy task', function() {
    assert.fileContent('gulpfile.babel.js', 'gulp.task(\'deploy\'');
  });

});
