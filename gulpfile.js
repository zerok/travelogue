var Gulp = require('gulp'),
    Sass = require('gulp-sass');

Gulp.task('default', ['sass']);

Gulp.task('sass', function() {
    Gulp.src('static/sass/*.scss').pipe(Sass()).pipe(Gulp.dest('static/css'));
});

Gulp.task('watch', function() {
    Gulp.watch(['static/sass/*.scss'], ['sass']);
});
