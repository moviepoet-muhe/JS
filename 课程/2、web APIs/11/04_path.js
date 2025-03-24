// 专门用来处理文件路径
const path = require('path')

// path.basename 把一段路径里面最后一个部分截取出来
console.log(path.basename('pages/login.html'))

console.log(path.basename('c:/users/wj-project/index.html'))

// path.join 把路径片段拼接成一个完整的路径
console.log(path.join('users', 'wj', '../','index.html'))

// __dirname --- /Users/dingwei/Desktop/CD-HarmonyOS-2403/二阶段/day11/code
console.log(path.resolve(__dirname, 'pages', 'login.html'))