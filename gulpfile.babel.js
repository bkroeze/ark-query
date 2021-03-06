/*
 * Ark-Query
 * https://github.com/bkroeze/ark-query
 *
 * Copyright (c) 2017 Bruce Kroeze
 * Licensed under the ISC license.
 */

'use strict';
import gulp from 'gulp';
import ava from 'gulp-ava';
import babel from 'gulp-babel';
import {spawn} from 'child_process';
import bump from 'gulp-bump';
const eslint = require('gulp-eslint');
const documentation = require('gulp-documentation');

gulp.task('lint', () => {
  return gulp.src(['src/*.js', '!node_modules/**'])
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint({
      rules: {
        'valid-jsdoc': 'warn',
        'semi': 2
      }
    }))
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());
});

gulp.task('test', ['lint'], function () {
  gulp.src('./test/**/*spec.js')
    // gulp-ava needs filepaths so you can't have any plugins before it
    .pipe(ava({
      verbose: true
    }));
});

gulp.task('bump', ['lint'], function () {
  gulp.src('./package.json')
    .pipe(bump())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch(['./src/**/*.js', './test/**/*.js'], ['test']);
});

gulp.task('build', function () {
  return gulp.src('./src/**/*.js')
    .pipe(babel({
      presets: ['es2016']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['test', 'watch']);

gulp.task('npm', function (done) {
  spawn('npm', ['publish'], {
    stdio: 'inherit'
  }).on('close', done);
});

gulp.task('md-docs', function () {
  return gulp.src('./src/**/*.js')
    .pipe(documentation('md'))
    .pipe(gulp.dest('./docs'));
});

gulp.task('html-docs', function () {
  return gulp.src('./src/**/*.js')
    .pipe(documentation('html'))
    .pipe(gulp.dest('./docs'));
});

gulp.task('docs', ['md-docs', 'html-docs']);

gulp.task('release', ['test', 'docs', 'build', 'bump', 'npm']);
