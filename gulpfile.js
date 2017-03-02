var gulp = require('gulp');
var sass  = require('gulp-sass');



gulp.task('sass', function(){

  gulp.src('./public/scss/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/css'));
})

gulp.task('watch',['sass'],function(){

gulp.watch('./public/scss/*.scss',['sass']);
})
