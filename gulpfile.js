var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp
    .src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('./css/**/*.scss', gulp.series('sass'));
});
