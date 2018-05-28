
const { query } = require('../../init_sql/utils/db');

module.exports = {
    "GET /api/user": async (ctx, next) => {
        let sql = `SELECT * FROM user_info`;

        let data = await query(sql);
        ctx.rest(data);
    },

    "GET /api/user/:id": async (ctx, next) => {
        console.log(ctx.params.id);

        let sql = `SELECT * FROM user_info WHERE id=?`;

        let data = await query(sql, ctx.params.id);
        console.log(data);

        if ( data.length < 1 ) {
            ctx.rest({
                success: true,
                error_msg: "参数错误, id为number类型！"
            });
            return;
        }
        
        ctx.rest(data);
    }

};