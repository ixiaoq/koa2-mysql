const path = require('path');
const fs = require('fs');

async function isFiles(basePath) {
    return new Promise((resolve, reject) => {
        fs.stat(basePath, (err, stat) => {
            if (err) {
                reject(err);
            } else {
                
                resolve(stat.isFile());
            }
        });
    })
}

let basePath = path.resolve(__dirname, `./sql`);

function getFilePathMap(basePath) {
    let files = fs.readdirSync(basePath);
    let fileList = {};

    for (let [i, file] of files.entries()) {
        if (file.endsWith('.sql')) {
            
        }
    }
    
    return fileList;
}

getFilePathMap(basePath);