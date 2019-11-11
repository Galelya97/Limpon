var sass = require('gulp-sass');
var gulp = require('gulp');

const scss = function() {
  return gulp
    .src('css/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('css'));
};

gulp.task('sass', scss);

gulp.task('watch', function() {
  gulp.watch('css/**/*.scss', gulp.series('sass'));
});
