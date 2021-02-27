let gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  del = require('del'),
  autoprefixer = require('gulp-autoprefixer'),
  clean_css = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp
    .src('app/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(
      autoprefixer({
        overrideBrowserlist: ['5 last versions'],
        cascade: true,
      }),
    )
    .pipe(clean_css())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('html', function () {
  return gulp.src('app/*.html').pipe(browserSync.reload({ stream: true }));
});

gulp.task('script', function () {
  return gulp.src('app/js/*.js').pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', function () {
  browserSync.init({ server: { baseDir: 'app/' } });
});

gulp.task('js', function () {
  return gulp
    .src([
      'node_modules/slick-carousel/slick/slick.js',
      'node_modules/wow.js/dist/wow.min.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

gulp.task('css', function () {
  return gulp
    .src([
      'node_modules/normalize.css/normalize.css',
      'node_modules/slick-carousel/slick/slick.css',
      'node_modules/animate.css/animate.css',
    ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('app/scss'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
  gulp.watch('app/*.html', gulp.parallel('html'));
  gulp.watch('app/*.js', gulp.parallel('js'));
});

gulp.task('export', async function () {
  let buildHtml = gulp.src('app/**/*.html').pipe(gulp.dest('build'));
  let buildCss = gulp.src('app/css/**/*.css').pipe(gulp.dest('build/css'));
  let buildJs = gulp.src('app/js/**/*.js').pipe(gulp.dest('build/js'));
  let buildFonts = gulp.src('app/fonts/**/*.*').pipe(gulp.dest('build/fonts'));
  let buildImg = gulp.src('app/img/**/*.*').pipe(gulp.dest('build/img'));
});

gulp.task('clean', async function () {
  del.sync('build');
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task(
  'default',
  gulp.parallel('css', 'js', 'sass', 'browser-sync', 'watch'),
);
