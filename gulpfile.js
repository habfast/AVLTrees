var gulp = require('gulp');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

var js_files = ['src/AVLTree.js'];

gulp
    .task('default', function () {
        gulp.src(js_files)
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dest'));
    })
    .task('watch', function () {
        gulp.start('default'); // initial compile
        gulp.watch(js_files, ['default']);
    });
