'use strict';

import path from 'path';
import del from 'del';
import babel from 'gulp-babel';
import through from 'through2';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import angularFilesort from 'gulp-angular-filesort';

module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target);
    let destconfig = path.join(target, url.config);
    let destjs = path.join(target, url.scripts.assets);

    // Run task
    gulp.task('babel-concat', () => {
        return gulp.src([
                setgulp.production ? './src/_env/config.prod.js' : './src/_env/config.dev.js',
                path.join(url.source, url.scripts.javascript, url.concat.ACTIVE_CONCAT ? url.ignore.concatactiveconcat : url.ignore.concat),
                setgulp.production ? '!' + path.join(url.source, url.scripts.javascript, '**/viensoi-dev.js') : path.join()
            ])
            // .pipe(angularFilesort())
            .pipe(concat(url.concat.babelconcat + '.js'))
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.babel({
                presets: ['es2015']
            }))
            .pipe(plugins.sourcemaps.write('.'))
            .pipe(plugins.changed(dest))
            .pipe(gulp.dest(destjs));
    });

};