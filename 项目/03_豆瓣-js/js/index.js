
// -------------------------------渲染用户基本信息
// 用户档案数据
const usrProfileData = [
  {
    name: '牧和的诗',
    title: '牧和的诗',
    src: './assets/uploads/muhe.jpg'
  }
]
// 获取标记
let usrPicTitle = document.querySelector('section .usr-profile .usr-pic a')
let usrPicImg = document.querySelector('section .usr-profile .usr-pic a img')
let usrName = document.querySelector('section .usr-profile .usr-name')

// 数据传输
usrPicTitle.title = usrProfileData[0]['title']
usrPicImg.src = usrProfileData[0].src

// 追加内容到子元素最前面，不会覆盖原有内容。
usrName.prepend(usrProfileData[0].name)


// -------------------------------编辑用户签名

// 获取标记
// 签名内容
let txt = document.querySelector('section .signature .signature-txt')
// 编辑
let edit = document.querySelector('section .signature .edit')
// 编辑 a 标签
let editA = document.querySelector('section .signature .edit a')
// 输入表单
let form = document.querySelector('section .signature form')
// 输入框
let input = document.querySelector('section .signature form .signature-input')
// 修改按钮
let submit = document.querySelector('section .signature form .submit')
// 取消按钮
let cancel = document.querySelector('section .signature form .cancel')


// 初始赋值 编辑标记下 a 标签的内容
// 根据判断签名档是否有内容 而改变编辑标记下 a 标签的内容
if (txt.innerHTML.trim() == '') {
  editA.innerHTML = '添加签名档'
} else {
  editA.innerHTML = '编辑'
}

// 绑定事件 
// 点击编辑  
edit.onclick = function () {
  // 表单显示
  form.style.display = 'inline'
  // 签名标记、编辑标记隐藏
  txt.setAttribute('style', 'display : none')
  edit.setAttribute('style', 'display : none')
  // 将现有签名内容赋值到输入框
  input.value = txt.innerHTML.trim()
}

// 点击修改 
submit.onclick = function () {
  //表单隐藏 
  form.setAttribute('style', 'display : none')
  // 签名标记、编辑标记显示
  edit.setAttribute('style', 'display : inline')
  txt.setAttribute('style', 'display : inline')
  // 判断输入框是否有值  而改变编辑标记下 a 标签的内容
  if (input.value.trim() == '') {
    editA.innerHTML = '添加签名档'
  }
  else {
    editA.innerHTML = '编辑'

  }
  txt.innerHTML = input.value.trim()

}

// 点击取消
cancel.onclick = function () {
  form.setAttribute('style', 'display : none')
  edit.setAttribute('style', 'display : inline')
  txt.setAttribute('style', 'display : inline')
}

// -----------------------------------鼠标点击条目下的标题 entry-title 
// 使整个条目 entry 改变样式使其具有移动调整位置的效果

// 获取子元素
const entryTitles = document.querySelectorAll('.entry-title');

/* 
  onmouseover、onmouseout 当鼠标指针进入某个元素或该元素的子元素时触发。 
  会冒泡，也就是说，鼠标进入子元素时，父元素的 onmouseover 也会触发。

    mouseenter、mouseleave 事件不会冒泡到父元素。它只会在目标元素上触发。
  由于不会触发冒泡，因此在一些复杂的事件处理中，mouseenter 相较于 mouseover 会稍微高效一些。

  mousedown、mouseup

*/

for (let i = 0; i < entryTitles.length; i++) {
  // 监听鼠标进入事件
  entryTitles[i].addEventListener('mousedown', function () {
    // 获取父元素
    const entry = entryTitles[i].parentElement;
    // 添加样式类
    entry.classList.add('hovered');
  });


  // 鼠标移动事件



  // 监听鼠标释放事件
  entryTitles[i].addEventListener('mouseup', function () {
    // 获取父元素
    const entry = entryTitles[i].parentElement;
    // 移除样式类
    entry.classList.remove('hovered');
  });
}






// -------------------------------------------------留言板
// 获取元素
const text = document.querySelector('.board textarea')
const btn = document.querySelector('.board button')
const ul = document.querySelector('.board ul')
const total = document.querySelector('.board .total')

// 函数创建
// 显示或隐藏完整文本域 total
function toggleTotalVisibility(show) {
  total.classList.toggle('show', show)
}

// 验证输入内容
function validateInput() {
  if (text.value.trim() === '') {
    alert('不能为空！');
    text.value = "";
    return false;
  }

  if (text.value.length > 200) {
    alert('超过最大字符，请修改');
    return false;
  }

  return true;
}

// 更新字数统计
function updateTotal() {
  total.innerHTML = `${text.value.length}/200字`
}


// 创建留言并插入到 ul
function addMessage() {
  if (!validateInput()) return;
  // 创建li标记并添加内容
  const li = document.createElement('li');
  li.textContent = text.value;
  // 创建删除按钮
  const deleteBtn = document.createElement('span');
  deleteBtn.textContent = '删除';
  li.appendChild(deleteBtn);
  // 追加到ul里面
  ul.insertBefore(li, ul.firstChild);
  // 清空文本框的内容
  text.value = '';
  // 更新字数统计
  updateTotal();
}


// 初始化事件监听器
function initEventListeners() {
  // 文本域获得了焦点，total 显示
  text.addEventListener('focus', () => toggleTotalVisibility(true));

  // 文本域失去了焦点，total 隐藏
  text.addEventListener('blur', () => toggleTotalVisibility(false));

  // 检测用户输入字符数
  text.addEventListener('input', updateTotal);

  // 鼠标点击按钮发布留言
  btn.addEventListener('click', addMessage);

  // 按下回车发布留言
  text.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      addMessage();
    }
  });

  // 使用事件委托，绑定事件到ul元素，减少为每个span绑定事件。
  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      e.target.parentNode.remove();
    }
  });
}

// 初始化
initEventListeners();