const path = require('path');
const fs = require('fs');

let basePath = path.resolve(__dirname, `./sql`);

// 遍历文件夹，过滤出sql文件路径
function getFilePathMap(basePath) {
    let files = fs.readdirSync(basePath);
    let fileList = [];

    for (let file of files) {
        if (file.endsWith('.sql')) {
            let filePath = path.resolve(basePath, file);
            fileList.push(filePath);
        }
    }

    return fileList;
}

// 获取sql文件内容
function getFileContent() {
    let fileList = getFilePathMap(basePath);

    let sqlContentMap = {};

    for (let filePath in fileList) {
        fs.readFileSync(filePath, 'binary');
    }
    
}

export default = {
    getFileContent
}