const Koa = require('koa');
const middlewares = require('./middlewares')
const router = require('./router');

const app = new Koa();

middlewares(app);
router(app);

app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000');
});

app.on("error", (err, ctx) => {
  if (ctx && !ctx.headerSent && ctx.status < 500) {
    ctx.status = 500;
  };
  if (ctx && ctx.log && ctx.log.error) {
    if (!ctx.state.logged) {
      ctx.log.error(err.stack);
    };
  };
});