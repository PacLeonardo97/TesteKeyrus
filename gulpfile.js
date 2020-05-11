const { src, dest } = require("gulp");
const minify = require("gulp-minify");
const cleanCSS = require("gulp-clean-css");

const minifyjs = src("src/js/*.js", { allowEmpty: true })
  .pipe(minify({ noSource: true }))
  .pipe(dest("public/assets/js"));

const minifyCss = src("src/css/*.css")
  .pipe(cleanCSS({ compatibility: "ie8" }))
  .pipe(dest("public/assets/css"));

const registerTasks = async () => {
  await minifyjs;
  await minifyCss;
};

exports.default = registerTasks;
