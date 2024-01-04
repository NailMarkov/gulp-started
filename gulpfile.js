import browserSync from 'browser-sync';
import { deleteAsync } from 'del';
import gulp from 'gulp'; 

// import from files

import { pathSrc, pathBuild } from './gulp/config.js';
import { htmlBuild } from './gulp/compileHtml.js';
import { stylesBuild } from './gulp/compileStyle.js';
import { copyFiles } from './gulp/copyFiles.js';
import { sprite, createWebp, optimizeJpg, optimizePng, optimizeSvg } from './gulp/optimizeImages.js';

const server = browserSync.create();

const clean = () => deleteAsync(`${pathBuild.build}`);

const watcher = () => {
  server.init({
    server: `${pathBuild.build}`,
    notify: false
  })

  gulp.watch(`${pathSrc.src}/**/*.html`, htmlBuild);
  gulp.watch(`${pathSrc.scss}/**/*.scss`, stylesBuild);
  gulp.watch(`${pathSrc.sprite}/*.svg`, sprite);
  gulp.watch(`${pathSrc.img}/**/*.{png,jpg,jpeg}`, gulp.series(optimizeJpg, createWebp));
};
 
const dev = gulp.series(copyFiles, htmlBuild, stylesBuild, sprite, optimizeJpg, createWebp, watcher);
const build = gulp.series(clean, copyFiles, gulp.parallel(htmlBuild, stylesBuild, sprite, optimizeJpg, optimizePng, optimizeSvg, createWebp));

export { dev, server, build }