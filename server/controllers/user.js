
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

        let data = await query(sql, ctx.params.id);
        
        ctx.rest({
            success: true,
            data: data
        });
    }

};