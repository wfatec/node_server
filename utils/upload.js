const multer = require('koa-multer');

const storage = multer.diskStorage({
  destination:'public/uploads/'+new Date().getFullYear() + (new Date().getMonth()+1) + new Date().getDate(),
  filename(ctx,file,cb){
    cb(null, file.originalname)
  }
});

const upload = multer({storage});

module.exports = upload;