// 注意点：在后端模块化规范里面，导入文件后缀名可以省略
const modA = require('./modules/a')
console.log(modA)
console.log(modA.num)
modA.tab()