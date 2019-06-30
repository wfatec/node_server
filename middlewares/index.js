const bodyParser = require("koa-bodyparser");
const staticFiles = require("koa-static");
const ip = require("ip");
const path = require("path");
const nunjucks = require("koa-nunjucks-2");
const httpError = require("./http-error");
const log = require("./log");

module.exports = app => {
  app.use(
    httpError({
      errorPageFolder: path.resolve(__dirname, "../errorPage")
    })
  );
  app.use(
    log({
      env: app.env,
      projectName: "sdk",
      appLogLevel: "debug",
      dir: "logs",
      serverIp: ip.address()
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
