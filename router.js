const router = require('koa-router')()
const upload = require('./utils/upload')

const SDKController = require('./controller/sdk')
const UploadController = require('./controller/upload')

module.exports = app => {
    router.post('/jssdk/publish', SDKController.publish);
    router.post('/uploadfile', upload.array('files', 20), UploadController.upload)

    app.use(router.routes()).use(router.allowedMethods());
}