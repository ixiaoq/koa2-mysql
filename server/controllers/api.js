
module.exports = {
    "GET /api/user": async (ctx, next) => {
        ctx.rest({
            id: 1,
            name: "xiaohong"
        });
    }
    

};