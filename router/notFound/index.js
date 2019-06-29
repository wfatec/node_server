const router = require('koa-router')();

module.exports = app => {
    router.get('/*', async (ctx, next) => {
        ctx.body = 'NOT FOUND!';
    });

    app.use(router.routes());
}