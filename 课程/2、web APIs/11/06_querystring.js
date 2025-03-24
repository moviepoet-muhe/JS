const querystring = require('querystring')

// 把查询字符串转成对象
console.log(querystring.parse('username=zhangsan&password=123'))
console.log(querystring.decode('username=zhangsan&password=123'))

console.log('------')

// 把对象转成查询字符串
console.log(querystring.stringify({username: 'zhangsan', password: '123' }))
console.log(querystring.encode({username: 'zhangsan', password: '123' }))
