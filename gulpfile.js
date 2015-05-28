var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	copy = require('gulp-copy'),
	watch = require('gulp-watch');

gulp.task('styles', function() {
  // place code for your default task here
  return sass('styles/sass', { style: 'expanded' })
  	.pipe(gulp.dest('styles/css'))
  	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie9', 'opera 12.1'))
  	.pipe(gulp.dest('styles/css'))
  	.pipe(rename({suffix: '.min'}))
  	.pipe(minifycss())
  	.pipe(gulp.dest('styles/css'));
});


gulp.task('copy', function() {
	gulp.src('*.html')
		.pipe(gulp.dest('build'));
	gulp.src('styles/css/*.min.css')
		.pipe(gulp.dest('build/styles/css'));
});

gulp.task('watch', function () {
	gulp.watch('styles/sass/*.scss', ['styles']);
	gulp.watch('styles/css/*.min.css', ['copy']);
	gulp.watch('*.html', ['copy']);
});

// gulp.task('default', ['styles', 'copy']);







