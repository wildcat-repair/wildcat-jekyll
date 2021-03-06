var $             = require('gulp-load-plugins')();
var autoprefixer  = require('gulp-autoprefixer');
var browserSync   = require('browser-sync');
var config        = require('../util/loadConfig').sass;
var gulp          = require('gulp');
var isProduction  = require('../util/isProduction');
var sass          = require('gulp-sass');
// var uncss         = require('gulp-uncss');

gulp.task('sass', function() {
  browserSync.notify(config.notification);
  var minifycss = $.if(isProduction, $.cssnano());

  return gulp.src(config.src)
    .pipe($.sourcemaps.init())
    .pipe($.sass()
      .on('error', $.sass.logError))
    .pipe(autoprefixer(config.compatibility))
    .pipe(minifycss)
    .pipe($.if(!isProduction, $.sourcemaps.write()))
    // Write the file to source dir and build dir
    .pipe(gulp.dest(config.dest.jekyllRoot))
    .pipe(gulp.dest(config.dest.buildDir))
    // Auto-inject styles into browsers
    .pipe(browserSync.stream());
});


// gulp.task('trim-css', function() {
//   return gulp.src('./assets/css/app.css')
//     .pipe(uncss({
//     html: ['./_site/**/*.html'],
//     ignore: [/fp/],
//     timeout: 1000
//   }))
//   .pipe(gulp.dest('./assets/css/uncss/'));
// });