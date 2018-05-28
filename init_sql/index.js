const { query } = require("./utils/db");
const { getFileContent } = require("./utils/get_sql_content");

// 获取所有sql脚本内容
let sqlContentMap = getFileContent();

async function creatTables() {
  for (let sqlItem of sqlContentMap) {
    let sqlList = sqlItem.split(";");

    for (let [i, shell] of sqlList.entries()) {
      if (shell.trim()) {
        let result = await query(shell);

        if (result.serverStatus * 1 === 2) {
          console.log(`第${i+1}条脚本 执行成功！`);
        }
      }
    }
  }
}

creatTables();
