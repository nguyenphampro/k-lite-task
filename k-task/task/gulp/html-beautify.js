'use strict';
import path from 'path';

import prettify from 'gulp-html-prettify';


module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target);

    // Run task
    gulp.task('html-beautify', function() {

        return gulp.src(path.join(target, '**/*.html'))
            .pipe(prettify({ indent_char: ' ', indent_size: 2 }))
            // .pipe(plugins.changed(dest))
            .pipe(gulp.dest(dest));
    });
}