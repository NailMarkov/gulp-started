import autoprefixer from 'autoprefixer';
import csso from 'gulp-csso';
import dartSass from 'sass';
import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import notify from 'gulp-notify';
import rename from 'gulp-rename';

const sass = gulpSass(dartSass);
const postcssPlagins = [autoprefixer()]

// Import from files

import { server } from '../gulpfile.js';
import { errorMessages } from './config.js';
import { pathSrc, pathBuild } from './config.js';

// Task

const stylesBuild = () =>
  gulp
    .src(`${pathSrc.scss}/*.scss`, { sourcemaps: true })
    .pipe(sass().on('error', notify.onError(errorMessages('scss'))))
    .pipe(postcss(postcssPlagins))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(`${pathBuild.css}`, { sourcemaps: '.' }))
    .pipe(server.stream());

export { stylesBuild }
