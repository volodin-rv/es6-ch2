const gulp = require('gulp');
const babel = require('gulp-babel');
// const eslint = require('gulp-eslint');

//Зависимости gulp
gulp.task('default', function () {
  //запуск ESLint
  // gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
  //   .pipe(eslint())
  //   .pipe(eslint.format());

  //Исходный код для Node
  gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));

  //Исходный код для браузера
  gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
});