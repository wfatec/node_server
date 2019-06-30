const bodyParser = require('koa-bodyparser');
const httpError = require('./http-error');

module.exports = app => {
    app.use(httpError());
    app.use(bodyParser());
}