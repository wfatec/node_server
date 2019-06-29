const router = require('koa-router')({
    prefix: '/upload'
});
const UploadController = require('../../controller/upload')
const upload = require('../../utils/upload')

module.exports = app => {
    router.post('/file', upload.array('files', 20), UploadController.upload)

    app.use(router.routes());
}