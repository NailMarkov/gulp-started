import gulp from 'gulp';

// Import from files

import { pathSrc, pathBuild } from './config.js';

const copyFiles = () =>
  gulp
    .src([
      `${pathSrc.font}/**`,
      `${pathSrc.img}/**`
    ], {
      base: `${pathSrc.src}`
    })
    .pipe(gulp.dest(`${pathBuild.build}`));

export { copyFiles }