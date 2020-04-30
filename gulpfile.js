const { src, dest, task } = require("gulp");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");

task("default", () =>
  src("./templates/*.ejs")
    .pipe(ejs({}))
    .pipe(
      rename((path) => {
        path.extname = "";
      })
    )
    .pipe(dest("./docs"))
);
