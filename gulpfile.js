var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
//var source = require('vinyl-source-stream');
// var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
//var assign = require('lodash.assign');

gulp.task('default',['sassify','watch']);

gulp.task('watch',function() {
  gulp.watch('./sass/**/*.scss',['sassify']);
});

gulp.task('sassify',function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./css'));
});
