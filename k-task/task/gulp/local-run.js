'use strict';

import path from 'path';
import gulpif from 'gulp-if';
import replace from 'gulp-replace';

module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target);

    // Run task

    gulp.task('local-run', () => {

        return gulp.src([
                path.join(target, '**/*.html'),
                '!' + path.join(target, '*.html')
            ])
            .pipe(replace('/css/', '../css/'))
            .pipe(replace('/js/', '../js/'))
            .pipe(replace('/favicon/', '../favicon/'))
            .pipe(replace('/images/', '../images/'))
            .pipe(replace('href="//', 'href="@@@'))
            .pipe(replace('href="/', 'href="../'))
            .pipe(replace('href="@@@', 'href="//'))
            .pipe(replace('../images/logo.png', '/images/logo.png'))
            .pipe(replace('../images/logo.png', '/images/logo.png'))
            .pipe(replace('//' + config.SEO.cfg_url + '../images/', '//' + config.SEO.cfg_url + '/images/'))

        // .pipe(plugins.changed(dest))
        .pipe(gulp.dest(dest));

    });
    gulp.task('local-run-home', () => {

        return gulp.src([
                path.join(target, '*.html')
            ])
            .pipe(replace('/css/', 'css/'))
            .pipe(replace('/js/', 'js/'))
            .pipe(replace('/favicon/', 'favicon/'))
            .pipe(replace('/images/', 'images/'))
            .pipe(replace('href="//', 'href="@@@'))
            .pipe(replace('href="/', 'href="'))
            .pipe(replace('href="@@@', 'href="//'))
            .pipe(replace('images/logo.png', '/images/logo.png'))
            .pipe(replace('//' + config.SEO.cfg_url + 'images/', '//' + config.SEO.cfg_url + '/images/'))

        // .pipe(plugins.changed(dest))
        .pipe(gulp.dest(dest));

    });

}