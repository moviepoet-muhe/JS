let num = 10
function tab() {
    console.log('后端代码')
}

// 可以省略
// module.exports.modA = {
//     num,
//     tab
// }

// 导出
module.exports = {
    num,
    tab
}