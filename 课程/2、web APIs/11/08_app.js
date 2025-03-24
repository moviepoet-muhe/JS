const http = require('http')

// createServer() 可以创建一个服务
// request 表示的是请求信息
// response 表示的是响应信息
const app = http.createServer((request, response) => {
    // request.url 可以拿到前端是哪个地址访问的服务器
    // response.setHeader 设置响应头信息
    response.setHeader('content-type', 'text/html; charset=utf-8')
    switch (request.url) {
        case '/news/list':
            response.end('我是新闻列表数据')
            break
        case '/users/list':
            response.end('我是用户列表数据,xixi')
            break
        default:
            response.end('请求地址错误！')
    }
})
// http://127.0.0.1:2403/users/list 接口

// listen() 可以监听端口号
app.listen(2403, () => {
    console.log('您的服务器已经开启！')
})

