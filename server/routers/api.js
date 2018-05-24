
const router = require("koa-router")();

router.get("/user", async ctx => {
    
    ctx.body = {
        id: 1,
        name: "xiaohong"
    }
})


module.exports = router;