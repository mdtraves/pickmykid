const gulp =  require("gulp");

const sass =  require("gulp-sass");
const clean =  require("gulp-clean-css");
const runSeq =  require("gulp-run-sequence");

gulp.task('sass', function() {
    return gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});


gulp.task ("watch", () => {
    gulp.watch("css/main.scss", ["sass"]);
})