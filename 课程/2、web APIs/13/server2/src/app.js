const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs')

app.use(cors())

app.listen(2402, ()=>{
	const text = `服务器已经开启！服务器基准地址是：http://localhost:2402
	
以下3个api供你测试练习回调地狱使用：

1、http://localhost:2402/user/test1

2、http://localhost:2402/user/test2

3、http://localhost:2402/user/test3

以下2个api供你测试练习Promise 的all和race方法使用：

1、http://localhost:2402/user/request1

2、http://localhost:2402/user/request2

跨域练习接口
http://localhost:2402/jsonp/test

大家大家喜欢的接口
http://localhost:2402/user/pic

温馨提示：本请求是get方式😯！api接口地址请拷贝，不要手敲、不要手敲、不要手敲...😊！
	`
    console.log(text)
})

app.get('/user/test1', (req, res)=>{
    let result = 10
    res.send(`${result}`)
})
app.get('/user/test2', (req, res)=>{
    let result = Number(req.query.a) + 10
    res.send(`${result}`)
})
app.get('/user/test3', (req, res)=>{
    let result = Number(req.query.b) + 10
    res.send(`${result}`)
})
app.get('/user/request1', (req, res)=>{
	res.send('hello，我是Promise all方法的接口！')
})
app.get('/user/request2', (req, res)=>{
	setTimeout(()=>{
		res.send('hello，我回来的比较慢！！')
	}, 3000)
})
app.get('/user/pic', (req, res)=>{
    fs.readFile('./js/meinv.js', 'utf-8', (err, data)=>{
        res.send(data)
    })
})
app.get('/shopping/list', (req, res)=>{
    fs.readFile('./js/product_list.js', 'utf-8', (err, data)=>{
        res.send(data)
    })
})

// jsonp请求地址
app.get('/jsonp/test', (req, res)=>{
    let cb = req.query.callback
    res.send(`${cb}(${JSON.stringify({code: 1, msg: "我是jsonp测试接口"})})`)
})