module.exports = {
    publish: async (ctx, next) => {
        return ctx.body = ctx.request.body
    }
}