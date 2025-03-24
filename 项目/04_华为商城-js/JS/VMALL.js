
// 模糊搜索




// banner轮播图
// 准备数据
const dataArr = [
  { src: './img/banner1.jpg' },
  { src: './img/banner2.jpg' },
  { src: './img/banner3.jpg' },
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




// banner左侧隐藏菜单数据
const arrGoods = [
  {
    src: 'https://res.vmallres.com/uomcdn/CN/cms/202411/2b7759f58c28407b928dd20b36b1dbfc.png',
    name: 'Mete 系列'
  },
  {
    src: 'https://res.vmallres.com/uomcdn/CN/cms/2024-04/e676438f7b9141279b673175040a32b3.png',
    name: 'Pura 系列'
  },
  {
    src: 'https://res.vmallres.com/uomcdn/CN/cms/202410/653909d743af4c85b35f1dc3921c25c0.png',
    name: 'nova 系列'
  },
  {
    src: 'https://res.vmallres.com/uomcdn/CN/cms/2024-02/ad2bcbfd3a5d4f60bdb04a6d5e37febc.webp',
    name: 'Pocket 系列'
  },
  {
    src: 'https://res.vmallres.com/uomcdn/CN/cms/202501/1417128e54d846598ce6b555aa9ebd8f.png',
    name: '华为畅享 系列'
  },
  {
    src: 'https://res.vmallres.com/uomcdn/CN/cms/202311/304B5C2BC7C27343D2F490606E243842.png',
    name: '华为官方翻新'
  },
  {
    src: 'https://res.vmallres.com/uomcdn/CN/cms/2024-02/29926e377d3a46829b5f522fecbbba84.png',
    name: '智选手机'
  },
  {
    src: 'https://res.vmallres.com/uomcdn/CN/cms/202311/E7B665EFB62416988B4B52CABFE52B66.png',
    name: '配件周边'
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
let product_list = [
  {
    "id": 1,
    "url": "https://res4.vmallres.com/pimages/FssCdnProxy/vmall_product_uom/pmsSalesFile/800_800_8D12649BC2A317FD6805B4012B95FD79.png",
    "title": "Mate 70 Pro",
    "des": "鸿蒙AI|红枫原色影像|超可靠玄武架构",
    "cart_num": 0,
    "price": 6999,
    "is_select": false
  },
  {
    "id": 2,
    "url": "https://res8.vmallres.com/pimages/uomcdn/CN/pms/202406/gbom/6942103128202/800_800_BDCDFF9AB892DABC4E97D0323D4C8753mp.png",
    "title": "Pura 70 北斗卫星消息版",
    "des": "超高速风驰闪拍|第二代昆仑玻璃",
    "cart_num": 0,
    "price": 5599,
    "is_select": false
  },
  {
    "id": 3,
    "url": "https://res3.vmallres.com/pimages/uomcdn/CN/pms/202309/gbom/6942103107221/800_800_959526DD397D0C873FCE80CE67C9A0BFmp.png",
    "title": "Mate X5",
    "des": "超轻薄四曲折叠|超高清高分辨率临境双屏",
    "cart_num": 0,
    "price": 10499,
    "is_select": false
  },
  {
    "id": 4,
    "url": "https://res3.vmallres.com/pimages/FssCdnProxy/vmall_product_uom/pmsSalesFile/800_800_E9CA35FB3EFDE5304007D6A90ABF065E.png",
    "title": "华为畅享 70X",
    "des": "一键北斗 鸿蒙安全|华为巨鲸长续航",
    "cart_num": 0,
    "price": 1999,
    "is_select": false
  },
  {
    "id": 5,
    "url": "https://res7.vmallres.com/pimages/uomcdn/CN/pms/202403/gbom/6942103107719/800_800_5818B6A12914274ED24FB8FE47F1CD34mp.png",
    "title": "Mate 60",
    "des": "超可靠玄武架构|全焦段超清影像",
    "cart_num": 0,
    "price": 5499,
    "is_select": false
  },
  {
    "id": 6,
    "url": "https://res3.vmallres.com/pimages/uomcdn/CN/pms/202409/gbom/6942103136221/800_800_333848611DC0B1FC64909F87CD048F2Cmp.png",
    "title": "Mate XT 非凡大师",
    "des": "10.2英寸超形态三折叠大屏",
    "cart_num": 0,
    "price": 23999,
    "is_select": false
  },
  {
    "id": 7,
    "url": "https://res5.vmallres.com/pimages/uomcdn/CN/pms/202404/gbom/6942103121074/800_800_FDDA6BC9766655586FD6EB3E003F316Dmp.png",
    "title": "Pura 70 Ultra",
    "des": "超聚光伸缩摄像头|超高速风驰闪拍",
    "cart_num": 0,
    "price": 7999,
    "is_select": false
  },
  {
    "id": 8,
    "url": "https://res8.vmallres.com/pimages/uomcdn/CN/pms/202410/gbom/6942103137129/800_800_CC8A9746DF24D6EA90EF9322630569DCmp.png",
    "title": "nova 13 Pro",
    "des": "前后多焦段人像|IAI修图",
    "cart_num": 0,
    "price": 3849,
    "is_select": false
  }
]


// 加入购物车
class AddCart {
  constructor() {
    // 获取元素
    this.ul = document.querySelector('.right-goods ul')
    this.count = document.querySelector('.count')

    this.data = product_list

    // 初始化调用
    this.init()
  }
  init() {
    this.render()
    this.bindEvent()
    this.caclCount()
  }
  // 根据数据渲染手机列表
  render() {
    this.data.forEach(item => {
      this.ul.innerHTML += `
              <li>
              <a href=""><img width="160" height="160" src="${item.url}" alt=""></a>
                  <h3 class="title">${item.title}</h3>
                  <p class="desc">${item.des}</p>
                  <p class="price">${item.price}元</p>
                  <button data-id=${item.id}>加入购物车</button>
              </li>
          `
    })
  }
  bindEvent() {
    this.ul.addEventListener('click', (e) => {
      if (e.target.nodeName === 'BUTTON') {
        /*
            加入购物车的逻辑分析
            + 购物车数据结构是一个数组，数组里面存储对象 [{}, {}, {}]
            + 一个页面的数据不能给另一个页面使用，可以使用到加入购物车（数组）数据存储到localStorage里面。购物车名称统一存储使用cart
            + 当点击一个按钮后需要把这个列表的数据拿到才能加入到准备的数组（购物车）里面
              => 通过H5自定义属性，给按钮绑定id
              => 通过拿到按钮的id和数据里面的id对比即可
        */
        // 拿到当前按钮的id
        let id = e.target.dataset.id - 0
        // 通过和数据里面的id对比
        let goods = this.data.find(item => item.id === id)
        // 先从购物车里面获取数据，看购物车里面是否存在数据
        let list = JSON.parse(localStorage.getItem('cart')) || []
        if (!list.length) {
          goods.cart_num = 1
          list.push(goods)
        } else {
          // 查看是否有重复的数据
          let res = list.some(item => item.id === id)
          if (res) {
            list.find(item => item.id === id).cart_num++
          } else {
            goods.cart_num = 1
            list.push(goods)
          }
        }
        localStorage.setItem('cart', JSON.stringify(list))
        this.caclCount()
      }
    })
  }
  caclCount() {
    let list = JSON.parse(localStorage.getItem('cart')) || []
    let num = 0
    list.forEach(item => {
      num += item.cart_num
    })
    this.count.innerHTML = num
  }
}
new AddCart()

