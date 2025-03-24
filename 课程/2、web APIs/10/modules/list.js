// 单个导出功能
// export let num = 10
// export let list = () => {
//   console.log('我是列表渲染')
// }

// 默认导出功能
let num = 10
function list() {
  console.log('我是列表功能')
}
export default {
  num,
  list
}

