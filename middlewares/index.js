const bodyParser = require("koa-bodyparser");
const staticFiles = require("koa-static");
const cors = require("koa2-cors");
const ip = require("ip");
const path = require("path");
const nunjucks = require("koa-nunjucks-2");
const httpError = require("./mi-http-error");
const log = require("./mi-log");
// const miRule = require('./mi-rule');

module.exports = app => {
  // miRule({
  //   app,
  //   rules: [
  //     {
  //       //指定controller文件夹下的js文件，挂载在app.controller属性
  //       folder: path.join(__dirname, "../controller"),
  //       name: "controller"
  //     },
  //     {
  //       // 指定service文件夹下的js文件，挂载在app.service属性
  //       folder: path.join(__dirname, "../service"),
  //       name: "service"
  //     }
  //   ]
  // });
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
  app.use(
    cors({
      origin: function(ctx) {
        if (ctx.url === "/uba") {
          return "*"; // 允许来自所有域名请求
        }
        // return 'http://localhost:8080'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
      },
      exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
      maxAge: 5,
      credentials: true,
      allowMethods: ["GET", "POST", "DELETE"],
      allowHeaders: ["Content-Type", "Authorization", "Accept"]
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
