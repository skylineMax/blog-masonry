'use strict';

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    prefix = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    uncss = require('gulp-uncss'),
    cleanCSS = require('gulp-clean-css'),
    gcmq = require('gulp-group-css-media-queries');

gulp.task('connect', function () {
    connect.server({
        root: 'build',
        livereload: true
    });
});

gulp.task('css', function () {
    gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(gcmq())
        .pipe(prefix('last 2 versions', '> 1%', 'ie 9'))
        .pipe(cleanCSS(''))
	.pipe(uncss({
            html: ['build/index.html']
        }))
        .pipe(rename('bundle.min.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src(['build/index.html',])
        .pipe(connect.reload());
});
gulp.task('js', function () {
    gulp.src('build/js/main.js')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('build/index.html',['html']);
    gulp.watch('src/scss/*.scss',['css']);
    gulp.watch('build/js/*.js', ['js']);
});

gulp.task('default', ['connect','css','html','watch']);