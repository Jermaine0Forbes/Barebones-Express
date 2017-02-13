var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('boot', function(){

  gulp.src('./public/scss/bootstrap/bootstrap-revision.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/css'));
})

gulp.task('sass', function(){

  gulp.src('./public/scss/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/css'));
})

gulp.task('watch',['sass'],function(){

gulp.watch('./public/scss/*.scss',['sass']);
})
