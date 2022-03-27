var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

function css_style(done){
  gulp.src('./scss/**/*.sass')
  .pipe(sourcemaps.init())
  .pipe(sass({
    errorLogToConsole: true,
    outputStyle: 'compressed'
  }))
  .on('error', console.error.bind(console))
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 2 version'],
    cascade: false
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./css/'))
  .pipe(browserSync.stream());

  done();
}
function sync(done){
  browserSync.init({
    server: {
      baseDir : './'
    },
    port: 3000
  })
  done();
}
function browserReload(done){
  browserSync.reload();
  done();
}
function watchSass(){
  gulp.watch('./scss/**/*', css_style)
}
function watchFile(){
  gulp.watch('./scss/**/*', css_style)
  gulp.watch('./**/*.html', browserReload)
}

gulp.task('default', gulp.parallel(sync, watchFile));