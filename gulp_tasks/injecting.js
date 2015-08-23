/* jshint -W079 */ // prevent redefinition of $ warning

'use strict';
// gulp
var gulp = require('gulp');
var paths = gulp.paths;
var options = gulp.options;
// plugins
var $ = require('gulp-load-plugins')();
// modules
var wiredep = require('wiredep');
var mainBowerFiles = require('main-bower-files');

// inject app/**/*.js, bower components, css into index.html
// inject environment variables into config.js constant
gulp.task('inject-all', ['styles', 'wiredep', 'bower-fonts'], function () {

  return gulp.src('app/index.html')
    .pipe(
      $.inject( // app/**/*.js files
        gulp.src(paths.jsFiles)
          .pipe($.plumber()) // use plumber so watch can start despite js errors
          .pipe($.naturalSort())
          .pipe($.angularFilesort()),
        {relative: true}))
    .pipe(
      $.inject( // inject compiled css
        gulp.src('.tmp/*/styles/main.css', {read: false}),
        {
          ignorePath: '../.tmp',
          relative: true
        }))
    .pipe(gulp.dest('app'));
});

// build styles to tmp
gulp.task('styles', function () {
  // compile css starting from each module's main.less
//  return gulp.src(['app/main/styles/main.less', 'app/login/styles/main.less', 'app/ride/styles/main.less', 'app/arrival/styles/main.less', 'app/main/tracking/main.less', 'app/tracker/styles/main.less'])
  return gulp.src('app/*/styles/main.less')
//  return gulp.src(['foo/*', 'bar/*'])
    .pipe($.plumber())
    .pipe($.less())
    .pipe($.autoprefixer({ browsers: ['last 2 version'], remove: false}))
    .pipe(gulp.dest('.tmp/'));
});

// inject bower components
gulp.task('wiredep', function () {
  return gulp.src('app/index.html') // into index.html
    .pipe(wiredep.stream({
      ignorePath : "../bower_components/"
    }))
    .pipe(gulp.dest('app'));
});

// copy bower-fonts to do app/main/assets/fonts
gulp.task('bower-fonts', function () {
  var fontFiles = mainBowerFiles({filter: /\.(ttf)/i})
    .concat('app/fonts/**/*');
  return gulp.src(fontFiles)
    .pipe(gulp.dest('app/fonts'));
});
