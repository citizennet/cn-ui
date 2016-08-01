(function() {
  'use strict';

  // Include gulp
  const gulp = require('gulp');

  // Include Our Plugins
  const jshint = require('gulp-jshint');
  const concat = require('gulp-concat');
  const uglify = require('gulp-uglify');
  const rename = require('gulp-rename');
  const runSequence = require('run-sequence');
  const sourcemaps = require('gulp-sourcemaps');
  const babel = require('gulp-babel');

  // Lint Task
  gulp.task('lint', function() {
    return gulp
        .src(['src/*.js', '!src/*.test.js'])
        .pipe(jshint({
          multistr: true,
          validthis: true,
          esnext: true
        }))
        .pipe(jshint.reporter('default'));
  });

  // Concatenate & Minify JS
  gulp.task('app', function() {
    return gulp
        .src(['src/*.js', '!src/*.test.js'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('cn-ui.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('cn-ui.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
  });

  gulp.task('deps-min', function() {
    return gulp
        .src(['dist/cn-ui.min.js',
          'bower_components/ng-file-upload/angular-file-upload.min.js'])
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('dist'));
  });

  gulp.task('deps', function() {
    return gulp
        .src(['dist/cn-ui.js',
          'bower_components/ng-file-upload/angular-file-upload.js'
        ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'));
  });

  // Task to run script tasks in sequence
  gulp.task('scripts', r => {
    runSequence('app', 'deps', 'deps-min', r);
  });

  gulp.task('build', ['lint', 'scripts']);

  // Watch Files For Changes
  gulp.task('watch', function() {
    gulp.watch('src/*.js', ['build']);
  });

  // Default Task
  gulp.task('default', ['build', 'watch']);

})();
