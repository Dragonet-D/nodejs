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

// 找出html 目录下面的所有目录 并打印出来

fs.readdir('html', (err, files) => {
    if (err) {
        console.log(err);
        return false
    } else {
        // 判断是目录还是文件
        console.log(files);
        for (let i = 0; i < files.length; i++) {
            fs.stat('html/'+files[i], (error, stats) => {
                // 循环判断是目录还是文件 --- 异步;
                if (stats.isDirectory()) {
                    console.log(files[i])
                }
            })
        }
    }
});


