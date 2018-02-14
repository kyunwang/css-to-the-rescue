var gulp = require('gulp');
var sass = require('gulp-sass');
var beautify = require('gulp-cssbeautify');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
	gulp
		.src('./public/styles/*.scss')
		.pipe(sass({ includePaths: ['scss'] }))
		.pipe(beautify())
		.pipe(gulp.dest('./public/styles'));
});

gulp.task('browser-sync', function () {
	browserSync.init(['*.html', './public/styles/styles.css'], {
		server: {
			baseDir: './'
		},
		port: 4000,
	});
});

gulp.task('default', ['sass', 'browser-sync'], function () {
	gulp.watch('./public/styles/*.scss', ['sass']); // Watching all scss changes on changes in the background
});