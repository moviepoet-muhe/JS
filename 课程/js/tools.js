function $(ele, all) {
    if (!all) {
        return document.querySelector(ele)
    } else {
        return document.querySelectorAll(ele)
    }
}

// 冒泡排序，默认升序，isDescend == ture 降序
function bubbleSort(arr, isDescend) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (isDescend) {
                if (arr[j] < arr[j + 1]) {
                    var temp;
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            } else {
                if (arr[j] > arr[j + 1]) {
                    var temp;
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    return arr;
}

// 选择排序，默认升序，isDescend == ture 降序
function selectionSort(arr, isDescend) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (isDescend) {
                if (arr[i] < arr[j]) {
                    var temp
                    temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
            } else {
                if (arr[i] > arr[j]) {
                    var temp
                    temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
            }
        }
    }
    return arr;
}

// 选择排序数组去重
function uniqueArr(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1)
                j--
            }
        }
    }
    return arr
}

// 1、统计字符串的个数，并以对象的形式展现。 
function fn(data) {
    let obj = {}
    for (let i = 0; i < data.length; i++) {
        let char = str[i]
        // 如果字符已经在对象中，计数加1；否则初始化为1
        if (obj[char]) {
            obj[char] += 1
        } else {
            obj[char] = 1
        }
    }
    return obj
}



// 2、统计字符串的个数，并以对象的形式展现。 
function fn2(data) {
    let obj2 = {}
    // 将字符串切割为数组
    let arr = data.split('')
    arr.forEach(function (item) {
        if (obj2[item]) {
            obj2[item] += 1
        } else {
            obj2[item] = 1
        }
    })
    return obj2
}


// 3、统计字符串的个数，并以对象的形式展现。 
function fn3(data) {
    let obj3 = {}
    for (let char of data) {
        // 如果字符已经在对象中，计数加1；否则初始化为1
        if (obj3[char]) {
            obj3[char]++;
        } else {
            obj3[char] = 1;
        }
    }
    return obj3
}


// 查询字符串转为对象
function transformationObj(data) {
    let str = data.split('?')[1]
    let arr = str.split('&')
    let obj = {}
    for (let char of arr) {
        let newArr = char.split('=')
        obj[newArr[0]] = newArr[1]
    }
    return obj
}

// 查询字符串转为对象
function transformationObj(data) {
    let str = data.split('?')[1]
    let arr = str.split('&')
    let obj = {}
    arr.forEach(function (item) {
        let newArr = item.split('=')
        obj[newArr[0]] = newArr[1]
    })
    return obj
}

// 把对象转成查询字符串
function tansformationStr(data) {
    let str = ''
    for (let key in data) {
        str += key + '=' + data[key] + '&'
    }
    str = str.slice(0, -1)
    return str
}

// 求一个随机整数
function getRandom(min, max) {
    return Math.floor(Math.mrandom() * (max - min + 1)) + min
}