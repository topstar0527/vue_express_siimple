const gulp = require('gulp')
const browserify = require('browserify')
const babelify = require('babelify')
const vueify = require('vueify')
const prefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')
const fs = require('fs')

const paths = {
  javascript: ['./app/app.js', './public/app.js'],
  sass: ['./public/styles/style.scss', './public/styles']
}

gulp.task('javascript', () => {
  browserify(paths.javascript[0])
    .transform(vueify)
    .transform(babelify, { presets: ['es2015'] })
    .bundle()
  .pipe(fs.createWriteStream(paths.javascript[1]))
})

gulp.task('sass', () => {
  gulp.src(paths.sass[0])
  .pipe(sass().on('error', sass.logError))
  .pipe(prefixer({ browsers: ['last 3 versions'] }))
  .pipe(gulp.dest(paths.sass[1]))
})

gulp.task('default', ['javascript', 'sass'])

gulp.task('watch', () => {
  gulp.watch(['./app/**/*.js', './app/**/*.vue'], ['javascript'])
  gulp.watch('./public/styles/**/*.scss', ['sass'])
})
