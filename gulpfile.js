const { src, dest, series, parallel, watch } = require('gulp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
//min js files
const uglify = require('gulp-uglify');

function copyHtml(){
    return src('*.html')
        .pipe(dest('build/'));
}

function copyImages() {
    return src('*.jpeg')
        .pipe(dest('build/'))
}

function copyCss(){
    return src(['node_modules/slick-carousel/slick/slick.css', 'node_modules/slick-carousel/slick/slick-theme.css',
        'node_modules/magnific-popup/dist/magnific-popup.css', 'style.css'])
        .pipe(concat('style.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest('build/'));
}

function getJs(){
    return src(['node_modules/jquery/dist/jquery.js', 'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
        'node_modules/slick-carousel/slick/slick.js', 'code.js' ])
        .pipe(concat('code.js'))
        // .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest('build/'));
}

function getFonts() {
    return src('node_modules/slick-carousel/slick/fonts/*.*')
        .pipe(dest('build/fonts'));
}


//How copy one gif without function?
function getGif() {
    return src('node_modules/slick-carousel/slick/*.gif')
        .pipe(dest('build/'));
}

function getSlickAddFiles(){
    getFonts();
    getGif();
}

exports.build = series(copyHtml, copyCss, getJs, getFonts, getGif, copyImages);

function getReady(){
    copyHtml();
    copyCss();
    getJs();
    getSlickAddFiles();
    // getFonts();
    // getGif();
    copyImages();
}

exports.default = function() {
    getReady();
    watch('*.html', copyHtml);
    watch('*.js', getJs);
};