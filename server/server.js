const path = require('path');
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const static = require('koa-static');
const logger = require('koa-logger');

const config = require('../config');

const app = new Koa();

app.use(async ctx => {
    ctx.body = "hello";
})

app.listen(config.port, () => {
    console.log(`server is running port ${config.port}`);
});


