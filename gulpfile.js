var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('build-css', function() {
    return gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('styles'))
        .pipe(livereload());
});

gulp.task('refresh-html', function() {
    return livereload.reload();
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('sass/**/*.scss', ['build-css']);
    gulp.watch('*.html', ['refresh-html']);
});
