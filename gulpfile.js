const gulp = require('gulp');
const concat = require('gulp-concat');

const cssFiles = [
    './style.css',
    './node_modules/slick-carousel/slick/slick.css',
    './node_modules/slick-carousel/slick/slick-theme.css',
    './node_modules/magnific-popup/dist/magnific-popup.css'
]

const jsFiles = [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/slick-carousel/slick/slick.js',
    './node_modules/magnific-popup/dist/jquery.magnific-popup.js',
    './code.js'
]

function styles() {
    return gulp.src(cssFiles)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./build/css'))
}

function scripts(){
    return gulp.src(jsFiles)
    .pipe(concat('jsCode.js'))
    .pipe(gulp.dest('./build/js'))
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);