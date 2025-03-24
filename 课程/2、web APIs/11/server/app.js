const express = require('express')

const app = express()

// 自定义后端接口
// / 表示服务器根地址（localhost || 127.0.0.1）
app.get('/news/list', (req, res) => {
    res.send({
        code: 1,
        msg: ['震惊王江竟然对她做出了这样的事情', '王旭深夜醉倒在酒吧门口，被别人捡回来家!']
    })
})

app.post('/login', (req, res) => {
    res.send('我是登录接口')
})

app.listen(2403, () => {
    console.log('您的服务器已经开启！')
})