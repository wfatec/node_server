const Koa = require('koa');
const middlewares = require('./middlewares')
const router = require('./router');

const app = new Koa();

middlewares(app);
router(app);

app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000');
});