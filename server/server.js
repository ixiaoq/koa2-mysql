const path = require('path');
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const static = require('koa-static');
const logger = require('koa-logger');

const config = require('../config');
const router = require('./routers');

const app = new Koa();


app.use(router.routes()).use(router.allowedMethods());

app.listen(config.port, () => {
    console.log(`server is running port ${config.port}`);
});


