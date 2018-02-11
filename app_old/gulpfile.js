var gulp = require('gulp');
var sass = require('gulp-sass');
var beautify = require('gulp-cssbeautify');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
	gulp
		.src('./styles.scss')
		.pipe(sass({ includePaths: ['scss'] }))
		.pipe(beautify())
		.pipe(gulp.dest('./'));
});

gulp.task('browser-sync', function () {
	browserSync.init(['*.html', 'styles.css'], {
		server: {
			baseDir: './'
		}
	});
});

gulp.task('default', ['sass', 'browser-sync'], function () {
	gulp.watch('./*.scss', ['sass']); // Watching all scss changes on changes in the background
});