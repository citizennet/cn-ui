// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint        = require('gulp-jshint');
var concat        = require('gulp-concat');
var uglify        = require('gulp-uglify');
var rename        = require('gulp-rename');
var sourcemaps    = require('gulp-sourcemaps');
var babel         = require('gulp-babel');

// Lint Task
gulp.task('lint', function() {
  return gulp.src(['src/*.js', '!src/*.test.js'])
      .pipe(jshint({
        multistr: true,
        validthis: true,
        esnext: true
      }))
      .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src(['src/*.js', '!src/*.test.js'])
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
  return gulp.src(['dist/cn-ui.min.js',
                   'bower_components/ng-file-upload/angular-file-upload.min.js'])
      .pipe(concat('all.min.js'))
      .pipe(gulp.dest('dist'));
});

gulp.task('deps', function() {
  return gulp.src(['dist/cn-ui.js',
                   'bower_components/ng-file-upload/angular-file-upload.js'
      ])
      .pipe(concat('all.js'))
      .pipe(gulp.dest('dist'));
});

gulp.task('build', ['lint', 'scripts', 'deps', 'deps-min']);

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('src/*.js', ['build']);
});

// Default Task
gulp.task('default', ['build', 'watch']);