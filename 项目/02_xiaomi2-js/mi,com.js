// banner轮播图
// 准备数据
const dataArr = [
  { src: './img/banner_1.webp' },
  { src: './img/banner_2.webp' },
  { src: './img/banner_3.webp' },
  { src: './img/banner_4.webp' },
  { src: './img/banner_5.webp' },
]

// 获取元素
const leftBtn = document.querySelector('.btn span:nth-child(1)') // 左边按钮
const rightBtn = document.querySelector('.btn span:nth-child(2)') // 右边按钮
const pic = document.querySelector('.pic img') // 图片


// 声明数据数组下标变量
let index = 0
// 渲染函数
function rendering() {
  pic.src = dataArr[index].src
}
// 初始化渲染
rendering()


// 绑定右按钮点击事件
rightBtn.onclick = function () {
  index++
  if (index === dataArr.length) {
    index = 0
  }
  rendering()
}
// 绑定左按钮点击事件
leftBtn.onclick = function () {
  if (index === 0) {
    index = dataArr.length
  }
  index--
  rendering()
}

// 自动切换，添加定时器
// 声明定时器返回值 timeID
let timerID = null
function autoSlider() {
  timerID = setInterval(function () {
    rightBtn.onclick()
  }, 2000)
}
autoSlider()

// 当鼠标移动到最大的盒子里面的时候让图片停止切换
pic.parentNode.onmouseover = function () {
  clearInterval(timerID)
}

// 当鼠标移动到最大的盒子外面的时候让图片恢复切换
pic.parentNode.onmouseout = function () {
  autoSlider()
}


// 下拉菜单
const seletArr = [
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png?thumb=1&w=240&h=165&f=webp&q=90',
    name: 'Xiaomi 15',
    price: 4999
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png?thumb=1&w=240&h=165&f=webp&q=90',
    name: 'Xiaomi 15',
    price: 4999
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png?thumb=1&w=240&h=165&f=webp&q=90',
    name: 'Xiaomi 15',
    price: 4999
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png?thumb=1&w=240&h=165&f=webp&q=90',
    name: 'Xiaomi 15',
    price: 4999
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png?thumb=1&w=240&h=165&f=webp&q=90',
    name: 'Xiaomi 15',
    price: 4999
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png?thumb=1&w=240&h=165&f=webp&q=90',
    name: 'Xiaomi 15',
    price: 4999
  }
]
// 获取下拉菜单下的元素li>a>img和span
let pic3 = document.querySelectorAll('.select img')
let goodsName2 = document.querySelectorAll('.select span')
let price = document.querySelectorAll('.select p')


for (let i = 0; i < seletArr.length; i++) {
  pic3[i].src = seletArr[i]['src']
  goodsName2[i].innerHTML = seletArr[i].name
  price[i].innerHTML = seletArr[i].price + '元起'
}

// banner左侧隐藏菜单数据
const arrGoods = [
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb9e4a367f854221b60bb7b3b05e0173.png?thumb=1&w=60&h=60&f=webp&q=90',
    name: 'Xiaomi MIX系列'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb9e4a367f854221b60bb7b3b05e0173.png?thumb=1&w=60&h=60&f=webp&q=90',
    name: 'Xiaomi MIX系列'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb9e4a367f854221b60bb7b3b05e0173.png?thumb=1&w=60&h=60&f=webp&q=90',
    name: 'Xiaomi MIX系列'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb9e4a367f854221b60bb7b3b05e0173.png?thumb=1&w=60&h=60&f=webp&q=90',
    name: 'Xiaomi MIX系列'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb9e4a367f854221b60bb7b3b05e0173.png?thumb=1&w=60&h=60&f=webp&q=90',
    name: 'Xiaomi MIX系列'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb9e4a367f854221b60bb7b3b05e0173.png?thumb=1&w=60&h=60&f=webp&q=90',
    name: 'Xiaomi MIX系列'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb9e4a367f854221b60bb7b3b05e0173.png?thumb=1&w=60&h=60&f=webp&q=90',
    name: 'Xiaomi MIX系列'
  },
]
// 获取左侧隐藏菜单下的元素li>a>img和span
let pic2 = document.querySelectorAll('.home-hero .site-category .hide-div li img')
let goodsName = document.querySelectorAll('.home-hero .site-category .hide-div li span')

for (let i = 0; i < arrGoods.length; i++) {
  pic2[i].src = arrGoods[i]['src']
  goodsName[i].innerHTML = arrGoods[i].name
}


// 手机数据
const phone = [
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261127_8d9eefc4ea604b3c2c20ef4df1312591.png?thumb=1&w=240&h=240&f=webp&q=90',
    title: 'REDMI K80 Pro',
    desc: '骁龙8至尊版|2K新国屏|全焦段影像',
    price: '3699'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261112_496adbd3fa76742689e9b8f5c4251efc.png?thumb=1&w=300&h=300&f=webp&q=90',
    title: ' REDMI K80',
    desc: '第三代骁龙8|2K新国屏|6550mAh 超长续航',
    price: '2499'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/089128152bd814096a99249a487e383d.png?thumb=1&w=300&h=300&f=webp&q=90',
    title: 'Xiaomi 15',
    desc: ' 徕卡光学 Summilux 高速镜头｜骁龙®8至尊版移动平台｜5400mAh 小米金沙江电池 小米澎湃OS 2',
    price: '4499'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261127_8d9eefc4ea604b3c2c20ef4df1312591.png?thumb=1&w=240&h=240&f=webp&q=90',
    title: 'REDMI K80 Pro',
    desc: '骁龙8至尊版|2K新国屏|全焦段影像',
    price: '3699'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261127_8d9eefc4ea604b3c2c20ef4df1312591.png?thumb=1&w=240&h=240&f=webp&q=90',
    title: 'REDMI K80 Pro',
    desc: '骁龙8至尊版|2K新国屏|全焦段影像',
    price: '3699'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261127_8d9eefc4ea604b3c2c20ef4df1312591.png?thumb=1&w=240&h=240&f=webp&q=90',
    title: 'REDMI K80 Pro',
    desc: '骁龙8至尊版|2K新国屏|全焦段影像',
    price: '3699'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261127_8d9eefc4ea604b3c2c20ef4df1312591.png?thumb=1&w=240&h=240&f=webp&q=90',
    title: 'REDMI K80 Pro',
    desc: '骁龙8至尊版|2K新国屏|全焦段影像',
    price: '3699'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261127_8d9eefc4ea604b3c2c20ef4df1312591.png?thumb=1&w=240&h=240&f=webp&q=90',
    title: 'REDMI K80 Pro',
    desc: '骁龙8至尊版|2K新国屏|全焦段影像',
    price: '3699'
  },
]

// 填充手机数据
function phoneGoods() {
  // 获取main商品2元素
  let phonePic = document.querySelectorAll('.main-goods-1 .right-goods  img')
  let phoneTitle = document.querySelectorAll('.main-goods-1 .right-goods .title')
  let phoneDesc = document.querySelectorAll('.main-goods-1 .right-goods .desc')
  let phonePrice = document.querySelectorAll('.main-goods-1 .right-goods .price')

  for (let i = 0; i < phone.length; i++) {
    phonePic[i].src = phone[i]['src']
    phoneTitle[i].innerHTML = phone[i].title
    phoneDesc[i].innerHTML = phone[i].desc
    phonePrice[i].innerHTML = phone[i].price + '元起'
  }
  return
}
// 渲染手机数据
phoneGoods()




// 耳机商品数据
const earphone = [
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261600_4ae42d79b9b21e0727c1bb7a2cddbbf6.png?thumb=1&w=225&h=225&f=webp&q=90',
    title: 'REDMI Buds 6 Pro',
    desc: '小米首发圈瓷同轴三单元 | 55dB深度降噪 | 无级动态降噪技术',
    price: '399'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261600_4ae42d79b9b21e0727c1bb7a2cddbbf6.png?thumb=1&w=225&h=225&f=webp&q=90',
    title: ' REDMI K80',
    desc: '小米首发圈瓷同轴三单元 | 55dB深度降噪 | 无级动态降噪技术',
    price: '399'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261600_4ae42d79b9b21e0727c1bb7a2cddbbf6.png?thumb=1&w=225&h=225&f=webp&q=90',
    title: 'REDMI Buds 6 Pro',
    desc: '小米首发圈瓷同轴三单元 | 55dB深度降噪 | 无级动态降噪技术',
    price: '399'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261600_4ae42d79b9b21e0727c1bb7a2cddbbf6.png?thumb=1&w=225&h=225&f=webp&q=90',
    title: 'REDMI Buds 6 Pro',
    desc: '小米首发圈瓷同轴三单元 | 55dB深度降噪 | 无级动态降噪技术',
    price: '399'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261600_4ae42d79b9b21e0727c1bb7a2cddbbf6.png?thumb=1&w=225&h=225&f=webp&q=90',
    title: 'REDMI Buds 6 Pro',
    desc: '小米首发圈瓷同轴三单元 | 55dB深度降噪 | 无级动态降噪技术',
    price: '399'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261600_4ae42d79b9b21e0727c1bb7a2cddbbf6.png?thumb=1&w=225&h=225&f=webp&q=90',
    title: 'REDMI Buds 6 Pro',
    desc: '小米首发圈瓷同轴三单元 | 55dB深度降噪 | 无级动态降噪技术',
    price: '399'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261600_4ae42d79b9b21e0727c1bb7a2cddbbf6.png?thumb=1&w=225&h=225&f=webp&q=90',
    title: 'REDMI Buds 6 Pro',
    desc: '小米首发圈瓷同轴三单元 | 55dB深度降噪 | 无级动态降噪技术',
    price: '399'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202311292123_5f019eb3ce2987e60596f7a54630e44c.png?thumb=1&w=113&h=113&f=webp&q=90',
    title: 'Redmi Buds 5 Pro',
    desc: '',
    price: '499'
  }
]

// 切换耳机数据
function earphoneGoods() {
  // 获取第二个main商品元素
  let earphonePic = document.querySelectorAll('.main-goods-2 .right-goods  img')
  let earphoneTitle = document.querySelectorAll('.main-goods-2 .right-goods .title')
  let earphoneDesc = document.querySelectorAll('.main-goods-2 .right-goods .desc')
  let earphonePrice = document.querySelectorAll('.main-goods-2 .right-goods .price')

  for (let i = 0; i < earphone.length; i++) {
    earphonePic[i].src = earphone[i]['src']
    earphoneTitle[i].innerHTML = earphone[i].title
    earphoneDesc[i].innerHTML = earphone[i].desc
    earphonePrice[i].innerHTML = earphone[i].price + '元起'
  }
  return
}


// 穿戴商品数据
const wearable = [
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261459_d47c23aa207b6cb0e2e6feee7d9888c5.png?thumb=1&w=300&h=300&f=webp&q=90',
    title: ' REDMI Watch 5',
    desc: '2.07英寸高刷高亮大屏 | 24天超长续航 | 搭载小米澎湃OS 2',
    price: '599'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261459_d47c23aa207b6cb0e2e6feee7d9888c5.png?thumb=1&w=300&h=300&f=webp&q=90',
    title: ' REDMI Watch 5',
    desc: '2.07英寸高刷高亮大屏 | 24天超长续航 | 搭载小米澎湃OS 2',
    price: '599'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261459_d47c23aa207b6cb0e2e6feee7d9888c5.png?thumb=1&w=300&h=300&f=webp&q=90',
    title: ' REDMI Watch 5',
    desc: '2.07英寸高刷高亮大屏 | 24天超长续航 | 搭载小米澎湃OS 2',
    price: '599'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261459_d47c23aa207b6cb0e2e6feee7d9888c5.png?thumb=1&w=300&h=300&f=webp&q=90',
    title: ' REDMI Watch 5',
    desc: '2.07英寸高刷高亮大屏 | 24天超长续航 | 搭载小米澎湃OS 2',
    price: '599'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261459_d47c23aa207b6cb0e2e6feee7d9888c5.png?thumb=1&w=300&h=300&f=webp&q=90',
    title: ' REDMI Watch 5',
    desc: '2.07英寸高刷高亮大屏 | 24天超长续航 | 搭载小米澎湃OS 2',
    price: '599'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261459_d47c23aa207b6cb0e2e6feee7d9888c5.png?thumb=1&w=300&h=300&f=webp&q=90',
    title: ' REDMI Watch 5',
    desc: '2.07英寸高刷高亮大屏 | 24天超长续航 | 搭载小米澎湃OS 2',
    price: '599'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261459_d47c23aa207b6cb0e2e6feee7d9888c5.png?thumb=1&w=300&h=300&f=webp&q=90',
    title: ' REDMI Watch 5',
    desc: '2.07英寸高刷高亮大屏 | 24天超长续航 | 搭载小米澎湃OS 2',
    price: '599'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261459_d47c23aa207b6cb0e2e6feee7d9888c5.png?thumb=1&w=300&h=300&f=webp&q=90',
    title: ' 小米手环8 Pro 原神定制版',
    desc: '',
    price: '549'
  }
]

// 切换穿戴数据
function wearableGoods() {
  // 获取第二个main商品元素
  let wearablePic = document.querySelectorAll('.main-goods-2 .right-goods  img')
  let wearableTitle = document.querySelectorAll('.main-goods-2 .right-goods .title')
  let wearableDesc = document.querySelectorAll('.main-goods-2 .right-goods .desc')
  let wearablePrice = document.querySelectorAll('.main-goods-2 .right-goods .price')

  for (let i = 0; i < wearable.length; i++) {
    wearablePic[i].src = wearable[i]['src']
    wearableTitle[i].innerHTML = wearable[i].title
    wearableDesc[i].innerHTML = wearable[i].desc
    wearablePrice[i].innerHTML = wearable[i].price + '元起'
  }
  return
}


// 初始渲染earphoneGoods()
earphoneGoods()

// 通过class="tab-active" 切换商品数据

// 通过鼠标移动添加 class="tab-active"
let tabActive = document.querySelectorAll('.main-goods-2 .tab-list li')
for (let i = 0; i < tabActive.length; i++) {
  tabActive[i].onmouseover = function () {
    if (tabActive[i].innerHTML === '耳机') {
      earphoneGoods()
    } else {
      wearableGoods()
    }
  }
}


// 电脑商品数据
const computerPad = [
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410281957_cef79555890f4b13bbe6939cb16692e0.png?thumb=1&w=270&h=270&f=webp&q=90',
    title: 'Xiaomi Pad 7 Pro',
    desc: '11.2英寸3.2K高清高刷屏 | 第三代骁龙8s 旗舰芯片 | HyperOS 2 ',
    price: '2499'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410281957_cef79555890f4b13bbe6939cb16692e0.png?thumb=1&w=270&h=270&f=webp&q=90',
    title: 'Xiaomi Pad 7 Pro',
    desc: '11.2英寸3.2K高清高刷屏 | 第三代骁龙8s 旗舰芯片 | HyperOS 2 ',
    price: '2499'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410281957_cef79555890f4b13bbe6939cb16692e0.png?thumb=1&w=270&h=270&f=webp&q=90',
    title: 'Xiaomi Pad 7 Pro',
    desc: '11.2英寸3.2K高清高刷屏 | 第三代骁龙8s 旗舰芯片 | HyperOS 2 ',
    price: '2499'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410281957_cef79555890f4b13bbe6939cb16692e0.png?thumb=1&w=270&h=270&f=webp&q=90',
    title: 'Xiaomi Pad 7 Pro',
    desc: '11.2英寸3.2K高清高刷屏 | 第三代骁龙8s 旗舰芯片 | HyperOS 2 ',
    price: '2499'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410281957_cef79555890f4b13bbe6939cb16692e0.png?thumb=1&w=270&h=270&f=webp&q=90',
    title: 'Xiaomi Pad 7 Pro',
    desc: '11.2英寸3.2K高清高刷屏 | 第三代骁龙8s 旗舰芯片 | HyperOS 2 ',
    price: '2499'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410281957_cef79555890f4b13bbe6939cb16692e0.png?thumb=1&w=270&h=270&f=webp&q=90',
    title: 'Xiaomi Pad 7 Pro',
    desc: '11.2英寸3.2K高清高刷屏 | 第三代骁龙8s 旗舰芯片 | HyperOS 2 ',
    price: '2499'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410281957_cef79555890f4b13bbe6939cb16692e0.png?thumb=1&w=270&h=270&f=webp&q=90',
    title: 'Xiaomi Pad 7 Pro',
    desc: '11.2英寸3.2K高清高刷屏 | 第三代骁龙8s 旗舰芯片 | HyperOS 2 ',
    price: '2499'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202311281948_e41396e545d3ba8da294444a47abb590.png?thumb=1&w=135&h=135&f=webp&q=90',
    title: 'Redmi Book 14 2024',
    desc: '',
    price: '4299'
  }
]

// 填充电脑数据
function computerGoods() {
  // 获取第二个main商品元素
  let computerPic = document.querySelectorAll('.computer-pad .right-goods  img')
  let computerTitle = document.querySelectorAll('.computer-pad .right-goods .title')
  let computerDesc = document.querySelectorAll('.computer-pad .right-goods .desc')
  let computerPrice = document.querySelectorAll('.computer-pad .right-goods .price')

  for (let i = 0; i < computerPad.length; i++) {
    computerPic[i].src = computerPad[i]['src']
    computerTitle[i].innerHTML = computerPad[i].title
    computerDesc[i].innerHTML = computerPad[i].desc
    computerPrice[i].innerHTML = computerPad[i].price + '元起'
  }
  return
}
computerGoods()


// 家电商品数据
const houseApp = [
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410231741_f45f1f572f2896f6bf2920c26ca41267.png?thumb=1&w=270&h=270&f=webp&q=90',
    title: 'Redmi 智能电视 X 2025款',
    desc: '240Hz竞技模式|4+64GB|全色温双色域色准管控 ',
    price: '2599'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410231741_f45f1f572f2896f6bf2920c26ca41267.png?thumb=1&w=270&h=270&f=webp&q=90',
    title: 'Redmi 智能电视 X 2025款',
    desc: '240Hz竞技模式|4+64GB|全色温双色域色准管控 ',
    price: '2599'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410231741_f45f1f572f2896f6bf2920c26ca41267.png?thumb=1&w=270&h=270&f=webp&q=90',
    title: 'Redmi 智能电视 X 2025款',
    desc: '240Hz竞技模式|4+64GB|全色温双色域色准管控 ',
    price: '2599'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410231741_f45f1f572f2896f6bf2920c26ca41267.png?thumb=1&w=270&h=270&f=webp&q=90',
    title: 'Redmi 智能电视 X 2025款',
    desc: '240Hz竞技模式|4+64GB|全色温双色域色准管控 ',
    price: '2599'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410231741_f45f1f572f2896f6bf2920c26ca41267.png?thumb=1&w=270&h=270&f=webp&q=90',
    title: 'Redmi 智能电视 X 2025款',
    desc: '240Hz竞技模式|4+64GB|全色温双色域色准管控 ',
    price: '2599'
  }, {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410231741_f45f1f572f2896f6bf2920c26ca41267.png?thumb=1&w=270&h=270&f=webp&q=90',
    title: 'Redmi 智能电视 X 2025款',
    desc: '240Hz竞技模式|4+64GB|全色温双色域色准管控 ',
    price: '2599'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410231741_f45f1f572f2896f6bf2920c26ca41267.png?thumb=1&w=270&h=270&f=webp&q=90',
    title: 'Redmi 智能电视 X 2025款',
    desc: '240Hz竞技模式|4+64GB|全色温双色域色准管控 ',
    price: '2599'
  },
  {
    src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/608a47f5d655fc1372de67ee2f7b1c43.jpg?thumb=1&w=135&h=135&f=webp&q=90',
    title: '米家冰箱无霜两门186L',
    desc: '',
    price: '1199'
  }
]

// 填充电脑数据
function houseAppGoods() {
  // 获取第二个main商品元素
  let houseAppPic = document.querySelectorAll('.house-app .right-goods  img')
  let houseAppTitle = document.querySelectorAll('.house-app .right-goods .title')
  let houseAppDesc = document.querySelectorAll('.house-app .right-goods .desc')
  let houseAppPrice = document.querySelectorAll('.house-app .right-goods .price')

  for (let i = 0; i < houseApp.length; i++) {
    houseAppPic[i].src = houseApp[i]['src']
    houseAppTitle[i].innerHTML = houseApp[i].title
    houseAppDesc[i].innerHTML = houseApp[i].desc
    houseAppPrice[i].innerHTML = houseApp[i].price + '元起'
  }
  return
}
houseAppGoods() 