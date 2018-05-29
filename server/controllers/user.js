
const { query } = require('../../init_sql/utils/db');

module.exports = {
    "GET /api/user": async (ctx, next) => {
        let sql = `SELECT * FROM user_info`;

        let data = await query(sql);
        ctx.rest({
            success: true,
            data: data
        });
    },

    "GET /api/user/:id": async (ctx, next) => {
        let sql = `SELECT * FROM user_info WHERE id=?`;

        let id = ctx.params.id;
        if (!/^\d+$/g.test(id)) {
            ctx.rest({
                success: false,
                err_msg: "参数不正确"
            });
            return;
        }

        let data = await query(sql, id);
        
        ctx.rest({
            success: true,
            data: data
        });
    }

};