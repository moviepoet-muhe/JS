class Cart {
    constructor() {
        this.cartTable = document.querySelector('.cartTable')
        this.tbody = document.querySelector('tbody')
        this.footer = document.querySelector('.footer')
        this.cartContainer = document.querySelector('.cart-container')
        this.list = JSON.parse(localStorage.getItem('cart')) || []
        this.caclPrice = 0
        this.init()
    }
    init() {
        this.render()
        this.bindEvent()
    }
    render() {
        let price = 0
        if (!this.list.length) {
            this.cartContainer.innerHTML = `
                 <div class="cart-container">
      <div class="cart-info">
        <div><img src="https://res.vmallres.com/bporder/rn/20250115/h5/images/convemptyCart.png" alt=""></div>
        <div class="cart-txt">您的购物车暂时没有商品</div>
        <div class="cart-btn"><a target="_blank" href="./VMALL.html">去购物</a></div>
      </div>
    </div>
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
                sessionStorage.setItem('price', this.caclPrice)
                location.href = `./结算页面.html`
            }
        })
    }
}

new Cart()