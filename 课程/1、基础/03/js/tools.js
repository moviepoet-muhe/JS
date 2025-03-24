// 求两个数的最大值函数
function getMax(x, y) {
    x > y ? console.log(x) : console.log(y)
}

// 选择器封装
// 参数1表示要获取的元素
// 参数2表示是否获取多个，传入值类型是布尔。true 表示获取多个，false或者不传表示获取单个

/*
    选择器封装函数
    + params
      => @params { string } ele 表示要获取的元素
      => @parmas { boolean } all 表示是否获取多个
*/
function $(ele, all) {
    if (all) {
        return document.querySelectorAll(ele)
    } else {
        return document.querySelector(ele)
    }
}