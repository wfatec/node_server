const jssdkRoute = router => {
    router.post('/jssdk/publish', async (ctx, next) => {
        return ctx.body = ctx.request.body
    });
}


module.exports = jssdkRoute