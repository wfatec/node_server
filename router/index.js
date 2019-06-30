// 让项目有独立的 prefix，避免路由冲突
const SDK = require('./sdk')
const Upload = require('./upload')
// const NotFound = require('./notFound')

module.exports = app => {
    SDK(app);
    Upload(app);
    // NotFound(app);
}