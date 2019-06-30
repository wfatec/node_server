const bodyParser = require("koa-bodyparser");
const staticFiles = require("koa-static");
const path = require("path");
const nunjucks = require("koa-nunjucks-2")
const httpError = require("./http-error");

module.exports = app => {
  app.use(
    httpError({
      errorPageFolder: path.resolve(__dirname, "../errorPage")
    })
  );
  app.use(staticFiles(path.resolve(__dirname, "../public")));
  app.use(
    nunjucks({
      ext: "html",
      path: path.join(__dirname, "../views"),
      nunjucksConfig: {
        trimBlocks: true
      }
    })
  );
  app.use(bodyParser());
};
