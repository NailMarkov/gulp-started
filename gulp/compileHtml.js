import gulp from 'gulp';

// Import from files

import { server } from '../gulpfile.js';
import { pathSrc, pathBuild } from './config.js';

// Task

const htmlBuild = () =>
  gulp
    .src(`${pathSrc.src}/*.html`)
    .pipe(gulp.dest(`${pathBuild.build}`))
    .pipe(server.stream());

export { htmlBuild }