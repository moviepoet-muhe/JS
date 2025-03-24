const fs = require('fs')

// // 异步读取文件内容
// console.log(fs.readFile('./data/hello.txt', 'utf-8', (err, res) => {
//   console.log(err, res)
// }))

// console.log(fs.readFile('./01_服务器相关.html', 'utf-8', (err, res) => {
//   console.log(res)
// }))

// // 同步读取
// const res = fs.readFileSync('./data/hello.txt', 'utf-8')
// console.log(res)

// 异步写入内容
fs.writeFile('./data/hello.txt', '王旭爱英语', () => {
  console.log('写入成功')
})

// 同步写入
// fs.writeFileSync('./data/hello.txt', '哈哈')