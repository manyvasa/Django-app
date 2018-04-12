var gulp = require('gulp'),
    uglify = require('gulp-uglify');
    rename = require('gulp-rename');
  
gulp.task('minijs', function () {
  gulp.src('blog/static/js/*.js')
      .pipe(uglify())
      .pipe(rename({suffix: '_min'}))
      .pipe(gulp.dest('blog/static/js/min_js'))
});