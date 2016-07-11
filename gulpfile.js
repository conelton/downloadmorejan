'use strict';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const browserify = require('gulp-browserify');
const babelify = require('babelify');

const dest = 'build';
const dev = process.env.NODE_ENV !== 'production';

gulp.task('pug', () => {
  return gulp.src('pug/index.pug')
    .pipe(pug({
      pretty: dev
    }))
    .pipe(gulp.dest(dest))
});

gulp.task('stylus', () => {
  return gulp.src('stylus/main.styl')
    .pipe(gulpif(dev, sourcemaps.init()))
    .pipe(stylus())
    .pipe(gulpif(dev, sourcemaps.write()))
    .pipe(gulp.dest(dest + '/css'));
});

gulp.task('es6', () => {
  return gulp.src('es6/main.js')
    .pipe(gulpif(dev, sourcemaps.init()))
    .pipe(browserify({
      debug: dev,
      transform: [babelify.configure({
        presets: ['es2015']
      })]
    }))
    .pipe(gulpif(dev, sourcemaps.write()))
    .pipe(gulp.dest(dest + '/js'));
});

gulp.task('default', ['pug', 'stylus', 'es6']);
