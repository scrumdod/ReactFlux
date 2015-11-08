const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');


var config = {
    paths: {
        html: './src/*.html',
        js: [
            './src/*.js',
            './src/**/*.jsx',
            './src/**/*.js',
        ],
        testFiles: [
            './test/*.js',
        ],
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.css'
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
};




gulp.task('lint', function() {
    return gulp.src(config.paths.js)
        .pipe(plugins.plumber({
            errorHandler: plugins.notify.onError("Lint Error")
        }))
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(plugins.eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(plugins.eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failOnError last.
        .pipe(plugins.eslint.failOnError())
        .pipe(plugins.notify("The Lint Task is finished"))
});

gulp.task('js', ['lint'], () => {
    return browserify({
            entries: ['./src/main.js'],
            debug: true
        })            
        .transform(babelify.configure({
            stage: 0
        }))
        .bundle()
        .on('error', (e) => {
            console.log('browserify error');
            //console.log(arguments);
            throw e;
        })
        .pipe(source('bundle.js'))        
        .pipe(plugins.plumber({
            errorHandler: plugins.notify.onError("Error: <%= error.message %>")
        }))
        .pipe(gulp.dest('./dist/js'))
        //.pipe(plugins.livereload())
        .pipe(plugins.notify("The JS Task is finished"))
        .on('end', function() {
            console.log('ended');
        });
});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('test', function () {
    return gulp.src('./test/', {read: false})
        .pipe(plugins.shell(['mocha -r babel/register --recursive ./test/'])
        .on("error",handleError));
        //"test": "mocha -r babel/register --recursive ./test/"
});

gulp.task('build', ['js', 'test']);

//gulp.task("watch", ["build"], function () {
//  gulp.watch([paths.scripts, paths.tests], ["test"]);
//});

gulp.task('watch', ['build'],function() {
    gulp.watch([config.paths.js], ['build']);
    gulp.watch([config.paths.testFiles], ['test']);
});
