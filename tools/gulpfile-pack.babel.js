// npm install --save-dev gulp webpack webpack-stream gulp-wrap gulp-rename
import gulp from 'gulp'
import webpack from 'webpack-stream'
import wrap from 'gulp-wrap'
import rename from 'gulp-rename'
import config from './webpack.pack.config.js'

gulp.task('default', cb => {
  return gulp.src('../src/index.jsx')
    .pipe(webpack(config))
    .pipe(wrap('\
    <!DOCTYPE html>\n\
    <html>\n\
      <head>\n\
        <meta charset="UTF-8">\n\
        <title>my app</title>\n\
        <style>\n\
          body {\n\
            margin: 0\n\
          }\n\
        </style>\n\
      </head>\n\
      <body>\n\
        <div id="app"></div>\n\
        <script type="text/javascript">\n\
          <%= contents %>\n\
        </script>\n\
      </body>\n\
    </html>\
    '))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('../builds/pack/'))
});
