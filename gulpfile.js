(function() {
  'use strict';

  // Include gulp
  const gulp = require('gulp');

  // Include Our Plugins
  const babel = require('gulp-babel');
  const concat = require('gulp-concat');
  const eslint = require('gulp-eslint');
  const ngAnnotate = require('gulp-ng-annotate');
  const rename = require('gulp-rename');
  const sourcemaps = require('gulp-sourcemaps');
  const uglify = require('gulp-uglify');

  // Lint Task
  gulp.task('lint', function() {
    return gulp
        .src(['src/*.js', '!src/*.test.js'])
        .pipe(eslint.format({
          multistr: true,
          validthis: true,
          esnext: true
        }));
  });

  // Concatenate & Minify JS
  gulp.task('app', function() {
    return gulp
        .src(['src/*.js', '!src/*.test.js'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('cn-ui.js'))
        .pipe(ngAnnotate({single_quotes: true}))
        .pipe(gulp.dest('dist'))
        .pipe(rename('cn-ui.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
  });

  gulp.task('deps-min', function() {
    return gulp
        .src(['dist/cn-ui.min.js',
          'bower_components/ng-file-upload/angular-file-upload.min.js',
          'bower_components/angularjs-toaster/toaster.min.js',
          'bower_components/angular-md5/angular-md5.min.js',
          'bower_components/angular-uuid4/angular-uuid4.min.js',
          'bower_components/SparkMD5/spark-md5.min.js'
        ])
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('dist'));
  });

  gulp.task('deps', function() {
    return gulp
        .src(['dist/cn-ui.js',
          'bower_components/ng-file-upload/angular-file-upload.js',
          'bower_components/angularjs-toaster/toaster.js',
          'bower_components/angular-md5/angular-md5.js',
          'bower_components/angular-uuid4/angular-uuid4.js',
          'bower_components/SparkMD5/spark-md5.js'
        ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'));
  });

  // Task to run script tasks in sequence
  gulp.task('scripts', gulp.series('app', 'deps', 'deps-min'));

  gulp.task('build', gulp.parallel('lint', 'scripts'));

  // Watch Files For Changes
  gulp.task('watch', function() {
    gulp.watch('src/*.js', gulp.series('build'));
  });

  // Default Task
  gulp.task('default', gulp.parallel('build', 'watch'));

})();
