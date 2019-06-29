module.exports = {
    upload: async (ctx, next) => {
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
    }
}