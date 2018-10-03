var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();


// gulp.task('sass', function() {
//    return gulp.src('app/sass/**/*.sass')
//         .pipe(sass())
//         .pipe(gulp.dest('app/css'))
// });

gulp.task('scss', function() {
  return gulp.src('app/scss/**/*.scss')
       .pipe(sass())
       .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.sass', ['sass']);
});

gulp.task('serve', function() {
    browserSync.init({
      server: 'app'
    });
  
    browserSync.watch('app/**/*.*').on('change', browserSync.reload);
  });

gulp.task('copy', function() {
      gulp.src('app/**/*.*')
          .pipe(gulp.dest('dist'))
  });
  
gulp.task('clean', function () {
      return gulp.src('dist', {read: false})
          .pipe(clean());
  });
  
gulp.task('cleanScss', function () {
      return gulp.src('dist/scss/**', {read: false})
          .pipe(clean());
  });

gulp.task('default', ['scss', 'copy', 'clean', 'watch', 'serve']);

