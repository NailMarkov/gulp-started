// Default Paths

const pathBuild = {
  build: 'build',
  css: 'build/css',
  font: 'build/fonts',
  img: 'build/img',
  svg: 'build/img/svg'
}

const pathSrc = {
  src: 'src',
  scss: 'src/scss',
  font: 'src/fonts',
  img: 'src/img',
  sprite: 'src/img/sprite',
}

// Error messages notify

const errorMessages = (error) => {
  return {
    title: error,
    message: "Error: <%= error.message %>",
    sound: false 
  }
}

// Options images

const optionImages = {
  sprite: {inlineSvg: true},
  svgo: {
    plugins: [
      {
        name: 'removeViewBox',
        active: false,
      },
      {
        name: 'removeRasterImages',
        active: true,
      },
      {
        name: 'removeUselessStrokeAndFill',
        active: false,
      }
    ]
  },
  png: {speed: 1, strip: true, dithering: 1, quality: [0.8, 0.9]},
  jpeg: {quality: 90, progressive: true},
  webp: {quality: 90}
}
export { errorMessages, pathSrc, pathBuild, optionImages }