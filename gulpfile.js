'use strict';
 
const Gulp = require('gulp');
const Sass = require('gulp-sass');

Sass.compiler = require('node-sass');

/**
 * Watch the source code for changes and run a build task
 */
const watchTask = Gulp.series(function(done) {
    Gulp.watch('./src/scss/**/*.scss', buildTask);

    done();
})

/**
 * Build and process the source code.
 */
const buildTask = Gulp.series(function(done) {
    Gulp.src('./src/scss/**/*.scss')
        .pipe(Sass({outputStyle: 'compressed'}).on('error', Sass.logError))
        .pipe(Gulp.dest('./public/css'));
    
    done();
})

exports.default = buildTask
exports.watch = watchTask