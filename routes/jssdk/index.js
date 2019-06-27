const jssdkRoute = router => {
    router.post('/jssdk/publish', async (ctx, next) => {
        console.log(ctx.request.body)

        return ctx.body = ctx.request.body
    });
}


module.exports = jssdkRoute