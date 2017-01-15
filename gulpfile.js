var gulp = require('gulp');
var scss = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('./public/scss/main.scss')
  .pipe(scss())
  .pipe(gulp.dest('./public/css'));
})

gulp.task('watch',['sass'],function(){
  gulp.watch('./public/scss/*.scss',['sass']);
});
