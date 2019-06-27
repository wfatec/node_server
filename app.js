const Koa = require('koa');
const router = require('koa-router')();
// const koaBody = require('koa-body');
const bodyParser = require('koa-bodyparser');
// const fs = require('fs');
// const path = require('path');
const uploadRoute = require('./routes/upload')
const jssdkRoute = require('./routes/jssdk')

const app = new Koa();

// app.use(koaBody({
//     multipart: true,
//     formidable: {
//         maxFileSize: 20*1024*1024    // 设置上传文件大小最大限制，默认2M
//     }
// }));

app.use(bodyParser());

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`;
});

router.get('/home', async (ctx, next) => {
    ctx.response.body = '<h1>HOME page</h1>';
});

router.get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>';
});

uploadRoute(router);

jssdkRoute(router);

app.use(router.routes());

app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000');
});