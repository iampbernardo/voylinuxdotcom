// required packages
var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  watch = require('gulp-watch');
  connect = require('gulp-connect');



// Compile Stylus
gulp.task('compile', function(){
gulp.src('./assets/styl/main.styl')
  .pipe(stylus({
    compress: true,
    'include css': true

  }))
  .pipe(gulp.dest('./assets/css/'))
  .pipe(connect.reload());
});

// Watch styl files and then exeute compile
gulp.task('watch_styl', function(){
  gulp.watch('./assets/styl/*.styl', ['compile']);
});

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('default', ['connect', 'compile',  'watch_styl']);
