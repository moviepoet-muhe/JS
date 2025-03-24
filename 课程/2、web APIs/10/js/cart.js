class Cart {
    /**
     * Cart 类的构造函数，用于初始化购物车实例。
     */
    constructor() {
        // 选择类名为 'cartTable' 的元素，将其赋值给 this.cartTable，用于后续操作购物车表格
        this.cartTable = document.querySelector('.cartTable')
        // 选择 tbody 元素，将其赋值给 this.tbody，用于操作表格主体内容
        this.tbody = document.querySelector('tbody')
        // 选择类名为 'footer' 的元素，将其赋值给 this.footer，用于操作购物车底部信息
        this.footer = document.querySelector('.footer')
        // 从 localStorage 中获取名为 'cart' 的数据，并将其解析为 JavaScript 对象。
        // 如果 localStorage 中没有 'cart' 数据，则将 this.list 初始化为空数组
        this.list = JSON.parse(localStorage.getItem('cart')) || []
        // 初始化计算价格为 0
        this.caclPrice = 0
        // 调用 init 方法进行初始化操作
        this.init()
    }
    /**
     * 初始化购物车的方法，用于执行一些初始化操作。
     * 该方法会调用 render 方法渲染购物车内容，并绑定事件处理程序。
     */
    init() {
        // 调用 render 方法，用于渲染购物车的内容
        this.render()
        // 调用 bindEvent 方法，用于绑定购物车相关的事件处理程序
        this.bindEvent()
    }
    /**
     * 渲染购物车内容的方法。
     * 该方法会根据购物车的数据更新页面上的购物车表格和底部信息。
     */
    render() {
        let price = 0
        if (!this.list.length) {
            this.tbody.innerHTML = `
                <tr height="100">
                    <td colspan="6">
                        <h1>您的购物车空空如也！赶紧去购物吧...<a href="./01_加入购物车.html">Go</a></h1>
                    </td>
                </tr>
            `
        } else {
            this.tbody.innerHTML = ''
            this.list.forEach(item => {
                this.tbody.innerHTML += `
                    <tr>
                        <td><input type="checkbox" value="" class="select" ${item.is_select && 'checked'} data-id=${item.id}></td>
                        <td>
                            <img src="${item.url}" >
                            <span style="font-size:14px;">${item.title}</span>
                        </td>
                        <td><span>${item.price}</span></td>
                        <td>
                            <button class="sub" data-id=${item.id} ${item.cart_num === 1 && 'disabled'}>-</button>
                            <input type="text" value="${item.cart_num}" class="count">
                            <button class="add" data-id=${item.id}>+</button>
                        </td>
                        <td><span class="price">${item.cart_num * item.price}元</span></td>
                        <td><span class="del" data-id=${item.id}>删除</span></td>
                    </tr>
                `
                // 判断哪些是选中的
                if (item.is_select) {
                    price += item.cart_num * item.price
                }
            })
        }
        let _state = this.list.every(item => item.is_select)
        // 注意点：这里做判断的原因是，every方法如果数组为空不会遍历，直接返回true
        if (!this.list.length) {
            _state = false
        }

        this.footer.innerHTML = `
            <div class="left">
                <input type="checkbox" value="" class="allCheck" ${_state && 'checked'}/>
                <span class="dlAll">删除</span>
            </div>
            <div class="rirght">
                <div class="allNum">已选商品<b class="totalNum">${this.list.length}</b>件</div>
                <div class="allCount">合计 ￥<b class="money">${price.toFixed(2)}</b>元</div>
                <div class="calc">结算</div>
            </div>
        `
        this.caclPrice = price
        // 数据持久化
        localStorage.setItem('cart', JSON.stringify(this.list))
    }
    // 开发思维转变：之前很多功能都是通过DOM操作来完成的，但是DOM操作是非常消耗性能的
    // 目前框架里面主流的开发思维：是数据驱动视图，减少对DOM的操作，数据改变了，那么界面也会跟着改变
    bindEvent() {
        this.cartTable.addEventListener('click', (e) => {
            let t = e.target
            // 全选功能
            if (t.className === 'allCheck') {
                let state = t.checked
                this.list.forEach(item => {
                    item.is_select = state
                })
                // 重新渲染一次页面
                this.render()
            }
            // 单选功能
            if (t.className === 'select') {
                let id = t.dataset.id - 0
                let goods = this.list.find(item => item.id === id)
                goods.is_select = !goods.is_select
                this.render()
            }
            // 商品数量的增加
            if (t.className === 'add') {
                let id = t.dataset.id - 0
                let goods = this.list.find(item => item.id === id)
                // 注意点：商品数量最大限定，应该根据后端返回数据里面的商品库存来判定，这里这是做模拟使用
                if (goods.cart_num >= 10) {
                    alert('亲，最多只能买10件！')
                    return
                }
                goods.cart_num++
                this.render()
            }
            // 商品数量减少
            if (t.className === 'sub') {
                let id = t.dataset.id - 0
                let goods = this.list.find(item => item.id === id)
                goods.cart_num--
                this.render()
            }
            // 单个删除
            if (t.className === 'del') {
                let id = t.dataset.id - 0
                let index = this.list.findIndex(item => item.id === id)
                this.list.splice(index, 1)
                this.render()
            }
            // 选中删除
            if (t.className === 'dlAll') {
                let newList = this.list.filter(item => item.is_select === false)
                this.list = newList
                this.render()
            }
            // 结算页面
            if (t.className === 'calc') {
                // location.href = `./04_结算页面.html?price=${this.caclPrice}`
                sessionStorage.setItem('price', this.caclPrice)
                location.href = `./04_结算页面.html`
            }
        })
    }
}
