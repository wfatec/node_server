const router = require('koa-router')({
    prefix: '/sdk'
});
const SDKController = require('../../controller/sdk')

module.exports = app => {
    router.post('/publish', SDKController.publish);

    app.use(router.routes());
}