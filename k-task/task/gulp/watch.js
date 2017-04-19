'use strict';

import path from 'path';
import runSequence from 'run-sequence';

module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target);

    // Run task
    gulp.task('watch', () => {
        if (!setgulp.production) {

            // Concat
            gulp.watch([
                path.join('./config.yml')
            ], ['concat'])


            // Styles
            gulp.watch([
                path.join(url.source, url.styles.root, '**/*.css')
            ], ['css']);

            gulp.watch([
                path.join(url.source, url.styles.root, '**/*.less')
            ], ['less']);

            gulp.watch([
                path.join(url.source, url.styles.root, '**/*.styl')
            ], ['styl']);

            gulp.watch([
                path.join(url.source, url.styles.root, '**/*.{sass,scss}')
            ], function() {
                runSequence('sass', 'inject');
            })

            // Scripts
            gulp.watch([
                path.join(url.source, url.scripts.root, '**/*.js')
            ], ['babel-concat'])

            gulp.watch([
                path.join(url.source, url.scripts.root, '**/*.coffee')
            ], ['coffee']);

            gulp.watch([
                path.join(url.source, url.scripts.root, '**/*.ts')
            ], ['ts']);

            // Templates
            gulp.watch([
                path.join(url.source, '**/*.jade')
            ], function() {
                runSequence('jade', 'inject');
            })
            gulp.watch([
                path.join(url.source, '**/*.pug')
            ], function() {
                runSequence('pug', 'inject');
            })

            gulp.watch([
                path.join(url.source, '**/*.nunjucks')
            ], function() {
                runSequence('nunjucks');
            });

            // Copy
            gulp.watch([
                path.join(url.source, '**/*.{svg,jpg,jpeg,png,gif,txt,bmp,md,json,yml,yaml,css,html,js,eot,svg,ttf,woff,woff2}')
            ], ['copy']);

            // All other files
            gulp.watch([path.join(url.tmp, '**/*'),
                '!' + path.join(url.tmp, '**/*.{css,map,html,js}')
            ]).on('change', browserSync.reload);
        }
    });
}