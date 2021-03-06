var connect = require('gulp-connect');
var gulp = require('gulp');
var run = require('gulp-run');

var PORT = process.env.PORT || 3000;


gulp.task('build', function () {
  switch (process.env.GALAXY_ENV) {
    case 'prod':
    default:
      console.log('Built prod environment');

      run('npm run-script build_directory').exec();

      break;
  }
});


gulp.task('connect', ['build'], function () {
  connect.server({
    port: PORT,
    root: 'src'
  });
});


gulp.task('watch', function() {
  gulp.watch(['directory/**/*'], ['build']);
});


gulp.task('dev', ['connect', 'watch'], function () {
  run('open http://localhost:' + PORT).exec();
});
