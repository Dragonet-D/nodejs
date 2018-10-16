const fs = require('fs');

// 创建目录 没有就创建 有就不创建
fs.stat('upload', (err, stats) => {
    if (err) { // 没有目录
        fs.mkdir('upload', (error) => {
            if (error) {
                return false
            }
            console.log('创建成功')
        })
        console.log(err)
        return false
    } else {
        console.log('目录存在')
        console.log(stats.isDirectory())
    }
})