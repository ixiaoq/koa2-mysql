const path = require('path');
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const static = require('koa-static');
const logger = require('koa-logger');

const { PORT } = require('../config');

const { restify } = require('./utils/rest');
const controllers = require('./utils/controllers');

const app = new Koa();

// 日志中间件
app.use(logger());
// body解析中间件
app.use(bodyparser());

// 静态资源
app.use(static(path.join(__dirname, '/../static')))

app.use(restify());

app.use(controllers());

app.listen(PORT, () => {
    console.log(`server is running port ${PORT}`);
});


