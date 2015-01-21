// required packages
var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  watch = require('gulp-watch');
  connect = require('gulp-connect');



// Compile Stylus
gulp.task('compile', function(){
gulp.src('./src/styl/main.styl')
  .pipe(stylus({
    'include css': true
  }))
  .pipe(gulp.dest('./src/css/'))
  .pipe(connect.reload());
});

// Watch styl files and then exeute compile
gulp.task('watch_styl', function(){
  gulp.watch('./src/styl/**/*.styl', ['compile']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true
  });
});

gulp.task('css', function () {
  gulp.src('./app/**/*.css')
    .pipe(connect.reload());
});

gulp.task('default', ['connect', 'watch_styl']);
