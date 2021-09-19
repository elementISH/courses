var gulp = require('gulp')
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass')(require('sass')),
    sourcemaps = require('gulp-sourcemaps'),
    notifier = require('node-notifier'),
    cleanCSS = require('gulp-clean-css'),
    minify = require('gulp-minify');

gulp.task('SassCompile', function () {

    return gulp.src(['content/scss/main-ltr.scss', 'content/scss/main-rtl.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', function (err) {
            console.log(`-----------------------------------------------------------------`);
            console.log(err.message);
            console.log(`-----------------------------------------------------------------`);
            notifier.notify(
                {
                    title: 'Sass Error Compiling',
                    message: `Error in File : ${err.relativePath} \nError in Line : ${err.line} , Column : ${err.column} `,
                    sound: false,
                    wait: false,
                    timeout: 1
                },
                function (err, response) {
                    // Response is response from notification
                }
                
            );
            this.emit('end');
        }))
        .pipe(concat("all.css"))
        .pipe(sourcemaps.init())
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dist"))
});

gulp.task('vendorsCss', function(){
    return gulp.src([
        'content/css/vendors/icomoon/style.css',
        'content/css/vendors/bootstrap.min.css',
        'content/css/vendors/swiper.min.css'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', function (err) {
        console.log(`-----------------------------------------------------------------`);
        console.log(err.message);
        console.log(`-----------------------------------------------------------------`);
        notifier.notify(
            {
                title: 'Sass Error Compiling',
                message: `Error in File : ${err.relativePath} \nError in Line : ${err.line} , Column : ${err.column} `,
                sound: false,
                wait: false,
                timeout: 1
            },
            function (err, response) {
                // Response is response from notification
            }
            
        );
        this.emit('end');
    }))
    .pipe(concat("vendors.css"))
    .pipe(sourcemaps.init())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("content/css/vendors"))
})

gulp.task('compressedLtr', function(){
    return gulp.src([
        'content/css/vendors/vendors.css',
        'content/scss/main-ltr.scss'
    ])
    .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', function (err) {
            console.log(`-----------------------------------------------------------------`);
            console.log(err.message);
            console.log(`-----------------------------------------------------------------`);
            notifier.notify(
                {
                    title: 'Sass Error Compiling',
                    message: `Error in File : ${err.relativePath} \nError in Line : ${err.line} , Column : ${err.column} `,
                    sound: false,
                    wait: false,
                    timeout: 1
                },
                function (err, response) {
                    // Response is response from notification
                }
                
            );
            this.emit('end');
        }))
        .pipe(concat("main-ltr.css"))
        .pipe(sourcemaps.init())
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("content/css"))
})

gulp.task('compressedRtl', function(){
    return gulp.src([
        'content/css/vendors/vendors.css',
        'content/scss/main-rtl.scss'
    ])
    .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', function (err) {
            console.log(`-----------------------------------------------------------------`);
            console.log(err.message);
            console.log(`-----------------------------------------------------------------`);
            notifier.notify(
                {
                    title: 'Sass Error Compiling',
                    message: `Error in File : ${err.relativePath} \nError in Line : ${err.line} , Column : ${err.column} `,
                    sound: false,
                    wait: false,
                    timeout: 1
                },
                function (err, response) {
                    // Response is response from notification
                }
                
            );
            this.emit('end');
        }))
        .pipe(concat("main-rtl.css"))
        .pipe(sourcemaps.init())
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("content/css"))
})

gulp.task('watch', function () {
    gulp.watch(['content/scss/*/*.scss', 'content/scss/*.scss'], gulp.series(['SassCompile', 'vendorsCss', 'compressedLtr', 'compressedRtl']));
});
