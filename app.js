const Koa = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body');
const fs = require('fs');
const path = require('path');

const upload = require('./utils/upload');

const app = new Koa();

// app.use(koaBody({
//     multipart: true,
//     formidable: {
//         maxFileSize: 20*1024*1024    // 设置上传文件大小最大限制，默认2M
//     }
// }));

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`;
});

router.get('/home', async (ctx, next) => {
    ctx.response.body = '<h1>HOME page</h1>';
});

router.get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>';
});

router.post('/uploadfile', upload.array('files', 20), async (ctx, next) => {
    const fileList = ctx.req.files; // 获取上传文件
    if (!fileList.length) {
        ctx.status = 400;
        ctx.body = {
            msg: "请选择至少一个文件！"
        }

        return
    }

    let files = {}
    
    fileList.forEach(file => {
        const fileName = `test/${file.originalname}`  // 上传到bucket的文件名。最终文件的访问名
        const fullname = `${file.destination}/${file.originalname}` // 本地的文件地址
        files[fileName] = {
            fullname
        }
    });

    return "上传成功！"
    
});

app.use(router.routes());

app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000');
});