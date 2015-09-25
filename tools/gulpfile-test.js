// npm install --save-dev gulp mocha gulp-mocha chai chai-immutable babel babel-core gulp-babel gulp-watch eslint gulp-eslint jsdom run-sequence
require("babel/register")({ stage: 0 })

var gulp = require('gulp')
var watch = require('gulp-watch')
var runSequence = require('run-sequence')
var mocha= require('gulp-mocha')
var eslint = require('gulp-eslint')

var conf= {
  src: ['../src/**/*.js', '../src/**/*.jsx'],
  test: ['../src/**/*.spec.js', '../src/**/*.spec.jsx'],
  testRequire: ['./mocha.js'],
}

gulp.task('test', function() {
  runSequence('mocha')
})

gulp.task('test-watch', function() {
  runSequence('watch')
})

gulp.task('lint', function() {
  runSequence('eslint')
})

// tasks
gulp.task('watch', function() {
  watch(conf.src, function() {
    runSequence('mocha')
  })
})

gulp.task('eslint', function() {
  return gulp.src(conf.src)
  .pipe(eslint({
    configFile: './.eslintrc',
  }))
  .pipe(eslint.format())
})

gulp.task('mocha', function() {
  process.env.TEST= true
  return gulp.src(conf.test, {
    read: false
  })
  .pipe(mocha({
    reporter: 'spec',
    require: conf.testRequire,
  }))
})
