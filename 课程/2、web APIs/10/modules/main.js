// // 入口文件，用于管理其他的文件（整合其他文件的）

// // 单个导入功能
// import { num, list } from './list.js'
// // as 表示重命名
// import { num as index, tab } from './tab.js'

// console.log(num, index)

// list()
// tab()

// // 默认导入功能
// import listMod from './list.js'
// import tabMod from './tab.js'

// console.log(listMod.num)
// console.log(tabMod.num)

// listMod.list()


// 注意点：如果这样写导入模块文件会默认进行声明提升，会提升当前的最顶端
// import newsMod from './news.js'
// import gamesMod from './games.js'


const news = document.querySelectorAll('button')[0]
const games = document.querySelectorAll('button')[1]
const box = document.querySelector('div')


// 预加载：当你打开页面的时候就加载文件
// import('./news.js').then(res => {
//     box.innerHTML = res.template
// })

news.onclick = () => {
    // 按需导入：当你需要的时候才加载（当你点击按钮的时候才加载文件）
    import('./news.js').then(res => {
        // console.log(res.default.template)
        // console.log(res.template)
        box.innerHTML = res.template
    })
}

games.onclick = () => {
    import('./games.js').then(res => {
        box.innerHTML = res.template
    })
}