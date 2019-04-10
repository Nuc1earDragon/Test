const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function css() {
  return src('./src/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('./dist/'))
}

function js() {
  return src('./src/*.js', { sourcemaps: true })
    .pipe(concat('test.js'))
    .pipe(dest('./dist/', { sourcemaps: true }))
}

exports.js = js;
exports.css = css;

exports.default = parallel(css, js);