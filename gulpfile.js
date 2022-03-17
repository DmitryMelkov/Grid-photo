const { src, dest, parallel, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
//error
const notify = require("gulp-notify");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const htmlMin = require("gulp-htmlmin");
const sourcemaps = require("gulp-sourcemaps");

const browserSync = require("browser-sync").create();

//для разделения файлов
const fileinclude = require("gulp-file-include");

//svg
const svgSprite = require("gulp-svg-sprite");

//img
const imagemin = require("gulp-imagemin");

//fonts
const ttf2woff = require("gulp-ttf2woff");
const ttf2woff2 = require("gulp-ttf2woff2");

//clean
const del = require("del");

//scripts
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const uglify = require("gulp-uglify-es").default;

const fonts = () => {
  src("./src/fonts/**.ttf").pipe(ttf2woff()).pipe(dest("./app/fonts/"));
  return src("./src/fonts/**.ttf").pipe(ttf2woff2()).pipe(dest("./app/fonts/"));
};

const svgSprites = () => {
  return src("./src/img/svg/**.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
          },
        },
      })
    )
    .pipe(dest("./app/img"));
};

const styles = () => {
  return src("./src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", notify.onError())
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("./app/css/"))
    .pipe(browserSync.stream());
};

const htmlInclude = () => {
  return src(["./src/*.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("./app"))
    .pipe(browserSync.stream());
};

const htmlMinify = () => {
  return src("src/**/*.html")
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(dest("app"));
};

const imgToApp = () => {
  return src(["./src/img/**.jpg", "./src/img/**.png", "./src/img/**.jpeg", "./src/img/**.svg"]).pipe(dest("./app/img"));
};

const images = () => {
  return src(["./src/img/**.jpg", "./src/img/**.png", "./src/img/**.jpeg"]).pipe(imagemin()).pipe(dest("./app/img"));
};

//всякие ресурсы
const resources = () => {
  return src("./src/resources/**").pipe(dest("./app"));
};

const clean = () => {
  return del("app/*");
};

const scripts = () => {
  return src("./src/js/main.js")
    .pipe(
      webpackStream({
        output: {
          filename: "main.js",
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [["@babel/preset-env", { targets: "defaults" }]],
                },
              },
            },
          ],
        },
      })
    )
    .on("error", function (err) {
      console.error("WEBPACK ERROR", err);
      this.emit("end"); // Don't stop the rest of the task
    })
    .pipe(sourcemaps.init())
    .pipe(uglify().on("error", notify.onError()))
    .pipe(sourcemaps.write("."))
    .pipe(dest("./app/js"))
    .pipe(browserSync.stream());
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "./app",
    },
  });
  watch("./src/scss/**/*.scss", styles);
  watch("./src/*.html", htmlInclude);
  // watch("./src/**/*.html", htmlMinify);
  watch("./src/img/**.jpg", imgToApp);
  watch("./src/img/**.png", imgToApp);
  watch("./src/img/**.jpeg", imgToApp);
  watch("./src/img/**.svg", svgSprites);
  watch("./src/resources/**", resources);
  watch("./src/fonts/**.ttf", fonts);
  watch("./src/js/**/*.js", scripts);
};

exports.styles = styles;
exports.watchFiles = watchFiles;
exports.htmlInclude = htmlInclude;
exports.images = images;

//build version
const scriptsBuild = () => {
  return src("./src/js/main.js")
    .pipe(
      webpackStream({
        output: {
          filename: "main.js",
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [["@babel/preset-env", { targets: "defaults" }]],
                },
              },
            },
          ],
        },
      })
    )
    .on("error", function (err) {
      console.error("WEBPACK ERROR", err);
      this.emit("end"); // Don't stop the rest of the task
    })
    .pipe(uglify().on("error", notify.onError()))
    .pipe(dest("./app/js"));
};

const stylesBuild = () => {
  return src("./src/scss/**/*.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", notify.onError())
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(dest("./app/css/"));
};

exports.build = series(
  clean,
  parallel(htmlInclude, scriptsBuild, fonts, resources, imgToApp, svgSprites),
  stylesBuild,
  htmlMinify,
  images
);

//work version
exports.default = series(
  clean,
  parallel(htmlInclude, scripts, fonts, resources, imgToApp, svgSprites),
  styles,
  watchFiles
);
