var Gulp = require('gulp'),
    Sass = require('gulp-sass'),
    Rev = require('gulp-rev');

Gulp.task('default', ['sass']);

Gulp.task('sass', function() {
    Gulp.src('static/sass/*.scss')
        .pipe(Sass())
        .pipe(Rev())
        .pipe(Gulp.dest('static/css'))
        .pipe(Rev.manifest())
        .pipe(Gulp.dest('static/css'));
});

Gulp.task('watch', function() {
    Gulp.watch(['static/sass/*.scss'], ['sass']);
});
