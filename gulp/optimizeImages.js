import gulp from 'gulp';
import svgstore from 'gulp-svgstore';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import mozJpeg from 'imagemin-mozjpeg';
import svgo from 'imagemin-svgo';
import pngQuant from 'imagemin-pngquant';

// Import from files

import { pathSrc, pathBuild, optionImages } from './config.js ';

// Tasks

const sprite = () =>
  gulp
    .src(`${pathSrc.sprite}/*.svg`)
    .pipe(svgstore(`${optionImages.sprite}`))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest(`${pathBuild.img}`));

const optimizeSvg = () =>
  gulp
    .src(`${pathBuild.img}/**/*.svg`)
    .pipe(
      imagemin([
        svgo(`${optionImages.svgo}`)
      ])
    )
    .pipe(gulp.dest(`${pathBuild.svg}`));

const optimizePng = () =>
  gulp
    .src(`${pathBuild.img}/**/*.png'`)
    .pipe(
      imagemin([
        pngQuant(`${optionImages.png}`)
      ])
    )
    .pipe(gulp.dest(`${pathBuild.img}`));

const optimizeJpg = () =>
  gulp
    .src(`${pathBuild.img}/**/*.{jpg,jpeg}`)
    .pipe(imagemin([mozJpeg(`${optionImages.jpeg}`)]))
    .pipe(gulp.dest(`${pathBuild.img}`));

const createWebp = () => {
  return gulp
    .src(`${pathBuild.img}/**/*.{png,jpg}`)
    .pipe(webp(`${optionImages.webp}`))
    .pipe(gulp.dest(`${pathBuild.img}`));
};

export { sprite, optimizeJpg, optimizePng, optimizeSvg, createWebp };