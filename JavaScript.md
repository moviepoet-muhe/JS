概述

JavaScript是一种轻量级的、基于对象和事件驱动的、跨平台的客户端脚本语言。

**1、JavaScript的用途**

JavaScript用来制作web页面交互效果，提升用户体验

**2、javascipt的特点**

- 简单易用

  ​       可以使用任何文本编辑工具编写

  ​       只需要浏览器就可以执行程序

- 解释执行（解释语言）
      事先不编译

  ​       逐行执行

  ​       无需进行严格的变量声明

- 基于对象

​         内置大量现成对象，编写少量程序可以完成目标

**3、Javascript 与html、css之间的关系**

- html: 是用来制作网页，简单来说就是编写网页结构

- css：用来修饰网页
- JavaScript: 实现网页与客户之间互动的桥梁，让网页具有丰富的生命力

**4、JavaScript的组成**

- 核心(ECMAScript)：它定义了这门语言的基础，描述了该语言的语法和基本对象，到目前最新的版本是ES15。
- Web APIs ：

1. 文档对象模型(DOM：Document  Object  Model) ：操作文档，比如对页面元素进行移动、大小、添加删除等操作。
2. 浏览器对象模型(BOM：Browser  Object  Model)   ：操作浏览器，比如页面弹窗，检测窗口宽度、存储数据到浏览器等等。

## 引入方式与注释

**1、内部引入方式**

```html
<html>
<body>
    <script>
        document.write('hello，这是第一个JS程序！')
    </script>
</body>
</html>
```

**2、外部引入方式**

```html
<html>
<body>
    <script src="./JS/hello.JS"></script>
</body>
</html>
```

**3、内联引入方式**

```html
<body>
   <!-- 通过 html 标记提供的属性来使用 JS 代码 -->
    <button onclick="alert('你点击我！11')">按钮</button>
    <a href="JavaScript:alert('你点击我！22');">你好啊！</a>
<!--src 属性的作⽤是引⼊⼀个外部的JS⽂件，当script标记使⽤ src 属性引⼊⼀个外部的 JS ⽂件后，那么它内部就不能再写JS代码-->
</body>
```

+ `<script ></script>`是⼀个标记，但是它内部具有运行和执行 JavaScript代码的功能。type="text/JavaScript" 定义⽂档类型，说明使用的是 JavaScript 语⾔，这个属性可以省略，但是不能写错。目前新的标准中可以不写。

+ `// 单行注释`   `/* 多行注释 */`

## 输出方式

+ JS 输出信息时，如果是纯数字的情况下，可以不加引号，那么其他的字符都必须加引号输出。
+ JS 里面输出信息的单引号或者双引号是没有区别的。
+ JS 里面每句代码的结束，可以加分号也可以不加。

### 1、document.write()

在网页中输出信息，⽀持输出时解析标记。注意点：如果直接输出一个字母或者单词的话，它会当成变量来解析，但是没有定义变量，那么会报错。加了引号就会当成正常的字符来解析。

### 2、alert()

弹窗，不能解析标记。

### 3、confirm()

带有取消和确定按钮的弹窗，不能解析标记。

### 4、prompt(参数1 , 参数2)

带有输⼊框的弹性，不能解析标记，有取消和确定按钮。

参数1表示的是输⼊框外部的提示内容，参数2表示的是输⼊框内部的默认值，和表单的value功能类似。

### 5、console.log()

在浏览器控制台输出信息（日志），不能解析标记。控制台换行，可以使用转义字符 \n。

### 6、console.error()

在浏览器控制台输出错误提示信息（日志），不能解析标记。控制台换行，可以使用转义字符 \n。

## 获取元素

### 1、 使用id名称获取到元素

- 直接给标记取名称，在JS里面通过名称获取元素。
- 这种方式最早的时候出现在IE浏览器里面的，其他的浏览器是不支持的，直到后面其他的浏览器的高版本才慢慢支持了这种方式。
- 但是低版本依旧是不支持的，因此在开发的时候存在兼容问题，不推荐使用。

```html
<button id="btn">按钮</button>
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
console.log(btn)
```

### 2、document.getElementById()

- 在网页中通过id的方式来获取元素。
- 这种方式是被所有浏览器都支持的，没有兼容问题，因此开发推荐使用。

```js
document.getElementById('btn')
```

### 3、document.getElementsByClassName()

- 通过 类名 来获取元素，结果是一个数组（数据的集合）HTMLCollection 标记集合

```js
document.getElementsByClassName('box')
document.getElementsByClassName('box')[0]
document.getElementsByClassName('box')[1]
```

### 4、document.getElementsByTagName()

-  通过 标记 名称来获取元素，结果是一个数组（数据的集合）

```js
document.getElementsByTagName('div')
document.getElementsByTagName('div')[0]
document.getElementsByTagName('div')[1]
```

### 5、document.querySelector()

- ES5新增  支持各种CSS选择器的写法，使用最多获取元素的方式。

- 获取一个，如果存在多个相同名称，那么默认获取第一个。

```js
document.querySelector('#标记id名称')
document.querySelector('.标记class名称') 
document.querySelector('标记名称') 
document.querySelector('ul li:nth-child(1)')
document.querySelector('input[type="text"]')
document.querySelectorAll()
```

### 6、document.querySelectorAll()

- ES5新增 支持 css 选择器的写法。获取到的是一组。

```js
document.querySelectorAll('ul li')
document.querySelectorAll('ul li')[0]
document.querySelectorAll('ul li')[1]
```



### 7、直接可以使用的元素，不需要使用js选择器获取

```js
document.body // 获取body
document.documentELement // 获取整个html
document.head // 获取head
document.title // 设置网页的标题
```

## 设置元素内容

### 1、innerHTM

获取元素的内容,设置元素的内容，可以解析标记。

- 读取时返回的是 HTML 代码字符串。
- 设置时，会解析 HTML 代码并渲染相应的 DOM 结构。
- **存在 XSS 风险**，如果插入的内容包含 `<script>`，可能会执行恶意代码。

### 2、innerText

获取或设置元素的可见文本内容，会受 CSS 样式影响（如 `display: none`），不能解析标记。

- 只获取 **可见的文本**，不会包含 `display: none` 或 `visibility: hidden` 元素的内容。
- 读取时，会 **自动去除多余的空白和换行**，格式化文本内容。
- 性能较 `textContent` **稍慢**，因为它需要计算可见性和样式。

```html
<body>
    <input type="text" value="哈哈">
    <div></div>
    <script>
       var txt = document.querySelector('input')
       console.log(txt.value)// 获取表单的内容
       txt.value = '哈哈，我是设置的内容' // 设置表单的内容
        var box = document.querySelector('div')
        console.log(box.innerHTML) // 获取元素的内容
        console.log(box.innerText) // 获取元素的内容
        box.innerHTML = '<h1>我是标题</h1>' // 可以解析标记
        box.innerText = '<h1>我是标题</h1>' // 不能解析标记
    </script>
</body>
```

### 3、textContent

获取或设置元素的所有文本内容，不受 CSS 影响，不能解析标记。

- 获取的是 **完整的文本**，包括 `display: none` 和 `visibility: hidden` 内的内容。
- 读取时，不会自动格式化文本（不会去掉多余的空白和换行）。
- **性能更好**，不会触发样式计算。

### 3、append（）、prepend（）

```js
element.prepend('新内容');// 开头添加 
element.append('新内容');// 末尾添加  
```

### 4、contenteditable属性

这允许用户直接在 div 中编辑内容，类似于输入框的功能。

**`contenteditable="true"`**：将 `div` 设置为可编辑状态。（默认值）

在用户编辑完成后，可以通过 `innerHTML` 获取编辑后的内容并保存到后台或本地存。

## 声明变量

变量声明的过程：浏览器在解析代码的时候，如果遇到`var`关键字, 那么会在内存里面开辟一块空间。会把变量名称作为这个开辟的空间的名称，把变量的值存储进空间里面。声明的变量都会占内存空间，因此变量存在生命周期，这样可以把使用过的变量进行销毁，从而节省内存空间。

**变量命名规则**

+ 命名全部使用英文，名称里面不能出现中文和特殊字符。
+ 区分大小写。
+ 名称开头可以使用字母和 _ 还有 $ 符号，不能使用数字。

```js
// 一次声明多个变量
var a, b, c
a = 10
b = 20
c = 30
console.log(a, b, c)
```

**变量命名风格**

```js
var GetUserName = '你好！' // ⼤驼峰
var getUserName = '你好！' // ⼩驼峰
var get_user_name = '你好！'// 下划线命名
// 匈⽛利命名，不管你是⼏个单词组成的，要求是变量名称在命名的时候，注明变量的类型是什么。
var numA = 10
var strDesc = '你好！'
```

**ES6声明变量**

之前只能使用 var 关键字来声明，存在变量声明提升。

ES6新增了变量声明的方式：

- let：没有声明提升，块级作用域，不能被重复声明。
- const ：没有声明提升，块级作用域，不能被重复声明，用来声明常量（值不能被重新赋值）。
- 块级作用域：以花括号为界限的作用域。

```js
console.log(a) // undefined
var a = 10
console.log(a) // Cannot access 'a' before initialization
let a = 10
------------------------------------------------------------
var b = 20
var b = 66
console.log(b) // 66
let b = 20 
var b = 66 // 不能被重复声明
------------------------------------------------------------
let c = 30
c = 66
console.log(c) // 可以被重新赋值
const c = 30
c = 66
console.log(c) // Assignment to constant variable.
-------------------------------------------------------------
{
    // var d = 10
     let d = 10
     const d = 10
}
console.log(d) // d is not defined
--------------------------------------------------------------
for(let i=0; i<10; i++){
    // console.log(i)
}
console.log(i) // i is not defined

// 适合使用 const 来获取元素
var btn = document.querySelector('button')
let btn = document.querySelector('button')
const btn = document.querySelector('button')
btn = 30

// 第三方的库、插件、框架里面会使用，因为不希望使用者进行变量名称的重新赋值
// axios 专门用来发送请求的，导入文件的时候可以使用 const，可以避免这个名称被修改

function fn(){
    console.log('hello')
}
fn = 66 // 不能被重新赋值

// 声明函数 表达式方式
var fn = function(){
    console.log('hello')
}
const fn = function(){
    console.log('hello')
}
fn = 66

const aBtn = document.querySelectorAll('button')
for(let i=0; i<aBtn.length; i++){
    // console.log(i)
    aBtn[i].onclick = function(){
        alert(i)
    }
}
```



## 运算符

### 1、算数运算符

```js
+、-、*、/、%（取模、求余数）、++、--
```

- 自增就是+1，让自身加。
- 自减就是-1，让自身减。
- 前置++：先把自身+1，再参与运算。
- 后置++：先把自身拿来参与运算，再把自身+1。
- 无论是前置++还是后置++，或者是前置--，或者是后置--，它们的最终的运算结果都是一样的，区别只是运算过程的顺序。

### 2、"+" 号运算符

```js
1、做加法运算
2、字符串拼接
console.log('10' + 10)// 1010 如果数值和字符串类型相加，做的不是加法运算，而是拼接。会直接把两个结果连接在一起。
```

### 3、赋值运算符

```js
var a = 10
a += 5 // 展开：a = a + 5
var b = 10
b *= 2 // 展开：b = b * 2
```

### 4、比较运算符

```js
==  // 比较时会进行隐式数据类型转换，如两边的类型不同，会转成相同的再去比较。
===  // 全等于比较，比较的时候要看类型，也要看值。
>、<、>=、<=
```

### ES6 ... 扩展运算符

展开数组、合并数组、赋值对象里面的属性。

```js
// 合并数组
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];  // [1, 2, 3, 4, 5, 6]

function fn(...data){
    console.log(data)
}
fn(10, 20, 30)

// 展开数组
let arr = [10, 20, 30]
    function fn(a, b, c){
        console.log(a, b, c)
    }
fn(...arr)

// 复制数组
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];  // [1, 2, 3]

// 合并对象
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };  // { a: 1, b: 2, c: 3, d: 4 }

// 复制对象
const originalObj = { a: 1, b: 2 };
const copiedObj = { ...originalObj };  // { a: 1, b: 2 }

```



## 流程结构

流程结构分为三种，分别是选择结构、顺序结构、循环结构。

顺序结构：代码会按照自上而下执行的顺序，一步一步的来执行。

选择结构分为单分支结构、双分支结构、多分支结构。

### 1、if单分支选择结构

- if条件判断只判断true，不判断false。

```js
if(条件判断)
{
    条件为true，将执行该代码
}
```

### 2、if else双分支选择结构

```js
if(条件判断)
{
    条件为true，将执行该代码
}else
{
    条件为false，将执行该代码
}
```

### 3、if else if多分支选择结构

```js
if(条件1)
{
    代码1
}else if(条件2)
{
    代码2
}else if(条件3)
{
    代码3
}else
{
    如果以上条件都不成立，则执行该代码
}
```

### 4、switch多分支结构

```js
switch(条件判断)
 {
     case 值：1;
         代码1;
         break;
     case 值：2;
         代码2;
         break;
     case 值：3;
         代码3;
         break;
     default:
         如果以上条件都不满足，则执行该代码
 }
```

- switch、case、break、default都是系统关键字，都必须全小写。
- switch后的小括号()：小括号内一般是一个变量名，这个变量可能会有不同的值。
- 每个case的值，与变量的值进行对比，如果一致就执行该case后的代码。
- 所以的case都是"或"的关系，每时每刻只有一个case会满足条件。
- 每个case中的代码执行完毕后，必须用break语句结束，结束之后，程序将跳到switch结束大括号后运行。
- 如果不写break语句的话，下面的所以的case语句都会执行一遍。

### 5、三元运算符

? : 也叫三目运算符
条件表达式 ? 结果1 : 结果2
含义：如果条件为true，则执行"结果1"的代码；如果条件为false，则执行"结果2"的代码。
其实：三元运算符，就是if else的变形形式。

## 循环

### 1、while循环

```js
var = 1
while(条件判断)
{
	如果条件为true，则执行循环体代码
}
```

- 在循环开始前，必须对变量初始化（声明变量，给变量给个初始值）。
- 如果while的条件为true，则会重复不断的执行循环体中的（{}）的代码，如果条件为false，则退出循环。

- 在循环体中，必须有“变量更新”的语句。换句话说，两次循环的变量值不能一样，如果一样，会造成死循环。

### 2、do while循环

```js
do
{  
    //当我们满足循环时要执行的语句
    //步长（步进）
}while()//到哪里结束（循环条件）
```

- 第一次执行的时候无论条件成立与否都会先执行一次。
- while是先判断条件，后执行语句，do while是先执行语句，后判断条件。

### 3、for循环

```js
for(变量初始化i=1;条件判断i<=10;变量更新i++)
{
    document.write(i+" ")// 循环体业务代码代码
}
执行顺序：
a. var i=1；变量初始化，在循环开始前执行一次，以后永远不再执行了。
b. i<=10;条件判断。如果条件为true，则重复执行循环体代码；否则，退出循环。你需要循环多少遍，条件就需要多少次判断。
c. 执行循环体代码。循环体代码执行完毕后，程序立即跳到"变量更新"模块执行。
d. i++;变量更新。为了避免出现死循环。i++执行完毕后，程序跳到i<=10条件判断语句，开始第二次循环。
```

### 4、break语句

- break语句，用于无条件结束各种循环和switch。

- 说明：一般情况下，需要在break语句之前加一个条件判断。换句话说：就是条件成立了，就退出循环。

- break只能跳出单层循环，不能一次跳出多重循环。

### 5、continue语句

- 描述：结束本次循环，而开始下次循环。

- 说明：一般情况下，需要在continue语句之前加一个条件判断。

### 6、循环对比

- for循环和while循环语法规则略有不同，两种方法可以替换使用，但是在部分问题上各有优势。
- 当循环的次数确定时，使用for循环和while循环差别不大，但是当循环次数不确定时，while方法使用起来更加方便，更加好理解。
- for循环一般用于循环次数确定的情况下。
- while一般用于循环次数不确定的情况下。

## 数据类型

- 注意点：JS 里面除了数字以外其他的字符都需要引号，不加引号，会把字符当成一个变量来解析。

### 1、基本数据类型

```js
var num1 = 10 // number 数值（数字）类型。
var str1 = 'abc'// string字符串类型,使用单引号或者双引号。
var str2 = '66' // string字符串类型。
var b1 = true // boolean 布尔类型，值分别是 true、false。
var a = null // null空类型，可以用于清空一个变量的值或者起一个占位的作用。null类型返回的类型是object。
var a
console.log(a) // undefined
console.log(typeof a) // undefined 未定义类型，当一个变量声明了，没有赋值的时候就属于未定义类型。
typeof(变量名) 与 typeof 变量名 // 检测数据类型
symbol // 独一无二的类型
```

### 2、引用数据类型

```js
array // 数组类型
function // 函数类型
object // 对象类型
```

### 4、数据类型转换

#### 强制数据类型转换

##### （1）Number() 把其他的类型转成数值类型

- 把字符串转成数值类型结果是 NaN，类型是number。（当把其他的类型转成数值类型，无法呈现数字形态的时候，返回NaN）
- 把空字符串和字符串里面只有空格的字符串转成数值类型结果是0，类型是number。
- 把布尔类型的true和false转成数值类型，分别结果是1和0，类型是number。
- 把null转成数值类型结果是0，**undefined结果是NaN**，类型是number。
- Infinity 表示的是无穷大。

##### （2）String()与toString('进制')把其他的类型转成字符串类型。

```js
toString('进制') 把其他类型转成字符串类型
var num = 10
console.log(typeof num.toString())
console.log(num.toString(2)) // 1010
console.log(num.toString(8)) // 12
console.log(num.toString(16)) // a
toFixed(小数位数) // 可以取小数位，会进行四舍五入，会把数值转成字符串类型
```

##### （3）Boolean() 把其他的类型转成布尔类型。

- 0和NaN转成布尔值结果是false、其他的都是true。
- 把空字符串（无空格）转成布尔值结果是false，有空格是true。
- 把null和undefined转成布尔类型结果是false。

#### 隐式数据类型转换

当在使用运算符的时候，运算符会根据规则默认进行数据类型转换

- 加法：如果数字和字符串相加，那么就把数字转成字符串，拼接。
- 减乘除大于、小于：把字符串转成数字进行计算。
- 数字和布尔进行计算：把布尔转成数值类型来计算。

```js
console.log('10' + 10) // 1010
console.log(10 - '5') // 5
console.log(10 * '5') // 50
console.log(10 / '5') // 2
console.log(10 > '5') // true
console.log(10 < '5') // false
console.log(10 + true) // 11
console.log(10 > true) // true
console.log(10 < false) // false
console.log(1 == true) // true
console.log(0 == false) // true
```

### 5、逻辑运算符

**（1）&&  与。**

- 多个条件的时候，要求所有的条件都满足，才会返回true，如果其中有一个不满足那么就返回false。

```js
console.log(1 && 0)// 0
// 1表示的是true，0表示的是false，判断的时候会把数值当成布尔来计算，最终返回的时候由于数值本身不是布尔，所以直接返回数值的字符“0”了。
console.log(10 && 2 && 3)
// && 与运算符，要求是所有的条件都满足，才返回true。三个条件，只有最后一个满足了，才证明都满足。因此返回的就是最后一个 。
```

**（2）|| 或。**

- 多个条件的时候，其中有一个条件满足，就返回true，除非全部不满足才返回false。

**（3）!，非。**

- 取反，真的变成假的，假的变成真的。



### 6、常见ASCII码的大小规则：数字< 大写字母 < 小写字母。

- 数字比字母要小。如 “7”<“F”；
- 数字0比数字9要小，并按0到9顺序递增。如 “3”<“8” ；
- 字母A比字母Z要小，并按A到Z顺序递增。如“A”<“Z” ；
- 同个字母的大写字母比小写字母要小32。如“A”<“a” 。
- 几个常见字母的ASCII码大小： “A”为65；“a”为97；“0”为 48。

### 7、isNaN()

非数字判断，如果是非数字那么返回true，如果是数字返回false，会默认进行隐式数据类型转换。

```js
console.log(isNaN('a')) // true
console.log(isNaN('10')) // false
console.log(isNaN('10px')) // true
```

## 数组

数组的概念（标准定义）：数组是一个可以存储一组或一系列相关数据的容器。

数组的概念（理解定义）: 一组数的集合，称为”数组”。

数组的元素：是指存储在数组中并赋予唯一索引号的数据段。简单来说就是数组中的每个值，称为一个”数组元素”。

数组的作用：为了解决大量相关数据的存储和使用的问题。    

### 1、数组的创建

（1）使用new关键字和Array()来创建数组(也叫构造函数方法-----面向对象编程)

```js
var arr = new Array();//创建一个空数组
var arr = new Array(“张三”,”男”,24,”未婚”,”本科”,”北京大学”);//创建一个数组，并初始化数组的元素。
```

（2）使用[]方式创建一个数组（字面量）

```js
var arr = [“张三”,”男”,24,”未婚”,”本科”,”北京大学”];
```

- 注意点：数组元素的值，可是任何类型。如：字符型、数值型、布尔型、数组型、对象型、函数。
- 对象是js里面一个大的范畴，把很多种展示不同的数据类型统统称之为对象。
- array 是数组类型，但是也属于对象的范畴，也叫做数组对象。

### 2、**数组常用知识**

#### （1）数组的索引（index）

当创建一个数组的时候，把里面的每一个成员（元素），会默认给一个编号，用于区分不同的数组成员，把这个编号称之为下标。

数组的下标是从0开始的，数组的获取、删除、添加、修改都需要使用到下标。

#### （2）数组的属性

数组对象属性length：就是指数组中元素的总个数。

#### （3）数组元素的访问

````js
数组元素的访问 例如：
var arr=[10,20,30,40,50];
var arr=["张三","男",24,"本科","北京大学"];
访问的方法是：数组变量名，后跟一个中括号[],[]中括号内是数组元素的下标。如：arr[3];
````

#### （4）数组的操作

```js
（1）读取元素：读取已经存在下标的元素。如：var age = arr[2];
（2）修改元素：修改已经存在下标的元素的值（重新赋值）。如：arr[2] = 25;
（3）增加元素：添加一个不存在的下标的元素。arr[11] = '我是新的';
注意点：一定要写没有存在的下标，如果添加的时候下标和前面的重复了，那么会发生覆盖，就变成了修改
（4）删除元素：使用关键字delete，只能删除元素值，而下标还在。如：delete arr2[0];
```

#### （5）数组的遍历

什么是遍历？就是从数组中把数据一个一个的读取或写入。

```js
普通for循环
var arr6 = [1, 2, 3, 4, 5, 6];
// 顺序遍历，i表示的是数组的下标，因此要从0开始。
// i<arr.length 动态写法，数组里面如果新增了或者删除了数组元素，不会影响到遍历过程。
for(var i = 0; i<arr.length; i++)
{
     alert(arr6[i]);
 }

// 逆序输出
for(var i = arr.length-1; i>=0; i--)
{
     alert(arr[i]);
}

for…in 语句
用于遍历数组或者对象的属性（快速遍历） 作用：只能遍历数组和对象
语法：for(变量 in 集合) 集合：数组名和对象名
for(var i in arr)
{
    alert(arr[i]);
}
```

### 3、数组的常用方法

#### （1）shift()、pop()

shift()：删除数组中第一个元素，并将长度减1。

pop()：删除数组中最后一个元素，并将长度减1。

- shift()、pop() 的返回值都是被删除的数组元素，原数组改变。

```js
var arr = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(arr.pop())// f
console.log(arr) // ['a', 'b', 'c', 'd', 'e']
console.log(arr.shift()) // a
console.log(arr) // ['b', 'c', 'd', 'e']
```
#### （2）unshift()、push()

unshift()：往数组前面添加一个或多个数组元素。

push()：往数组结尾添加一个或多个数组元素。

- unshift()、push()返回值都是原数组增加元素后的长度，原数组改变。

```js
var arr = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(arr.unshift('哈哈'))// 返回值： 7
console.log(arr) // 原数组改变：['哈哈',a', 'b', 'c', 'd', 'e', 'f']
console.log(arr.push('呵呵'))// 返回值： 7
console.log(arr)// 原数组改变：['a', 'b', 'c', 'd', 'e', 'f','呵呵']
```

#### （3） concat()

concat() : 方法用于连接两个或多个数组。

- concat() 返回值是连接后的一个新数组，原数组不变。

```js
var nameArr = ['王江', '王旭', '邓为']
var sexArr = ['男', '男', '男']
var ageArr = [19, 20, 30, 60, 80, 34]
var newArr = ageArr.concat(nameArr, sexArr,ageArr)
console.log(newArr)// 返回值：['王江', '王旭', '邓为','男', '男', '男',19, 20, 30, 60, 80, 34]
```

#### （4）reverse()

reverse()：原数元素逆向排序

- reverse()返回值是倒序后的新数组，原数组也改变为倒序排列。

```js
var nameArr = ['王江', '王旭', '邓为']
console.log(nameArr.reverse())// 返回值：['邓为', '王旭', '王江']
console.log(nameArr)// 原数组改变：['邓为', '王旭', '王江']
```

#### （5）toString()、join()

toString() ：将数组转成字符串。

join(“拼接符”)：将数组转成字符串，中间以拼接符连接。

- toString()和join(“拼接符”)返回值是转为字符串的原数组元素，原数组不变。

```js
var nameArr = ['王江', '王旭', '邓为']
var res = nameArr.toString()
console.log(res) // 返回值：王江,王旭,邓为
console.log(nameArr) // 原数组不变：['王江', '王旭', '邓为']

var nameArr = ['王江', '王旭', '邓为']
console.log(nameArr.join('+')) // 返回值：王江+王旭+邓为
console.log(nameArr) // 原数组不变：['王江', '王旭', '邓为']
```

#### （6） slice()

slice(参数1,参数2) 截取方法，将原数组中的指定区域数据提取出来，组成一个新的数组。

参数1表示开始位置（下标）,参数2表示结束位置（下标 --- 不包含结束位置）。

- slice(参数1,参数2)返回值是截取的元素组成的新数组，原数组不变。
- 参数2如果为负值，那么会从倒数开始截取。

```js
var nameArr = ['王江', '王旭', '邓为', '马彬', '杨磊', '汤健']
var res = nameArr.slice(0, 2)
console.log(res) // 返回值：['王江', '王旭']
console.log(nameArr) // 原数组不变：['王江', '王旭', '邓为', '马彬', '杨磊', '汤健']
var res = nameArr.slice(1, -2)// 
console.log(res) // 返回值：['王旭', '邓为', '马彬']
```

#### （7）splice()

splice(参数1,参数2) 组合方法

删除：参数1表示开始的位置 参数2表示删除的项数。

- splice()返回值是被删除的数组元素组成的新数组，原数组改变为剩下的元素组成的数组。

```js
var nameArr = ['王江', '王旭', '邓为', '马彬', '杨磊', '汤健']
var res = nameArr.splice(0, 2)
console.log(res) // 返回值：['王江', '王旭']
console,log(nameArr) // 原数组改变：['邓为', '马彬', '杨磊', '汤健']
```

替换（修改）：参数1表示开始的位置，参数2表示删除的项数，参数3表示要替换的数组元素。 

- splice()返回值是被删除的数组元素组成的新数组，原数组改变为以前的元素加入替换后的元素组成的新数组。

```js
var nameArr = ['王江', '王旭', '邓为', '马彬', '杨磊', '汤健']
var res = nameArr.splice(1, 2, 'a', 'b')
console.log(res) // 返回值：[王旭', '邓为']
console,log(nameArr) // 原数组改变：['王江', 'a', 'b', '马彬', '杨磊', '汤健']
```

增加（插入）：向数组指定位置插入任意项元素，参数1表示开始的位置，参数2（0），参数3表示要新增插入的数组元素。

- splice()返回值是被删除的数组元素组成的新数组（因为删除项为0，所以返回值是空数组），原数组改变为以前的元素加上新增的元素组成的新数组。
- 第二个参数（0）为0不会删除任何项，相当于就是新增插入

```js
var nameArr = ['王江', '王旭', '邓为', '马彬', '杨磊', '汤健']
var res = nameArr.splice(1, 0, 'a', 'b')
console.log(res) // 返回值：[]
console,log(nameArr) // 原数组改变：['王江', 'a', 'b', '王旭', '邓为', '马彬', '杨磊', '汤健']
```

#### from()

把伪数组可以转成真正的数组.

```js
var str = '王江喜欢喝茶！'
Array.from(str) // ['王', '江', '喜', '欢', '喝', '茶', '！']
```



### 4、数组方法

#### （1）indexOf()、lastIndexOf()

查找一个元素在数组中的位置，默认是从前面往后面查找。

```js
// indexOf(data,start) 接收两个参数：要查找的项 和 （可选的）表示查找起点位置的索引 
// lastIndexOf() 默认从后面往前面查找
// 注意点：如果查找的元素不存在或者之前存在但是现在已经在数组中删除了，那么返回的结果就是-1
var arr = ['王江', '邓为', '王旭', '邓月', '杨磊', '王旭']
var index = arr.indexOf('王旭', 3)
console.log(index)// 5
var index = arr.indexOf('王旭', 1)
console.log(index)// 2
```

#### （2）forEach()

对数组进行遍历循环，对数组中的每一项运行给定函数。这个方法没有返回值。

```js
forEach()
+ 遍历数组使用的
+ 参数
  => 函数 function
+ 作为参数函数的参数
  => 参数1 表示的是当前数组的元素
  => 参数2 表示的是当前数组的下标
  => 参数3 表示的是当前的数组（一般是不用的）
+ 注意点
  => 没有返回值
--------------------------------------
var arr = ['王江', '邓为', '王旭', '邓月', '杨磊']
arr.forEach(function(item, index, ar){
    console.log(item, index)
    console.log(ar)// 参数3 ar 表示的是当前的数组（一般是不用的）
})
```

#### （3）map(callback)

```js
map() 映射
+ 会遍历当前数组，然后调用参数中的方法，返回当前方法的返回值。
+ 可以修改和获取数组里面的满足条件的选项，返回一个新的被改变过值之后的数组。
+ map需return，一般用来处理需要修改某一个数组的值。
+ 参数是函数
  
+ 作为参数函数的参数
  => 参数1 表示的是当前数组的元素。
  => 参数2 表示的是当前数组的下标。
  => 参数3 表示的是当前的数组（一般是不用的）。
+ 返回值
  => 筛选满足条件的数组元素的一个新数组。
----------------------------------------
// 循环遍历改变元素的值：每个元素增加60
var arr = [10, 20, 30]
var result = arr.map(function(item){
    return item += 60
})
console.log(result) // [70, 80, 90]
----------------------------------------
var info = [
        {
            id: 1,
            name: '王江',
            tel: 13287693368,
            email: 'wj@qq.com',
            like: '黑丝',
            score: 62
        },
        {
            id: 2,
            name: '王旭',
            tel: 18287693361,
            email: 'wx@qq.com',
            like: '少妇',
            score: 72
        },
        {
            id: 3,
            name: '邓为',
            tel: 192287693362,
            email: 'dw@qq.com',
            like: '喝酒',
            score: 86
        }
    ]

var telArr = info.map(function(item){
// 遍历并返回所有对象tel属性的值
return item.tel // [13287693368, 18287693361, 192287693362]
    
// 遍历并返回所有对象name属性和tel属性的名称与其对应的属性值
return {name: item.name, tel: item.tel}
// [{name: '王江', tel: 13287693368},{name: '王旭', tel: 18287693361},{name: '邓为', tel: 192287693362}]
    
    // 遍历并查找属性name的属性值===‘王江’的元素，并使其score属性的值增加10
    if(item.name === '王江'){
        item.score += 10
    }
    // 遍历并返回所有对象的name属性和score名称与其对应的值，并将score的属性值增加10
    return {name: item.name, score: item.score += 10}
    
})
console.log(telArr)
// [{name: '王江', score: 82},{name: '王旭', score: 82},{name: '邓为', score: 96}]
```

#### （4）filter()

遍历和过滤。返回符合条件的元素的数组。filter需要在循环的时候判断一下是true还是false，是true才会返回这个元素。 

```js
filter() 
+ 遍历和过滤。返回符合条件的元素的数组。filter需要在循环的时候判断一下是true还是false，是true才会返回这个元素
+ 参数是函数
+ 作为参数的函数的参数
  => 参数1 表示的是当前数组的元素
  => 参数2 表示的是当前数组的下标
  => 参数3 表示的是当前的数组（一般是不用的）
+ 返回值
  => 就是你筛选满足条件的数组元素的一个新数组。
+ 注意点
  => 每次返回的结果都是数组当前元素里面所有的值，而不像map那样可以进行指定。
------------------------------------------------
var info = [
        {
            id: 1,
            name: '王江',
            tel: 13287693368,
            email: 'wj@qq.com',
            like: '黑丝',
            score: 62
        },
        {
            id: 2,
            name: '王旭',
            tel: 18287693361,
            email: 'wx@qq.com',
            like: '少妇',
            score: 72
        },
        {
            id: 3,
            name: '邓为',
            tel: 192287693362,
            email: 'dw@qq.com',
            like: '喝酒',
            score: 86
        }
    ]
var result = info.filter(function(item){
return item.score >= 72
})
console.log(result)// 返回邓为和王旭两个对象做组成的数组[{...},{...}]
```

#### （5） find() 

```js
 find() 查找
+ 根据条件查找满足的数组元素，功能和filter类似，filter返回的结果的一个数组，而find返回的结果直接是当前数组元素。
+ 参数是函数
+ 作为参数的函数的参数
  => 参数1表示当前数组元素
  => 参数2表示当前数组元素下标
  => 参数3表示当前数组

 const goods = product_list.find(item=>{
            return item.id === 2
        })
        const goods = product_list.find(item=>item.id === 2)
        console.log(goods)
+ 注意点
  => filter会把满足条件的所有数组元素筛选出来放在一个新数组里面。
  => find只会把第一个满足条件的数组元素直接返回。
```

#### （6）findIndex()

```js
findIndex() 查找数组元素在当前数组中的位置
+ 和 indexOf() 功能类似，indexOf只能处理简单数据的，而findIndex可以处理复杂数据
+ 参数是函数
+ 作为参数的函数的参数
  => 参数1表示当前数组元素
  => 参数2表示当前数组元素下标
  => 参数3表示当前数组
----------------------------------------------
var info = [
    {
        id: 1,
        name: '陈辰',
        tel: 13266082325,
        score: 70
    },
    {
        id: 2,
        name: '王江',
        tel: 13366082326,
        score: 80
    },
    {
        id: 3,
        name: '邓为',
        tel: 13166082328,
        score: 86
    }
]
var result = info.filter(function(item){
    return item.score >= 80
})
var result2 = info.find(function(item){
    return item.score >= 80
})
console.log(result)
console.log(result2)

var arr = ['a', 'b', 'c']
var index = arr.indexOf('a')
console.log(index)
console.log(arr[index])

var index = info.findIndex(function(item){
    return item.id === 2
})
console.log(index)
console.log(info[index])
```

#### （7）includes（）

```js
+ 是数组方法，也是字符串方法
+ 根据字符串里面的某个字符查找出当前这个数据（查找这个字符是否在这个字符串里面存在）
+ 也可以查找数组元素是否在数组里面存在
--------------------------------------------
var str = 'hello'
console.log(str.includes('e'))
var arr = ['a', 'b', 'c']
console.log(arr.includes('b'))

var shoppingList = [
    {
        id: 1,
        title: '小米电视',
        price: 2999,
    },
    {
        id: 2,
        title: '华为mate70',
        price: 9999,
    },
    {
        id: 3,
        title: '小米15',
        price: 4999,
    }
]

var txt = document.querySelector('input')
var btn = document.querySelector('button')

btn.onclick = function(){
    var result = shoppingList.filter(function(item){
        return item.title.includes(txt.value)
    })
    console.log(result)
}
```

#### （8）startsWith()、endsWith()

```js
startsWith()
// 根据字符串某个开头字符查找字符是否存在
 console.log(str.startsWith('qf'))
endsWith()
// 根据字符串某个结尾字符查找字符是否存在
var str = '王江vip'
console.log(str.endsWith('vip'))

var res = str.endsWith('vip')
if(res){
    document.write('这是vip内容，请查看更多精彩！')
}else{
    document.write('普通用户内容，请开头vip，查看更多精彩！')
}
```

#### some()

检查数组里面是否有满足条件的，只要有一个满足的就返回true

```js
 const myId = 7
        const res = product_list.some(item=> item.id === myId)
        console.log(res)

const age = [10, 20, 30, 60, 80]
        const res = age.some(item=> item>=30)
        console.log(res)
```

#### every()

检查数组里面是否有满足条件的，需要所有的都满足才返回true

```js
      const res = age.every(item=> item<=80)
        console.log(res)
```



### 5、数组的排序

#### （1）sort()

sort() 方法用于对数组的元素进行排序。排序顺序可以是字母或数字，并按升序或降序。默认排序顺序为按字母升序。

- 返回一个排序后的新数组，原数组也改变为排序后的。

```js
var arr = ['d', 'b', 'a']
console.log(arr.sort()) // 返回值：['a', 'b', 'd']
console.log(arr) // 原数组： ['a', 'b', 'd']

var arr = [6, 5, 4, 2, 3, 1]
console.log(arr.sort()) // 返回值： [1, 2, 3, 4, 5, 6]
console.log(arr) // 原数组：[1, 2, 3, 4, 5, 6]
```

- 如果超过两位数是按照数字的位数排列的，不会根据大小排列。当数字是按字母顺序排列时"40"将排在"5"前面。

```js
var arr = [6, 5, 40, 12, 2, 13, 3, 1]
console.log(arr.sort()) // 返回值：[1, 12, 13, 2, 3, 40, 5, 6]
console.log(arr) // 原数组：[1, 12, 13, 2, 3, 40, 5, 6]
```

- 使用数字排序，你必须通过一个函数作为参数来调用。函数指定数字是按照升序还是降序排列。

数字升序排列

```js
var arr = [6, 5, 40, 12, 2, 13, 3, 1]
// a 表示的是前一位数（动态变化的）
// b 表示的是后一位数（动态变化的）
arr.sort(function(a, b){
    // 升序规则：a - b  如果它的值为正数，就交换它们的位置
    return a - b
})
console.log(arr.sort()) // 返回值：[1, 2, 3, 5, 6, 12, 13, 40]
console.log(arr) // 原数组：[1, 2, 3, 5, 6, 12, 13, 40]
```

数字降序排列

```js
var arr = [6, 5, 40, 12, 2, 13, 3, 1]
// a 表示的是前一位数（动态变化的）
// b 表示的是后一位数（动态变化的）
arr.sort(function(a, b){
    // 降序规则：b - a  如果值为正数，交换它们的位置
    return b - a
})
console.log(arr.sort()) // 返回值：[40, 13, 12, 6, 5, 3, 2, 1]
console.log(arr) // 原数组：[40, 13, 12, 6, 5, 3, 2, 1]
```

#### （2）冒泡排序

从头到尾依次比较相邻两个数字大小，若大数在前、小数在后，则交换两数位置，依次比较，使全部数据按从小到大排列。

```js
// 冒泡排序，默认升序，isDescend == ture 降序
function bubbleSort(arr, isDescend) {
    // 外层循环控制的是轮数，i<arr.length-1 ：比较的次数为数组长度-1
    for (var i = 0; i < arr.length - 1; i++) {
        // 内层循环控制的是次数
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
```

#### （3）选择排序

将第一位依次与后面的元素相比较，得到最小值，与第一位交换。再用第二位依次与后面元素相比较，得到最小值，与第二位交换。

```js
// 选择排序，默认升序，isDescend == ture 降序
function selectionSort(arr,isDescend){
    for(var i=0;i<arr.length-1;i++){
        for(var j =i+1;j<arr.length;j++){
            if(isDescend){
                if(arr[i]<arr[j]){
                    var temp
                    temp=arr[i]
                    arr[i]=arr[j]
                    arr[j]=temp
                }
            }else{
                if(arr[i]>arr[j]){
                    var temp
                    temp=arr[i]
                    arr[i]=arr[j]
                    arr[j]=temp
                }
            }
        }
    }
    return arr;
}
```

### 6、数组去重

#### （1）选择排序去重

```js
// 选择排序数组去重
function  uniqueArr(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j,1)
                j--
            }
        }
    }
    return arr
} 
```

#### （2）filter()方法去重

```js
var arr = ['a', 'a', 'a', 'a', 'b', 'b', 'c', 'd', 'f', 'f', 'f', 'b']
// 注意点：indexOf() 默认返回的数组元素的下标是第一次出现在数组里面的位置
// console.log(arr.indexOf('a'))// 0

var result = arr.filter(function(item, index){
    /*
                        0  === 0 满足条件
                        0  === 1 不满足条件
                        0  === 2 不满足条件
                        0  === 3 不满足条件
                        4  === 4 满足条件
                        4  === 5 不满足条件
                        ...
    */
    return arr.indexOf(item) === index
})
console.log(result)
```



## 字符串

字符串就是一串字符，由双（单）引号括起来。字符串是 JavaScript 的一种基本的数据类型。字符串不能进行算术运算，只能进行“连接”运算。JS中的任何数据类型都可以当作对象来看。所以string既是基本数据类型，又是对象。

**string 字符串**

规则明确指出字符串属于基本数据类型，但是字符串又是一种特殊的 ”对象“ 类型。

规定基本数据类型是无法使用属性和方法，只有引用数据类型只能使用属性和方法。

**包装类**

把基本数据类型包装成引用数据类型，使用属性和方法，使用完毕后再转成基本数据类型。这种情况称之为包装类，包装类的操作是js自动转换的。

包装类三种：Number()、String()、Boolean()。

### 1、字符串的创建

```js
// 基本数据类型创建，直接使用字符串字面量去创建。
   var str1 = “亲, 包邮哦!”;
// 引用（对象）数据类型的创建方式（构造函数），通过new创建字符串对象, 通过new创建的都为object类型。
   var str2 = new String(“hello world!”);
// 包装类创建方式（包装成字符串类型），省略new，这种方式创建的不是object类型，而是string类型。
   var str3 = String(“hello world”); 
// 字符串遍历
  for(var i=0; i<str.length; i++){
      console.log(str1[i])
  }
```

### 2、字符串的属性和方法

#### （1）length

获取字符串的长度。

#### （2）toLowerCase()

将字符串中的字母转成全小写。

#### （3）toUpperCase()

将字符串中的字母转成全大写。

#### （4）charAt()

返回指定下标位置的一个字符。如果没有找到，则返回空字符串，参数是下标。

``charAt()`` 和`` [] ``作用是一样的，``[] ``这种方式比较简单，但是低版本的浏览器是不支持的，``charAt()``方法兼容性比较好，目前低版本的浏览器已经没有了，所以还是常用``[]``。

#### （5）trim()

移除字符串首尾空白。

trimLeft()、trimRight()、trimStart()、trimEnd()

#### （6）charCodeAt() 

返回指定位置的字符的 Unicode 编码。

#### （7）concat()

连接两个或多个字符串，返回连接后的字符串。

#### （8）indexOf()、lastIndexOf()

返回一个字符串在原始字符串中的索引值(查找顺序从左往右查找)。如果没有找到，则返回-1。

```js
var str = '你好啊！'
console.log(str.indexOf('好'))// 1

// 判断用户输入的邮箱地址是否有@符号
var email = prompt('请输入邮箱地址？')
        if(email.indexOf('@')!=-1){
            alert('正确')
        }else{
            alert('错误')
        }
```

#### （9）substring()

提取字符串的片断，并在新的字符串中返回被提取的部分。

参数1:开始位置（下标），参数2:结束位置（下标），不包括结束位置，参数2不能给负值，否则会返回空。

```js
var str = '你好啊！'
console.log(str.substring(0, 2)) // 你好
```

#### （10）slice()

提取字符串的片断，并在新的字符串中返回被提取的部分。

参数1:开始位置（下标），参数2:结束位置（下标），不包括结束位置，参数2给负值时，结束位置从后往前数。

```js
var str = '你好啊！'
console.log(str.slice(0, 2)) // 你好
console.log(str.slice(0, -1)) // 你好啊
```

#### （11）substr()

提取字符串的片断，并在新的字符串中返回被提取的部分。

参数1:开始位置（下标），参数2：截取的项数。

```js
var str = '你好啊！'
console.log(str.substr(0, 2)) // 你好
```

#### （12）split()

可以根据字符串里面的某个字符把字符串切割成数组返回。参数可以给空字符串， 会把字符串切割成几份。

```js
var str = 'a&b&c'
var arr = str.split('&')
console.log(arr) // ['a', 'b', 'c']
var arr2 = str.split('')
console.log(arr2) // ['a', '&', 'b', '&', 'c']
```

##### split()例子1：将查询字符串转成对象

- ``https://www.jd.com/?username=zhangsan&password=123 ``
- ？前面的属于一个域名，？后面属于参数（查询参数）， 把整个字符串称之为查询字符串。
- 问题：查询字符串如果想要这段字符串里面的查询参数那么应该操作呢？如果直接去截取太麻烦。
- 解决方案：在工作中一般使用split()方法把字符串进行切割，最终转成一个对象的形式来用。

```js
  //把查询字符串转成一个对象
  var queryStr = 'https://www.jd.com/?username=zhangsan&password=123'
  
  // 第一步：先把字符串切割成数组，根据 ？进行切割，通过数组下标【1】取到需要的代码片段元素。
  var str = queryStr.split('?')[1] // username=zhangsan&password=123

  // 第二步：先把字符串切割成数组，根据 & 进行切割。
  var arr = str.split('&') // ['username=zhangsan', 'password=123']

  // 第三步：声明一个空对象，方便添加数据
  var obj = {}

  // 第四步：遍历数组
  arr.forEach(function(item){
      // 第五步：根据 = 进行切割
      var newArr = item.split('=')
      // 第六步：把数组里面的第0项当成对象的键，第一项当成对象的值来添加给对象
      obj[newArr[0]] = newArr[1]
  })
  console.log(obj) // {username: 'zhangsan', password: '123'}
  console.log(obj.username) // zhangsan
  console.log(obj.password) // 123
```

##### split()例子2：将对象转成查询字符串

```js
  // 查询字符串的格式：username=zhangsan&password=123
  var obj = {
      username: 'zhangsan',
      password: '123'
  }
  // 声明一个空字符串用来后续储存
  var str = '?'
  // 遍历对象
  for(var key in obj){
      str += key +'='+obj[key] + '&'
  }   
  // 使用slice()方法来截取
  str = str.slice(0, -1)
  console.log(str)//?username=zhangsan&password=123
```

#### （13）replace()

替换与正则表达式匹配的子串

```js
var str ='今天真倒霉，草他妈的，草'
console.log(str.replace('草','*')) // 今天真倒霉，*他妈的，草
--------------------------------------------------------
// 正则表达式：可以让咱们自己制定字符的规则
// 修饰符：g 表示全局匹配（整个字符串里面查找）
// | 表示或，注意是一个杠   [草妈]里面也是表示或
console.log(str.replace(/草/g,'*')) // 今天真倒霉，*他妈的,*
console.log(str.replace(/草|妈/g,'*')) // 今天真倒霉，*他*的,*
```



```js
// 统计字符串的个数，并以对象的形式展现。 
var str = 'aaabbbddofsakhfsa'
var obj = {
    a: 5,
    b: 3
}
------------------------------------
var str = 'aaabbbddofsakhfsa'
  var obj = {}
  for (var i = 0; i < str.length; i++) {
      var char = str[i]
      if (obj[char]) {
          obj[char] = obj[char] + 1
      } else {
          obj[char] = 1
      }
  }
  console.log(obj)
```

### 模版字符串

```
 /*
            `` 模版字符串
            + 简化了字符串繁琐的拼接
            + 可以让字符串进行换行操作
            + 如果需要解析变量 直接使用 ${变量名称}
        */
        // var str = `你好
        
        // 啊`
        // console.log(str)

        var shoppingList = [
            {
                id: 1,
                title: '小米电视',
                price: 2999,
            },
            {
                id: 2,
                title: '华为mate70',
                price: 9999,
            },
            {
                id: 3,
                title: '小米15',
                price: 4999,
            }
        ]
        var ul = document.querySelector('ul')
        shoppingList.forEach(function(item){
            ul.innerHTML += `
                <li>
                    <h3>${item.title}</h3>
                    <p>${item.price}</p>
                </li>
            `
        })
```



## 对象object

对象object是一个引用数据类型，对象展示形态是多种多样的，不局限于某种固定的格式。

对象组成：属性、方法。

属性：为属性名和属性值。

方法：方法名和值。

对象里面的属性和值都是一一对应的，并且语义更为明确，代码结构更为清晰，key: value 键值对。                                         

### 创建对象

```js
//使用new关键字结合构造函数Object()来创建一个空的对象
var obj=new Object();
// 外部添加属性。注意点：构造函数方式是不能直接在对象的内部添加属性和方法的
obj.name=”小明”;
obj.sex=”男”;
obj.age=24;
obj.isMarried=true;
obj.edu=”大专”;
obj.school;
//添加方法
obj.showInfo=function(){
     console.log('你好啊！')
}
```

```js
// 使用大括号{}字面量方式来创建一个对象，内部添加属性方式。
var obj={
    name : “张三”,
    sex  : “男”,
    age  : 24,
    isMarried : true,
    edu  : “大专”,
    school : undefined
    showInfo : function(){
         console.log('你好啊！')
    }
	// 注意点：在内部添加方法的时候可以对函数进行简化处理
	showInfo(){
         console.log('你好啊！')
    }
}
// 字面量方式，也可以使用外部添加属性和方法。
var obj2 = {}
obj2.name = '王江'
obj2.age = 20
obj2.say = function(){
    console.log('哈哈')
}
console.log(obj2)
```

### 访问属性和方法

```js
var obj = {}
//使用点的形式添加属性和方法
obj.name = '张三'
obj.age = 18
obj.say = function(){
    console.log('hello')
}
----------------------------------------              
var obj = {}
// 使用中括号的形式添加属性和方法
obj['name'] = '张三'
obj['age'] = 20
obj['say'] = function(){
    console.log('hello')
}
----------------------------------------
console.log(obj)
console.log(obj.name)
console.log(obj['name'])
obj.say()
obj['say']()
----------------------------------------
// 区别在于中括号形式可以解析变量，而点的形式是无法解析变量的
// 注意点：中括号里面如果加了引号，会把里面的东西当成字符串解析而不是变量
var a = 'myName'
obj[a] = '张三'
obj.a = '张三'
```

### 遍历对象

```js
// for in 
var obj = {
	name: '张三',
	age: 19,
	sex: '男'
}
// key 表示键
for(var key in obj){
// 注意点：obj.key 表示的是查找 obj 这个对象里面是否有 key 这个属性，没有就把 key 当成变量来解析。无论你把什么数据类型添加给对象当键，最终都会转成字符串类型，是默认调用的是toString()。
    
console.log(obj.key)
console.log(obj[key])
}
```

### this 对象

```js
this对象
+ 指的是函数执行上下文对象（函数执行上下文指的是函数的执行环境 --- 函数是通过什么方式调用的） 
+ 函数调用方式
  => 函数名加括号调用
  => 通过事件调用
  => 对象打点调用 例如：obj.say()
  => ...
+ this这个对象是一个变化的对象，不是某一个固定的对象，会根据函数的调用方式不同，而指向的对象不同。  
+ this是函数的隐含的参数对象，this是属于函数内部的，你可以使用它，也可以不用它
+ this在不同的函数执行上下文环境中表示的意思不一样（this根据函数调用方式不同，它的指向不同或者理解为它指向不同的对象）
+ this是一个动态的对象

	// 1、函数调用圆括号时，函数的this是window对象。在严格模式下，是无法指向window，返回的是undefined
    function fn(){
        console.log(this)
    }
    fn()

    // 2、函数作为一个对象的方法，对象打点调用，函数的this就是这个对象
    let obj = {
        name: '王江',
        say(){
            console.log(this)
        }
    }
    obj.say()

    // 3、函数是事件处理函数时，函数的this就是触发这个this的对象（事件调用者）
    document.querySelector('button').onclick = function(){
        console.log(this)
    }

    // 4、定时器调用函数时，this是window对象
    setInterval(function(){
        console.log(this)
    }, 1000)

    setTimeout(function(){
        console.log(this)
    })

    // 5、数组中存放的函数，被数组索引之后加圆括号调用，this就是这个数组
    function fn(){
        console.log(this)
    }
    let arr = ['a', 'b', fn]
    arr[arr.length-1]()

    // 6、箭头函数没有自己的this，里面如果写了this那么this指向的是上一级代码

    // 7、在全局执行上下文里面查看this，this指向的是window
    console.log(this)
```

### 排他思想

```html
<body>
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>
    <button>按钮4</button>
    <button>按钮5</button>
    <script>
        // 需求：当点击那个按钮的时候，让那个按钮改变背景颜色

        // document.querySelectorAll() 一次获取多个元素
        var aBtn = document.querySelectorAll('button')
        // 遍历伪数组
        for(var i=0; i<aBtn.length; i++){
            aBtn[i].onclick = function(){
         /*
        问题
        + 在事件处理函数里面无法使用 i 下标来获取元素
        问题原因
        + 当循环里面存在事件处理函数，代码执行顺序是先把循环执行完毕，再去执行事件处理函数
        + 事件处理函数什么时候执行是不确定的，如果循环不先执行完毕，那么会导致代码的阻塞
        解决方案
        + 使用 this 
        排他思想
        + 再给自己设置样式的时候，先清空下所有标记的样式
        + 干掉所有人，只留下自己
        */
                
                // 排他思想在给当前的按钮设置背景颜色的时候，先把所有的按钮背景颜色清空一次，在给自己设置
                for(var j=0; j<aBtn.length; j++){
                    aBtn[j].style.backgroundColor = ''
                }
                // 当事件调用函数的时候，里面的this指向的是当前的事件调用者（aBtn）
                this.style.backgroundColor = 'orange'
            }
        }
    </script>
</body>
```

###  window对象

```js
+ window对象是js里面最大的对象，使用的时候可以省略不写。
+ 咱们定义的变量和函数默认都会添加到window这个对象里面。
// 但是自定义对象，你想要访问对象的属性或者调用函数那么对象的名称必须加.
console.log(window.a)
window.wjFn()
console.log(a)
wjFn()

var obj = {
    a: 10
}
console.log(obj.a)


// name 属于 window 对象的一个默认的名称，在 window 里面是一个空字符串
var name = '王江'
console.log(window)

var myName = '王旭'
console.log(myName)

// 注意点：变量命名的时候不要使用 top 单词，因为默认也表示 window 
console.log(top)

// 注意点：后面看到变量前面加 _ 表示用于进行名称区分
var _name = '哈哈'
console.log(_name)
var _top = '嘿嘿'
console.log(_top)

// 通过函数名称加括号调用函数，函数里面的 this 指向的是全局对象 window（在严格模式下无法指向 window，是 undefined）
console.log(this)
        
// 注意点：在ES5的严格模式下，函数名称加括号调用函数里面的this是无法指向window，是undefined
'use strict'
function fn(){
    console.log(this) // undefined
}
fn()
--------------------------------------------------------------
var obj = {
    name: '张三',
    say(){
        document.write('<h3>'+this.name+'上课不能打瞌睡！</h3>')
    }
}
obj.say()
```

### arguments对象

JavaScript 函数有个内置的对象 arguments 对象。Arguments是个类似数组但不是数组的对象，是一个伪（类似）数组，说他类似数组是因为其具备数组相同的访问性质及方式，能够由arguments[n]来访问对应的单个参数的值，并拥有数组长度属性length。arguments对象存储的是实际传递给函数的参数。

- arguments作用：保存所有传递给函数的实参，用于形参过多的时候，或者实参个数不确定的情况下。

```js
function getSum(){
        // arguments是用来保存实参的数据
        console.log(arguments)
        console.log(arguments[0])
        console.log(arguments.length)
}   
getSum(10, 20, 30)
------------------------------------------------
// 用于形参过多的时候，或者实参个数不确定的情况下
function getSum(a, b, c, d, e, f){
}
getSum(10, 20, 30, 66, 88, 99)
--------------------------------------------------
function getSum(){
    var sum = 0
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
var result = getSum(10, 20, 30, 66, 88, 99, 88)
console.log(result)
```

### 内置对象Math

Math数学对象是一个静态对象，在使用Math对象时，不需要创建实例。

```js
Math.PI // 圆周率
Math.abs() // 绝对值。如：Math.abs(-9)=9
Math.ceil() // 向上取整(整数加1，小数去掉,不管小数大小，都要给整数加1) 如：Math.ceil(10.2)=11
Math.floor() // 向下取整(不管小数大小，直接去掉小数部分)。如：Math.floor(9.888)=9
Math.round() // 四舍五入。如：Math.round(4.5)=5; Math.round(4.1)=4
Math.pow() // 求x的y次方。如：Math.pow(2,3)=8
Math.sqrt() // 求平方根。如：Math.sqrt(121)=11
Math.max() // 求最大值。如：Math.max(10, 2, 66) = 66
Math.min() // 求最小值。如：Math.min(10, 2, 66) = 2
---------------------------------------------------------------------------------
toFixed() //  将数字格式化为固定小数位数的字符串。它会将数字四舍五入到指定的小数位数。
let num = 123.456;
let num2 = 0.145;
console.log(num.toFixed(2)); // 输出 "123.46"，指定2位小数。
console.log(num.toFixed()); // 输出 "123" ，不指定小数位数（默认 0 位小数）。
console.log(num.toFixed(2)); // 输出 "0.15"（四舍五入）。
```

```js
// 求数组中的最小值
// 参数1 表示的改对象的this指向的是谁，数组指向的就是数组，不需要修改this指向，因此直接使用null进行占位即可
console.log(Math.min.apply(null, [10, 6, 8]))
// 求出数组中的最大值
console.log(Math.max.apply(null, [10, 6, 8]))
```

```js
Math.random() // 返回一个0到1之间的随机小数，能取0，取不到1.
-----------------------------------------------------------------------------
Math.ceil(Math.random()*10);     // 获取从 1 到 10 的随机整数，取 0 的概率极小。
Math.round(Math.random());       // 可均衡获取 0 到 1 的随机整数。
Math.floor(Math.random()*(10+1);    // 可均衡获取 0 到 10 的随机整数。
Math.round(Math.random()*10);    // 基本均衡获取 0 到 10 的随机整数，其中获取最小值 0 和最大值 10 的几率少一半。
//因为结果在 0~0.4 为 0，0.5 到 1.4 为 1，8.5 到 9.4 为 9，9.5 到 9.9 为 10。所以头尾的分布区间只有其他数字的一半。
// 随机数取范围的公式：
Math.floor(Math.mrandom() * (max - min + 1)) + min
```

随机生成指定范围的整数

```js
/**
*@param lower 范围下限米
*@param upper 范围上限
*/
function random(lower,upper){
	return parseInt(Math.random()*(upper-lower))+ lower
}
```

实例：求直角三角形斜边长 

```js
function getLong(a, b){
    var c = Math.pow(a, 2) + Math.pow(b, 2)
    c = Math.sqrt(c)
    return c
}
```

实例：网页随机背景

```html
<body>
    <script>
        // 第一种随机颜色写法
         var colorArr = ['orange', 'yellow', 'black', 'blue', 'purple', 'green', 'pink', 'skyblue', 'hotpink']
        // 页面初始化
        document.body.bgColor = colorArr[0]
        setInterval(function () {
            var index = Math.floor(Math.random() * colorArr.length)
            document.body.bgColor = colorArr[index]
        }, 1000)
------------------------------------------------------------------------------------------------------------
        // 第二种随机颜色写法（采用的是纯数字的十六进制的颜色值）
        var max = 999999
        var min = 100000
        setInterval(function () {
            var random = Math.round(Math.random() * (max - min) + min)
            document.body.bgColor = '#' + random
        }, 1000)
    </script>
</body>
```

### 内置日期对象Date

日期对象类型使用自 UTC（Coordinated Universal Time，国际协调时间）1970 年 1 月 1 日午夜（零时）开始经过的毫秒数来保存日期。Date 类型保存的日期能够精确到 1970 年 1 月 1 日或之后的 285616 年。

```js
//创建一个日期对象
var d = new Date() // 日期对象，返回现在的日期。通过提供的日期对象，拿到需要的年月日 小时、分钟、秒、毫秒等
console.log(d)     //返回本地时间，包含年月日星期时分秒
//从日期对象获取信息
console.log(d.getFullYear())     // 获取年，2024年
console.log(d.getMonth())        // 获取月，11月，月份是从0开始，需要手动+1
console.log(d.getDate())         // 获取日，10号
console.log(d.getDay())          // 获取星期，2(星期)
console.log(d.getHours())        // 获取小时
console.log(d.getMinutes())      // 获取分钟
console.log(d.getSeconds())      // 获取秒数
console.log(d.getMilliseconds()) // 获取毫秒
console.log(d.getTime())         // 时间戳，获取从1970年1月1日至今的毫秒
------------------------------------------------------------------
// 设置日期，简单模式
var d = new Date("2008/8/8") // 清零时分秒
var d = new Date('2025-11-11 00:30:00')
var d = new Date('2025/11/11 00:30:00')
// 复杂模式
var d = new Date();
d.setFullYear(2009);    //设置年
d.setMonth(6);          //设置月，超过11，累加年
d.setDate(27);          //设置日，超过最大日期，累加月
d.setHours(40);         //设置小时，超过24，累加天
d.setMinutes(40);       //设置分钟，超过60，累加小时
d.setSeconds(40);       //设置秒，超过60，累加分钟
d.setMilliseconds(40);  //设置毫秒，超过1000，累加秒
d.setTime(10000)        //设置从1970年1月1日过去了多少毫秒
console.log(d)          //返回更改后的年月日 时分秒
--------------------------------------------------------------------
// 注意set系列的返回值
console.log(d.setFullYear(2009));// 返回从1970年1月1日，到当前设置的时间的毫秒数
```

例子：

1、秒杀活动倒计时

```html
<body>
    <h1>距离开抢时间还剩20天30小时20分钟10秒</h1>
    <script>
        // 抢购倒计时的原理：使用结束时间 - 现在的时间 = 时间差
        var h1 = document.querySelector('h1')
        // 设置结束的时间
        var endDate = new Date('2024-12-12 00:00:00')
        // 可以在定时器没有调用回调之前，先调用一次函数，这样可以避免文本替换时倒计时 "卡顿" 问题
        djs()
        // 获取现在的时间
        setInterval(djs, 1000)
        function djs(){
            var nowDate = new Date()
            // 获取总的时间差的秒数，parseInt() 取整
            var seconds = parseInt((endDate.getTime() - nowDate.getTime())/1000)
            // 日期转换取整
            var d = patchFn(parseInt(seconds/3600/24))
            var h = patchFn(parseInt(seconds/3600%24))
            var m = patchFn(parseInt(seconds/60%60))
            var s = patchFn(parseInt(seconds%60))
            
            // 补位操作
            // d<10 ? d = '0' + d : d
            // h<10 ? h = '0' + h : h
            // m<10 ? m = '0' + m : m
            // s<10 ? s = '0' + s : s
            
            // 进行赋值操作
            h1.innerHTML = '距离开抢时间还剩'+d+'天'+h+'小时'+m+'分钟'+s+'秒'
        }
        // 补位操作封装
        function patchFn(num){
            return num<10 ? num = '0' + num : num
        }
    </script>
</body>
```



### 构造函数

构造函数是专门用于创建对象的函数，如果一个函数使用 `new` 关键字调用，那么这个函数就是构造函数。

```html
<script>
  // 定义函数
  function foo() {
    console.log('通过 new 也能调用函数...');
  }
  // 调用函数
  new foo;
</script>
```

总结：

2. 使用 `new` 关键字调用函数的行为被称为实例化
3. 实例化构造函数时没有参数时可以省略 `()`
4. 构造函数的返回值即为新创建的对象
5. 构造函数内部的 `return` 返回的值无效！

注：实践中为了从视觉上区分构造函数和普通函数，习惯将构造函数的首字母大写。

### 实例成员

通过构造函数创建的对象称为实例对象，实例对象中的属性和方法称为实例成员。

```html
<script>
  // 构造函数
  function Person() {
    // 构造函数内部的 this 就是实例对象
    // 实例对象中动态添加属性
    this.name = '小明'
    // 实例对象动态添加方法
    this.sayHi = function () {
      console.log('大家好~')
    }
  }
  // 实例化，p1 是实例对象
  // p1 实际就是 构造函数内部的 this
  const p1 = new Person()
  console.log(p1)
  console.log(p1.name) // 访问实例属性
  p1.sayHi() // 调用实例方法
</script>
```

总结：

1. 构造函数内部 `this` 实际上就是实例对象，为其动态添加的属性和方法即为实例成员
2. 为构造函数传入参数，动态创建结构相同但值不同的对象

注：构造函数创建的实例对象彼此独立互不影响。

### 静态成员

在 JavaScript 中底层函数本质上也是对象类型，因此允许直接为函数动态添加属性或方法，构造函数的属性和方法被称为静态成员。

```html
<script>
  // 构造函数
  function Person(name, age) {
    // 省略实例成员
  }
  // 静态属性
  Person.eyes = 2
  Person.arms = 2
  // 静态方法
  Person.walk = function () {
    console.log('^_^人都会走路...')
    // this 指向 Person
    console.log(this.eyes)
  }
</script>
```

总结：

1. 静态成员指的是添加到构造函数本身的属性和方法

2. 一般公共特征的属性或方法静态成员设置为静态成员

3. 静态成员方法中的 `this` 指向构造函数本身

   

## Json表示对象的方法

JSON 指的是 JavaScript 对象表示法（JavaScript Object Notation）。JSON和JS对象的格式是一样的，只不过JSON字符串中的属性名必须加双引号。

**JSON的特点**

- JSON 是轻量级的文本数据交换格式。
- JSON 独立于语言：JSON 使用 Javascript语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。 目前非常多的动态（PHP，JSP，.NET）编程语言都支持JSON。
- JSON 具有自我描述性，更易理解。

**为什么使用JSON**

JS中的对象只有JS自己认识，其他语言都不识别。JSON就是一种特殊的字符串，这个字符串可以被任意的语言所识别，并且可以转为其他语言中的对象，JSON主要用于数据交换。



**JSON的分类**

```js
1、对象表示  {}
var obj = '{"name" : "张三", "age" : 18, "sex" : "男"}'

2、数组表示  []
var arr = '[10, 66, "hello", true]';
注意点：JSON里面能设置的值的类型，字符串、数值、布尔、null、对象、数组，不能是函数，因为其他语言不能识别

例如：
var obj = '{"name" : "张三", "age" : 18, "sex" : "男"}'

var arr = '[10, 66, "hello", true]'

var obj = '{"arr" : [1, 2, 3]}'

var arr = '[{"name" : "张三", "age" : 18, "sex" : "男"},{ "name" : "李思","age" : 20,"sex": "女"}]'
```

**JSON转对象的方法**

```js
JSON.parse()可以将JSON字符串转为js对象。
```

**JS对象转JSON的方法**

```js
JSON.stringify() 可以将JS对象转为JSON字符串
```

eval()方法（了解）: 把字符串转成一个对象

```js
eval()这个函数可以用来执行一段字符串形式的JS代码，并将执行结果返回。
var str = "alert('hello')";
eval(str);
如果使用eval()执行的字符串中含有{}, 它会将{}当成代码块执行，如果不希望将其当成代码块解析，则需要在字符串前后各加一个()
var obj = eval("("+'{a:1}'+")");
在开发中尽量不要使用，首先的执行性能比较差，然后它还有安全隐患。
```



## 函数

对于反复使用的功能代码，对其封装成一个独立的模块，这种功能代码块就是函数。函数可以一次定义，多次使用。

### 1、函数定义

```js
function functionName（形参1,形参2,形参3...）
{
     函数功能代码
}
functionName（实参）;

ES6参数默认值：可以在定义函数的时候设置 
例如：function show(a = 10)
{
	document.write(a)
}
show();
```

- 函数是一个引用数据类型
- function关键字是必须的，全小写。
- functionName: 函数的名称，函数名的命名规则与变量名一样。
- 形参：形式参数，定义函数时的参数就是"形参"。主要用来接收调用函数者传过来的数据，参数可有可无，多个参数之间用逗号隔开。形参的名称，与变量的命名规则一样，但参数不能用 "var" 关键字定义。
- 实参：实际参数，调用函数时的参数称为"实参".实参就是真正的数据。

### 2、申明函数的方式

```js
第一种方式：直接使用
    function fn(){
        console.log('天气不错！')
    }
    fn()

第二种方式：表达式声明
    var fn = function(){
        console.log('表达式声明')
    }
    fn()
```



### 3、函数的调用

- 函数定义是不会执行的，那么，函数必须调用，才会有效果。

- 函数的调用：直接写函数名后跟小括号()，如果有参数则写参数。小括号不能省略。

```js
//定义函数
function show()
{
	document.write('张三的年龄是30岁！')
}
//函数调用
show();
函数的参数
形参的个数，要与实参的个数一致。
形参的顺序，要与实参的顺序一致。

//定义函数
function show(name,age)
{
	document.write(name+"的年龄是"+age+"岁！<br />")
}
//函数调用
show("李四",20);
show("张三",26);
show("小明",23);
```

### 3、函数的返回值

- return 是属于函数默认隐含的一个参数，只有函数才有，不能在函数外部使用。
- 默认函数内部数据在函数外部是无法访问的，因此可以通过返回值的形式来把函数内部的数据给外界返回。
- 可以把内部数据返回给外界，终止函数的执行。

```js
function fn(a,b,c){
	console.log(a+b+c);
}
alert(fn(1,2,3));// 没有return，此时fn(1,2,3)==undefined。
注意点：因为fn()函数没有返回值，只要没有返回值的函数，都返回一个undefined
可通过关键字return返回函数的值。

function fn(a,b,c){
	console.log(a+b+c);
	return a+b+c;
    //return中止程序之后，return下面的代码不会执行。
    console.log(a)
}
alert(fn(1,2,3)); // 有return，此时fn(1,2,3)==return的返回值，弹出6。
```

- return 函数返回值

  - 是函数默认存在的隐含的参数，只能在函数的内部使用。
  - 是函数内部和函数外部沟通的一个桥梁,可以把函数内部的数据返回给函数外部使用。
  - 可以终止函数的执行。
  - 不一定所有函数都要有返回值，只有需要返回数据的函数才加return。
  - 可以返回任意的数据类型，包含函数。当返回函数时，如果需要执行返回的函数，可将返回值当成一个函数名，加上一个()即可执行。
  - 函数内部返回给外界的数据，必须要使用对应的语法来接收，不能直接使用返回的那个变量名称。

### 4、封装JS选择器

```js
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
```



### 4、递归函数

如果这个函数在内部调用它自己，那么这个函数就叫递归函数。

特点： 

- 在函数里面调用自身。 
- 必须有一个明确的递归结束条件，这个称之为递归出口。 
- 不确定循环执行的次数。 

缺点：使用递归函数一定要注意，处理不当就会进入死循环。在实际使用中，递归函数由于消耗时间比较长（相比for循环和while循环），所以很少使用。

```js
1、求Fibonacci的第n个数  1 1 2 3 5 8 13 21...（该数列中，有n个数字，从第三个数字开始：数值 =前一个数字 + 前面一个数字）即，n=(n-2)+(n-1)。

function f1 (n) {
    if (n == 1) return 1;
    if (n == 2) return 1;
    return f1(n-1) + f1(n-2);
}
console.log(f1(7));

2、求n个数的累加。
function getSum (n) {
    if (n == 1) { return 1;}
    return n + getSum(n - 1);
}
console.log(getSum(100));

3、求n的阶乘？   n! = n * (n-1) !;
function f(num){ 
    if(num<1){ 
    	return 1; 
    }
   	return f(num-1)*num; 
} 
```

### 5、回调函数callback

简称 cb：如果把函数的指针（地址）作为参数传递给另一个函数，当这个指针被用来调用其所指的函数时，我们就说这是回调函数。

理解：把函数自身作为参数给另一个函数当成参数使用，当这个主体（调用者）函数执行完毕后，再去执行这个作为参数的函数（回调函数）。

作用：

- 把主体执行函数和调用者函数分开（把封装的代码和你使用的代码分开来写）
- 可以控制函数执行的时间
- 增加代码的灵活性，可以让代码进行复用
- 是异步代码的解决机制

```JS
 // 主体函数
function fn(a){
    a()
}
// 匿名函数写法
fn(function(){
    console.log('我是作为参数的函数，你也可以叫我回调函数')
})

 // 主体函数
function fn(a){
    a()
}
fn(fn1)
// 回调函数
function fn1(){
    console.log('我是作为参数的函数，你也可以叫我回调函数')
}

 ----------------------------------------------     
 arr.sort(function(){})
 arr.map(function(){})
 arr.filter(function(){})
 arr.find(function(){})
 arr.forEach(function(){})
 arr.findIndex(function(){})

// 控制函数的执行时机
// 主体函数
 function ccFn(callback, num){
     console.log('我是主体函数')
     if(num >= 10){
         callback()
     }
 }

// 回调函数
 ccFn(function(){
     console.log('我是回调函数')
 }, 8)

--------------------------------------------
 function haha(){
     console.log('我是一个很随便的函数！')
 }
 haha = '你个老六...'
 function ccFn(num){
     console.log('我是主体函数')
     if(num >= 10){
         haha()
     }
 }
 ccFn(10)

 function dwFn(){
     console.log('我是回调函数')
 }
-----------------------------------------------
//  可以让代码进行复用
 function ccFn(callback){
     console.log('我是主体函数')
     callback()
 }
 ccFn(dwFn)

 function wjFn(callback){
     console.log('我是王江，也是主体函数')
     callback()
 }
 wjFn(dwFn)
------------------------------------------------
// 是异步代码的解决机制
// 例如：发送网络请求，有成功时需要执行的代码，也有失败时需要执行的代码
 function requestFn(success, error){
     // 发送请求了
     if('成功了'){
         success()
     }else{
         error()
     }
 }
//  等待1秒后，请求回来了
 requestFn(function(){
     console.log('成功了')
 }, function(){
     console.log('失败了')
 })
```

### ES6箭头函数

是对普通函数的一种简化，箭头函数没有自己的 this，它的 this 指向的是上一级代码，箭头函数只能写成表达式形式。

```js
 function fn(){}
// 箭头函数语法
const fn = ()=>{
    console.log('hello')
}
fn()

 // 箭头函数如果只有一个参数的时候，可以省略小括号。多个参数的时候必须加小括号
const fn = a => {
    console.log(a)
}
fn(10)

// 箭头函数可以省略花括号，当不写画括号的时候，默认会箭头后面的代码当成返回值
const fn = a => {
    return a + 10
}

const fn = a => a + 10
console.log(fn(10))

// 注意点：如果给外界的返回值是一个对象的话，那么需要把对象使用小括号包裹起来
const fn = a => ({name: a})
console.log(fn(10))

// 箭头函数没有自己的 this，它的 this 指向的是上一级代码
const fn = ()=> {
    console.log(this)
}
fn()

let obj = {
    name: '张三',
    say(){
        // 注意点：当定时器或者延时器调用函数时，函数里面的 this 指向的是 window
        // setTimeout(function(){
        //     console.log(this)
        // }, 2000)
        console.log(this)

        setTimeout(()=>{
            console.log(this)
        }, 2000)
    }
}
obj.say()

arr.sort((a, b)=> a - b)
arr.find(()=>{})
arr.filter(item=>{})
```



## 作用域

- 访问数据的规则。
- 变量在函数内部作用的范围、区域。有函数的地方就有作用域。

- 作用域存在的作用：避免变量命名冲突可以重复使用某些变量名。


### 1、全局作用域和局部作用域

```js
"全局变量"
在函数外部定义的变量，具有全局作用域: 网页中所有脚本和函数均可使用，既可以在函数外使用，也可以在函数内部使用，在网页关闭时，自动消失(释放空间)。

"局部变量"
在函数内部定义的变量，具有局部作用域：只能在函数内部访问。在函数执行完毕就消失了。

在函数内部，省略关键字var定义的变量是"全局变量"。
无论页面里面有多少个script标记，最终都会把这些标记里面的js代码合并到一起。
在函数内部声明的变量，如果没有使用var关键字，那么它就属于全局变量，这个问题是js自身设计的缺陷（bug）。
```

### 2、作用域链

- 全局作用域我们义称之为0级作用域。
- 定义函数开启的作用域就是1级 - 2级 - 3级。。。作用城。
- JavaScript会将这些作用域链接在起形成个链条， 这个链条就是作用域链0--1---2---3---4。

### 3、变量在作用域查找规则

- 先在当前找，找到就使用当前作用域找到的。
- 如果当前作用域中没有找到，就去上一级作用域中查找。
- 以此类推直到0级为止，如果0级作用域还没找到，就报告错。
- 作用域链的访问都是从里面往外面进行查找，不能从外面访问里面。

### 4、变量的生命周期

- JavaScript 变量生命周期在它声明时初始化。

- 局部变量在函数执行完毕后销毁。

- 全局变量在页面关闭后销毁。

## 预解析

浏览器在执行JS代码的时候会分成两部分操作:预解析以及逐行执行代码。也就是说浏览器不会直接执行代码，而是加工处理之后再执行，这个加工处理的过程，我们就称之为预解析。

### 1、预解析规则变量提升

- 将变量声明和函数声明（指的是整个函数体）提升到当前作用域最顶端。
- 逐行执行代码。

```js
// 这种情况会进行函数声明提升，所以不会报错。
    fn2()
    function fn2(){
        console.log('哈哈，嘻嘻！')
    }

// 注意点：把一个函数赋值给变量(var声明的), 函数声明不会提升。
fn2() // fn2 is not a function
var fn2 = function(){
    console.log('哈哈，嘻嘻！')
}

// 预解析过程
// 0级作用域预解析
var fn2  // undefined
fn2()    // undefined()
fn2 = function(){
    console.log('哈哈，嘻嘻！')
}
```



### 2、JS的编译和执行

1. 先检查语法错误，如语法错误，当前代码段不执行。
2. 声明提升，变量提升和函数提升，作用域内所有使用var声明的变量和非匿名函数。
3. 开始编译，逐行执行。

## 内存的堆和栈

针对基本数据类型，申明的每一个变量都是单独的一个空间，里面的值也是该变量独有的值，都存在于快速内存区（栈区）。

- 拷贝传值：将一个变量的值"拷贝"一份，传给了另一个变量。

```js
var a = 10
var b = a
a = 20
console.log(a, b)// 20,10
```

针对引用数据类型，引用数据类型变量的值是存在慢内存（堆区），而快内存（栈区）存储的是值对应的地址。

- 引用传址：将一个变量的数据地址，"拷贝"一份，传给了另一个变量。这两个变量，指向"同一个地址"

```js
var arr = ['王江', 'rich woman']
var newArr = arr
newArr[1] = '阿姨'
console.log(arr, newArr)// ['王江', '阿姨']
```

## ES5严格模式

除了正常运行模式，ECMAscript5添加了第二种运行模式：“严格模式”（strict mode）。顾名思义，这种模式是的Javascript在更严格的条件下运行。

严格模式的作用：

a.消除了JS语法的一些不合理、不严谨之处，减少一些怪异行为；

b.消除代码运行的一些不安全之处，保证代码运行的安全；

c.提高编译器效率，增加运行速度；

d.为未来新版本的JS做好铺垫

注意点：同样的代码，在“严格模式”中，可能会有不一样的运行结果，一些在“正常模式”下可以正常运行的语句，在“严格模式”下将不能运行，掌握这些内容，有助于更细致深入的理解JS，让你变成一个更好的程序员。

### 1、严格模式的调用

```js
1、如何进入严格模式？
进入严格模式的标志，书写这一行语句 "use strict"
老的浏览器会把他当成一串普通的字符串，加以忽略

2、“严格模式”有两种调用方式，适用于不同的场合；
        // 全局严格模式 'use strict' 需要在全局作用域的最顶端开启
        // 局部严格模式 'use strict' 需要定义在函数内部，只会对局部作用域起作用
     function fn(){
          'use strict'
         a = 10
         console.log(a)
     }
     fn()
     b = 20
针对整个脚本文件：将 "use strict" 放在脚本文件的第一行，则整个脚本文件都将以“严格模式”运行，
如果这行语句不在第一行，则无效，整个脚本以“正常模式”运行。
如果不同模式的代码文件合并成一个文件，这一点需要特别注意。

针对单个函数：将 "use strict" 放在函数的第一行，则整个函数以“严格模式”运行。

脚本文件的变通写法：因为第一种调用方式不利于文件合并，所以更好的做法是，借用第二种方法，将整个脚本文件放在一个立即执行的匿名函数中
```

### 2、进入严格模式的变化

```js
进入严格模式之后，需要进行哪些行为变更：

1.全局变量声明时，必须加关键字(var)
正常模式：a = 10;    console.log(a)    //10
严格模式：a = 10;    console.log(a)    //a is not defined

2.this无法指向全局对象
正常模式：function fn(){ console.log(this) }        //window
严格模式：function fn(){ console.log(this) }        //undefined

3.函数内不允许出现重名参数
正常模式：function fn( a,b,b ){ console.log(a,b) }
fn(1,2,3)        //1,3
严格模式：function fn( a,b,b ){ }
//报错：Duplicate parameter name not allowed in this context    在此上下文中不允许出现重复的参数名

4.arguments对象不允许被动态改变
正常模式：
function fn(a){
    a=20;
    console.log(a);                //20
    console.log(arguments[0]);     //20
}
fn(10);

严格模式：
function fn(a){
    a=20;
    console.log(a);                //20
    console.log(arguments[0]);     //10
}
fn(10);

5、不允许使用arguments.callee
// arguments.callee 表示的是函数名称 --- 动态的名称（你外部函数名称修改，那么arguments.callee表示的名称就跟着修改）
var i = 0
function fn2(){
    i++
    console.log(i+'、哈哈，嘿嘿，嘻嘻！')
    if(i<10){
        arguments.callee()
        // fn2()
    }
}
fn2()
6.新增的保留字：implements，interface，let，package，private，protected，public，static，yield
```

## 同步和异步

```js
同步和异步
+ js 是一个单线程的语言，所谓的单线程就是每次只能做一件事情
+ 单线程会导致代码执行的阻塞问题
+ 为了解决阻塞问题，js 提出了一个异步编程方案，因此 js 里面代码的类型分为同步代码和异步代码
+ 同步
  => 指的就是事情要一件一件做。等做完前一件才能做后一件任务
+ 异步
  => 不受当前任务的影响，两件事情同时进行，做一件事情时，不影响另一件事情的进行
+ 异步代码有哪些？
  => 事件
  => 定时器、延时器
  => ajax （前后端数据交互技术）
  => new Promise()
  => async、await
  => ...

// 同步代码
console.log('开始')
for(var i=0; i<1000; i++){
 console.log(i)
}

// 异步代码
var btn = document.querySelector('button')
btn.onclick = function(){
console.log('hello，你看我执行不！')
}

// 同步代码
console.log('结束')
```



## 定时器

### 1、setIerval() 定时器

功能：设置一个定时器。定时器，重复不断的执行JS代码(周期性)。

参数 params：参数1：callback 回调函数，参数2：时间 （s 表示秒 ms 毫秒 默认是毫秒）

返回值：返回一个id变量，这个id变量给clearIerval()用来清除。

```js
var i = 0
setInterval(function(){
    i++
    console.log(i)
}, 1000)
--------------------------------------------
function addFn(){
        i++
        console.log(i)
    }
    setInterval(addFn, 1000)
------------------------------------------------------
setInterval(function(){
        var random = Math.random()
        console.log(random)
    }, 1000)
----------------------------------------------------
// 取范围随机数公式 random = Math.random()*(max-min)+min  
var max = 999999
var min = 100000
function randomColor(){
    var random = parseInt(Math.random()*(max-min)+min)
    document.body.bgColor = '#' + random
}
// 初始化调用
randomColor()
setInterval(randomColor, 1000)
```

例子：抢购倒计时

```html
 <h1>距离开抢时间还剩20天30小时20分钟10秒</h1>
    <script>
        // 抢购倒计时的原理：使用结束时间 - 现在的时间 = 时间差
        var h1 = document.querySelector('h1')
        // 设置结束的时间
        var endDate = new Date('2024-12-12 00:00:00')
        // 可以在定时器没有调用回调之前，先调用一次函数，这样可以避免文本替换时倒计时 "卡顿" 问题
        djs()
        // 获取现在的时间
        setInterval(djs, 1000)
        function djs(){
            var nowDate = new Date()
            // 获取总的时间差的秒
            // parseInt() 取整
            var seconds = parseInt((endDate.getTime() - nowDate.getTime())/1000)
            /*
                日期转换 
                + 3600 表示60分钟
                + 24 表示 24小时
                + d = seconds/3600/24
                + h = seconds/3600%24
                + m = seconds/60%60
                + s = seconds%60
            */ 
            var d = patchFn(parseInt(seconds/3600/24))
            var h = patchFn(parseInt(seconds/3600%24))
            var m = patchFn(parseInt(seconds/60%60))
            var s = patchFn(parseInt(seconds%60))
            // 补位操作
            // d<10 ? d = '0' + d : d
            // h<10 ? h = '0' + h : h
            // m<10 ? m = '0' + m : m
            // s<10 ? s = '0' + s : s
            // 进行赋值操作
            h1.innerHTML = '距离开抢时间还剩'+d+'天'+h+'小时'+m+'分钟'+s+'秒'
        }
        // 补位操作封装
        function patchFn(num){
            return num<10 ? num = '0' + num : num
        }
    </script>
```

### 2、setTimout()延时器

功能：设置一个延时器，时间到了，只执行一次。

参数 params：参数1：callback 回调函数，参数2：时间 （s 表示秒 ms 毫秒 默认是毫秒）

返回值：返回一个id变量，这个id变量给clearIerval()用来清除。

```js
var timer = setTimeout(function(){
    alert('炸了')
}, 3000)
clearTimeout(timer)
----------------------------------------------------------------------- 
// 利用递归函数，可以让延时器不断的执行
function loopFn(){
    setTimeout(function(){
        console.log('哈哈')
        loopFn()
    }, 2000)
}
loopFn()
```

例子：图片自动切换

```HTML
<body>
  <div class="slider">
    <div class="btn"><span>&lt;</span><span>&gt;</span></div>
    <div class="pic"><img src=""></div>
    <div class="desc"></div>
    <div class="num"></div>
  </div>
  <script>
    // 准备数据
    const dataArr = [
      { src: './images/slider01.jpg', desc: '第一个描述', num: 1 },
      { src: './images/slider02.jpg', desc: '第二个描述', num: 2 },
      { src: './images/slider03.jpg', desc: '第三个描述', num: 3 },
      { src: './images/slider04.jpg', desc: '第四个描述', num: 4 },
      { src: './images/slider05.jpg', desc: '第五个描述', num: 5 },
    ]
    // 获取元素
    const leftBtn = document.querySelector('.btn span:nth-child(1)') // 左边按钮
    const rightBtn = document.querySelector('.btn span:nth-child(2)') // 右边按钮
    const pic = document.querySelector('.pic img') // 图片
    const desc = document.querySelector('.desc') // 描述
    const num = document.querySelector('.num') // 页码
    
    // 声明数据数组下标变量
    let index = 0
    // 渲染函数
    function rendering() {
      pic.src = dataArr[index].src
      desc.innerHTML = dataArr[index].desc
      num.innerHTML = dataArr[index].num
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
  </script>
</body>
```

### clearIerval() 清除延时器id变量

功能：清除延时器id变量。

clearIerval(timer)，timer就是由setIerval()设置的延时器的id变量。

例子：随机点名

```html
<body>
    <button>start</button>
    <button>end</button>
    <h1></h1>
    <script>
        var aBtn = document.querySelectorAll('button')
        var h1 = document.querySelector('h1')
        var arrName = ['王江', '王旭', '陈辰', '陈天雨', '马彬', '吴林', '邓为', '扬磊', '杨策']
        
/*
    定时器累加问题
    + 当连续点击按钮时，相当于是一次开启了很多的定时器，点击关闭定时器按钮时，关闭是最后一次的定时器，前面的定时器并没有被关闭，因此还会执行下去，
    这个就是定时器累加问题
    + 为什么执行速度会越来越快呢？
      => 200毫秒执行一次
      => 多个定时器的时候，时间保持不变，但是200毫秒后多个任务都有对应的输出，因此看到速度越来越快
    + 解决方案
      => 先清除，再开启
*/
        // 初始化
        h1.innerHTML = arrName[0]
        var timer = null
        aBtn[0].onclick = function(){
            clearInterval(timer)
            timer = setInterval(function(){
                var index = Math.floor(Math.random()*arrName.length)
                h1.innerHTML = arrName[index]
            }, 200)
        }
        aBtn[1].onclick = function(){
            // clearInterval('定时器的id')，定时器的id是setInterval()函数的返回值，默认是数值类型的。一般从1开始，但是不同的浏览器返回的不一样
            clearInterval(timer)
        }
    </script>
</body>
```



## DOM

### DOM对象介绍

- DOM Document Object Model ，文档对象模型。我们可以把网页中的所有“东西”看成是“对象”。
- DOM是W3C制定的网页标准或规则，而这个标准，在浏览器中，以“对象”的形式得以实现。
- DOM的官方定义：DOM可以使脚本，动态的访问或操作，网页的内容、网页外观、网页结构。

### DOM的分类

- 核心DOM：提供了同时操作HTML文档和XML文档的公共的属性和方法。
- HTML DOM：针对HTML文档提供的专用的属性方法。
- XML DOM：针对XML文档提供的专用的属性和方法。(了解)
- CSS DOM：提供了操作CSS的属性和方法。
- Event DOM：事件对象模型。如：onclick、 onload等。

### DOM 树 与节点类型

DOM树描述的是文档的结构，是树形结构的。DOM中把网页中的内容之为节点：标记、文本、注释、属性等。

**节点类型**：

- document：文档节点，代表整个网页，不代表任何HTML标记。但它是html节点的父节点。
- element：元素节点，指任何HTML标记。每一个HTML标记就称一个“元素节点”。它可以有文本节点和属性节点。
- attribute：属性节点。指HTML标记的属性。
- text：文本节点。是节点树的最底节点。
- comment：注释节点。

### DOM中访问节点

```js
const box = document.querySelector('.box')
box.firstChild // 访问 box 这个元素下的第一个子节点
box.lastChild // 访问 box 这个元素下的最后一个子节点

// 访问 box 这个元素下所有子节点。子节点列表，是一个数组。
box.childNodes 
box.childNodes[0]
box.childNodes[1]

parentNode // 父节点
nodeName // 节点名称  返回标签名
nodeValue // 属性节点的的属性值
nodeType // 节点类型，返回值是数字  
//如果节点是元素节点，则 nodeType 属性将返回 1。如果节点是属性节点，则 nodeType 属性将返回 2。返回3是文本节点。如果是注释节点，返回8。

box.firstElementChild // 获取 box 下第一个元素节点。
box.lastElementChild // 获取 box 下最后一个元素节点。
box.children // 获取 box 下的所有的子标记。

document.documentElement // 查找<html>标记的方法
document.body // 查找<body>标记的方法
```

### 属性节点的操作

属性分类：

- html 属性（属于标记天生的，没有的你设置了也没有作用）。
- css 属性（可以给所有标记设置）。
- 自定义属性（根据开发需求给标记自定义是属性）。

```html
<body>
    <div class="box">哈哈</div>
    <img src="./img/1.jpg">
    <script>
        const box = document.querySelector('.box')
        const pic = document.querySelector('img')
        // 设置属性 setAttribute()  无论这个属性是否支持都可以给你设置上。
         pic.setAttribute('width', '200')
         pic.setAttribute('src', './img/1.jpg')

         pic.src = './img/1.jpg' // 如果标记本身不支持这个属性，即使你设置了也没有作用。

        // 注意点：直接设置的属性，如果标记本身是支持的，那么会显示，如果不支持那么会变成隐式的设置（虽然你看不见，但是可以用）。setAttribute()无论是否支持都会显示在标记上面
         box.src = './img/1.jpg'
         box.setAttribute('src', './img/1.jpg')
        
        pic.setAttribute('width', '200')
        pic.setAttribute('height', '300')

        // 删除设置的属性
         pic.removeAttribute('height')

        // 获取属性值
        console.log(pic.getAttribute('width'))

        // 获取属性
        console.log(pic.getAttributeNode('width').nodeName)
        console.log(pic.getAttributeNode('width').nodeType)
        console.log(pic.getAttributeNode('width').nodeValue)
    </script>
</body>
```

```html
<body>
<div class="container">
    <button data-id="1">加入购物车1</button>
    <button data-id="2">加入购物车2</button>
    <button data-id="3">加入购物车3</button>
</div>
<script>
// HTML5自定义属性
const container = document.querySelector('.container')
container.addEventListener('click', (e)=>{
let t = e.target
if(t.nodeName === 'BUTTON'){
    // dataset.属性名称 第一个表示设置自定义属性，第二个表示获取自定义属性的值
    // console.log(t.dataset.id)
    t.dataset.index = 1
}
})
</script>
</body>
```



### 标记（元素）节点的操作

```js
//创建节点
document.createElement(tagName) // 创建一个指定的HTML标记，一个节点，tagName：是指不带尖括号的HTML标记名称。 var p = document.createElement('p')
parentNode.appendChild(childNode) // 将创建的节点追加到父节点下。parentNode代表父节点，父节点必须存在。childNode代表子节点。box.appendChild(p)
box.insertBefore(span, p) // 在已有的子节点前插入一个新的子节点，参数1表示新建的节点  参数2表示你要插入的那个节点之前。
------------------------------
// 删除节点
parentNode.removeChild(childNode) // 第一种方式：通过父标记删除子标记，parentNode代表父节点，childNode代表要删除的子节点，box.removeChild(p)。
p.remove()// 第二种方式：直接通过自身删除
-------------------------------
// 替换节点
parentNode.replaceChild('参数1表示要替换成那个节点'，'参数2表示被替换的节点') 
------------------------------
// 克隆节点。默认是浅克隆，只克隆标记本身。如果括号里面传递一个true，那么表示深克隆（把子元素什么都可以进行克隆下来）
p.cloneNode(true) 
```

```html
<body>
    <div class="box">
        <div>哈哈</div>
        <p>嘻嘻</p>
        <span>呵呵</span>
    </div>
    <script>
        var box = document.querySelector('.box')
        // 获取第一个元素节点
        console.log(box.firstElementChild)
        // 获取最后一个元素节点
        console.log(box.lastElementChild)
        // 获取所有的元素节点
        console.log(box.children)
        console.log(box.children[0])
        console.log(box.children[1])

        var p = document.querySelector('p')
        // 获取上一个兄弟元素节点
        console.log(p.previousElementSibling)
        // 获取下一个兄弟元素节点
        console.log(p.nextElementSibling)

        // 获取父节点
        // parentNode 获取父节点（包含其他的节点，但是在使用的过程中你会发现它只能拿到元素节点的父节点）
        // 注意点：元素节点的父节点只能是元素节点，而不能是其他的节点类型
        console.log(p.parentNode)
        // parentElement 获取元素节点的父节点
        console.log(p.parentElement)
    </script>
</body>
```

### className

```html
<body>
    <div>哈哈</div>
    <script>
        var div = document.querySelector('div')
        // className 可以给标记设置类名的
        // 注意点：这个方法既可以给标记设置标记本身存在的 html 属性，也可以给标记设置本身不存在的自定义属性
        div.setAttribute('class', 'box')
        // 添加类名
        div.className = 'box'
        // 注意点：如果同时添加两个类名，那么后面的会把前面的给覆盖掉
        div.className = 'fs'
        // 清空类名
        div.className = ''
        // classList 这是一个对象，里面提供了 add remove 方法等等
        // 添加类名
        div.classList.add('box')
        div.classList.add('fs')
        // 删除类名
        div.classList.remove('fs')
        // toggle() 切换类名（存在就删除，不存在就添加）
        div.classList.toggle()
    </script>
</body>
```



### DOM尺寸与位置

```js
// 只能获取到内联style属性的CSS样式中的宽和高，如果有，获取;如果没有，则返回空。
box.style.width
box.style.height

// 返回了元素大小，但没有单位，默认单位是px，如果设置了其他的单位，比如100em之类，返回出来的结果还会转换为px像素（不含边框） width + padding值
box.clientWidth
box.clientHeight

// 获取左边框和上边框的宽度
box.clientLeft
box.clientTop 

// 获取滚动内容的元素大小（当元素出现滚动条时，此属性指全部滚动内容的宽高）返回了元素大小，默认单位是px。如果没有设置任何CSS的宽和高度，它会得到计算后的宽度和高度  整个内容的
box.scrollWidth
box.scrollHeight

// 返回了元素大小，默认单位是px。如果没有设置任何CSS的宽和高度，他会得到计算后的宽度和高度包含盒模型中除margin以外的宽高（包含边框）最稳定，使用最频繁
box.offsetWidth
box.offsetHeight

// 需要定位参照 获取元素当前相对于offsetParent父元素的位置
box.offsetLeft
box.offsetTop

e.clientX // 获取鼠标坐标（横向坐标）相对浏览器窗口的位置
 e.clientY // 获取鼠标坐标（纵向坐标）相对浏览器窗口的位置
 e.pageX // 获取鼠标坐标（横向坐标，包含网页滚动距离）
 e.pageY // 获取鼠标坐标（纵向坐标，包含网页滚动距离）
 e.offsetX // 鼠标在元素中的横向坐标
 e.offsetY // 鼠标在元素中的纵向坐标

// 返回当前节点的父节点，可以是元素节点、文档节点，或者文档片段节点。
son.parentNode
// 返回当前节点的父元素节点。如果父节点不是元素节点（例如文档节点），则返回 null。
son.parentElement
// 返回当前元素的最近的具有定位（position 为 relative、absolute 或 fixed）的祖先元素。如果没有这样的祖先元素则返回 null。用于获取元素的偏移父元素，常用于计算元素的位置和尺寸。
son.offsetParent 
```

### getComputedStyle()

用于获取各种样式，参数1表示要获取样式的元素，参数2表示的是一个伪对象，可以不写或者为null

```js
const box = $('div')
console.log(getComputedStyle(box).width)
console.log(getComputedStyle(box).height)
console.log(getComputedStyle(box).backgroundColor)
console.log(getComputedStyle(box).fontSize)
console.log(getComputedStyle(box).left)

console.log(getComputedStyle(box, '::after').width)

function getStyle(ele, attr){
    //     getComputedStyle(box)['width']
    //     getComputedStyle(box)['left']
    return getComputedStyle(ele)[attr]
}
console.log(getStyle(box, 'width'))
console.log(getStyle(box, 'left'))
```

## BOM

浏览器对象模型

提供了操作浏览器各组件的方式，例如：刷新页面、地址跳转、历史记录（前进、后退）...

```js
+ window
  => document 文档（网页）
  => location 地址栏
  => history 历史记录
  => screen 屏幕
  => navigator 浏览器软件信息对象（浏览器的版本号、电脑的相关的芯片信息等等）

navigator.userAgent // 可以判断用户使用的是什么浏览器

// 文档对象
 window.document.write()
 document.documentElement
 document.body
 document.head
 document.title

// 地址栏对象
location.href // 可以获取完整地址，可以进行网页的跳转
location.hash // 哈希值（锚点）
location.search // 获取查询字符串
location.protocol // 获取协议 --- http 超文本传输协议，规定了如何上网
location.port // 端口号

 document.querySelector('button').onclick = ()=> {
     location.href = 'https://www.4399.com'
 }
 const a = document.querySelector('a')
 a.href = 'https://www.4399.com'

// 历史记录
history.back() // 后退
history.forward() // 前进
history.go() // 前进（传入参数是整数就是前进）和后退（传入参数是负数就是后退）


document.querySelector('button').onclick = ()=> {
 history.forward()
 history.go(1)
}

// 屏幕
screen.width
screen.height
screen.availWidth // 有效宽度（不包含任务栏）
screen.availHeight // 有效高度（不包含任务栏）

// window 方法
document.querySelector('button').onclick = ()=> {
 window.open('https://www.jd.com', '_self') // 打开窗口
 location.reload() // 刷新
 location.reload(true) // 刷新（不传就是普通刷新，传入true表示强制刷新），走不走浏览器缓存
}
```

### location对象

location (地址) 它拆分并保存了 URL 地址的各个组成部分， 它是一个对象

| 属性/方法 | 说明                                                 |
| --------- | ---------------------------------------------------- |
| href      | 属性，获取完整的 URL 地址，赋值时用于地址的跳转      |
| search    | 属性，获取地址中携带的参数，符号 ？后面部分          |
| hash      | 属性，获取地址中的啥希值，符号 # 后面部分            |
| reload()  | 方法，用来刷新当前页面，传入参数 true 时表示强制刷新 |

~~~html
<body>
  <form>
    <input type="text" name="search"> <button>搜索</button>
  </form>
  <a href="#/music">音乐</a>
  <a href="#/download">下载</a>

  <button class="reload">刷新页面</button>
  <script>
    // location 对象  
    // 1. href属性 （重点） 得到完整地址，赋值则是跳转到新地址
    console.log(location.href)
    // location.href = 'http://www.itcast.cn'

    // 2. search属性  得到 ? 后面的地址 
    console.log(location.search)  // ?search=笔记本

    // 3. hash属性  得到 # 后面的地址
    console.log(location.hash)

    // 4. reload 方法  刷新页面
    const btn = document.querySelector('.reload')
    btn.addEventListener('click', function () {
      // location.reload() // 页面刷新
      location.reload(true) // 强制页面刷新 ctrl+f5
    })
  </script>
</body>
~~~

### navigator对象

navigator是对象，该对象下记录了浏览器自身的相关信息

常用属性和方法：

- 通过 userAgent 检测浏览器的版本及平台

~~~javascript
// 检测 userAgent（浏览器信息）
(function () {
  const userAgent = navigator.userAgent
  // 验证是否为Android或iPhone
  const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
  const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
  // 如果是Android或iPhone，则跳转至移动站点
  if (android || iphone) {
    location.href = 'http://m.itcast.cn'
  }})();
~~~

### histroy对象

history (历史)是对象，主要管理历史记录， 该对象与浏览器地址栏的操作相对应，如前进、后退等

**使用场景**

history对象一般在实际开发中比较少用，但是会在一些OA 办公系统中见到。

~~~html
<body>
  <button class="back">←后退</button>
  <button class="forward">前进→</button>
  <script>
    // histroy对象

    // 1.前进
    const forward = document.querySelector('.forward')
    forward.addEventListener('click', function () {
      // history.forward() 
      history.go(1)
    })
    // 2.后退
    const back = document.querySelector('.back')
    back.addEventListener('click', function () {
      // history.back()
      history.go(-1)// 前进后退功能 参数如果是 1 前进1个页面 如果是-1 后退1个页面
    })
  </script>
</body>

~~~



## 事件

事件是编程语言中的术语，它是用来描述程序的行为或状态的，一旦行为或状态发生改变，便立即调用一个函数。事件是一种可以被JS侦测到的行为。

### DOM 0级事件（L0）（JS绑定事件）

通常是单一的、简单的事件处理场景，将处理程序直接附加到事件上，但只能绑定一个。

DOM0级事件处理，是一种赋值方式，是被所有浏览器所支持的，简单易懂容易操作；元素.onclick = function(){}

```js
const btn = document.querySelector('button')
绑定事情的写法
第一种写法：
    btn.onclick = function(){
        alert('666')
    }

第二种写法：
    btn.onclick = fn
    function fn(){
        alert('666')
    }

第三种写法：
    var fn = function(){
        alert('666')
    }
    btn.onclick = fn
```

### DOM 2级事件（L2）（事件监听）

- 结合 DOM 使用事件时，需要为 DOM 对象添加事件监听，等待事件发生（触发）时，便立即调用一个函数。

- 比直接绑定事件更灵活，可以添加多个处理程序，并支持更复杂的事件管理和控制（如移除监听器、控制事件传播等）。

- 适用于复杂的、多处理程序的场景，或者需要动态添加、移除事件处理程序的情况。

- `addEventListener` 是 DOM 对象专门用来添加事件监听的方法，它的两个参数分别为【事件类型】和【事件回调】。

完成事件监听分成3个步骤：

1. 获取 DOM 元素
2. 通过 `addEventListener` 方法为 DOM 节点添加事件监听
3. 等待事件触发，如用户点击了某个按钮时便会触发 `click` 事件类型
4. 事件触发后，相对应的回调函数会被执行

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>事件监听</title>
</head>
<body>
  <h3>事件监听</h3>
  <p id="text">为 DOM 元素添加事件监听，等待事件发生，便立即执行一个函数。</p>
  <button id="btn">点击改变文字颜色</button>
  <script>
    // 1. 获取 button 对应的 DOM 对象
    const btn = document.querySelector('#btn')

    // 2. 添加事件监听
    btn.addEventListener('click', function () {
      console.log('等待事件被触发...')
      // 改变 p 标签的文字颜色
      let text = document.getElementById('text')
      text.style.color = 'red'
    })

    // 3. 只要用户点击了按钮，事件便触发了！！！
  </script>
</body>
</html>
```

DOM2级事件处理是所有DOM节点中的方法，可以重复绑定，但是浏览器兼容存在问题。

```js
非IE下：(这里的事件名不带on),第三个参数表示是在捕获阶段还是冒泡阶段。可以重复绑定事件，执行顺序按照绑定顺序来执行。

oDiv.addEventListener('click',fn,false);
oDiv.removeEventListener('click',fn ,false);

IE下：
只有冒泡阶段,所以没有第三个参数；（这里的事件名需要加on）
oDiv.attachEvent()；
oDiv.detachEvent()； 删除

冒泡：从下往上（从里往外）
捕获：从上往下（从外往内）

//元素不要加引号   事件需要加引号
function addevent(ele, type, callback){
    if(ele.addEventListener){
        ele.addEventListener(type, callback, false);
    }else if(ele.attachEvent){
        //兼容IE
        ele.attachEvent('on' + type, callback);  只支持冒泡
    }
}
```



### 常用事件

#### 鼠标事件

```js
dblclick // 双击事件
click // 单击事件
mouseover // 当鼠标移到某个元素上方时触发  
mouseout // 当鼠标移出某个元素上方时触发   
//会冒泡，也就是说，鼠标进入子元素时，父元素的 mouseover 也会触发。

mouseenter、mouseleave // 事件不会冒泡到父元素。它只会在目标元素上触发。由于不会触发冒泡，因此在一些复杂的事件处理中，mouseenter 相较于 mouseover 会稍微高效一些。

mousedown // 当用户按下了鼠标还未弹起时触发 - 弹窗测试最明显
mouseup // 当用户释放鼠标按钮时触发 - 鼠标抬起
mousemove // 当鼠标指针在元素上移动时触发  
```

#### 焦点事件

```js
focus // 获得焦点
blur // 失去焦点
```

#### 键盘事件

```js
keydown // 当用户按下键盘上任意键触发，如果按住不放，会重复触发  
keyup // 当用户释放键盘上的键触发 - 当按键抬起时触发

keypress // 当用户按下键盘上的字符键触发，如果按住不放，会重复触发  不能触发 例如：ALT, CTRL, SHIFT, ESC --- 不是字符键
```

案例：

1、使文本框输入不了数字

```js
// 使文本框输入不了数字
// 文本框里面输入内容，其实属于浏览器的默认行为，return false 可以禁止浏览器的默认行为
onkeydown = (e)=> {
    // 需要找到那几个键是属于数字键，根据 e.keyCode 这个属性来查找
    // console.log(e.keyCode)
    // 48 --- 57 是不包含小键盘
    if(e.keyCode>=48 && e.keyCode<=57){
        return false
    }
}
```

2、使div根据不同的方向键向不同的位置移动

```js
const box = document.querySelector('div')
onkeydown = (e)=> {
    // 38 上 
    // 40 下
    // 37 左
    // 39 右
    let step = 10
    if(e.altKey){
        step = 100
    }
    switch(e.keyCode){
        case 39 :
            box.style.left = box.offsetLeft + step + 'px'
            break
        case 37 :
            box.style.left = box.offsetLeft - step + 'px'
            break
        case 38 :
            box.style.top = box.offsetTop - step + 'px'
            break
        case 40 :
            box.style.top = box.offsetTop + step + 'px'
            break
    }
}
```



#### html事件

```js
load // 当页面完全加载后在 window 上面触发，或当框架集加载完毕后在框架集上触发

select // 当用户选中文本框(input 或 textarea)中的一个或多个字符触发

selectstart // 主要是用于禁止用户选中网页中的文字的默认行为

例如：
document.onselectstart = function(){
	return false;
}

change // 当用户改变文本框(input 或 textarea)内容时且失去焦点后触发

focus // 当页面或者元素获得焦点时触发

blur // 当页面或元素失去焦点时触发

submit // 当用户点击提交按钮在<form>元素上触发  

resize // 当窗口或框架的大小变化时在 window 或框架上触发

举例：window.onresize=function(){ alert(‘dw’); };

scroll // 当用户滚动带滚动条的元素时触发

举例：window.onscroll=function() { alert(‘dw’); };

contextmenu // 事件在元素中用户右击鼠标时触发并打开上下文菜单

input // 事件在用户输入时触发。
```



### 事件处理程序

`addEventListener` 的第2个参数是函数，这个函数会在事件被触发时立即被调用，在这个函数中可以编写任意逻辑的代码，如改变 DOM 文本颜色、文本内容等。

```html
<script>
  // 双击事件类型
  btn.addEventListener('dblclick', function () {
    console.log('等待事件被触发...')
    
    const text = document.querySelector('.text')
    // 改变 p 标签的文字颜色
    text.style.color = 'red'
    // 改变 p 标签的文本内容
    text.style.fontSize = '20px'
  })
</script>
```

结论：【事件处理程序】决定了事件触发后应该执行的逻辑。

### 事件对象

任意事件类型被触发时与事件相关的信息会被以对象的形式记录下来，我们称这个对象为事件对象。

```html
<body>
  <h3>事件对象</h3>
  <p>任意事件类型被触发时与事件相关的信息会被以对象的形式记录下来，我们称这个对象为事件对象。</p>
  <hr>
  <div class="box"></div>
  <script>
    // 获取 .box 元素
    const box = document.querySelector('.box')

    // 添加事件监听
    box.addEventListener('click', function (e) {
      console.log('任意事件类型被触发后，相关信息会以对象形式被记录下来...');

      // 事件回调函数的第1个参数即所谓的事件对象
      console.log(e)
    })
  </script>
</body>
```

事件回调函数的【第1个参数】即所谓的事件对象，通常习惯性的将这个对数命名为 `event`、`ev` 、`ev` 。

注：在事件回调函数内部通过 window.event 同样可以获取事件对象。

#### 事件对象属性

```JS
 ev.type // 当前事件的类型
 e.clientX // 获取鼠标坐标（横向坐标）相对浏览器窗口的位置
 e.clientY // 获取鼠标坐标（纵向坐标）相对浏览器窗口的位置
 e.pageX // 获取鼠标坐标（横向坐标，包含网页滚动距离）
 e.pageY // 获取鼠标坐标（纵向坐标，包含网页滚动距离）
 e.offsetX // 鼠标在元素中的横向坐标
 e.offsetY // 鼠标在元素中的纵向坐标
 e.keyCode // keyCode 返回当前按键的ASCII码  得知按下的键盘上的哪个键 - 要配合事件对象来使用。通过可以判断哪个键被按下
 e.altKey
 e.ctrlKey
 e.shiftKey
 ...
```

#### 案例：拖拽

```js
const box = document.querySelector('div')
// 当鼠标在盒子上按下时
box.onmousedown = (e) => {
    // 当鼠标按下时，确定光标的相对于盒子的位置
    let l = e.offsetX
    let t = e.offsetY
    // 进行盒子的移动
    // 问题：当鼠标移动过快时，大家发现元素移动会出现卡顿现象
    // 原因：由于移动事件绑定给 box 的，当移动过快时，移出了 box 范围，获取不到鼠标坐标，因此无法赋值就出现了卡顿
    document.onmousemove = (e) => {
        // 获取鼠标坐标
        let x = e.clientX - l
        let y = e.clientY - t
        // 进行赋值操作
        box.style.left = x + 'px'
        box.style.top = y + 'px'
    }
}
// 当鼠标抬起时，取消移动事件
box.onmouseup = () => {
    document.onmousemove = null
}
```

#### 案例：限定拖拽范围

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .parent{
            width: 500px;
            height: 500px;
            background-color: hotpink;
            margin: 50px auto;
            position: relative;
        }
        .parent .son{
            width: 200px;
            height: 200px;
            background-color: gold;
            position: absolute;
            cursor: move;
        }
    </style>
</head>
<body>
    <div class="parent">
        <div class="son"></div>
    </div>
    <script>
        const parent = document.querySelector('.parent')
        const son = document.querySelector('.son')

        son.onmousedown = (e)=> {
            let l = e.offsetX
            let t = e.offsetY
            document.onmousemove = (e)=> {
                let x = e.clientX - l - parent.offsetLeft
                let y = e.clientY - t - parent.offsetTop
                if(x<=0){
                    x = 0
                }else if(x>=parent.offsetWidth - son.offsetWidth){
                    x = parent.offsetWidth - son.offsetWidth
                }
                if(y<=0){
                    y = 0
                }else if(y>=parent.offsetHeight - son.offsetHeight){
                    y = parent.offsetHeight - son.offsetHeight
                }
                son.style.left = x + 'px'
                son.style.top = y + 'px'
            }
        }
        son.onmouseup = ()=> {
            document.onmousemove = null
        }
    </script>
</body>
</html>
```



#### 案例：进度条

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .progress-bar{
            width: 600px;
            height: 35px;
            margin: 50px auto;
        }
        .progress-bar .left{
            width: 550px;
            height: 35px;
            background-color: #e5e5e5;
            float: left;
            position: relative;
        }
        .progress-bar .left .bg{
            width: 0;
            height: 35px;
            background-color: red;
        }
        .progress-bar .left .bar{
            width: 60px;
            height: 50px;
            background-color: red;
            position: absolute;
            left: 0;
            top: -7px;
            cursor: move;
        }
        .progress-bar .right{
            width: 50px;
            height: 35px;
            float: left;
            text-align: center;
            line-height: 35px;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="progress-bar">
        <div class="left">
            <div class="bg"></div>
            <div class="bar"></div>
        </div>
        <div class="right">0%</div>
    </div>
    <!-- <input type="range" value="0"><span></span> -->
    <script>
        // 使用表单实现进度条功能
        // const range = document.querySelector('input')
        // const num = document.querySelector('span')
        // num.innerHTML = 0 + '%'
        // range.onmousemove = function(){
        //     console.log(this.value)
        //     num.innerHTML = this.value + '%'
        // }

        // 自定义进度条功能
        const bar = document.querySelector('.bar')
        const bg = document.querySelector('.bg')
        const num = document.querySelector('.right')

        bar.onmousedown = (e)=> {
            let l = e.offsetX
            document.onmousemove = (e)=> {
                let x = e.pageX - l - bar.parentNode.parentNode.offsetLeft
                if(x<=0){
                    x = 0
                }else if(x>=bar.parentNode.offsetWidth - bar.offsetWidth){
                    x = bar.parentNode.offsetWidth - bar.offsetWidth
                }
                bar.style.left = x + 'px'
                bg.style.width = x + 'px'
                num.innerHTML = parseInt(x / (bar.parentNode.offsetWidth - bar.offsetWidth) * 100) + '%'
            }
        }
        bar.onmouseup = ()=> {
            document.onmousemove = null
        }
    </script>
</body>
</html>
```



### 事件流

事件流是对事件执行过程的描述，了解事件的执行过程有助于加深对事件的理解，提升开发实践中对事件运用的灵活度。事件流描述的是从页面中接收事件的顺序。事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程也叫做DOM事件流。

背景:

JS事件流最早要从IE和网景公司的浏览器大战说起，IE提出的是冒泡流，而网景提出的是捕获流，后来在W3C组织的统一之下，JS支持了冒泡流和捕获流，但是目前低版本的IE浏览器还是只能支持冒泡流(IE6,IE7,IE8均只支持冒泡流)，所以为了能够兼容更多的浏览器，建议大家使用冒泡流。

任意事件被触发时总会经历两个阶段：【捕获阶段】和【冒泡阶段】。

例如：我们给一个按钮注册了点击事件，DOM事件流会分为三个阶段，

1、捕获阶段

2、当前目标阶段

3、冒泡阶段

简言之，捕获阶段是【从父到子】的传导过程，冒泡阶段是【从子向父】的传导过程。

#### 捕获和冒泡

了解了什么是事件流之后，我们来看事件流是如何影响事件执行的：

```html
<body>
  <h3>事件流</h3>
  <p>事件流是事件在执行时的底层机制，主要体现在父子盒子之间事件的执行上。</p>
  <div class="outer">
    <div class="inner">
      <div class="child"></div>
    </div>
  </div>
  <script>
    // 获取嵌套的3个节点
    const outer = document.querySelector('.outer');
    const inner = document.querySelector('.inner');
    const child = document.querySelector('.child');
		
    // html 元素添加事件
    document.documentElement.addEventListener('click', function () {
      console.log('html...')
    })
		
    // body 元素添加事件
    document.body.addEventListener('click', function () {
      console.log('body...')
    })

    // 外层的盒子添加事件
    outer.addEventListener('click', function () {
      console.log('outer...')
    })
    
    // 中间的盒子添加事件
    outer.addEventListener('click', function () {
      console.log('inner...')
    })
    
    // 内层的盒子添加事件
    outer.addEventListener('click', function () {
      console.log('child...')
    })
  </script>
</body>
```

执行上述代码后发现，当单击事件触发时，其祖先元素的单击事件也【相继触发】，这是为什么呢？

结合事件流的特征，我们知道当某个元素的事件被触发时，事件总是会先经过其祖先才能到达当前元素，然后再由当前元素向祖先传递，事件在流动的过程中遇到相同的事件便会被触发。

再来关注一个细节就是事件相继触发的【执行顺序】，事件的执行顺序是可控制的，即可以在捕获阶段被执行，也可以在冒泡阶段被执行。

如果事件是在冒泡阶段执行的，我们称为冒泡模式，它会先执行子盒子事件再去执行父盒子事件，默认是冒泡模式。

如果事件是在捕获阶段执行的，我们称为捕获模式，它会先执行父盒子事件再去执行子盒子事件。

```html
<body>
  <h3>事件流</h3>
  <p>事件流是事件在执行时的底层机制，主要体现在父子盒子之间事件的执行上。</p>
  <div class="outer">
    <div class="inner"></div>
  </div>
  <script>
    // 获取嵌套的3个节点
    const outer = document.querySelector('.outer')
    const inner = document.querySelector('.inner')

    // 外层的盒子
    outer.addEventListener('click', function () {
      console.log('outer...')
    }, true) // true 表示在捕获阶段执行事件
    
    // 中间的盒子
    outer.addEventListener('click', function () {
      console.log('inner...')
    }, true)
  </script>
</body>
```

结论：

1. `addEventListener` 第3个参数决定了事件是在捕获阶段触发还是在冒泡阶段触发
2. `addEventListener` 第3个参数为  `true` 表示捕获阶段触发，`false` 表示冒泡阶段触发，默认值为 `false`
3. 事件流只会在父子元素具有相同事件类型时才会产生影响
4. 绝大部分场景都采用默认的冒泡模式（其中一个原因是早期 IE 不支持捕获）

#### 阻止冒泡

阻止冒泡是指阻断事件的流动，保证事件只在当前元素被执行，而不再去影响到其对应的祖先元素。

```html
<body>
  <h3>阻止冒泡</h3>
  <p>阻止冒泡是指阻断事件的流动，保证事件只在当前元素被执行，而不再去影响到其对应的祖先元素。</p>
  <div class="outer">
    <div class="inner">
      <div class="child"></div>
    </div>
  </div>
  <script>
    // 获取嵌套的3个节点
    const outer = document.querySelector('.outer')
    const inner = document.querySelector('.inner')
    const child = document.querySelector('.child')

    // 外层的盒子
    outer.addEventListener('click', function () {
      console.log('outer...')
    })

    // 中间的盒子
    inner.addEventListener('click', function (ev) {
      console.log('inner...')

      // 阻止事件冒泡
      ev.stopPropagation()
    })

    // 内层的盒子
    child.addEventListener('click', function (ev) {
      console.log('child...')

      // 借助事件对象，阻止事件向上冒泡
      ev.stopPropagation()
    })
  </script>
</body>

eve.stopPropagation();    方法  标准        
eve.cancelBubble = true;    属性    //兼容IE

兼容写法：
function stopBubble(e){
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
}
```

结论：事件对象中的 `ev.stopPropagation` 方法，专门用来阻止事件冒泡。

>鼠标经过事件：
>
>mouseover 和 mouseout 会有冒泡效果
>
>mouseenter  和 mouseleave   没有冒泡效果 (推荐)

### 事件委托

事件委托是利用事件流的特征解决一些现实开发需求的知识技巧，主要的作用是提升程序效率。

大量的事件监听是比较耗费性能的，如下代码所示

```html
<script>
  // 假设页面中有 10000 个 button 元素
  const buttons = document.querySelectorAll('table button');

  for(let i = 0; i <= buttons.length; i++) {
    // 为 10000 个 button 元素添加了事件
    buttons.addEventListener('click', function () {
      // 省略具体执行逻辑...
    })
  }
</script>
```

利用事件流的特征，可以对上述的代码进行优化，事件的的冒泡模式总是会将事件流向其父元素的，如果父元素监听了相同的事件类型，那么父元素的事件就会被触发并执行，正是利用这一特征对上述代码进行优化，如下代码所示：

```html
<script>
  // 假设页面中有 10000 个 button 元素
  let buttons = document.querySelectorAll('table button');
  
  // 假设上述的 10000 个 buttom 元素共同的祖先元素是 table
  let parents = document.querySelector('table');
  parents.addEventListener('click', function () {
    console.log('点击任意子元素都会触发事件...');
  })
</script>
```

我们的最终目的是保证只有点击 button 子元素才去执行事件的回调函数，如何判断用户点击是哪一个子元素呢？

事件对象中的属性 `target` 或 `srcElement`属性表示真正触发事件的元素，它是一个元素类型的节点。

```html
<script>
  // 假设页面中有 10000 个 button 元素
  const buttons = document.querySelectorAll('table button')
  
  // 假设上述的 10000 个 buttom 元素共同的祖先元素是 table
  const parents = document.querySelector('table')
  parents.addEventListener('click', function (ev) {
    // console.log(ev.target);
    // 只有 button 元素才会真正去执行逻辑
    if(ev.target.tagName === 'BUTTON') {
      // 执行的逻辑
    }
  })
</script>
```

优化过的代码只对祖先元素添加事件监听，相比对 10000 个元素添加事件监听执行效率要高许多！

## 正则表达式

**正则表达式**（Regular Expression）是一种字符串匹配的模式（规则），正则的语法基于一种古老的<span>perl</span>语言。前端往往有大量的表单数据校验工作，采用正则表达式会使得数据校验的工作量大大减轻。常用效果：邮箱，手机号，身份证号等。

**使用场景：**

- 例如验证表单：手机号表单要求用户只能输入11位的数字 (匹配)

  在<span>JS</span>未出现以前，表单的信息验证需要传输给后台，让后台做数据验证处理之后，再返回给前端页面处理的结果。在带宽有限的情况下，整个验证过程非常复杂，且耗时。

- 过滤掉页面内容中的一些敏感词(替换)，或从字符串中获取我们想要的特定部分(提取)等 

```
如：从杂乱的字符串中找数字
var str = "asd68asd687as6da78sd123123zcacas";
```

```js
let arr = []
for(let i=0; i<str.length; i++){
    if(str[i]>=0 && str[i]<=9){
        arr.push(str[i])
    }
}
console.log(arr)
// 使用正则的方式
var arr = str.match(/\d/g);
```



### 正则的创建

1. 定义规则

   ~~~JavaScript
   const reg =  /表达式/
   1.构造函数方式
   // 制定了一个验证字符串里面是否存在a这个字符的规则
   const reg1 = new RegExp("a");
   const str = "adassdfsd";
   //输出匹配a的字符
   console.log(str.match(reg1))        
   
   2.字面量方式，古老的perl语言风格
   const reg2 = /a/;
   //输出匹配a的字符
   console.log(str2.match(reg2)); 
   ~~~

   - 其中` /   / `是正则表达式字面量
   - 正则表达式也是`对象 `

2. 使用正则

   - `test()方法`   用来查看正则表达式与指定的字符串是否匹配
   - 如果正则表达式与指定的字符串匹配 ，返回`true`，否则`false`
   - `exec() `方法找到了返回数组，找不到反回null。

```js
// 正则中的修饰符，写在正则表达式后面／的后面：
// g表示全局匹配，查找所有
// i表示忽略大小写
let reg = /a/i
let str = 'Aa'
console.log(reg.test(str))
console.log(reg.exec(str))
```



### 替换和修饰符

replace 替换方法，可以完成字符的替换

```js
 // 替换和修饰符
  const str = '欢迎大家学习前端，相信大家一定能学好前端，都成为前端大神'
// 1. 替换  replace  需求：把前端替换为 web
// 1.1 replace 返回值是替换完毕的字符串
 const strEnd = str.replace(/前端/, 'web') 只能替换一个
```

修饰符约束正则执行的某些细节行为，如是否区分大小写、是否支持多行匹配等

- i 是单词 ignore 的缩写，正则匹配时字母不区分大小写
- g 是单词 global 的缩写，匹配所有满足正则表达式的结果

```js
// 替换和修饰符
const str = '欢迎大家学习前端，相信大家一定能学好前端，都成为前端大神'
// 1. 替换  replace  需求：把前端替换为 web
// 1.1 replace 返回值是替换完毕的字符串
 const strEnd = str.replace(/前端/, 'web') 只能替换一个

// 2. 修饰符 g 全部替换
const strEnd = str.replace(/前端/g, 'web')
console.log(strEnd) 
```



### 字符类

```js
// 任意字符
[abc]  例子：o[usb]t ==> obt 、ost、 obt
// 范围
[a-z]、[0-9]  例子： id[0-9]  id0 、 id1...

// | 或，类似于js中的 ||
var reg = /abc|bbc|cbc|dbc/g
console.log(str.match(reg));   //打印字符串中的abc，bbc，cbc，dbc
var reg = /[a-c]bc/g

// 排除
[^a] 表示排除a
例子：[^0-9]

// 组合
[a-z0-9A-Z]           
```



### 表达式

[abc]  查找方括号之间的任何字符。

[0-9]   查找任何从 0 至 9 的数字。

[a-z]   查找任何从小写 a 到小写 z 的字符。

[A-Z]  查找任何从大写 A 到大写 Z 的字符。

[A-z]  查找任何从大写 A 到小写 z 的字符。



### 元字符

1. **普通字符:**

- 大多数的字符仅能够描述它们本身，这些字符称作普通字符，例如所有的字母和数字。
- 普通字符只能够匹配字符串中与它们相同的字符。    
- 比如，规定用户只能输入英文26个英文字母，普通字符的话  /[abcdefghijklmnopqrstuvwxyz]/

2. **元字符(特殊字符）**

- 是一些具有特殊含义的字符，可以极大提高了灵活性和强大的匹配功能。
- 比如，规定用户只能输入英文26个英文字母，换成元字符写法： /[a-z]/ 

### 字符类

某些常见模式的简写方式，区分字母和数字

```js
转义字符：
\d    ——    [0-9]         数字
\w    ——    [A-z0-9_]     数字，字母，下划线
\s    ——    空白字符   
\b	  --    匹配单词边界

\D    ——    [^0-9]        非数字
\W    ——    [^a-z0-9_]    非数字，字母，下划线
\S    ——    非空白字符

. 表示任意字符

let str = 'hello'
let reg = /\d/
let reg = /\w/
let reg = /\s/
let reg = /\bhello\b/

let str = 'a'
let reg = /[^0-9]/ // ^ 如果在表达式里面表示排除（非）

let str = '\n'
let reg = /./  // 注意点：.无法匹配换行符

let str = '.'
let reg = /\./ 
console.log(reg.test(str))
```

### 边界符

正则表达式中的边界符（位置符）用来提示字符所处的位置，主要有两个字符

^开始   ：表示匹配行首的文本(以谁开始)

$结束：表示匹配行尾的文本(以谁结束)

如果 ^ 和 $ 在一起，表示必须是精确匹配

### 量词

也叫限定符，可以指定正则表达式的一个给定组，必须要出现多少次才能满足匹配

通过量词可以设置一个内容出现的次数。注意点：量词只对它前边的一个内容起作用。 都是必须连续出现

{n}：匹配前一个字符正好出现n次 

{n,}：匹配前一个字符出现n次以上，没有限制

{n,m}：匹配一个字符出现n到m次

*表示允许的次数是0 至 正无穷次，有没有都行

+表示允许的次数是1 至 正无穷次，至少有一个

? 表示允许的次数是0至1，最多出现1次 

()表示一组

注意： 逗号左右两侧千万不要出现空格

```js
// 元字符之量词
    // 1. * 重复次数 >= 0 次
    const reg1 = /^w*$/
    console.log(reg1.test(''))  // true
    console.log(reg1.test('w'))  // true
    console.log(reg1.test('ww'))  // true
    console.log('-----------------------')

    // 2. + 重复次数 >= 1 次
    const reg2 = /^w+$/
    console.log(reg2.test(''))  // false
    console.log(reg2.test('w'))  // true
    console.log(reg2.test('ww'))  // true
    console.log('-----------------------')

    // 3. ? 重复次数  0 || 1 
    const reg3 = /^w?$/
    console.log(reg3.test(''))  // true
    console.log(reg3.test('w'))  // true
    console.log(reg3.test('ww'))  // false
    console.log('-----------------------')

    // 4. {n} 重复 n 次
    const reg4 = /^w{3}$/
    console.log(reg4.test(''))  // false
    console.log(reg4.test('w'))  // flase
    console.log(reg4.test('ww'))  // false
    console.log(reg4.test('www'))  // true
    console.log(reg4.test('wwww'))  // false
    console.log('-----------------------')

    // 5. {n,} 重复次数 >= n 
    const reg5 = /^w{2,}$/
    console.log(reg5.test(''))  // false
    console.log(reg5.test('w'))  // false
    console.log(reg5.test('ww'))  // true
    console.log(reg5.test('www'))  // true
    console.log('-----------------------')

    // 6. {n,m}   n =< 重复次数 <= m
    const reg6 = /^w{2,4}$/
    console.log(reg6.test('w'))  // false
    console.log(reg6.test('ww'))  // true
    console.log(reg6.test('www'))  // true
    console.log(reg6.test('wwww'))  // true
    console.log(reg6.test('wwwww'))  // false

    // 7. 注意事项： 逗号两侧千万不要加空格否则会匹配失败


let str = 'aa'
let reg = /^a{2}$/
let reg = /^a{2}$/
console.log(reg.test(str))
console.log(reg.exec(str))

let str = 'aaaaaaaa'
let reg = /^a{2,}$/
console.log(reg.test(str))
console.log(reg.exec(str))

let str = 'aaaaa'
let reg = /^a{2,5}$/
console.log(reg.test(str))
console.log(reg.exec(str))

let str = 'abb'
let reg = /^ab{2}$/  // 表示以a开头，以b结尾
console.log(reg.test(str))
console.log(reg.exec(str))

let str = 'abab'
let reg = /^(ab){2}$/  // () 表示分组
console.log(reg.test(str))
console.log(reg.exec(str))

// 正则模式：分为惰性模式、贪婪模式
// *表示允许的次数是0 至 正无穷次，有没有都行
let str = 'b'
let reg = /^a*$/  
console.log(reg.test(str))

// +表示允许的次数是1 至 正无穷次，至少有一个
let str = 'aa'
let reg = /^a+$/  
console.log(reg.test(str))

// ? 表示允许的次数是0至1，最多出现1次 
let str = ''
let reg = /^a?$/  
console.log(reg.test(str))
```



### 案例

```js
1、qq号验证规则:
var reg = /[1-9]\d{4,10}/

2、复杂邮箱的规则：英文数字下划线@一串英文或数子.一串英文
var reg = /\w+@[a-z0-9]+\.[a-z]+/i
想要校验怎么办？在正则转义字符前加上\


3、删除多余空格  
str.replace(/\s+/g,'');

删除首尾空格
str.replace(/^\s+/,'');
str.replace(/\s+$/,'');

4、检查邮政编码  共 6 位数字，第一位不能为 0
/^[1-9]\d{5}$/

```



### 常用正则表达式

```js
/*
    [abc]  查找方括号之间的任何字符。

    [0-9]   查找任何从 0 至 9 的数字。

    [a-z]   查找任何从小写 a 到小写 z 的字符。

    [A-Z]  查找任何从大写 A 到大写 Z 的字符。

    [A-z]  查找任何从大写 A 到小写 z 的字符。
*/


let str = 'a13'
// let reg = /a|b|c/  // | 表示或的意思，注意不是两个杠
// let reg = /[abc]/
// let reg = /[a-c]/
// let reg = /[0-9a-z]/
let reg = /^a[0-6]{2}$/
console.log(reg.test(str))

 // 元字符之范围  []  
    // 1. [abc] 匹配包含的单个字符， 多选1
    const reg1 = /^[abc]$/
    console.log(reg1.test('a'))  // true
    console.log(reg1.test('b'))  // true
    console.log(reg1.test('c'))  // true
    console.log(reg1.test('d'))  // false
    console.log(reg1.test('ab'))  // false

    // 2. [a-z] 连字符 单个
    const reg2 = /^[a-z]$/
    console.log(reg2.test('a'))  // true
    console.log(reg2.test('p'))  // true
    console.log(reg2.test('0'))  // false
    console.log(reg2.test('A'))  // false
    // 想要包含小写字母，大写字母 ，数字
    const reg3 = /^[a-zA-Z0-9]$/
    console.log(reg3.test('B'))  // true
    console.log(reg3.test('b'))  // true
    console.log(reg3.test(9))  // true
    console.log(reg3.test(','))  // flase

    // 用户名可以输入英文字母，数字，可以加下划线，要求 6~16位
    const reg4 = /^[a-zA-Z0-9_]{6,16}$/
    console.log(reg4.test('abcd1'))  // false 
    console.log(reg4.test('abcd12'))  // true
    console.log(reg4.test('ABcd12'))  // true
    console.log(reg4.test('ABcd12_'))  // true

    // 3. [^a-z] 取反符
    const reg5 = /^[^a-z]$/
    console.log(reg5.test('a'))  // false 
    console.log(reg5.test('A'))  // true
    console.log(reg5.test(8))  // true

```



## 面向对象

**面向过程** 就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的依次调用就可以了。

**面向对象**（Object Oriented，OO）是软件开发方法。面向对象的概念和应用已超越了程序设计和软件开发，扩展到如数据库系统，交互式界面，应用结构，应用平台，分布式系统，网络管理结构，CAD技术，人工智能等领域。面向对象是一种对现实世界理解和抽象的方法，是计算机编程技术发展到一定阶段后到产物，是一种高级的编程思想。

面向对象是把事务分解成为一个个对象，然后由对象之间分工与合作。在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工。

面向对象编程具有灵活、代码可复用、容易维护和开发的优点，更适合多人合作的大型软件项目。

**面向对象的特性：**

- 封装性：不考虑内部实现，只考虑功能实现，把一些比较散的，单一的值，有结构的组装成一个整体。把一些隐藏的值不暴露给外界。


- 继承性：从已有对象上，继承出新对象，获取已存在的对象已有属性和和方式的一种方式。
- 多态性：一个父类的引用变量，可以指向其任意一个子类对象，简单来说就是同一操作，作用于不同的对象，会产生不同的解释和行为。

**理解：**

- 是一种符合人们思考习惯的思想
- 可以将复杂的事情简单化
- 将程序员从执行者转换成了指挥者
- 完成需求时：
  - 先要去找具有所需的功能的对象来用
  - 如果该对象不存在，那么创建一个具有所需功能的对象
  - 这样简化开发并提高复用

## 面向对象和面向过程区别

**面向过程**

- 强调的是功能行为

- 关注的是解决问题需要哪些步骤


**面向对象**

- 将功能封装进对象，强调具备了功能的对象
- 关注的是解决问题需要哪些对象

当需求单一， 或者简单时， 我们一步一步去操作没问题， 并且效率也挺高。 可随着需求的更改， 功能的增加， 发现需要面对每一个步骤非常麻烦， 这时就开始思索， 能不能把这些步骤和功能再进行封装， 封装时根据不同的功能，进行不同的封装，功能类似的封装在一起。这样结构就清晰多了， 用的时候， 找到对应的类就可以了， 这就是面向对象思想。

## 类与对象的关系

现实生活中可以根据模板创建对象,编程语言也一样,也必须先有一个模板,在这个模板中说清楚将来创建出来的对象有哪些属性和行为。

比如人类，指的是一个范围； 对象：比如某个人，指的是这个范围中具体的对象。

- JavaScript中的类相当于图纸，用来描述一类事物。
- JavaScript中可以自定义类, 但是也提供了一个默认的类叫做Object。

```js
// 创建对象提供的模板
// 类（class）指的是一个范围，描述的是一类事物。怎么描述这个事物（对象），使用属性和方法来描述
// 例如：描述这个人呢？特征（属性，静态的东西，例如：这个小伙子长的很高，体重240，年龄...）、行为（方法，动态的东西，例如：会开车、喜欢洗脚...）
const obj = new Object()
obj.name = '王江'
obj.say = function(){}

const obj2 = {
    name: '王旭',
    say(){}
}

// 面试题
console.log({} == {}) // false
console.log([] == []) // false
```



## 创建对象的方式

1、通过 new Object() 创建对象   

```js
//使用默认类创建一个空对象
var obj = new Object();
//给对象设置属性
obj.name = "小明";
obj.age = 18;
//给对象设置方法
obj.say = function(){
    console.log("我要去跑步了");
}
//使用对象属性和方法
console.log(obj.name);
console.log(obj.age);
obj.say();
```



2、通过字面量创建对象

```js
//字面量方式
var obj = {
    //给对象设置属性
    name : "小明",
    age : 18,
    //给对象设置方法
    say : function(){
        console.log("我要去跑步了");
    }
}
//使用对象属性和方法
console.log(obj.name);
console.log(obj.age);
obj.say();
```



3、使用工厂函数创建对象

- 上面的创建方式, 每创建一个人都需要将代码再写一遍, 冗余代码太多, 所以我们可以创建创建对象的代码封装到一个函数中
- 专门用于创建对象的函数我们称之为工厂函数

第一种形式：构造函数

```js
// 工厂方式创建对象，核心思想是批量创建对象，可以让创建对象更为灵活，减少冗余代码
function person(name, age){
    // 创建一个对象
    const obj = new Object()
    // 添加属性
    obj.name = name
    obj.age = age
    // 添加方法
    obj.say = function(){
        console.log('喜欢演讲！')
    }
    // 把创建的对象返回给外界
    return obj
}
const p1 = person('张三', 18)
const p2 = person('王旭', 20)
console.log(p1, p2)
console.log(p1.say == p2.say) // false
```

第二种形式：字面量

```js
function person(name, age){
    var obj = {
        name : name,
        age : age,
        say : function(){
            console.log("hello");
        }
    }
    return obj;
}
var p1 = person("小明", 18);
var p2 = person("小刚", 20);
console.log(p1, p2);
```



3、函数中的this关键字

**每个函数中都有一个this关键字, 谁调用当前函数, this关键字就是谁**

a、默认情况下直接调用的函数都是由window调用的

```js
function fn(){
	console.log(this);//window
}
fn();
```



b、如果函数作为对象的方法，由对象来调用函数，这个时候函数里面的this就是对象本身

```js
var obj = {
    name : "张三",
    age : 18,
    say : function(){
    	console.log(this); //指的是obj对象本身
    }
}
obj.say();
```

## 对象属性与方法

```js
// instanceof 用于判断实例化对象是否属于某个构造函数
        console.log({} instanceof Object)
        console.log([] instanceof Object)
        console.log([] instanceof Array)
        console.log({} instanceof Array)
        console.log(10 instanceof Object)

// Object.prototype.toString.call 精准判断数据类型
        console.log(Object.prototype.toString.call(10)) // [object Number] --- [object type]
        console.log(Object.prototype.toString.call('a')) // [object String]
        console.log(Object.prototype.toString.call([])) // [object Array]
        console.log(Object.prototype.toString.call({})) // [object Object]
        console.log(Object.prototype.toString.call(function(){})) // [object Function]


  function fn(param){
        // console.log(Object.prototype.toString.call(10).split(' ')[1].slice(0,-1) === 'Number')
        // let type = Object.prototype.toString.call(param)
        // if(type === '[object Object]'){
        //     console.log('ok')
        // }
    }
    fn(10)

// call() 用来改变this指向的
 Object.prototype.toString.call() 

  /*
            改变this指向的三个方法
            + call 
              => 会立即调用函数
            + bind
              => 不会立即调用函数，会返回一个新的函数，让你自己选择是否调用
            + apply
              => 会立即调用函数，传参需要的是一个数组
            this总结
            + 可以使用 call、bind、apply 改变this指向
            + 使用箭头函数的特性
            + 可以进行 this 备份使用
        */
        let obj = {
            myName: '王江'
        }
        function fn(a, b){
            console.log(this.myName, a, b)
        }
        fn.call(obj, 10, 20)
        let res = fn.bind(obj, 10, 20)
        fn.apply(obj, [10, 20])

        let obj = {a: 1, b: 2}
        let obj2 = {name: '王江', age: 18}
        console.log(Object.assign(obj, obj2)) // 合并对象

        console.log(Object.prototype)

        let obj = {a: 1}
        console.log(obj.hasOwnProperty('a')) // obj.hasOwnProperty() 可以判断一个对象是否存在某个属性
        console.log(obj.hasOwnProperty('b'))
```



## 构造函数

1、什么是构造函数？构造函数和工厂函数是一样的，都是专门用来创建对象的，构造函数是工厂函数的简写形式，对代码和存储方式做了优化。

2、构造函数和工厂函数的区别？

构造函数的函数名称必须首字母大写。

构造函数只能通过new关键字来调用。

### 构造函数创建对象：

```js
// 要求1：建议构造函数名称首字母大写，这样做主要是为了和其他函数做区分
function Person(name, age){
    // 要求2：构造函数内部全部使用this来添加属性和方法
    this.name = name
    this.age = age
    this.say = function(){
        console.log('喜欢演讲！')
    }
}
// 要求3：构造函数的调用需要使用new关键字
const p1 = new Person('王旭', 18)
const p2 = new Person('张三', 20)
console.log(p1, p2)

/*
    当咱们使用new关键字来调用函数的时候，函数内部做了以下处理：
    + 第一步
      => 会先在函数内部创建一个对象 const obj = new Object() || const obj = {}
    + 第二步
      => 会把创建的对象赋值给当前的执行上下文对象this this = obj
    + 第三步
      => 可以使用this进行设置属性和方法
    + 第四步
      => 最终会把this返回给外界 return this --- obj
*/
```

```js
// this 指向总结：当使用new关键字来调用函数的时候，函数内部的this指向的是当前的实例化对象
// p1 和 p2 实例化对象
const p1 = new Person('王旭', 18)
const p2 = new Person('张三', 20)

// Person() this 指向总结：如果是函数名加括号来调用函数，那么函数内部的this指向的是全局对象window

// 注意点：在js里面，万物皆对象，你可以把任何东西都当作一个对象来使用
// 把直接给构造函数添加属性和方法的这种行为，称之为静态属性和方法
// 重点：静态属性和方法只能给构造函数本身使用，实例属性和方法只能给实例化对象使用，相互之间不能混用
// money 静态属性
// Person.money = '一个小目标'
// xj 静态方法
Person.xj = function(){
    console.log('洗脚')
}
console.log(Person.money)
Person.xj()

console.log(Person.age) // undefined

const p1 = new Person('王旭', 18)
console.log(p1.money) // undefined
```

**构造函数优化**

内存优化  --- new出的对象都是使用的构造函数中的方法，但是存储不一样，所以会有性能问题。

prototype属性 是函数默认规定。存储在prototype中的方法和属性可以被对应的构造函数创建出来的所有对象共享。

查找规则：先查找自己构造函数中，再去找prototype中的。

对比以下通过面向对象的构造函数实现的封装：

```html
<script>
  function Person() {
    this.name = '佚名'
    // 设置名字
    this.setName = function (name) {
      this.name = name
    }
    // 读取名字
    this.getName = () => {
      console.log(this.name)
    }
  }

  // 实例对像，获得了构造函数中封装的所有逻辑
  let p1 = new Person()
  p1.setName('小明') 
  console.log(p1.name) // 小明

  // 实例对象
  let p2 = new Person()
  console.log(p2.name) // 佚名
</script>
```

封装是面向对象思想中比较重要的一部分，js面向对象可以通过构造函数实现的封装。

同样的将变量和函数组合到了一起并能通过 this 实现数据的共享，所不同的是借助构造函数创建出来的实例对象之

间是彼此不影响的

>总结：
>
>1. 构造函数体现了面向对象的封装特性
>2. 构造函数实例创建的对象彼此独立、互不影响

封装是面向对象思想中比较重要的一部分，js面向对象可以通过构造函数实现的封装。

前面我们学过的构造函数方法很好用，但是 存在`浪费内存`的问题。

## 内置构造函数

> 掌握各引用类型和包装类型对象属性和方法的使用。

在 JavaScript 中**最主要**的数据类型有 6 种，分别是字符串、数值、布尔、undefined、null 和 对象，常见的对象类型数据包括数组和普通对象。其中字符串、数值、布尔、undefined、null 也被称为简单类型或基础类型，对象也被称为引用类型。

在 JavaScript 内置了一些构造函数，绝大部的数据处理都是基于这些构造函数实现的，JavaScript 基础阶段学习的 `Date` 就是内置的构造函数。

```html
<script>
  // 实例化
	let date = new Date();
  
  // date 即为实例对象
  console.log(date);
</script>
```

甚至字符串、数值、布尔、数组、普通对象也都有专门的构造函数，用于创建对应类型的数据。

### Object

`Object` 是内置的构造函数，用于创建普通对象。

```html
<script>
  // 通过构造函数创建普通对象
  const user = new Object({name: '小明', age: 15})

  // 这种方式声明的变量称为【字面量】
  let student = {name: '杜子腾', age: 21}
  
  // 对象语法简写
  let name = '小红';
  let people = {
    // 相当于 name: name
    name,
    // 相当于 walk: function () {}
    walk () {
      console.log('人都要走路...');
    }
  }

  console.log(student.constructor);
  console.log(user.constructor);
  console.log(student instanceof Object);
</script>
```

。

总结：

1. 推荐使用字面量方式声明对象，而不是 `Object` 构造函数
2. `Object.assign` 静态方法创建新的对象
3. `Object.keys` 静态方法获取对象中所有属性
4. `Object.values` 表态方法获取对象中所有属性值

### Array

`Array` 是内置的构造函数，用于创建数组。

```html
<script>
  // 构造函数创建数组
  let arr = new Array(5, 7, 8);

  // 字面量方式创建数组
  let list = ['html', 'css', 'javascript']

</script>
```

数组赋值后，无论修改哪个变量另一个对象的数据值也会相当发生改变。

总结：

1. 推荐使用字面量方式声明数组，而不是 `Array` 构造函数

2. 实例方法 `forEach` 用于遍历数组，替代 `for` 循环 (重点)

3. 实例方法 `filter` 过滤数组单元值，生成新数组(重点)

4. 实例方法 `map` 迭代原数组，生成新数组(重点)

5. 实例方法 `join` 数组元素拼接为字符串，返回字符串(重点)

6. 实例方法  `find`  查找元素， 返回符合测试条件的第一个数组元素值，如果没有符合条件的则返回 undefined(重点)

7. 实例方法`every` 检测数组所有元素是否都符合指定条件，如果**所有元素**都通过检测返回 true，否则返回 false(重点)

8. 实例方法`some` 检测数组中的元素是否满足指定条件   **如果数组中有**元素满足条件返回 true，否则返回 false

9. 实例方法 `concat`  合并两个数组，返回生成新数组

10. 实例方法 `sort` 对原数组单元值排序

11. 实例方法 `splice` 删除或替换原数组单元

12. 实例方法 `reverse` 反转数组

13. 实例方法 `findIndex`  查找元素的索引值

    

### 包装类型

在 JavaScript 中的字符串、数值、布尔具有对象的使用特征，如具有属性和方法，如下代码举例：

```html
<script>
  // 字符串类型
  const str = 'hello world!'
 	// 统计字符的长度（字符数量）
  console.log(str.length)
  
  // 数值类型
  const price = 12.345
  // 保留两位小数
  price.toFixed(2) // 12.34
</script>
```

之所以具有对象特征的原因是字符串、数值、布尔类型数据是 JavaScript 底层使用 Object 构造函数“包装”来的，被称为包装类型。

#### String

`String` 是内置的构造函数，用于创建字符串。

```html
<script>
  // 使用构造函数创建字符串
  let str = new String('hello world!');

  // 字面量创建字符串
  let str2 = '你好，世界！';

  // 检测是否属于同一个构造函数
  console.log(str.constructor === str2.constructor); // true
  console.log(str instanceof String); // false
</script>
```

总结：

1. 实例属性 `length` 用来获取字符串的度长(重点)
2. 实例方法 `split('分隔符')` 用来将字符串拆分成数组(重点)
3. 实例方法 `substring（需要截取的第一个字符的索引[,结束的索引号]）` 用于字符串截取(重点)
4. 实例方法 `startsWith(检测字符串[, 检测位置索引号])` 检测是否以某字符开头(重点)
5. 实例方法 `includes(搜索的字符串[, 检测位置索引号])` 判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false(重点)
6. 实例方法 `toUpperCase` 用于将字母转换成大写
7. 实例方法 `toLowerCase` 用于将就转换成小写
8. 实例方法 `indexOf`  检测是否包含某字符
9. 实例方法 `endsWith` 检测是否以某字符结尾
10. 实例方法 `replace` 用于替换字符串，支持正则匹配
11. 实例方法 `match` 用于查找字符串，支持正则匹配

注：String 也可以当做普通函数使用，这时它的作用是强制转换成字符串数据类型。

#### Number

`Number` 是内置的构造函数，用于创建数值。

```html
<script>
  // 使用构造函数创建数值
  let x = new Number('10')
  let y = new Number(5)

  // 字面量创建数值
  let z = 20

</script>
```

总结：

1. 推荐使用字面量方式声明数值，而不是 `Number` 构造函数
2. 实例方法 `toFixed` 用于设置保留小数位的长度

## 原型对象 prototype

构造函数通过原型分配的函数是所有对象所共享的。

- JavaScript 规定，每一个构造函数都有一个 prototype 属性，指向另一个对象，所以我们也称为原型对象。
- 这个对象可以挂载函数，对象实例化不会多次创建原型上函数，节约内存。这个对象的所有属性和方法，都会被构造函数的所拥有。
- 我们可以把所有对象实例需要共享的属性和方法直接定义在 prototype 对象上，这样所有对象的实例就可以共享这些方法。
- 构造函数和原型对象中的this 都指向 实例化的对象。

```html
<script>
  function Person() {
    
  }
  // 每个函数都有 prototype 属性
  console.log(Person.prototype)
</script>
```

```js
function Person(name, age){
    this.name = name;
    this.age = age;
    // this.say = function(){
    // 	console.log("hello");
    // }
}
//通过原型添加 最专业写法
Person.prototype = {
    say : function(){
        console.log("hello");
    }
}
var p1 = new Person("小明", 18);
var p2 = new Person("小刚", 20);
console.log(p1.say === p2.say); //true
```

```js
// 构造函数
function Person(name, age){
    this.name = name
    this.age = age
    // this.say = function(){
    //     console.log('喜欢演讲！构造函数内部')
    // }
}
/*
    prototype 原型对象
    + 每一个构造函数都存在一个prototype属性，这个属性指向一个对象，对象里面存储的属性和方法可以对所有的这个
    构造函数的实例化对象所共享，把这个对象称之为原型对象
    + 查找规则
      => 如果构造函数本身具有这个方法就直接使用
      => 如果没有这个方法，就去构造函数的原型对象上去找
*/
Person.prototype.say = function(){
    console.log('喜欢演讲！原型对象')
}
console.log(Person.prototype)
// 实例化对象
const p1 = new Person('王旭', 18)
const p2 = new Person('张三', 20)
p1.say()
console.log(p1.say == p2.say) // true

console.log(Array.prototype)
console.log(Date.prototype)

let arr = [10, 20, 30, 60, 80]
// 给内置对象数组的原型上面添加了一个计算和的方法
Array.prototype.getSum = function(){
    let sum = 0
    for(let i=0; i<this.length; i++){
        sum += this[i]
    }
    return sum
}
console.log(arr.getSum())
```

了解了 JavaScript 中构造函数与原型对象的关系后，再来看原型对象具体的作用，如下代码所示：

```html
<script>
  function Person() {
    // 此处未定义任何方法
  }

  // 为构造函数的原型对象添加方法
  Person.prototype.sayHi = function () {
    console.log('Hi~');
  }
	
  // 实例化
  let p1 = new Person();
  p1.sayHi(); // 输出结果为 Hi~
</script>
```



构造函数 `Person` 中未定义任何方法，这时实例对象调用了原型对象中的方法 `sayHi`，接下来改动一下代码：

```html
<script>
  function Person() {
    // 此处定义同名方法 sayHi
    this.sayHi = function () {
      console.log('嗨!');
    }
  }

  // 为构造函数的原型对象添加方法
  Person.prototype.sayHi = function () {
    console.log('Hi~');
  }

  let p1 = new Person();
  p1.sayHi(); // 输出结果为 嗨!
</script>
```

构造函数 `Person` 中定义与原型对象中相同名称的方法，这时实例对象调用则是构造函数中的方法 `sayHi`。

通过以上两个简单示例不难发现 JavaScript 中对象的工作机制：**当访问对象的属性或方法时，先在当前实例对象是查找，然后再去原型对象查找，并且原型对象被所有实例共享。**

```html
<script>
	function Person() {
    // 此处定义同名方法 sayHi
    this.sayHi = function () {
      console.log('嗨!' + this.name)
    }
  }

  // 为构造函数的原型对象添加方法
  Person.prototype.sayHi = function () {
    console.log('Hi~' + this.name)
  }
  // 在构造函数的原型对象上添加属性
  Person.prototype.name = '小明'

  let p1 = new Person()
  p1.sayHi(); // 输出结果为 嗨!小明
  
  let p2 = new Person()
  p2.sayHi() // 输出结果为 嗨!小明
</script>
```

总结：**结合构造函数原型的特征，实际开发中往往会将封装的功能函数添加到原型对象中。**

## constructor 属性


每个原型对象里面都有个constructor 属性（constructor 构造函数）

作用：该属性指向该原型对象的构造函数， 简单理解，就是指向我的爸爸，我是有爸爸的孩子，constructor就是亲子鉴定。

**使用场景：**

如果有多个对象的方法，我们可以给原型对象采取对象形式赋值.

但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 constructor 就不再指向当前构造函数了

此时，我们可以在修改后的原型对象中，添加一个 constructor 指向原来的构造函数。

```JS
Person.prototype = {
    constructor: Person,
    say(){
        console.log('喜欢演讲！原型对象')
    },
    rg(){
        console.log('喜欢运动！原型对象')
    }
}
console.log(Person.prototype)
```

```JS
// constructor  单词 构造函数

 Star.prototype.sing = function () {
   console.log('唱歌')
 }
 Star.prototype.dance = function () {
   console.log('跳舞')
 }
function Star() {
}
// console.log(Star.prototype)
Star.prototype = {
// 从新指回创造这个原型对象的 构造函数
constructor: Star,
sing: function () {
console.log('唱歌')
},
dance: function () {
console.log('跳舞')
},
}
console.log(Star.prototype)
// console.log(Star.prototype.constructor)

// const ldh = new Star()
// console.log(Star.prototype.constructor === Star)
```



## 对象原型 __ proto__  

对象都会有一个属性 __ proto__ 指向构造函数的 prototype 原型对象，所以我们对象可以使用构造函数 prototype 原型对象的属性和方法，就是因为对象有  __ proto__ 原型的存在。

实例对象的对象原型指向构造函数的原型对象。

注意：

-  __ proto__ 是JS非标准属性
- [[prototype]]和 __ proto__ 意义相同
- 用来表明当前实例对象指向哪个原型对象prototype
-  __ proto__ 对象原型里面也有一个 constructor属性，指向创建该实例对象的构造函数

```JS
/*
    _proto_ 隐式原型
    + 通过构造函数创建出来的对象我们称之为“实例对象”。每个实例对象都有一个默认的属性，叫做`_proto_`
    + 实例化对象的__proto__属性指向的是实例化这个对象的构造函数的原型对象（prototype）
*/

// 实例化对象
const p1 = new Person('王旭', 18)
// p1.say()
// console.log(p1.__proto__)
// p1.__proto__.say() 

function Star() {
    }
    const ldh = new Star()
    // 对象原型__proto__ 指向 改构造函数的原型对象
    console.log(ldh.__proto__)
     console.log(ldh.__proto__ === Star.prototype)
    // 对象原型里面有constructor 指向 构造函数 Star
    console.log(ldh.__proto__.constructor === Star)
```



## 原型继承

继承是面向对象编程的另一个特征，通过继承进一步提升代码封装的程度，JavaScript 中大多是借助原型对象实现继承

的特性。

龙生龙、凤生凤、老鼠的儿子会打洞描述的正是继承的含义。

```html
<body>
  <script>
    // 继续抽取   公共的部分放到原型上
    // const Person1 = {
    //   eyes: 2,
    //   head: 1
    // }
    // const Person2 = {
    //   eyes: 2,
    //   head: 1
    // }
    // 构造函数  new 出来的对象 结构一样，但是对象不一样
    function Person() {
      this.eyes = 2
      this.head = 1
    }
    // console.log(new Person)
    // 女人  构造函数   继承  想要 继承 Person
    function Woman() {

    }
    // Woman 通过原型来继承 Person
    // 父构造函数（父类）   子构造函数（子类）
    // 子类的原型 =  new 父类  
    Woman.prototype = new Person()   // {eyes: 2, head: 1} 
    // 指回原来的构造函数
    Woman.prototype.constructor = Woman

    // 给女人添加一个方法  生孩子
    Woman.prototype.baby = function () {
      console.log('宝贝')
    }
    const red = new Woman()
    console.log(red)
    // console.log(Woman.prototype)
    // 男人 构造函数  继承  想要 继承 Person
    function Man() {

    }
    // 通过 原型继承 Person
    Man.prototype = new Person()
    Man.prototype.constructor = Man
    const pink = new Man()
    console.log(pink)
  </script>
</body>
```

## 函数和对象

- JavaScript中的函数是引用类型（对象类型），既然是对象，所以也是通过构造函数创建出来的， “所有函数”都是通过Function构造函数创建出来的对象
- JavaScript中只要是"函数"，就有prototype属性。Function函数的prototype属性指向**Function原型对象**
- JavaScript中只要有**原型对象**就有**constructor**属性。**Function原型对象**的**constructor**指向它对应的构造函数

- JavaScript中万物皆对象，只要是对象就有`__proto__`属性

## 原型链

基于原型对象的继承使得不同构造函数的原型对象关联在一起，并且这种关联的关系是一种链状的结构，我们将原型对象的链状结构关系称为原型链。

就是实例对象与原型之间的链接，每一个对象都有原型，而原型本身又是对象，原型又有原型，依次类推形成的一种链式结构，称之为原型链。



构造函数`function Person(name){this.name=name}` → 拥有原型对象`prototype`（共享的属性和方法） 

原型对象`prototype`通过`prototype.constructor`指向 → 构造函数`function Person(name){this.name=name}`

构造函数`function Star(name){this.name=name}` → 实例对象 new Person()

实例对象 `new Person()` 通过`__ proto __ .constructor`指向 → 构造函数`function Star(name){this.name=name}`

实例对象 `new Person()` 通过`__ proto __`指向原型对象`prototype`

1、所有的函数都是由Function构造函数实例化出来
2、所有的对象都是由Object的原型对象实例化出来的
3.Object的原型对象，尽头是nul(obiect)

```js
// 1、构造函数线索
// 问题：Person构造函数（对象）是由那个构造函数实例化出来的呢？Function构造函数（顶层）
// 总结：对于构造函数来说，所有的构造函数都是由Function构造函数实例化出来的
function Person(name, age){
    this.name = name
    this.age = age
}
Person.prototype.say = function(){
    console.log('喜欢演讲！原型对象')
}
const p1 = new Person('王旭', 18)

// Function构造函数（顶层）
 console.log(Function)
// Function构造函数原型对象
 console.log(Function.prototype) // ƒ () { [native code] }
 console.log(Function.prototype.constructor)

// Person隐式原型对象
 console.log(Person.__proto__)

// Object隐式原型对象
 console.log(Object.__proto__)

// Array隐式原型对象
 console.log(Array.__proto__)

// 2、原型对象线索
// 问题：原型对象也是对象，那么原型对象是由谁实例化出来的呢？Object原型对象实例化出来的
console.log(Object.prototype)
console.log(Person.prototype.__proto__)
console.log(Function.prototype.__proto__)
console.log(Object.prototype.__proto__) // null
```



```html
<body>
  <script>
    // function Objetc() {}
    console.log(Object.prototype)
    console.log(Object.prototype.__proto__)

    function Person() {

    }
    const ldh = new Person()
    // console.log(ldh.__proto__ === Person.prototype)
    // console.log(Person.prototype.__proto__ === Object.prototype)
    console.log(ldh instanceof Person)
    console.log(ldh instanceof Object)
    console.log(ldh instanceof Array)
    console.log([1, 2, 3] instanceof Array)
    console.log(Array instanceof Object)
  </script>
</body>
```

① 当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性。

② 如果没有就查找它的原型（也就是 __proto__指向的 prototype 原型对象）。

③ 如果还没有就查找原型对象的原型（Object的原型对象）。

④ 依此类推一直找到 Object 为止（null）。

⑤ __proto__对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线。

⑥ 可以使用 instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

## ES6定义类

从ES6开始系统提供了一个名称叫做class的关键字，这个关键字就是专门用于定义类的

概念
语法糖（Syntactic Sugar），也称糖衣语法。指的是在计算机语言中添加的某种语法，这种语法对语言的编译结果和功能并没有实际影响， 但是却能更方便程序员使用该语言。

作用：
通常来说使用语法糖能够减少代码量、增加程序的可读性，从而减少程序代码出错的机会。

```js
class Person{
    //当我们通过new创建对象的时候,系统会自动调用constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
	}
    say(){
    console.log("hello");
	}
}
var p1 = new Person("小明", 18);
var p2 = new Person("小红", 22);
console.log(p1, p2);
console.log(p1.say());
console.log(p1.say === p2.say);//true
```

```js
// 构造函数
function Person(name, age){
    this.name = name
    this.age = age
}
Person.prototype.say = function(){
    console.log('喜欢演讲！原型对象')
}
const p1 = new Person('王旭', 18)

// class 定义类（简化了构造函数的操作）
class Person{
    // constructor函数里面写的代码，其实就是构造函数内部
    constructor(name, age){
        this.name = name
        this.age = age
    }
    // 这里写的代码其实默认就会给你放在原型对象上面
    say(){
        console.log('喜欢演讲！原型对象')
    }
}
let p1 = new Person('王旭', 18)
let p2 = new Person('王江', 16)
console.log(p1.say == p2.say)
```



## OOD面向对象设计 OOA面向对象分析

大规模分工，精密协作，将大问题拆分成小问题，并试图用分工协作来完成的思维方式。

分析模块后，确定职责，确定耦合关系。

**高内聚低耦合**
⾼内聚就是说相关度⽐较⾼的部分尽可能的集中，不要分散。
低耦合就是说两个相关的模块尽可以能把依赖的部分降低到最⼩，不要让两个系统产⽣强依赖。

案例：选项卡

```js
// 面向过程编程
 const aBtn = document.querySelectorAll('.btn span')
 const aLi = document.querySelectorAll('ul li')

 for(let i=0; i<aBtn.length; i++){
     aBtn[i].onclick = function(){
         for(let j=0; j<aBtn.length; j++){
             aBtn[j].className = ''
             aLi[j].className = ''
         }
         this.className = 'bg'
         aLi[i].className = 'show'
     }
 }

// 面向对象编程
// OOA 面向对象分析，需要从各个方面对这个功能进行分析，看代码怎么写比较合理方便后期的使用
// OOD 面向对象设计，确定功能职责（每一个模块，一个模块在对象里面就是一个函数）
function Tab(){
    // 获取元素
    this.aBtn = document.querySelectorAll('.btn span')
    this.aLi = document.querySelectorAll('ul li')
    // 在构造函数内部调用原型上面的方法
    this.init()
}
// 初始化
Tab.prototype.init = function(){
    this.switching()
}
// 切换功能
Tab.prototype.switching = function(){
    // this备份：在能找到this的地方，把这个this进行存储一份，在其他的地方就可以使用了
    let _this = this
    for(let i=0; i<this.aBtn.length; i++){
        this.aBtn[i].onclick = function(){
            for(let j=0; j<_this.aBtn.length; j++){
                _this.aBtn[j].className = ''
                _this.aLi[j].className = ''
            }
            this.className = 'bg'
            _this.aLi[i].className = 'show'
        }
    }
}
new Tab()
```

```js
// 面向对象编程
// OOA 面向对象分析，需要从各个方面对这个功能进行分析，看代码怎么写比较合理方便后期的使用
// OOD 面向对象设计，确定功能职责（每一个模块，一个模块在对象里面就是一个函数）
function Tab(btn, content){
    // 获取元素
    this.aBtn = document.querySelectorAll(btn)
    this.aLi = document.querySelectorAll(content)
    // 在构造函数内部调用原型上面的方法
    this.init()
}
// 初始化
Tab.prototype.init = function(){
    this.switching()
}
// 切换功能
Tab.prototype.switching = function(){
    let _this = this
    for(let i=0; i<this.aBtn.length; i++){
        this.aBtn[i].onclick = function(){
            _this.clearStyle()
            this.className = 'bg'
            _this.aLi[i].className = 'show'
        }
    }
}
// 排他功能
Tab.prototype.clearStyle = function(){
    for(let j=0; j<this.aBtn.length; j++){
        this.aBtn[j].className = ''
        this.aLi[j].className = ''
    }
}
new Tab('.tab .btn span', '.tab ul li')
new Tab('.tab2 .btn span', '.tab2 ul li')
```

```js
// 面向对象编程
// OOA 面向对象分析，需要从各个方面对这个功能进行分析，看代码怎么写比较合理方便后期的使用
// OOD 面向对象设计，确定功能职责（每一个模块，一个模块在对象里面就是一个函数）
 function Tab(btn, content){
     // 获取元素
     this.aBtn = document.querySelectorAll(btn)
     this.aLi = document.querySelectorAll(content)
     // 在构造函数内部调用原型上面的方法
     this.init()
 }
// 初始化
 Tab.prototype.init = function(){
     this.switching()
 }
// 切换功能
// Tab.prototype.switching = function(){
    let _this = this
    for(let i=0; i<this.aBtn.length; i++){
        this.aBtn[i].onclick = function(){
             _this.clearStyle()
            this.className = 'bg'
             _this.aLi[i].className = 'show'
        }
     }
 }
// 排他功能
 Tab.prototype.clearStyle = function(){
     for(let j=0; j<this.aBtn.length; j++){
         this.aBtn[j].className = ''
         this.aLi[j].className = ''
     }
 }

class Tab{
    constructor(btn, content){
        // 获取元素
        this.aBtn = document.querySelectorAll(btn)
        this.aLi = document.querySelectorAll(content)
        // 在构造函数内部调用原型上面的方法
        this.init()
    }
    init(){
        this.switching()
    }
    switching(){
        let _this = this
        for(let i=0; i<this.aBtn.length; i++){
            this.aBtn[i].onclick = function(){
                _this.clearStyle()
                this.className = 'bg'
                _this.aLi[i].className = 'show'
            }
        }
    }
    clearStyle(){
        for(let j=0; j<this.aBtn.length; j++){
            this.aBtn[j].className = ''
            this.aLi[j].className = ''
        }
    }
}
new Tab('.tab .btn span', '.tab ul li')
new Tab('.tab2 .btn span', '.tab2 ul li')
```

## 函数参数对象化

```js
// function fn(num, arr){
//     console.log(num + 10)
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i])
//     }
// }
// fn(10, ['a', 'b', 'c'])

// 注意点：如果封装的时候，函数的参数过多的情况，为了避免参数顺序问题，可以把参数对象化
// options --- {}
function fn(options){
    console.log(options.num + 10)
    for(let i=0; i<options.arr.length; i++){
        console.log(options.arr[i])
    }
}
fn({
    num: 10,
    arr: ['a', 'b', 'c']
        })
```



## 存储方式

一个网页不能访问另一个网页里面的数据，为了数据在不同的页面之间进行共享，所以在HTML5的标准中出现了一个存储方式，可以解决这个问题。

本地存储：将数据存储在本地浏览器中，默认是存储在浏览器里面的，存储其实就是浏览器给你的一个小型的数据库。

常见的使用场景：页面刷新关闭数据不丢失

好处：

1、页面刷新或者关闭不丢失数据，实现数据持久化。

2、容量较大，sessionStorage和 localStorage 约 5M 左右。

####  localStorage（重点）

长期存储，如果不主动删除，会一直存在。

**作用:** 数据可以长期保留在本地浏览器中，刷新页面和关闭页面，数据也不会丢失

**特性：**以键值对的形式存储，并且存储的是字符串， 省略了window

getItem()：读取数据

setItem()：储存数据

removeItem()：删除数据

clear()：删除全部数据

~~~html
<body>
  <script>
    // 本地存储 - localstorage 存储的是字符串 
    // 1. 存储
    localStorage.setItem('age', 18)
    // 2. 获取
    console.log(typeof localStorage.getItem('age'))
    // 3. 删除
    localStorage.removeItem('age')
      
        const list = [{a: 1}, {b: 2}]
       
         localStorage.setItem('username', '王江')
         localStorage.setItem('password', '123')

        // 注意点：当拿不到数据的时候返回的是一个null
         localStorage.removeItem('username')

         localStorage.clear()

        // 存储多条数据的时候，要使用json格式
         localStorage.setItem('cart', JSON.stringify(list))

         localStorage.setItem('a', '哈哈')
         sessionStorage.setItem('b', '呵呵')
  </script>
</body>
~~~

#### sessionStorage（了解）

会话级别的存储（当网页关闭后，数据会自动清除掉）

特性：

- 用法跟localStorage基本相同
- 区别是：当页面浏览器被关闭时，存储在 sessionStorage 的数据会被清除

存储：sessionStorage.setItem(key,value)

获取：sessionStorage.getItem(key)

删除：sessionStorage.removeItem(key)

删除全部数据：sessionStorage.clear()

#### localStorage 存储复杂数据类型

**问题：**本地只能存储字符串,无法存储复杂数据类型.

**解决：**需要将复杂数据类型转换成 JSON字符串,在存储到本地

**语法：**JSON.stringify(复杂数据类型)

JSON字符串：

- 首先是1个字符串
- 属性名使用双引号引起来，不能单引号
- 属性值如果是字符串型也必须双引号

~~~html
<body>
  <script>
    // 本地存储复杂数据类型
    const goods = {
      name: '小米',
      price: 1999
    }
    // localStorage.setItem('goods', goods)
    // console.log(localStorage.getItem('goods'))

    // 1. 把对象转换为JSON字符串  JSON.stringify
    localStorage.setItem('goods', JSON.stringify(goods))
    // console.log(typeof localStorage.getItem('goods'))

  </script>
</body>
~~~



**问题：**因为本地存储里面取出来的是字符串，不是对象，无法直接使用

**解决： **把取出来的字符串转换为对象

**语法：**JSON.parse(JSON字符串)

~~~html
<body>
  <script>
    // 本地存储复杂数据类型
    const goods = {
      name: '小米',
      price: 1999
    }
    // localStorage.setItem('goods', goods)
    // console.log(localStorage.getItem('goods'))

    // 1. 把对象转换为JSON字符串  JSON.stringify
    localStorage.setItem('goods', JSON.stringify(goods))
    // console.log(typeof localStorage.getItem('goods'))

    // 2. 把JSON字符串转换为对象  JSON.parse
    console.log(JSON.parse(localStorage.getItem('goods')))

  </script>
</body>
~~~



## 自执行函数

```js
/*
            自执行函数
            + 立即执行函数
            + IIFE
            + 所谓的自执行函数，就是不需要通过其他的途径调用，会自己直接执行
            + 自执行函数执行完毕后，存储空间会自动销毁，而普通函数存储空间依旧存在
            + 语法
              => (function(){})()
              => (function(){}())
              => !function(){}()
              => ~function(){}()
            + 作用
              => 可以做页面初始化的东西
              => 可以和闭包一起使用
              => 可以做伪模块化
        */
        // 注意点：如果使用自执行函数这种语法，推荐在函数前面添加一个分号，作为分隔符，不然代码会报错
        ;(function(){
            console.log('你好啊')
        })()
        ;(function(){
            console.log('你好啊')
        })()

        (function(){
            console.log('嘿嘿')
        }())

        !function(){
            console.log('呵呵')
        }()

        ~function(){
            console.log('嘻嘻')
        }()

        const fn1 = (function(){
            console.log('你好啊')
        })()
        console.log(fn1)

        const fn2 = function(){
            console.log('哈哈')
        }
        fn2()
        console.log(fn2)
```

## 伪模块化

```html
<body>
    <script src="./js/a.js"></script>
    <script src="./js/b.js"></script>
    <script>
        console.log(modA.num)
        console.log(modB.num)
        modA.tab()
        modB.list()
    </script>
</body>
```

```js
;(function(){
    var num = 10
    function tab(){
        console.log('tab切换功能')
    }
    window.modA = {
        num,
        tab
    }
})()
```

```js
;(function(){
    var num = 20
    function list(){
        console.log('列表功能')
    }
    window.modB = {
        num
    }
})()
```



## 前端模块化

随着Ajax技术的兴起，前后端分离的开发模式逐渐占领了几乎整个市场，现在的服务器带宽也足够完成大量数据交互，于是很多以前在服务器端的逻辑也可以移植到前端来处理了，从而减轻服务器的压力，当然，这样的话Javascript代码就会越来越复杂。而Javascript作为一门松散的弱类型语言，在一个大型项目面前如果没有合理的拆分与规划，将会变得很难维护，这个时候我们就需要把前端逻辑做一个模块化的处理。

**所谓模块化就是把需要重复使用的功能封装成模块，一个页面有一个统筹全局的对象把所有模块引入进来，最终形成一个产品，做成一个完整的项目。**

JS本身在ES6以前没有模块化的，ES6有模块化了，以前主流浏览器对于ES6模块化的支持度不足，所以一般不能直接使用，所以使用第三方的模块化实现。

```js
  /*
    开发中发送请求（你给后端传输数据，后端给你返回数据）
    + 前端和后端进行数据的交互，需要一个服务器的环境，要不然是无法进行操作的（本地完不成），服务器环境其实模拟的就是一个线上真实的环境
    + 开发需要一个服务器环境，但是不可能直接去购买一个服务器或者网上直接买一个云服务器，因为成本太高了
    + 所以为了解决这个问题，有人就提出了使用软件在本地模拟一个服务器环境，用于开发
    + 有很多的服务器环境软件，live server这个软件做的事情就是在本地模拟了一个服务器环境
    + 只要你使用live server打开网页，会自动把网页放在这个插件的服务器环境下，让你便利的进行开发
        */ 
```



### 为什么要用前端模块化

> 早期，js代码量小, 所有Javascript代码可以都写在一个文件里面，只要加载一个js文件就够了。
>
> 但是后来，随着功能需求变多,  所有功能写在一个文件不好维护,  就拆分成了多个文件, 需要依次加载多个文件。如下：

```html
　　<script src="1.js"></script>
　　<script src="2.js"></script>
　　<script src="3.js"></script>
　　<script src="4.js"></script>
　　<script src="5.js"></script>
　　<script src="6.js"></script>
```

>  这段代码依次加载多个js文件。

这样的写法有很大的缺点:

1. 加载的时候，浏览器会停止网页渲染，加载文件越多，网页失去响应的时间就会越长

2. 由于js文件之间存在依赖关系，因此必须严格保证加载顺序（比如上例的1.js要在2.js的前面），依赖性最大的模块一定要放到最后加载，当依赖关系很复杂的时候，代码的编写和维护都会变得困难。


为了解决这两个问题 ：

1. 解决命名冲突

2. 便于依赖管理

   

### 模块化的好处

就好比要生产一台挖掘机，是由各个厂商提供的配件组装出来的，而不是由一家公司从头到尾生产，这样的好处是各个零部件各司其职，如果有一个功能坏掉了只需要找到对应的零部件解决问题即可，从而避免将来维修的麻烦。

作为代码也是同样的道理，一个完整的项目可以由很多个模块组成，如果某部分功能需要修改或者升级只需要找到对应模块的代码进行维护即可，大大提高了代码的可读性以及节约了维护成本。



### 模块化规范

模块的使用一般分为**导入**和**导出**，定义一个模块需要导出出去在需要使用的地方导入。所谓模块化规范就是规定了模块的使用方式，不同的规范制定了不同的导入和导出的方式。常见的模块化规范有如下几种：

#### AMD（Asynchronous Module Definition异步模块定义）

 依赖前置：提前引入，文件开头把需要的模块一次性全部引入，后面直接使用

 前期消耗比较大，后期执行效率很高

 代表作是 require.js

#### CMD（Common Module Definition通用模块定义）

 按需加载：在代码执行过程当中需要一个模块了才去加载

 整个曲线比较平缓

 代表作是sea.js，但是现在已经很少使用了   淘宝 玉伯（花名）

#### ES6 Module

现在大多数主流浏览器都支持了

> 另外：服务器端Node.js遵循commonJS规范，module.exports 导出模块，require引入模块。

#### CommonJS

适用于服务器端的 Javascript 模块化，node.js



### ES6模块化（Module）

**介绍**

- 2015 年发布，ES6语法里面自带了个模块化标准，各大浏览器厂商并不买账
- 2016年开始，Vue出现了，人家出现了一个脚手架(开发的大框架直接给你搭建好)
- 搭建这个架子的时候，内置了ES6模块化标准
- 2018年，各大浏览器厂商开始原生支持ES6模块化标准
- 2018年中，Chrome 率先原生支持ES6模块化
- 语法: 变成了Js的语法，和关键字，不需要任何第三方文件的引入

**特点:** 

- 页面必须在服务器上打开  可以使用 live server 插件
- 如果你想使用模块化语法，script 标签要加一 个属性type=”module"

**使用:**

1.每一个文件都可以作为独立模块，页面都可以作为整合文件

2.导出语法

```js
export var num = 200

export default { 
	导出的内容
}
```

3.导入语法

```js
// 接收export 导出

import {接收变量} from '哪个J5文件'

// 接收 export default 导出

import 变量 from '哪一个JS文件”
```

ES2020 发布新的标准，多了一个按需加载的模块化

```js
语法: var 变量= import(你要加载的文件)

import(你要加载的文件).then(function(){})
```

### 案例：模块化使用

html页面

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>模块化使用</h1>
    <button>新闻</button>
    <button>游戏</button>
    <div class="box"></div>
    <script src="./modules/main.js" type="module"></script>
</body>
</html>
```

main.js 文件

```js
// 入口文件，用于管理其他的文件（整合其他文件的）

// 单个导入功能
import {num, list} from './list.js'
// as 表示重命名
import {num as index, tab} from './tab.js'

console.log(num, index)
// 调用模块里面的方法
list()
tab()

// 默认导入功能
import listMod from './list.js'
import tabMod from './tab.js'

console.log(listMod.num)
console.log(tabMod.num)

listMod.list()

// 注意点：如果这样写导入模块文件会默认进行声明提升，会提升当前的最顶端
// import newsMod from './news.js'
// import gamesMod from './games.js'


const news = document.querySelectorAll('button')[0]
const games = document.querySelectorAll('button')[1]
const box = document.querySelector('div')

// 可以预加载渲染：当你打开页面的时候就加载文件
// import('./news.js').then(res => {
//     box.innerHTML = res.template
// })

news.onclick = ()=> {
    // 按需导入：当你需要的时候才加载（当你点击按钮的时候才加载文件）
    import('./news.js').then(res=>{
        // console.log(res.default.template)
        // console.log(res.template)
        box.innerHTML = res.template
    })
}

games.onclick = ()=> {
    import('./games.js').then(res=>{
        box.innerHTML = res.template
    })
}
```

list.js文件

```js
// 单个导出功能
export let num = 10
export let list = ()=>{
    console.log('我是列表渲染')
}

// 默认导出功能
let num = 10
function list(){
    console.log('我是列表功能')
}
export default {
    num,
    list
}

```

tab.js文件

```js
export let num = 20
export let tab = () => {
  console.log('我是tab切换功能')
}

// 默认导出功能
let num = 20
function tab() {
  console.log('我是tab切换功能')
}
export default {
  num
}
```

news.js文件

```js
export const template = `
    <ul>
        <li>王江喜欢学习</li>
        <li>王旭也喜欢晚上学习</li>
    </ul>
`
export default {
    template
}
```

games.js文件

```js
export const template = `
    <ul>
        <li>王江喜欢玩游戏</li>
        <li>王旭喜欢睡觉...</li>
    </ul>
`
export default {
    template
}
```



## 服务器

我们不可能把数据库丢在用户的电脑上，一个是太大，一个是不安全，所以我们要把数据库放在网络的另一端（远程），所以当前端人员向后端人员索要数据的时候需要网络，我们也不可能把页面也放在用户的电脑上。所以用户也是需要网络来向前端人员所有页面。

- 其实说白了，服务器就是一个电脑，当他跑起来一些程序的时候，就变成了一个服务器
- 只不过会跑一些特殊的程序，需要一些特殊的环境
- 换句话说，我们自己的电脑，跑一些特殊的程序的时候，也可以当作一个小型的服务器来用
  - 只不过计算能力/存储能力/转存能力没有专业的服务器电脑厉害而已

### 服务器是怎么访问的呢

- 涉及到我们的 `url` 地址中的一些内容。
- 比如我们的经常访问的 `www.baidu.com`。
- 这个里面就包含很多的内容，我们看到的这个只是一个省略后的内容，是浏览器帮我们省略掉了一些内容。
- 全部的地址应该是 `https://www.baidu.com:443`。
- 其实一个简单的 `url` 地址是由三部分组成的：
  - 传输协议   
  - 域名  
  - 端口号 

### 传输协议 protocol

我们常见的传输协议是 `http` 和 `https`  超文本传输协议。他们是限制用户和服务器之间交流传输数据的方式和规则。也是我们前端和后端人员交互的规则。

- 规则
  - 建立连接通道
  - 相互通信
  - 关闭连接通道
- `http` 是一种常见协议，不是很安全。
- `https` 是一种加密传输协议。

### 域名 domain

服务器就是一个在 **网络那一头** 的一个电脑。以前，没有域名的概念，大家都是使用 `IP` 地址来访问，也就是 **网络那一头** 的那个电脑的 `IP`，都是一堆数字，不方便记忆。后来就有了一个 **万维网**，他把每一个 IP 地址配套了一个英文的名字，方便用户记忆。所以说，域名就代表着 **网络那一头** 那个电脑的 IP 地址。其实也就是我们要访问哪一个服务器，服务器只认识唯一的ip地址，它是不认识域名的。就有了**DNS**域名解析器。

### 端口号 port

服务器电脑是有很多的文件夹的，不同的文件夹里面存储着不同的内容。可能有个 a 文件夹，里面存储的是首页，可能有个 b 文件夹，里面存储的是一些数据。所以说，你光找到服务器电脑还不行，还得找对文件夹才可以。大家都把文件夹编上号存储了 `0 ~ 255` 一共 256 个。每个文件夹里面还有对应的小文件夹 `0 ~ 255` 一个 256 个。那么一共就有 `256 * 256` 个文件夹，也就是从 `0 ~ 65535`。所以我们的端口号就有 `65536` 个，分别对应着 `0 ~ 65535` 。大家都把 `80` 端口号作为一个网站的默认端口号。

- http 协议默认是 80 端口号

- https 协议默认是 443 端口号

**百度**

- 到现在，我们看百度的完整 url 地址。
- `https://www.baidu.com:443`
  - 以一种加密传输协议来通讯。
  - 访问的是网络上 `IP` 的值为 `119.75.217.109` 的那个电脑。
  - 访问的是第 `443` 号文件夹。
- 这个文件夹里面存储着一个百度的页面。

### 服务器软件

> 使计算机具备提供某种服务能力的应用软件，称为服务器软件，通过安装相应的服务软件，然后进行配置后就可以使计算具备了提供某种服务的能力。

常见服务器分类:  文件服务器、数据库服务器、邮件服务器、Web服务器等。

其中与我们息息相关的是 web服务器, 想让计算机成为 web 服务器, 就要安装服务器软件, 提供 web 服务。

常见的提供web服务的服务器软件

- (1)  IIS windows web 服务器软件

- **(2) apache web 服务器软件 ( 开源免费的 )**

- (3) Tomcat

- (4) Nginx



## node.js

学习node.js 这一门后端语言，方便和后端开发人员进行交互。

- [node官网](https://nodejs.org/en/)
- [node中文网](http://nodejs.cn/) 

什么是 node？

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。其实 node 就是用 javascript 语言写的后端环境。也就是说，我们的 javascript 有了 node 以后，不光是一个前端语言，也是一个后端语言。

**前端 javascript** 

- 三大核心：ECMAScript、DOM、BOM。
- 操作内容：浏览器、解决兼容问题。

**后端 javascript （node）**

- 核心：ECMAScript。
- 操作内容：后端代码、数据库。

也就是说，node 我们不需要解决兼容问题，不需要 DOM 和 BOM，只关注业务逻辑就可以了。

### 下载 node 安装包

我们的电脑是没有自带 node 环境的，需要我们手动下载一个 node 安装包，安装 node 环境。有了 node 环境以后，我们就可以运行 node 了。

- 下载方式

  - 直接到 [node官网](https://nodejs.org/en/) 或者 [node中文网](http://nodejs.cn/)

  - 点击下载就可以


- 注意： **在 node 中文网下载的时候，选择安装包，不要选择 二进制文件**，因为 二进制文件 是一个简单版，我们需要自己配置 **环境变量** 才可以使用。

### 检测安装环境

命令行写入一个指令 node -v 然后按下回车，会得到一个 node 的版本号。能看到版本号表示 node 环境安装成功。

### node 初体验

- 我们的 node 到底是一个什么东西
  - 在 终端（命令行） 中运行 `js` 代码。
  - 也可以用 `.js` 文件写一堆 `js` 代码。
  - 然后不需要浏览器，直接让我们写的 `js` 代码运行在我们自己电脑的终端上。

#### 直接在终端中书写 js 代码

打开命令行书写指令 node，直接按下回车，会看到 光标在闪烁，我们就进入了 node 代码编写环境，直接书写代码就可以了。

#### 在命令行运行一个 js 文件

先新建一个文件夹，在里面写一个 js 文件例如： 桌面/demo文件夹/idnex.js。在文件里面写一些 js 代码：

```
// index.js
console.log('hello node')
```

打开命令行，**要让命令行的路径和你存放这个要执行的 js 文件的目录一致**，切换好以后，我们直接使用指令来运行我们准备好的 js 文件。

```
node index.js
```

控制台输出 `hello node`，现在我们就已经运行了一段 js 代码在命令行了。这也就解释了一下最开始官网说的那句话：Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。

我们的 node 安装完毕以后，就在命令行提供了一个基于 Chrome V8 引擎的运行环境。在这个环境中运行 javascript 代码。这个就是 node.js。



### node 的导入导出

NodeJs基于 Commonjs模块化开发的规范，**它定义一个JS文件就称之为一个模块**。

- `node` 的开发是模块化开发。
- 每一个 js 文件都是一个独立的模块。
- 都有自己独立的作用域。
- 我们可以通过 导入导出 的方式把多个 js 文件合并在一起。

#### 导入

在 node 里面，我们使用 `require` 来导入一个文件

main.js 文件：

```js
// 注意点：在后端模块化规范里面，导入文件后缀名可以省略
const modA = require('./modules/a')
console.log(modA)
console.log(modA.num)
modA.tab()
```

当在命令行运行 `main.js` 文件的时候，首先会把 `a.js` 文件运行一遍，然后再继续执行`main.js`内部的代码。也可以在导入的时候接受另一个文件导出的内容。

a.js 文件：

```js
// a 接受到的内容就是 a.js 这个文件导出的内容
// 如果 a.js 文件中什么都没有导出，那么接受到的就是一个空对象
const a = require('./a.js')
```

#### 导出

我们在写一个 js 文件的时候，可以向外导出一些内容，将来在这个文件被导入的时候，就可以接受到一些内容。

a.js 文件：

```js
// 我是 a.js

// 每一个 js 文件都会有一个对象叫做 module
// 在 module 里面有一个成员，叫做 exports
// 每一个 js 文件会默认把 module.exports 导出
// 也就是说，我们向 module.exports 中添加什么内容
// 那么就会导出什么内容

let num = 10
function tab() {
    console.log('后端代码')
}

// module.exports.modA = {
//     num,
//     tab
// }

// 导出，可以省略modA
module.exports = {
    num,
    tab
}
```

这个a.js 文件被main.js 文件导入的时候，main.js 文件接受到的内容就是一个对象。

main.js 文件：

```js
const a = require('./a.js')
console.log(modA) // { num: 10, tab: [Function: tab] }
```

### node 模块化与常用的内置模块

在 node 的开发过程中把每一个功能独立做成一个模块，然后在使用 导入导出 的方式把他们关联在一起。利于维护，准确定位。我们一般把模块分为三种：

- 内置模块 （node 天生就带有的模块）。
- 自定义模块 （我们自己写的文件）。
- 第三方模块 （从网上下载的别人写好的模块）。

#### path模块

path模块用于处理文件和目录(文件夹)的路径。

~~~javascript
// 专门用来处理文件路径
const path = require('path')

// 获取路径最后一部内容  一般用它来获取文件名称
path.basename('c:/a/b/c/d.html')  // d.html

// 给定的路径连接在一起，把路径片段拼接成一个完整的路径
path.join('users', 'wj', '../','index.html')

// 读取绝对路径
path.resolve(__dirname, 'pages', 'index.html')
// __dirname --- /Users/dingwei/Desktop/CD-HarmonyOS-2403/二阶段/day11/code
~~~

> 在`join`拼接的时候需要注意`../`，该符号会抵消上一层路径，可能会影响我们的主观判断。

#### url模块

URL字符串是结构化的字符串，包含多个含义不同的组成部分。 解析字符串后返回的 URL 对象，每个属性对应字符串的各个组成部分。

~~~javascript
// 用来把url转换成对象的
const url = require('url')

// 定义一个示例 URL 字符串，包含协议、主机、端口、路径名和查询参数。
const href = 'http://www.xxx.com:8080/pathname?username=zhangsan&password=123'

//使用 url.parse 方法解析 URL 字符串，返回一个 Url 对象。第二个参数默认为 false，表示不将查询字符串解析为对象。
console.log(url.parse(href))

// 第二个参数设置为 true,这将把查询字符串解析为一个对象。
console.log(url.parse(href, true))

//在 Node.js 的 url 模块里，query 是 url.parse() 方法解析 URL 字符串后返回的 Url 对象中的一个属性。当你调用 url.parse(urlString, true) 时，第二个参数设为 true，就会把 URL 里的查询字符串解析成一个对象，这个对象就存于 query 属性中。

// 输出解析后的 Url 对象中的查询参数部分，作为一个对象。
console.log(url.parse(href, true).query)

// 输出解析后的查询参数对象中的 username 属性。
console.log(url.parse(href, true).query.username)

// 输出解析后的查询参数对象中的 password 属性。
console.log(url.parse(href, true).query.password)
~~~



#### querystring模块

用于解析和格式化 URL 查询字符串的实用工具。

~~~javascript
const querystring = require('querystring')

// 把查询字符串转成对象
console.log(querystring.parse('username=zhangsan&password=123'))
console.log(querystring.decode('username=zhangsan&password=123'))

// 把对象转成查询字符串
console.log(querystring.stringify({username: 'zhangsan', password: '123' }))
console.log(querystring.encode({username: 'zhangsan', password: '123' }))
~~~

> - decode方法是parse方法的别名
> - encode方法是stringify方法的别名



#### FS 模块

fs 是 node 的一个内置模块，专门用来操作文件的，使用的时候直接导入就可以使用了。

```js
const fs = require('fs')
// 接下来就可以使用 fs 这个变量去操作文件了
```

##### 异步读取文件内容

```js
const fs = require('fs')

// 异步读取文件内容，因为是异步读取，所以要在回调函数里面获取结果
console.log(fs.readFile('./data/hello.txt', 'utf-8', (err, res) => {
  console.log(err, res)
}))
// err 表示读取的时候出现的错误
// res 表示读取到的内容，如果出现错误，那么res 是没有内容的
```

##### 同步读取文件内容

```js
const fs = require('fs')

// 同步读取，因为是同步读取，所以直接以返回值的形式接收读取的内容就可以
const res = fs.readFileSync('./text.txt', 'utf8')
// 同步读取的时候，如果出错会直接在控制台报错，并中断程序继续执行
// 如果没有错误，res 就会得到文件中的内容
```

##### 异步写入文件

```js
const fs = require('fs')
// 异步写入内容
/* 
写入内容的时候，一般不会出现错误，因为如果没有这个文件的话，会创建一个这个文件在向里面写入内容。所以回调函数一般没什么用处，只不过是在写入文件结束后做些事情而已，虽然没有用处，但是必须要写。
*/
fs.writeFile('./data/hello.txt', '我是要写如入的文字', ()=>{
    console.log('写入成功')
})
```

##### 同步写入文件

```js
const fs = require('fs')
// 同步写入因为是写入文件，没有返回值，因为一般都会写入成功。
fs.writeFileSync('./text.txt', '我是要写入的内容')
```



#### HTTP 模块

因为 node 是一个服务端语言，所以 node 一定也可以开启一个服务器，开启一个服务。`http` 这个模块就是专门用来开启服务，并且接受请求，返回响应的。`http` 也是一个内置模块，直接导入使用就行。

```js
// 导入 http 模块
const http = require('http')
// createServer() 可以创建一个服务
// 这个服务默认监听 http 协议
// 这个服务默认监听 localhost 域名
// 返回值就是这个服务
const server = http.createServer((request, response)=>{
/* 
    前端发来的每一个请求都会触发这个函数
    request 包含着所有的请求信息,前端传递给后端的请求信息。
    response 是所有的响应信息,接受客户端请求对象，它包含了与客户端相关的数据和属性。
    客户端请求的方式 get或post request.method  
    客户端请求头信息 request.headers	  
    设置状态码 response.statusCode = 200 
*/
    
// 设置响应头信息 ，用于响应时有中文时乱码解决处理
response.setHeader('content-type', 'text/html;charset=utf-8')
// 客户端请求的url地址 request.url  
 switch(request.url){
        case '/news/list':
// response.end() 向客户端发送响应数据,并结束本次请求的处理过程
            response.end('我是新闻列表数据')
            break
        case '/users/list':
            response.end('我是用户列表数据，呵呵！')
            break
        default:
            response.end('请求地址错误！')
    }    
})

// http://127.0.0.1:2403/users/list 接口

// listen() 可以监听端口号
server.listen(2403, ()=> {
    // 这个函数会在服务开启成功以后执行
    console.log('您的服务器已经开启！')
})
```

## NPM


npm 是一个依赖于 node 环境的大型的包管理器，在我们安装 `node` 的环境的时候，会自动帮我们安装一个 `npm` 环境。我们可以把他想象成一个大超市，一个装着所有我们需要用到的 `插件`/`库`/`框架` 的超市。

在命令行输入指令检测是否安装，能够得到一个版本号就可以了

```shell
$ npm -v
```

```js
 /*
npm
+ 包管理器，什么是包？其实就是咱们项目开发中需要的插件或者框架文件
+ npm把项目开发中常用的插件、库、框架都做了集中化的管理，都是放在了npm官网里面，可以让咱们便利的使用命名来进行文件的下载、删除、还可以记录项目相关的信息...
+ 常用的命令
  => npm init -y 项目初始化
  => npm install（i）包@版本号
  => npm uninstall（un）包@版本号
  => npm install（i）
+ package.json文件
  => 当项目初始化后，npm自动生成一个项目配置文件
  => 配置文件里面记录了项目相关的信息
+ node_modules文件夹
  => 当使用npm下载包的时候，会自动在项目文件里面生成
  => 下载的包都会放在这个文件夹里面
+ npm install
  => 随着项目的开发，node_modules文件夹里面的文件会越来越多，这个文件夹也会越来越大
  => 如果你把这个项目上传到在线平台或者你直接发送给被人，由于这个文件夹的存在会导致整体项目非常大
  => 上传和发送都非常的麻烦，所以一般会把这个文件夹在上传和发送的时候给删除掉
  => 只要项目中存在package.json文件，你只要在开发的时候执行npm i 即可，可以把node_modules文件夹给恢复
+ 注意点
  => 如果下载包的时候不加版本号，默认下载的就是最新的
  => 自定义项目启动命名的时候，start 关键字是不需要加run的，其他的配置启动项目时都需要加run
    */
```



### 下载包

打开命令行，输入下载的指令

```shell
# 表示使用 npm 这个工具下载一个 swiper
$ npm install swiper
```

下载完毕以后，就会在当前目录下多出一个文件夹，叫做 `node_modules`，在这个目录下就会有一个文件夹叫做 `swiper`，就是我们需要的东西了。npm 的下载默认是下载最新版本的包，也可以在下载的时候指定一下我要下载哪一个版本

```shell
# 表示使用 npm 这个工具下载一个 3.3.7 版本的 jquery
$ npm install bootstrap@3.3.7
```

### 删除包

在删除包的时候，我们可以直接去 `node_modules` 文件夹中找到对应的包的文件夹删除掉，但是这样做并不好，我们还是应该使用命令行的指令来删除包。

```shell
# 表示我要删除 jquery 这个包
$ npm uninstall swiper
```

### 管理项目

我们的每一个项目都有可能需要依赖很多的包（有插件/库/框架），npm 会帮助我们记录，我们当前这个项目所使用的包。但是前提是，你要告诉 npm 说： “你来帮我管理整个文件夹”。我们依旧是使用指令在命令行来告诉 npm。

```shell
# 表示告诉 npm 你来帮我们管理整个文件夹（也就是我的整个项目）
$ npm init

package-lock.json的作用：锁定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时大家的依赖能保证一致

npm install 可以恢复被删除的node_modules包

保存到生产依赖(dependencies): npm install <pageName> --save

保存到开发依赖(devDependencies): npm install <pageName> --save-dev
```

### 生产依赖

我们下载的jQuery，在开发时参与源码编写，在发布上线的生产环境中也是需要它的。不仅在开发环境编写代码时要依赖它、线上环境也要依赖它，因此将它归类为"生产依赖"。

```shell
安装时执行 npm install swiper --save，它就会被记录在package.json的dependencies
```

### 开发依赖

假如我们用gulp对html进行压缩，我们通常会用到一个插件gulp-htmlmin。我们只希望它把html压缩完就ok了，并不希望它融入我们的项目代码中，即只存在于开发环境，因此把他归类为"开发依赖

```js
安装时执行 npm install gulp-htmlmin --save-dev它就会被记录在package.json的devependencies下
```

### npm 清除缓存

- 有的时候，有些包下载到一半，因为各种原因失败了（比如突然没有网了）

- 那么这个下载了一半的包 **有可能** 会被缓存下来

- 那么以后你再次下载的时候，就都是失败的状态

- 那么我们就要清除掉缓存以后，在重新下载

  ```shell
  # 表示清除 npm 的缓存
  $ npm cache clear -f
  ```

### 自动重启应用nodemon

在编写调试Node.js项目，修改代码后需要频繁的手动重启应用，非常繁琐。nodemon这个工具，它的作用是监听代码文件的变动，**当代码改变之后，自动重启**。

~~~shell
# 全局安装nodemon
npm i  nodemon -g

# 执行node脚本
nodemon app.js
~~~

### 自定义npm脚本

通过package.json文件中的scripts自定义脚本命令：

~~~javascript
{
  "scripts": {
    "test": "echo hello"
  }
}
~~~

随后就可以在命令行中运行：

~~~shell
npm run test
~~~

### PNMP

- 是一个快速、零配置的包管理器。
- 与 npm 和 yarn 不同的是，它使用硬链接和符号链接来共享依赖包，节省了磁盘空间。
- 提供了更快的安装和更新速度，以及更少的磁盘占用。

npm 是 Node.js 的默认包管理器；

cnpm 是淘宝 NPM 镜像的命令行工具，用于加速安装依赖包；

npx 是 npm 5.2.0 版本后内置的命令行工具，用于临时运行依赖包的可执行文件；

yarn 是 Facebook 开源的包管理器，以速度快和安全可靠著称；

pnpm 是一个快速、零配置的包管理器。



## express

基于 [Node.js](https://nodejs.org/en/) 平台，快速、开放、极简的 Web 开发框架。

简化了http模块搭建服务器的流程，对http进行了封装处理。

```js
const express = require('express')

const app = express()

// 自定义后端接口
// / 表示服务器根地址（localhost || 127.0.0.1）
app.get('/news/list', (req, res)=>{
    res.send({
        code: 1,
        msg: ['震惊王江竟然对她做出了这样的事情', '王旭深夜醉倒在酒吧门口，被别人捡回来家!']
    })
})

app.post('/login', (req, res)=>{
    res.send('我是登录接口')
})

app.listen(2403, ()=>{
    console.log('您的服务器已经开启！')
})
```

## 发送请求过程

三次握手：

1、建立连接 2、传输数据 3、断开连接

第一次握手

- 客户端发了个连接请求消息到服务端
- 服务端收到信息后知道自己与客户端是可以连接成功的，但此时客户端并不知道服务端是否已经接收到了它的请求，所以服务端接收到消息后得应答

第二次握手

- 客户端得到服务端的反馈后，才确定自己与服务端是可以连接上的，这就是第二次握手
- 两次握手已经建立连接，为什么还需要第三个握手呢？
- 例如:客户端发出去的第一个连接请求由于某些原因在网络节点中滞留了导致延迟，直到连接释放的某个时间点才到达服务端，这是个早已失效的报文，但是此时服务端仍然认为这是客户端的建立连接请求第一次握手，于是服务端回应了客户端，第二次握手。

第三次握手

- 如果只有两次握手，那么到这里，连接就建立了，但是此时客户端并没有任何数据要发送，而服务端还在傻傻的等候佳音，造成很大的资源浪费。所以需要第三次握手，只有客户端再次回应一下，就可以避免这种情况。
- 所以说，第三次握手是为了防止已经失效的连接请求报文段突然又传到服务端，因而产生错误。



- 客户端（浏览器）→request→服务器
- 服务器→response→客户端（浏览器）
- 服务器→数据库，数据库→服务器。



**客户端（浏览器）请求步骤:**

1. 发送请求，协议(http)、域名(绑定ip，DNS解析域名)、端口号(服务器文件夹的编号)。
2. 发送请求携带参数(载荷)，整个请求发送出去(叫做请求报文)。
3. 通过http发送请求，请求过程(三次握手、四次挥手)。

**服务器返回数据步骤**

1、不需要身份验证，直接返回数据，如果有就给，没有就给一个提示(查库过程)。

2、如果需要身份验证，还需要解密(token，返回的时候就进行了加密，你发送请求携带过来需要解密出来)的你身份，如果通过就把你对应的数据返回给你。

3、查库过程，验证通过需要链接数据库去拿数据。

**服务器特点：**

服务器是没有记忆功能的，前端和后端完成交互后，前端再次发送请求服务器是不知道是同一个用户发送的。为了解决这个问题，前端和后端进行交互的时候如果需要身份的验证，会有一个token(令牌、凭证)的概念。



**数据库：**

- 数据库其实就是一个软件，用来管理数据(增删改查)。
- MySQL、MongoDB3。
- 数据库安装在服务器。
- 现在的服务器和数据库其实是分开的



## ajax

**什么是ajax**

- Ajax: asynchronous  javascript  and  xml (异步js和xml)

- 是可以与服务器进行(异步/同步)交互的技术之一
- ajax的语言载体是javascript
-  最大特点：页面不刷新
- ajax的一些常见应用：使网页无刷新向web服务器发送请求数据

**ajax出现的历史**

1999年，微软公司发布IE5浏览器的时候嵌入的一种技术。起初名字是XMLHttp，直到2005年，google公司发布了一个邮箱产品gmail，内部有使用ajax技术，该事情引起人们对ajax的注意，也使得一蹶不振的javascript语言从此被人们重视起来。

**XMLHttpRequest对象**

浏览器内置对象，用于与服务器通信(交换数据) ， 由此我们便可实现对网页的部分更新，而不是刷新整个页面。这个请求是异步的，即在往服务器发送请求时，并不会阻碍程序的运行，浏览器会继续渲染后续的结构。

**ajax的运行**

一定要在服务器环境下打开，才能请求成功。

### GET请求

 **请求的创建与发送**

   主流浏览器(火狐、google、苹果safari、opera,包括IE8以上的版本)的创建方式，也是现在主要使用的。

```js
// 1、实例化ajax对象
// 注意点：ajax 并不是一个新的技术，而是几个技术的结合，发送请求还是通过 http 超文本传输协议完成的。
const xhr = new XMLHttpRequest()

/*
	2、填写请求信息
+ 参数1表示请求方式 get、post、put、delete、all（那种请求类型都可以，适用于免费的接口地址）
+ 参数2表示请求地址（后端地址 --- 接口 --- api）
+ 参数3表示同步还是异步（默认异步）
*/ 
 console.log(xhr.readyState) // 0时-未初始化,对象已建立,尚未调用open()

xhr.open('get', 'http://localhost:8888/test/first')
// console.log(xhr.readyState) // 1时-初始化,对象建立未调用send()
// 监听请求状态
xhr.onreadystatechange = ()=>{
/*
xhr.readyState = 2时-发送数据, send()方法调用，但是当前的状态及http头未知,请求未完成
xhr.readyState = 3时-数据传输中, 接受部分数据（如果返回的数据量比较大的，那么只能接收到部分数据。如果返回的数据较为简单，那么会直接拿到结果）
xhr.readyState = 4时-响应内容解析完成
*/
console.log(xhr.readyState)
// 注意点：xhr.readyState 为 4 的时候表示ajax请求状态已经完成，但是返回的结果是否正确还是无法确定，因为最终请求是由 http 发送请求出的
// 只有 ajax 的状态为4，http 状态为200的时候，才能证明拿到是正确返回结果
if(xhr.readyState === 4){
    // 200 是http的状态码 200表示成功 404表示路径错误
    if(xhr.status === 200){
        // 接收后端返回的数据
        console.log(xhr.responseText)
    }else{
        console.log('请求失败')
    }
}

// 注意点：这样写可以拿到正确的结果，但是无法处理失败的情况的
// if(xhr.readyState === 4 && xhr.status === 200){
     console.log(xhr.responseText)
//}
//}
    
// 3、发送请求
xhr.send()
```

手册位置
   http://www.w3school.com.cn/ajax/ajax_xmlhttprequest_create.asp

```js
 // 实例化ajax对象
        const xhr = new XMLHttpRequest()
        /*
            填写请求信息
            + 参数1表示请求方式 get、post、put、delete、all（那种请求类型都可以，适用于免费的接口地址）
            + 参数2表示请求地址（后端地址 --- 接口 --- api）
            + 参数3表示同步还是异步（默认异步）
        */ 
        // get请求携带参数，数据格式采用的是查询字符串方式
        xhr.open('get', 'http://localhost:8888/test/third?name=zhangsan&age=18')
        // 监听请求状态
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    console.log(JSON.parse(xhr.responseText))
                }else{
                    console.log('请求失败')
                }
            }
        }

        // 监听请求的方式
        // xhr.onload = ()=>{
        //     console.log(xhr.responseText)
        // }

        // 发送请求
        xhr.send()
```

例1:在页面中添加一个按钮,点击一次向后台发送一个请求, 后端将一段文字写入a.txt

```html
<input type="button" onclick="fn()" value="点击发送ajax" />
<script>
    function fn(){
        // 1 实例化对象
        let xhr = new XMLHttpRequest();
        // 2 设置请求的类型以及地址
        xhr.open('get','请求地址');
        // 3 发送请求,get请求则设置为空,post请求则设置参数
        xhr.send();
	}
</script>
```

### ajax_get封装

```js

        /*
            ajax_get封装
            + 请求参数
              => @params { string } url 请求地址
              => @params { string } querystr 请求参数
              => @params { function } success 请求成功时的回调
              => @params { function } error 请求失败时的回调
        */
        function ajax_get(options){
            const xhr = new XMLHttpRequest()
            if(options.querystr){
                let str = '?'
                for(let key in options.querystr){
                    str += `${key}=${options.querystr[key]}&`
                }
                str = str.slice(0, -1)
                xhr.open('get', options.url+str)
            }else{
                xhr.open('get', options.url)
            }
            xhr.onreadystatechange = ()=> {
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        options.success && options.success(xhr.responseText)
                    }else{
                        options.error && options.error()
                    }
                }
            }
            xhr.send()
        }
        // 问题：函数的参数传递的顺序不能改变的，如果改变了会直接影响最终的结果
        // ajax_get('http://localhost:8888/test/third', {name: 'zhangsan', age: 18}, function(res){
        //     console.log(res)
        // })
        ajax_get({
            url: 'http://localhost:8888/test/third',
            querystr: {name: 'zhangsan', age: 18},
            success(res){
                console.log(res)
            }
        })

```



### POST请求

**请求步骤**

1)	创建Ajax对象。

2)	设置回调函数。接收后台返回的结果

3)	初始化对象。(获取节点对象)

4)	设置请求头信息“Content-type,application/x-www-form-urlencoded”

5)	发送请求。

**实现请求**

  setRequestHeader()  设置请求头信息  

   application/x-www-form-urlencoded   设置传递参数时,使用的编码格式(默认)

例:以post的方式传递数据

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
    </head>
    <script type="text/javascript">
     function f1(){
        //实例化ajax对象
        var xhr = new XMLHttpRequest();
        //设置请求的参数,设置以post方式发送请求
        xhr.open('post','./post');
         //如果需要像 HTML 表单那样 POST 数据,以&形式传输数据
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        //构造传递的参数,形式与get传参的方式一致
        var data = 'name=张三&age=19';
         //发送请求
         xhr.send(data);
         //接受返回的信息
         xhr.onreadystatechange=function(){
            //验证当前的装态接受返回的信息
            if(xhr.readyState==4){
                //接受服务器返回的信
                var info = xhr.responseText;
                alert(info);
            }
         }
     }
    </script>
    <body>
    <input type="button" name="" value="post请求" onclick="f1();">
    </body>
</html>
```



```js
    const xhr = new XMLHttpRequest()
        xhr.open('post', 'http://localhost:8888/test/fourth')
        // setRequestHeader 设置请求头信息
        // 'application/x-www-form-urlencoded' 表示传输数据的格式像form表单格式一样
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    console.log(xhr.responseText)
                }
            }
        } 
        // 传递数据的格式：formData
        xhr.send('name=zhangsan&age=18')
```

### ajax_post封装

```js
 /*
            ajax_post封装
            + 请求参数
              => @params { string } url 请求地址
              => @params { string } querystr 请求参数
              => @params { function } success 请求成功时的回调
              => @params { function } error 请求失败时的回调
        */
        function ajax_post(options){
            const xhr = new XMLHttpRequest()
            xhr.open('post', options.url)
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
            xhr.onreadystatechange = ()=> {
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        options.success && options.success(xhr.responseText)
                    }else{
                        options.error && options.error()
                    }
                }
            }
            if(options.querystr){
                let str = ''
                for(let key in options.querystr){
                    str += `${key}=${options.querystr[key]}&`
                }
                str = str.slice(0, -1)
                xhr.send(str)
            }else{
                xhr.send()
            }
        }
        ajax_post({
            url: 'http://localhost:8888/test/fourth',
            querystr: {name: 'zhangsan', age: 18},
            success(res){
                console.log(res)
            }
        })
```



### ajax状态

 通过监控请求状态，当状态等于4的时候才能接受数据

 xhrObj.onreadystatechange  - 监听readyState状态，当状态发生改变可调用对应函数处理

ajax五种状态的作用

````js
xhrObj.readyState - 返回当前请求的状态
xhr.readyState = 0时-未初始化,对象已建立,尚未调用open()
xhr.readyState = 1时-初始化,对象建立未调用send()
xhr.readyState = 2时-发送数据,send()方法调用,但是当前的状态及http头未知,请求未完成
xhr.readyState = 3时-数据传输中,接受部分数据
xhr.readyState = 4时-响应内容解析完成
````

例:获取ajax请求过程的四种状态

```js
// 1 实例化对象
let xhr = new XMLHttpRequest(); 
//  2 创建请求
xhr.open('get','http://localhost/web/index.php');
// 3 发送请求
xhr.send();

xhr.onreadystatechange = function(){
    // 4 使用回调函数检测当前的状态
    console.log(xhr.readyState);
    // 获取服务器状态码
    console.log(xhr.status)
    // 接受服务器返回数据
    console.log(xhr.responseText);  
}

```



返回服务器状态码 xhr.status

```http
1**：请求收到，继续处理
2**：操作成功收到，分析、接受
3**：完成此请求必须进一步处理
4**：请求包含一个错误语法或不能完成
5**：服务器执行一个完全有效请求失败

100——客户必须继续发出请求
101——客户要求服务器根据请求转换HTTP协议版本

200——客户端请求成功
201——提示知道新文件的URL     
202——接受和处理、但处理未完成
203——返回信息不确定或不完整
204——请求收到，但返回信息为空
205——服务器完成了请求，用户代理必须复位当前已经浏览过的文件
206——服务器已经完成了部分用户的GET请求

300——请求的资源可在多处得到
301——删除请求数据
302——在其他地址发现了请求数据
303——建议客户访问其他URL或访问方式
304——客户端已经执行了GET，但文件未变化
305——请求的资源必须从服务器指定的地址得到  
306——前一版本HTTP中使用的代码，现行版本中不再使用
307——申明请求的资源临时性删除

400——错误请求，如语法错误
401——请求授权失败
402——保留有效ChargeTo头响应
403——请求不允许
404——没有发现文件、查询或URl
405——用户在Request-Line字段定义的方法不允许
406——根据用户发送的Accept拖，请求资源不可访问
407——类似401，用户必须首先在代理服务器上得到授权
408——客户端没有在用户指定的饿时间内完成请求
409——对当前资源状态，请求不能完成
410——服务器上不再有此资源且无进一步的参考地址
411——服务器拒绝用户定义的Content-Length属性请求
412——一个或多个请求头字段在当前请求中错误
413——请求的资源大于服务器允许的大小
414——请求的资源URL长于服务器允许的长度
415——请求资源不支持请求项目格式
416——请求中包含Range请求头字段，在当前请求资源范围内没有range指示值，请求也不包含If-Range请求头字段
417——服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求

500——服务器产生内部错误
501——服务器不支持请求的函数
502——服务器暂时不可用，有时是为了防止发生系统过载
503——服务器过载或暂停维修
504——关口过载，服务器使用另一个关口或服务来响应用户，等待时间设定值较长
505——服务器不支持或拒绝支请求头中指定的HTTP版本
```



**服务器响应值接收**

如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。

| 属性         | 描述                            |
| ------------ | ------------------------------- |
| responseText | 获得字符串形式的响应数据。      |
| responseXML  | 获得 XML 形式的响应数据(知道)。 |

接受服务器返回值

```javascript
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
    </head>
    <script type="text/javascript">
      function f1(){
        //创建ajax对象
        var xhr  = new XMLHttpRequest();
        //设置请求的地址
        xhr.open('get','./reponse.php');
        
        //显示ajax的状态
        /*
        ajax的四中状态
        0 对象已创建,请求连接未初始化(尚未调用open方法)
        1 请求连接已经已经建立没有调用send方法
        2 请求连接已建立,调用send方法
        3 数据已经开始传输但尚未完成
        4 数据传输已经完成,请求已经完成
         */
           // onreadystatechange 当请求的状态发生改变时,就会触发
        xhr.onreadystatechange=function(){
            //显示五种状态
            //console.log(xhr.readyState);
            //判断当的请求状态等于4时,代表数据传输完成
             if(xhr.readyState==4){
                 if(xhr.status==200){
                    //使用responseText接受服务器端传递的数据
                    //alert(xhr.responseText);
                    //追加显示到页面中
                   document.body.innerHTML+=xhr.responseText;
             }
        }
        
        //alert(xhr.responseText);
        //发送请求,如果是get请求则参数设置为null
        xhr.send();
      }
    </script>
    <body>
    <input type="button" name="" value="点我发送请求" onclick="f1();">
    </body>
</html>
```



### get和post的区别

1 get是地址栏的方式访问的,是可见的

2 get方式传递数据量比较小.安全性低.

3 post以非地址栏的形式访问,能够安全且大量的传递数据

常见post使用

表单中使用, ajax中使用



### 同步和异步请求

异步：不等待ajax请求响应完毕，直接执行下面的代码

同步：等待ajax请求响应完毕后，再执行下面的代码

### 服务返回数据格式处理

**类型**

Text（又称HTML格式）

XML格式（知道有这么回事就行）

JSON格式



**json数据的处理**

使用JOSN.parse()将PHP输出的json字符串转化为对象



### 解构赋值

```js
const obj = {code: 1, msg: '王江'}
// console.log(obj.code)
const {code, msg} = obj
console.log(code, msg)

  // 之前声明变量，需要一个一个去声明
        // 通过结构赋值的方式，来简化变量声明，也方便工作中操作

        // let [a, b, c] = [10, 20, 30]
        // console.log(a, b, c)

        // let [arr, obj] = [['a', 'b'], {name: '王江'}]
        // console.log(arr, obj)

        // let [a, b, c] = '你好啊'
        // console.log(a, b, c)

        // let obj = {name: '张三', age: 18}
        // let {name, age} = obj
        // console.log(name, age)

        let obj = {name: '张三', age: 18, info: {id: 1, like: '篮球'}}
        // console.log(obj.info.like)

        // let {info: {like}} = obj
        let {info} = obj
        console.log(info)
```



### 案例

#### 翻译功能

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        textarea{
            width: 200px;
            height: 200px;
            resize: none;
        }
    </style>
</head>
<body>
    <textarea></textarea>
    <button>翻译</button>
    <textarea></textarea>
    <script src="./js/ajax.js"></script>
    <script>
        const txt1 = document.querySelectorAll('textarea')[0]
        const txt2 = document.querySelectorAll('textarea')[1]
        const btn = document.querySelector('button')

        btn.onclick = ()=>{
            if(txt1.value.trim() === ''){
                alert('请输入城市！')
                return
            }
            ajax_get({
                url: 'http://api.mhimg.cn/api/baidu_fanyi',
                querystr: {txt: txt1.value.trim()},
                success(res){
                    txt2.value = res
                }
            })
        }   
    </script>
</body>
</html>
```

#### 注册功能

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>注册</button>
    <h3></h3>
    <script src="./js/ajax.js"></script>
    <script>
        const btn = document.querySelector('button')
        const h3 = document.querySelector('h3')

        btn.onclick = ()=>{
            ajax_post({
                url: 'http://localhost:8888/users/register',
                querystr: {
                    username: 'wj_000',
                    password: 'wj_000',
                    rpassword: 'wj_000',
                    nickname: 'wj_000'
                },
                success(res){
                    const {code, message} = JSON.parse(res)
                    if(code === 1){
                        if(!confirm('是否去登录？')){
                            return 
                        }
                        location.href = './13_登录页面.html'
                    }else{
                        h3.innerHTML = message
                    }
                }
            })
        }
    </script>
</body>
</html>
```

#### 登录功能

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>登录</button>
    <h3></h3>
    <script src="./js/ajax.js"></script>
    <script>
        const btn = document.querySelector('button')
        const h3 = document.querySelector('h3')

        btn.onclick = ()=>{
            ajax_post({
                url: 'http://localhost:8888/users/login',
                querystr: {
                    username: 'wj_000',
                    password: 'wj_000',
                },
                success(res){
                    // console.log(JSON.parse(res))
                    const {code, token, message, user} = JSON.parse(res)
                    console.log(user)
                    // if(code === 1){
                    //     console.log(token, user)
                    //     localStorage.setItem('token', token)
                    //     localStorage.setItem('username', user.username)
                    //     location.href = './14_index.html'
                    // }else{
                    //     h3.innerHTML = message
                    // }
                }
            })
        }
    </script>
</body>
</html>
```

#### 首页

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>首页</h1>
    <p></p>
    <script src="./js/ajax.js"></script>
    <script>
        const p = document.querySelector('p')
        let username = localStorage.getItem('username')
        if(username){
            p.innerHTML = `欢迎：${username}`
        }else{
            p.innerHTML = '未登录'
        }

        // authorization
        ajax_get({
            url: 'http://localhost:8888//users/info'
        })
    </script>
</body>
</html>
```

## NPM启动项目流程

```js
+ 第一步
=> 拿到项目，查看是否存在package.json文件
+ 第二步
=> 执行pnpm i || install
=> 下载包的时候，会报错（终端飘红 error）
=> 这个时候要把错误信息翻译出来，看看是什么意思（翻译了你还是不明白，那么现在直接丢给ai）
=> 一般的问题都是node版本过高或者高低（老项目使用的node版本都是比较低的，新项目使用是高版本nvm）
=> 一般的问题都是npm镜像源地址（npm默认地址是国外、可以使用cnpm、pnpm，切换镜像源地址nrm）
=> 一般的问题都是网络或者丢包现象，清除缓存
=> mac系统下载npm包的时候，如果是全局的那么需要加sudo权限，权限后面跟下载的命名
=> ...
+ 第三步
=> 查看项目启动命名
=> README.md 项目说明文件（项目的技术栈的介绍、启动命名、后端使用的是什么，包含数据类型等等）
=> 如果没有这个文件，直接去package.json文件查看
=> package.json文件里面有一个script选项，这个选项里面就可以设置启动命名
=> start命名前面不需要加run，其他配置的命名默认需要加run  例如：npm run dev
```



## axios使用

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script src="./libs/axios.min.js"></script>
    <script>
        // 注意点：axios会把后端返回的结果包装到一个对象里面给咱们返回
        // then() 表示成功时的回调函数
        // catch() 表示失败时的回调函数

        // 发送get请求
        // 第一种发送请求的方式
        axios.get('http://localhost:8888/test/third?name=zhangsan&age=18').then(res => {
            console.log(res.data)
        })

        // 第二种发送请求的方法
        axios.get('http://localhost:8888/test/third', { params: { name: 'zhangsan', age: 18 } })
            .then(res => {
                console.log(res.data)
            })

        // 发送post请求
        axios.post('http://localhost:8888/test/fourth', { name: 'zhangsan', age: 18 }).then(res => {
            console.log(res.data)
        })

        // 注意点：如果需要发送简单的请求，没有那么多的配置，可以直接使用axios.get() || axios.post()，如果需要配置很多，那么需要使用axios({})这种格式
        axios({
            url: 'http://localhost:8888/test/fourth',
            method: 'post',
            data: {
                name: 'zhangsan',
                age: 18
            },
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        }).then(res => {
            console.log(res.data)
        })

        /*
            axios使用总结
            + 如果需要发送简单的请求，没有那么多的配置，可以直接使用axios.get() || axios.post()
              => post是没有办法携带参数
              => get携带参数有两种方式，第一种直接地址后面拼接查询字符串，第二种在第二个参数那么传递一个对象，在对象里面填写params选项，选项值是一个对象 
              例如：{params: {name: 'zhangsan', age: 18}}
            + 如果有很多配置，直接使用axios({})这种格式
              => 这种格式里面可以配置请求头信息 例如：headers: {'content-type': 'application/x-www-form-urlencoded'}
              => 如果是post请求，传递参数使用data配置项，值是一个对象。例如：data: {name: 'zhangsan', age: 18}
              => 如果是get请求，传递参数使用params配置项，值是一个对象。例如：params: {name: 'zhangsan', age: 18}
        */
        axios({
            url: 'http://localhost:8888/test/third',
            method: 'get',
            params: {
                name: 'zhangsan',
                age: 18
            }
        }).then(res => {
            console.log(res.data)
        })        
    </script>
</body>

</html>
```

axios封装

```js
// 创建实例时配置默认值
        // 这种封装优势：1、返回的对象是一个单例模式，可以做内存的优化  2、可以把一些请求常用的公共的代码提取出来放在一个地方，减少冗余代码
        const servers = axios.create({
            // 基准地址
            baseURL: 'http://localhost:8888',
            // 服务器超时时间（如果超过这个时间请求结果还是没有返回，默认返回失败）
            timeout: 5000,
            headers: {'content-type': 'application/x-www-form-urlencoded'}
        })

        // servers.get('/test/first').then(res=>{
        //         console.log(res.data)
        // })

        // 注意点：如果不写method配置项，默认发送的是get请求
        // servers({
        //       url: '/test/third',
        //     //   method: 'get',
        //       params: {name: 'zhangsan', age: 18}
        // }).then(res=>{
        //       console.log(res.data)
        // })

       servers({
          url: '/test/fourth',
          method: 'post',
          data: {name: 'zhangsan', age: 18},
          // headers: {'content-type': 'application/x-www-form-urlencoded'},
       }).then(res=>{
          console.log(res.data)
       })
```



## 回调函数的嵌套

回调函数是一个作为变量传递给另外一个函数的函数，它在主体函数执行完之后执行。

**常见的典型异步回调**

```js
    setTimeout(function(){
        console.log('1s之后做的事情');
        setTimeout(function(){
            console.log('2s之后做的事情');
            setTimeout(function(){
               console.log('3s之后做的事情');
            },1000);
        },1000);
    },1000);
```

回调地狱

```js
 /*
            比如我们发送三个 ajax 请求
            + 第一个正常发送
            + 第二个请求需要第一个请求的结果中的某一个值作为参数
            + 第三个请求需要第二个请求的结果中的某一个值作为参数
        */
        ajax_get({
            url: 'http://localhost:2402/user/test1',
            success(res){
                console.log(`第一个请求返回的结果：${res}`)
                ajax_get({
                    url: 'http://localhost:2402/user/test2',
                    querystr: {a: res},
                    success(res){
                        console.log(`第二个请求返回的结果：${res}`)
                        ajax_get({
                            url: 'http://localhost:2402/user/test3',
                            querystr: {b: res},
                            success(res){
                                console.log(`第三个请求返回的结果：${res}`)
                            }
                        })
                    }
                })
            }
        })
```

在回调函数中嵌套,就是上一个函数执行完成,再执行下一个

- 当一个回调函数嵌套一个回调函数的时候
- 就会出现一个嵌套结构
- 当嵌套的多了就会出现回调地狱的情况
- 比如我们发送三个 ajax 请求
  - 第一个正常发送
  - 第二个请求需要第一个请求的结果中的某一个值作为参数
  - 第三个请求需要第二个请求的结果中的某一个值作为参数



## Promise

在JavaScript的世界中，所有代码都是单线程执行的。由于这个“缺陷”，导致JavaScript的所有网络操作，浏览器事件，都必须是异步执行。异步执行可以用回调函数实现。

Promise使ES6中引入的一个异步编程解决方案，与传统的ES5方法相比它的结构更合理，功能更强大。

```js
  /*
            Promise
            + 承诺
            + 作用
              => 用来解决回调地狱问题的
            + 状态
              => 三种状态，分别是：pending（正在进行时）、fulfilled（成功）、rejected（失败）
              => 注意点：Promise失败的状态，必须手动抛出一个失败的异常才能显示 例如：return Promise.reject('失败')
            + 回调函数
              => 成功时的回调：resolve() --- then() 当resolve调用了，会自动执行
              => 失败时的回调：reject() --- catch() 当reject调用了，会自动执行
              => finally：无论成功还是失败都会自动执行的回调函数
        */
        const p = new Promise((resolve, reject)=>{
            resolve('邓为')
            // reject()
        })
        .then((a)=>{
            console.log('参数：'+a)
            console.log('成功')
        })
        .catch(()=>{
            console.log('失败')
            return Promise.reject('失败')
        })
        .finally(()=>{
            console.log('执行了')
        })
        console.log(p)
```



**特点**

`Promise`对象代表一个异步操作，有三种状态：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态.

语法:

```js
  var p = new Promise(function(resolve,reject){})
 resolve 代表 决定(成功); reject 代表 失败
```



**使用**

````js
    const p  = new Promise(function(resolve,reject){
        setTimeout(function(){
           // resolve('我是成功的')
           reject('这是失败的');
        },2000)
    });
````

.then(callback)的使用(成功时调用)

.catch(callback的用法(失败时调用)

```js
  p.then(function(data){
			console.log('resolved成功回调');
			console.log('成功回调接受的值：',data);
		}).catch(function(reason, data){
		    console.log('catch到rejected失败回调');
		     console.log('catch失败执行回调抛出失败原因：',reason);
	});	
效果和写在then的第二个参数里面一样。它将大于10的情况下的失败回调的原因输出
```

注意:resolve和reject的两种状态

```
resolve作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
reject作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
```

```js
 // 例子：王江承诺3s后在输入框里面输入一个大于10的数字？
        function fn(){
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    let num = prompt('请输入一个数字？')
                    if(num>=10){
                        resolve()
                    }else{
                        reject()
                    }
                }, 3000)
            })
        }
        // fn() --- new Promise()
        fn()
        // 连续点上调用方法的使用规则称之为链式调用
        .then(()=>{
            console.log('王江承诺兑现了')
        })
        .catch(()=>{
            console.log('王江言而无信！')
        })
```



**工作中常用方式，结合函数**

我们用Promise的时候一般是包在一个函数中，在需要的时候去运行这个函数

```js
 let promiseFn =()=>{
	 console.log('点击方法被调用')
	 let p = new Promise(function(resolve, reject){
		//做一些异步操作
		setTimeout(function(){
				console.log('执行完成Promise');
				resolve('成功的时候调用');
			}, 2000);
		});
        return p
	}
promiseFn().then(function(data){
     console.log(11111)
}).catch(function(data){
     console.log(2222)
})
```



### 链式调用实现原理

```js
 class Person{
            constructor(name){
                this.name = name
            }
            say(){
                console.log(this.name + '喜欢演讲！')
                return this
            }
            running(){
                console.log(this.name + '喜欢跑步')
            }
        }
        // new Person('王江').say() 函数调用，接收返回值是 this --- new Person()
        new Person('王江')
        .say()
        .running()
```



### promise改造ajax依赖调用

使用promise检测ajax的请求状态，利用promise的成功状态函数，返回ajax请求到的数据

第一步,将ajax进行封装

```js
    const ajaxParam=param=>{
        return new Promise(function(resolve,reject){
            let xhr = new XMLHttpRequest();
        
              xhr.open('get',param.url); // 默认是true,表示异步
      
              
              xhr.onreadystatechange = function(){
                  if(xhr.readyState==4 ){
                      if(xhr.status==200){
                          resolve(xhr.responseText)
                      }else{
                          reject()
                      }

                  }
              }
             xhr.send();
        });
    }
```

第二步:使用then和catch获取结果,

```js
ajaxPromise({type:'get', url:'http//:www.baidu.com',data:null})
.then(function(data){

}).catch(function(data){

});
```

### Promise封装ajax

```
 pAjax({
            url: 'http://localhost:2402/user/test1'
        })
        .then(res=>{
            console.log(`这是第一次请求的结果：${res}`)
            return pAjax({url: 'http://localhost:2402/user/test2', querystr: {a: res}})
        })
        .then(res=>{
            console.log(`这是第二次请求的结果：${res}`)
            return pAjax({url: 'http://localhost:2402/user/test3', querystr: {b: res}})
        })
        .then(res=>{
            console.log(`这是第三次请求的结果：${res}`)
        })
```



### Promise.all()

所有的异步请求完成才执行的方法.

Promse.all在处理多个异步处理时非常有用，比如说一个页面上需要等两个或多个ajax的数据回来以后才正常显示，在此之前只显示loading图标。

```js
let wake = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time / 1000}秒后醒来`)
    }, time)
  })
}

let p1 = wake(3000);
let p2 = wake(2000);

Promise.all([p1, p2]).then((result) => {
  console.log(result)       // [ '3秒后醒来', '2秒后醒来' ]
}).catch((error) => {
  console.log(error)
})
只有两次调用promise都执行完毕,才会执行all
```

### Promise.race()

Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。

```js
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  },1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 500)
})

Promise.race([p1, p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)  // 打开的是 'failed'
})
```

```js
 // Promise.all() 当有多个请求的时候，必须所有的请求都完成时才返回结果
        // const res1 = pAjax({url: 'http://localhost:2402/user/request1'})
        // const res2 = pAjax({url: 'http://localhost:2402/user/request2'})
        // Promise.all([res1, res2]).then(data=>{
        //     console.log(data)
        // })

        // Promise().race() 当有多个请求的时候，那个请求回来的快就返回那个请求
        // Promise.race([res1, res2]).then(data=>{
        //     console.log(data)
        // })

        const ul = document.querySelector('ul')
        pAjax({url: 'http://localhost:2402/user/pic'}).then(res=>{
            const list = JSON.parse(res).slice(0, 200)
            list.forEach(item=>{
                ul.innerHTML += `
                     <li>
                        <img src="${item.src}">
                        <p>${item.title}</p>
                    </li>
                `
            })
        })
```



## ASYNC/AWAIT

- `async/await` 是一个 es7 的语法

- 这个语法是 **回调地狱的终极解决方案**

- 语法：

  ```
  async function fn() {
    const res = await promise对象
  }
  ```

- 这个是一个特殊的函数方式

- 可以 await 一个 promise 对象

- **可以把异步代码写的看起来像同步代码**



### ajax的同源策略

##### 同源策略的基本概念

> 1995年，同源政策由 Netscape 公司引入浏览器。目前，所有浏览器都实行这个政策。
> 同源策略：浏览器不允许我们向别人发送请求，只能向自己的服务器发送请求。当我们想向别人的服务器发送请求的时候，就会被浏览器阻止了，主要是为了安全着想

```javascript
协议相同  
域名相同  
端口相同
```

举例来说，这个网址`http://www.example.com/dir/page.html`协议是`http`，

域名是`www.example.com`，端口是`80` 它的同源情况如下。

```javascript
http://www.example.com/dir2/other.html：同源

file:///F:/phpStudy/WWW/day01/04-demo/04.html 不同源(协议不同)
http://v2.www.example.com/dir/other.html：不同源（域名不同）
http://www.example.com:81/dir/other.html：不同源（端口不同）
```

##### 同源策略的目的

> 同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。

##### 同源策略的限制范围

> 随着互联网的发展，“同源策略”越来越严格，目前，如果非同源，以下三种行为都将收到限制。

```javascript
1. Cookie、LocalStorage 和 IndexDB 无法读取。
2. DOM 无法获得。
3. AJAX 请求在浏览器端有跨域限制
```

    虽然这些限制是很有必要的，但是也给我们日常开发带来不好的影响。比如实际开发过程中，往往都会把服务器端架设到一台甚至是一个集群的服务器中，把客户端页面放到另外一个单独的服务器。那么这时候就会出现不同源的情况，如果我们知道两个网站都是安全的话，我们是希望两个不同源的网站之间可以相互请求数据的。这就需要使用到**跨域** 。



### jsonp跨域

##### 什么是跨域

域:表示不同的域名即网址不一样,如:www.baidu.com想访问www.edrc.cn就是不行的.

    现在有两个网址 第一个 192.168.0.1  第二个 192.168.0.2 那么如果要在第一个的ip下.通过ajax访问第二个域名也是不可以的.
    这是w3c组织为了安全性，做出的限制

• Ajax技术由于受到浏览器的限制(为了安全考虑)，该方法不允许跨域通信。在两个不同域名之间互相,发ajax请求。



#####   如何解决跨域

一个公司，有服务器a, 服务器b,如a服务器要引用b服务器上的图片

```
<img src=”http://www.b.com/a.jpg” />甚至这个图片的路径也可以是线上的.

因为src标签 是没有同源限制。可以借助与script标签中的src属性来实现跨域问题.
```

例1:编辑kuayu.js文件与kuayu.php文件,实现跨域

localhsot下面html文件

 ````js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
      function fn(data){
          console.log(data)
      }
      //凡是通过地址栏传参的都是get方式
    </script>
    <script src="接口地址"></script>
</body>
</html>
 ````

```js
   /*
            async
            + 异步
            + 可以让普通函数变成异步函数
            await
            + 等待
            async和await
            + 它们两个是一个组合，也是基于Promise来实现的
            + 作用
              => 可以帮助咱们解决回调嵌套问题
              => 可以让咱们把代码写的更为优雅

            回调地狱问题（回调函数不断嵌套形成的）
            ajax_get({
                url: 'http://localhost:2402/user/test1',
                success(res){
                    console.log(`第一个请求返回的结果：${res}`)
                    ajax_get({
                        url: 'http://localhost:2402/user/test2',
                        querystr: {a: res},
                        success(res){
                            console.log(`第二个请求返回的结果：${res}`)
                            ajax_get({
                                url: 'http://localhost:2402/user/test3',
                                querystr: {b: res},
                                success(res){
                                    console.log(`第三个请求返回的结果：${res}`)
                                }
                            })
                        }
                    })
                }
            })

            通过Promise改进的回调嵌套的方案
            pAjax({
                url: 'http://localhost:2402/user/test1'
            })
            .then(res=>{
                console.log(`这是第一次请求的结果：${res}`)
                return pAjax({url: 'http://localhost:2402/user/test2', querystr: {a: res}})
            })
            .then(res=>{
                console.log(`这是第二次请求的结果：${res}`)
                return pAjax({url: 'http://localhost:2402/user/test3', querystr: {b: res}})
            })
            .then(res=>{
                console.log(`这是第三次请求的结果：${res}`)
            })
        */
        // 回调地狱问题解决终极方案
        // 总结：工作中如果遇到请求嵌套请求的情况，可以直接使用async和await。如果不是请求嵌套的情况，可以直接使用Promise
        async function requestFn() {
            const res1 = await pAjax({url: 'http://localhost:2402/user/test1'})
            console.log(res1)
            const res2 = await pAjax({url: 'http://localhost:2402/user/test2', querystr: {a: res1}})
            console.log(res2)
            const res3 = await pAjax({url: 'http://localhost:2402/user/test3', querystr: {b: res2}})
            console.log(res3)
        }
        requestFn()
```



##### JOSNP跨域

json + 动态script

```
1 JSON可以传输大量数据。

2 script标签 是没有同源策略限制
```

思路

```
在需要用到外部跨域，再生成 script标签.
```

实际操作

```
script标签没有同源性问题，我们可以借助script标签中的src属性来实现跨域问题。为了灵活使用跨域，一般使用动态生成SCRIPT标签来引用外部JS来实现跨域。

JSONP是指客户端用GET方式传递一个callback参数给服务端，然后在服务端返回数据时将这个callback参数作为函数名来包裹住JSON数据来返回给客户端(生成JS代码)，然后客户端，用JS动态生成script标签，并指定该script的src属性等于服务器返回的数据(服务器生成的JS代码)，这样服务器端返回的数据，就可以成为脚本的一部分。并将该这样客户端就通过callback函数来处理返回数据了。
```

面试题:说一说json与jsonp的一个区别?

```
 答：json是一种通用的数据交换格式，主要实现数据的传输与储存。
	jsonp是一种非官方协议，主要为了解决Ajax跨域请求问题
```

**工作中的写法**

```javascript
function fn(res){
    console.log(res)
}
function jsonp(){
    //动态创建一个script标记
    let script = document.createElement('script')
    //给添加地址
    script.src = 'http://127.0.0.1/test/day24/data/e.php?callback=fn'
    //把其追加到页面中
    document.body.appendChild(script)
}
jsonp()
```



1. 说白了，jsonp的原理就是 借助了script标签 src 请求资源时, 不受同源策略的限制.
2. 在服务端返回一个函数的调用，将数据当前调用函数的实参。
3. 在浏览器端，需要程序要声明一个全局函数，通过形参就可以获取到服务端返回的对应的值





##### 请求淘宝或百度搜索下拉提示



##### 服务器跨域的设置(扩展)

什么是 CORS?

CORS ( Cross-Origin Resource Share)，跨域资源共享，有一系列 HTTP 响应头组成，这些请求头决定浏览器是否阻止前端 js 代码跨域获取资源。

浏览器的同源安全策略默认会组织网页“跨域”获取资源。但是如果接口服务器配置了 CORS 相关的 HTTP 响应头，就可以解除浏览器端跨域访问限制。

注意事项：

主要在服务器端设置HTTP响应头；

**CORS 使用步骤**

安装：

 `npm install cors`

导入：

```js
const cors = require('cors')
```

使用：

```js
app.use(cors())
```



## cookie

```js
  /*
            问题
            + 一个网页的数据无法给另一个网页进行共享的
            + cookie  
              => 可以把数据给另一个网页进行共享
              => 存储大小有限定，大概4kb左右
              => 存在安全性问题，cookie可能会被禁用
              => 存储的cookie，发送请求的时候，会默认携带到服务端
              => cookie必须在服务器环境下使用
              => ...
        */
        // 存储
        // document.cookie = 'name=wangjiang'
        // document.cookie = 'age=18'

        // 读取
        // console.log(document.cookie.split('; '))
        // let arr = document.cookie.split('; ')
        // let obj = {}
        // arr.forEach(item=>{
        //     let newArr = item.split('=')
        //     console.log(newArr)
        //     obj[newArr[0]] = newArr[1]
        // })
        // console.log(obj)

        // let d = new Date('2025-02-20 00:00:00')
        // document.cookie = `username=zhangsan; expires=${d}; path=/`
```



## 函数的两个阶段

### 函数定义阶段

1. 开辟一个 **存储空间**
2. 把函数体内的代码一模一样的放在这个空间内（不解析变量）
3. 把 **存储空间** 的地址给函数名

### 函数调用阶段

1. 按照函数名的地址找到函数的 **存储空间**
2. 形参赋值
3. 预解析
4. 将函数 **存储空间** 中的代码拿出来执行（才解析变量）

```js
// 1、函数定义阶段
// function fn(){}
// const fn2 = ()=>{}
// const fn3 = function(){}

// 2、函数调用阶段
// fn()
// fn2()
// fn3()

// 注意点：正常的情况下，当函数执行完毕后，函数的执行空间会被销毁掉，但是如果给外界返回一个引用数据类型，那么函数的之心空间就不会被销毁
function fn(){
    let a = 10
    return {a}
}
const res = fn()
console.log(res)
res = null
```



### 重新定义函数调用阶段

1. 按照函数名的地址找到函数的 **存储空间**

2. 形参赋值

3. 预解析

4. 在内存中开辟一个 **执行空间**

5. 将函数 **存储空间** 中的代码拿出来在刚刚开辟的 **执行空间** 中执行

6. 执行完毕后，内存中开辟的 **执行空间** 销毁

   ```js
   function fn() {
     console.log('我是 fn 函数')
   }
   fn() 
   ```

   - 函数执行的时候会开辟一个 **执行空间** （我们暂且叫他 `xxff00`）
   - `console.log('我是 fn 函数')` 这个代码就是在 `xxff00` 这个空间中执行
   - 代码执行完毕以后，这个 `xxff00` 空间就销毁了

### 函数执行空间

- 每一个函数会有一个 **存储空间**
- 但是每一次调用都会生成一个完全不一样的 **执行空间**
- 并且 **执行空间** 会在函数执行完毕后就销毁了，但是 **存储空间** 不会
- 那么这个函数空间执行完毕就销毁了，还有什么意义呢？
  - 我们可以有一些办法让这个空间 **不销毁**
  - **闭包**，就是要利用这个 **不销毁的执行空间**

#### 函数执行空间不销毁

- 函数的 **执行空间** 会在函数执行完毕之后销毁

- 但是，一旦函数内部返回了一个 **引用数据类型**，并且 **在函数外部有变量接受** 的情况下

- 那么这个函数 **执行空间** 就不会销毁了

  ```js
  function fn() {
    const obj = {
        name: 'Jack',
        age: 18,
        gender: '男'
    }
    return obj
  }
  const o = fn()
  ```
  
  - 函数执行的时候，会生成一个函数 **执行空间** （我们暂且叫他 `xxff00`）

  - 代码在 `xxff00` 空间中执行

  - 在 `xxff00` 这个空间中声明了一个 对象空间（`xxff11`）

  - 在 `xxff00` 这个执行空间把 `xxff11` 这个对象地址返回了

  - 函数外部 

    o接受的是一个对象的地址没错

    - 但是是一个在 `xxff00` 函数执行空间中的 `xxff11` 对象地址
  - 因为 `o` 变量一直在和这个对象地址关联着，所以 `xxff00` 这个空间一直不会销毁
  
- 等到什么时候，执行一句代码

  ```
  o = null
  ```

    - 此时， `o` 变量比在关联在 `xxff00` 函数执行空间中的 `xxff11` 对象地址

- 那么，这个时候函数执行空间 `xxff00` 就销毁了

## 闭包（closure）

- 概念：闭包就是能够读取其他函数内部变量的函数
- 闭包就是利用了这个函数执行空间不销毁的逻辑
- 有几个条件组成闭包

### 不销毁的空间

- 闭包的第一个条件就是利用了不销毁空间的逻辑

- 只不过不是返回一个 **对象数据类型**

- 而是返回一个 **函数数据类型**

  ```js
  function fn() {
      
    return function () {}
  }
  
  const f = fn()
  ```

  - `f` 变量接受的就是一个 **fn的执行空间** 中的 函数

### 内部函数引用外部函数中的变量

- 涉及到两个函数

- 内部函数要查看或者使用着外部函数的变量

  ```js
  function fn() {
    const num = 100
    
    // 这个函数给一个名字，方便写笔记
    return function a() {
      console.log(num)
    }
  }
  
  const f = fn()
  ```

  - `fn()` 的时候会生成一个 `xxff00` 的执行空间
  - 再 `xxff00` 这个执行空间内部，定义了一个 `a` 函数的 **存储空间** `xxff11`
  - 全局 f 变量接受的就是 `xxff00` 里面的 `xxff11`
  - 所以 `xxff00` 就是不会销毁的空间
  - 因为 `xxff00` 不会销毁，所以，定义再里面的变量 num 也不会销毁
  - 将来 `f()` 的时候，就能访问到 num 变量

### 闭包的特点

- 为什么要叫做特点，就是因为他的每一个点都是优点同时也是缺点
  1. 作用域空间不销毁
     - 优点： 因为不销毁，变量不会销毁，延长了变量的生命周期
     - 缺点： 因为不销毁，会一直占用内存，多了以后就会导致内存溢出
  2. 可以利用闭包访问再一个函数外部访问函数内部的变量
     - 优点： 可以在函数外部访问内部数据
     - 缺点： 必须要时刻保持引用，导致函数执行栈不被销毁
  3. 保护私有变量
     - 优点： 可以把一些变量放在函数里面，不会污染全局
     - 缺点： 要利用闭包函数才能访问，不是很方便

### 闭包概念（熟读并背诵全文）

- 有一个 A 函数，在A 函数内部返回一个 B 函数
- 在 A 函数外部有变量引用这个 B 函数
- B 函数内部访问着 A 函数内部的私有变量
- 以上三个条件缺一不可

```js
/*
    闭包
    + 概念：闭包就是能够读取其他函数内部变量的函数
    + 问题
      => 由于有作用域的存在，默认情况下函数外部是无法访问函数内部的数据
    + 作用
      => 闭包其实就可以在其他的地方读取函数内部的数据
*/ 

// 第一种写法
// function wjFn(){
//     let a = 10
//     function sonFn(){
//         console.log(a)
//     }
//     return sonFn
// }

// 第二种写法
// 闭包作用：可以访问函数内部的数据、延长变量的生命周期、保护私有变量
// 外部函数
function wjFn(){
    let a = 10
    // 内部函数
    return function(){
        console.log(a)
    }
}
const res = wjFn()
res()
```

例子：下标问题

```js
var btn = document.querySelectorAll('button')
// for(var i=0; i<btn.length; i++){
//     btn[i].index = i
//     btn[i].onclick = function(){
//         console.log(this.index)
//     }
// }

// 利于闭包拿到下标
for(var i=0; i<btn.length; i++){
    // function indexFn(i){
    //     // i 属于indexFn的变量或者叫做形参
    //     return function(){
    //         console.log(i)
    //     }
    // }
    /*
        执行步骤
        + 点击第一个按钮的时候
          => indexFn(i) i --- 0，函数调用进行实参的传递 indexFn(0)
          => 在进入函数体之前，先进行形参赋值 i = 0
          => 进入函数体后，执行返回值操作，返回给外界的是一个函数 function(){
                console.log(i)
            }
          => btn[i].onclick 进行赋值，btn[i].onclick = function(){
                console.log(i)
            }
          => 当点击按钮的时候，赋值函数输出的是0
        + 点击第二个按钮的时候
          => indexFn(i) i --- 1，函数调用进行实参的传递 indexFn(1)
          => 在进入函数体之前，先进行形参赋值 i = 1
          => 进入函数体后，执行返回值操作，返回给外界的是一个函数 function(){
                console.log(i)
            }
          => btn[i].onclick 进行赋值，btn[i].onclick = function(){
                console.log(i)
            }
          => 当点击按钮的时候，赋值函数输出的是1
        + ...
    */
    // btn[i].onclick = indexFn(i)

    // 闭包可以配合自执行函数一起使用（简化代码、自执行、优化存储空间）
    btn[i].onclick = (function(i){
        return function(){
            console.log(i)
        }
    })(i)
}
```

例子：计数器

```html
<body>
    <button class="btn1">0</button>
    <button class="btn2">0</button>
    <script>
        const btn1 = document.querySelector('.btn1')
        const btn2 = document.querySelector('.btn2')

        // let count = 0
        // btn1.onclick = ()=>{
        //     count++
        //     btn1.innerHTML = count
        // }
        // btn2.onclick = ()=>{
        //     count++
        //     btn2.innerHTML = count
        // }

        function countFn(){
            // 保护私有变量，延长变量生命周期
            let count = 0
            return function(){
                count++
                return count
            }
        }
        const addFn1 = countFn()
        const addFn2 = countFn()
        btn1.onclick = ()=>{
            btn1.innerHTML = addFn1()
        }
        btn2.onclick = ()=>{
            btn2.innerHTML = addFn2()
        }
    </script>
</body>
```

访问数据的限定

```js
function modifyFn(){
        // 私有变量
        let myName = 'admin'
        // 私有函数
        function getData(){
            return myName
        }
        function modifyData(val){
            myName = val
        }
        // 访问数据权限设定
        return {
            getData,
            modifyData
        }
    }
    const objFn = modifyFn()
    objFn.modifyData('王江')

    const h3 = document.querySelector('h3')
    h3.innerHTML = `欢迎：${objFn.getData()}`
```



## 函数柯里化 Currying

柯里化（英语：Currying），又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术

**作用:**

可以固定相同参数，实现函数调用传参的简单化，可以让参数复用。

**例子：**

假设你是一个商家，要出售商品，为了卖出去更多的商品，今天决定打9折进行售卖，我们可以使用以下函数进行折扣后的售出价格计算

```js
function discount(price, disc) {
		return price * (1 - disc);// discount为小数,例如0.1代表优惠10%
}
```

当有一个顾客购买商品就会使用0.1的折扣去调用一次discount方法，那么当有很多顾客的时候，就会每次都变化discount的第一个参数，而第二个参数就一直重复一样为0.1。这里的参数一直重复一样，其实是可以优化的,我们通过对这个函数进行柯里化来进行一次优化。

```js
/ 柯里化上面的discount函数
function discount(disc) {
	return function(price) {
		return price * (1 - disc);
	}
}

// 这样我们只需要先设定一个折扣
const count = discount(0.1);// 设定一个10%的优化价格
// 接下来只需要对每一个商品的单价传入进行计算即可得到对应的折扣后的价格
const goodPrice1 =  count(5000);// 4500
const goodPrice2 =  count(1000);// 900
const goodPrice3 =  count(3000);// 2700

```

上面的分步调用会让我们对与整个代码逻辑更加清晰，接下来我们还可以进步扩展到，我们可以动态设置折扣力度，假设第二天你需要加大折扣力度，变成优惠30%，那么直接调用这个柯里化后的discountCurry函数进行折扣设置，然后再去计算没意见商品的价格即可：

```js
const count = discount(0.3);// 设定一个10%的优化价格
// 接下来只需要对每一个商品的单价传入进行计算即可得到对应的折扣后的价格
const goodPrice1 =  count(5000);
```



```js
  /*
            柯里化
            + 是把接收多个参数的函数，变换成接收一个单一参数（最初函数的第一个参数）的函数，并且返回接收余下的参数而且返回结果的新函数的技术
            + 作用
              => 可以固定相同参数，实现函数调用传参的简单化
              => 可以让参数复用
        */
        // 通过函数的参数传递输出一个完整的网址
        // function urlFn(protocol, domain, port){
        //     return protocol+ domain + port
        // }
        // const url1 = urlFn('https://', 'www.baidu.com', ':5050')
        // const url2 = urlFn('https://', 'www.jd.com', ':8080')
        // console.log(url1)
        // console.log(url2)

        // 函数柯里化改造：把多个参数改成传递单一的参数，把相同的参数进行固定化
        // function urlFn(protocol){
        //     return function(domain){
        //         return function(port){
        //             return protocol+ domain + port
        //         }
        //     }
        // }
        // const addressFn = urlFn('https://')
        // const url1 = addressFn('www.baidu.com')(':5050')
        // const url2 = addressFn('www.jd.com')(':8080')
        // console.log(url1)
        // console.log(url2)

        // 假设你是一个商家，要出售商品，为了卖出去更多的商品，今天决定打9折进行售卖，我们可以使用以下函数进行折扣后的售出价格计算
        // function totalPrice(price, disc){
        //     return price * (1 - disc)
        // }
        // console.log(totalPrice(1000, 0.1))

        // 函数柯里化
        function totalPrice(disc){
            return function(price){
                return price * (1 - disc)
            }
        }
        const priceFn = totalPrice(.2)
        const goods1 = priceFn(1000)
        const goods2 = priceFn(2000)
        console.log(goods1)
        console.log(goods2)
```



## 继承

- 继承是和构造函数相关的一个应用
- 是指，**让一个构造函数去继承另一个构造函数的属性和方法**
- 所以继承一定出现在 **两个构造函数之间**

### 一个小例子

- 我们之前说，构造函数（类）是对一类行为的描述
- 那么我们类这个概念其实也很抽象
- 比如：
  - 我们说 `国光` / `富士` 都是 苹果的品种，那么我们就可以写一个 `苹果类` 来实例化很多品种出来
  - 而 `苹果` / `梨` 这些东西都是水果的一种，那么我们就可以写一个 `水果类`
  - 说过的统一特点就是 `甜` / `水分大` ，而不同的水果有不同的特征
  - 那么我们就可以让 `苹果类` 来继承 `水果类` 的内容，然后再用 `水果类` 去实例化对象
  - 那么实例化出来的就不光有 `苹果类` 的属性和方法，还有 `水果类` 的属性和方法

### 继承的作用

- 其实说到底，到底什么是继承
- 我们之前说，在我们书写构造函数的时候，为了解决一个函数重复出现的问题
- 我们把构造函数的 **方法** 写在了 `prototype` 上

- 这样，每一个实例使用的方法就都是来自构造函数的 `prototype` 上
- 就避免了函数重复出现占用内存得到情况
- 那么，如果两个构造函数的 prototype 中有一样的方法呢，是不是也是一种浪费
- 所以我们把构造函数 prototype 中的公共的方法再次提取
- 我们准备一个公共的构造函数，让构造函数的 `__proto__` 指向这个公共的构造函数的 `prototype`

### 常见的继承方式

- 我们有一些常见的继承方式来实现和达到继承的效果

- 我们先准备一个父类（也就是要让别的构造函数使用我这个构造函数的属性和方法）

  ```js
  function Person() {
      this.name = 'Jack'
  }
  
  Person.prototype.sayHi = function () {
      cosnole.log('hello')
  }
  ```

- 这个 `Person` 构造函数为父类

- 让其他的构造函数来继承他

- 当别的构造函数能够使用他的属性和方法的时候，就达到了继承的效果

#### 原型继承

- 原型继承，就是在本身的原型链上加一层结构

  ```js
  function Student() {}
  Student.prototype = new Person()
  ```

```js
 // 继承：一个对象继承另一个对象的属性和方法
        // 注意点：继承一定是发生在同类之间的
        // 原型继承：利于的是原型链的规则来实现继承
        function Father(name, age){
            this.name = name
            this.age = age
        }
        Father.prototype.money = function(){
            console.log('父：非常能赚钱！')
        }

        function Son(name, age){
            // this.name = name
            // this.age = age
        }
        // 问题：虽然实现了继承，但是给子构造函数的原型上面添加的方法，父类构造函数还是能使用，这个肯定不能影响父类构造函数才行
        // Son.prototype = Father.prototype

        // 折中处理，可以把父类的实例化对象赋值给子类构造函数的原型对象
        Son.prototype = new Father('王炎煦阳', 18)

        Son.prototype.love = function(){
            console.log('子：潇洒恋爱')
        }

        const s1 = new Son()
        s1.money()
        s1.love()

        // new Father('王江', 30).love() // 报错

        console.log('子原型对象：', Son.prototype)
        console.log(s1.name)
        console.log(s1.age)
```



- 原型继承优缺点：

  优点：构造函数体内和原型上的都可以继承

  缺点：

  一个构造函数的内容，在两个位置传递参数

  继承来的属性不再子类实例的身上

#### 借用构造函数继承

- 把父类构造函数体借用过来使用一下而已

  ```js
  function Student() {
    Person.call(this)
  }
  ```



```js
  function Father(name, age){
            this.name = name
            this.age = age
        }
        Father.prototype.money = function(){
            console.log('非常能赚钱！')
        }

        // call() 作用：改变函数的this指向，并立即调用函数
        function Son(name, age){
            // 借用构造函数继承
            Father.call(this, name, age)
        }
        const s = new Son('王小江', 18)
        console.log(s)
```



- 借用构造函数继承优缺点：

  优点：

  继承来的属性是在自己身上

  我们一个实例化过程在一个位置传递参数

  缺点：

  只能继承父类构造函数体内的内容

  父类原型上的内容不能继承

#### 组合继承

- 就是把 `原型继承` 和 `借用构造函数继承` 两个方式组合在一起

  ```js
  function Student() {
    Person.call(this)
  }
  Student.prototype = new Person()
  ```



```js
   // 组合继承
        function Father(name, age){
            this.name = name
            this.age = age
        }
        Father.prototype.money = function(){
            console.log('非常能赚钱！')
        }

        function Son(name, age){
            // 借用构造函数继承
            Father.call(this, name, age)
        }
        // 原型继承
        Son.prototype = new Father()

        Son.prototype.love = function(){
            console.log('潇洒恋爱')
        }
        const s = new Son('王小江', 18)
        console.log(s)
        s.money()
```



- 组合继承的优缺点：

  优点：

  父类构造函数体内和原型上的内容都能继承

  继承下来的属性放在自己身上

  在一个位置传递所有的参数

  缺点：

  当你给子类添加方法的时候，实际上是添加在父类的实例身上

### ES6 的继承

- es6 的继承很容易，而且是固定语法

  ```js
  // 下面表示创造一个 Student 类，继承自 Person 类
  class Student extends Person {
      constructor () {
          // 必须在 constructor 里面执行一下 super() 完成继承 
          super()
      }
  }
  ```




```js
  // ES6的继承实际上实现原理就是组合继承
        class Father{
            constructor(name, age){
                this.name = name
                this.age = age
            }
            money(){
                console.log('小目标')
            }
        }
        class Son extends Father {
            constructor(name, age, sex){
                // 注意点：super() 函数必须放在构造函数的最前面
                super(name, age)
                this.sex = sex
            }
            love(){
                console.log('恋爱了')
            }
        }
        const s = new Son('王小江', 18, '男')
        console.log(s)
        s.love()
        s.money()
```



例子：拖拽继承

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        html, body{
            height: 100%;
        }
        .drag1{
            width: 200px;
            height: 200px;
            background-color: hotpink;
            position: absolute;
        }
        .drag2{
            width: 200px;
            height: 200px;
            background-color: gold;
            position: absolute;
        }
    </style>
</head>
<body>
    <div class="drag1"></div>
    <div class="drag2"></div>
    <script>
        class Drag {
            constructor(ele){
                this.ele = document.querySelector(ele)
                this.init()
            }
            init(){
                this.down()
                this.up()
            }
            down(){
                this.ele.onmousedown = (e)=>{
                    let l = e.offsetX
                    let t = e.offsetY
                    this.move(l, t)
                }
            }
            move(l, t){
                document.onmousemove = (e)=>{
                    let x = e.pageX - l
                    let y = e.pageY - t
                    this.ele.style.left = x + 'px'
                    this.ele.style.top = y + 'px'
                }
            }
            up(){
                this.ele.onmouseup = ()=>{
                    document.onmousemove = null
                }
            }
        }
        new Drag('.drag1')

        // 希望第二个盒子在拖拽的时候限定可移动范围
        class Drag2 extends Drag {
            constructor(ele){
                super(ele)
            }
            // 重写move函数
            move(l, t){
                document.onmousemove = (e)=>{
                    let x = e.pageX - l
                    let y = e.pageY - t
                    if(x<=0){
                        x = 0
                    }else if(x>=document.body.offsetWidth - this.ele.offsetWidth){
                        x = document.body.offsetWidth - this.ele.offsetWidth
                    }
                    if(y<=0){
                        y = 0
                    }else if(y>=document.body.offsetHeight - this.ele.offsetHeight){
                        y = document.body.offsetHeight - this.ele.offsetHeight
                    }
                    this.ele.style.left = x + 'px'
                    this.ele.style.top = y + 'px'
                }
            }
        }
        new Drag2('.drag2')
    </script>
</body>
</html>
```



## 深浅拷贝

首先浅拷贝和深拷贝只针对引用类型。

### 浅拷贝

浅拷贝：拷贝的是地址，对象的复制只是复制对象的引用，可以改变原始数据的值。

常见方法：

1. 拷贝对象：Object.assgin() / 展开运算符 {...obj} 拷贝对象。
2. 拷贝数组：Array.prototype.concat() 或者 [...arr]。

>如果是基本数据类型拷贝值，引用数据类型拷贝的是地址

### 深拷贝

深拷贝：拷贝的是对象，不是地址。彻底复制一个对象，而不是简单的拷贝对象的引用，拷贝后不能修改原始数据的值。

常见方法：

1. 通过递归实现深拷贝
2. lodash/cloneDeep
3. 通过JSON.stringify()实现

```js
// 浅拷贝：对象的复制只是复制对象的引用，可以改变原始数据的值
let obj = { name: '张三', age: 18 }
let obj2 = obj
obj2.name = '陈辰'
console.log(obj)

// 注意点：在拷贝数据的时候，需要查看引用数据类型拷贝的是地址还是整个对象，如果是引用地址说明是浅拷贝，反之亦然
let obj = { name: '张三', age: 18, like: ['篮球', '足球'] }
let obj2 = {}
for (let key in obj) {
    obj2[key] = obj[key]
}
obj2.like[0] = '哈哈'
console.log(obj)

// 注意点：引用数据类型在拷贝的时候拷贝的是地址，基本数据类型在拷贝的时候直接拷贝的值
// 深拷贝的实现
let obj = { name: '张三', age: 18, like: ['篮球', '足球'] }
let obj2 = JSON.parse(JSON.stringify(obj))
obj2.like[0] = '哈哈'
console.log(obj, obj2)
```



## 数据劫持

+ 以原始数据为基础, 对数据进行一份复刻,复刻出来的数据是不允许修改的, 值是从原始数据里面获取的
+ 实际上就是给对象设置成员

```javaScript
 语法: Object.defineProperty(哪一个对象, 属性名, { 配置项 })
      配置项:
        => value: 该属性对应的值,
        => configurable 改属性是否能被删除
        => writable: 该属性时候可被重写, 默认是 false
        => emunerable: 该属性是否可被枚举, 默认是 false
        => get: 是一个函数, 叫做 getter 获取器, 可以来决定该属性的值
          -> get 函数的返回值, 就是当前这个属性的值
          -> 注意: 不能和 value 和 writable 一起使用, 会报错
        => set: 是一个函数, 叫做 setter 设置器, 当你需要修改该属性的值的时候, 会触发该函数
```

```js
/*
    Object.defineProperty() 
    + 数据劫持，所谓的数据劫持就是对对象的操作可以做一些限定
    + 配置项:
      => value: 该属性对应的值,
      => configurable 改属性是否能被删除
      => writable: 该属性时候可被重写, 默认是 false
      => emunerable: 该属性是否可被枚举, 默认是 false
      => get: 是一个函数, 叫做 getter 获取器, 可以来决定该属性的值
        -> get 函数的返回值, 就是当前这个属性的值
        -> 注意: 不能和 value 和 writable 一起使用, 会报错
      => set: 是一个函数, 叫做 setter 设置器, 当你需要修改该属性的值的时候, 会触发该函数
*/
// 一个对象没有做任何限定，可以任意进行操作。数据劫持就可以限定你对对象可以做哪些操作，哪些操作不能做
let obj = {
    name: '张三',
    age: 18
}
obj.name = '王江'
delete obj.age
console.log(obj)
for (let key in obj) {
    console.log(obj[key])
}

let obj = {}
// 参数1表示你要对那个对象做限定（目标对象）, 参数2表示对对象里面的那个属性进行限定，参数3表示配置项（是一个对象）
Object.defineProperty(obj, 'name', {
    value: '邓为',
    configurable: false,
    writable: true,
    enumerable: false
})
// delete obj.name
obj.name = '王江'
for (let key in obj) {
    console.log(obj[key])
}
console.log(obj)
```

```js
/*
    Object.defineProperty() 
    + 数据劫持，所谓的数据劫持就是对对象的操作可以做一些限定
    + 配置项:
      => get: 是一个函数, 叫做 getter 获取器, 可以来决定该属性的值
        -> get 函数的返回值, 就是当前这个属性的值
        -> 注意: 不能和 value 和 writable 一起使用, 会报错
      => set: 是一个函数, 叫做 setter 设置器, 当你需要修改该属性的值的时候, 会触发该函数
*/
let obj = {}
// 在外界专门声明一个变量用来给对象设置属性值
let myName = '王江'
// 参数1表示你要对那个对象做限定（目标对象）, 参数2表示对对象里面的那个属性进行限定，参数3表示配置项（是一个对象）
Object.defineProperty(obj, 'name', {
    get(){
        console.log('获取：每次你获取属性值的时候都会被默认调用')
        return myName
    },
    set(value){
        // 注意点：在外界设置的属性值，通过set函数的value参数拿到
        myName = value
        console.log('修改：每次你设置属性值的时候都会被默认调用')
    }
})
obj.name = '邓为'
console.log(obj.name)
```



```js
 /*
            Object.defineProperty() 
            + 数据劫持，所谓的数据劫持就是对对象的操作可以做一些限定
            + 配置项:
              => get: 是一个函数, 叫做 getter 获取器, 可以来决定该属性的值
                -> get 函数的返回值, 就是当前这个属性的值
                -> 注意: 不能和 value 和 writable 一起使用, 会报错
              => set: 是一个函数, 叫做 setter 设置器, 当你需要修改该属性的值的时候, 会触发该函数
        */
        // 目标对象（被劫持的对象，需要做操作的对象）
        let obj = {}

        // 在外界专门声明一个变量用来给对象设置属性值
        // let myName = '王江'
        // let age = 19
        // let sex = '男'

        // 为了解决全局变量的命名污染问题，可以使用一个对象的结构来专门做这个事情
        const setValue = {
            name: '王江',
            age: 18
        }

        // 参数1表示你要对那个对象做限定（目标对象）, 参数2表示对对象里面的那个属性进行限定，参数3表示配置项（是一个对象）
        Object.defineProperty(obj, 'name', {
            get(){
                console.log('获取：每次你获取属性值的时候都会被默认调用')
                return setValue.name
            },
            set(value){
                // 注意点：在外界设置的属性值，通过set函数的value参数拿到
                setValue.name = value
                console.log('修改：每次你设置属性值的时候都会被默认调用')
            }
        })
        obj.name = '邓为'
        console.log(obj.name)
```

### 数据相应

```js
 const h1 = document.querySelector('h1')
        // let name = '王江'
        // h1.innerHTML = `他的名字叫做：${name}, 是江湖里面曾经的传说！由于修仙...`
        // name = '王旭'
        // h1.innerHTML = `他的名字叫做：${name}, 是江湖里面曾经的传说！由于修仙...`
        // name = '邓为'
        // h1.innerHTML = `他的名字叫做：${name}, 是江湖里面曾经的传说！由于修仙...`

        // 使用数据劫持实现响应式数据（数据改变了，那么页面也会跟着更新）
        // 目标对象
        const target = {}
        // 设置数据对象
        const setValue = {
            name: '王江'
        }
        // 使用数据劫持
        Object.defineProperty(target, 'name', {
            get(){
                return setValue.name
            },
            set(value){
                setValue.name = value
                render()
            }
        })
        function render(){
            h1.innerHTML = `他的名字叫做：${target.name}, 是江湖里面曾经的传说！由于修仙...`
        }
        render()
```



### 数据劫持升级

```javascript
Object.defineProperties(对象, {})

Object.defineProperties(obj, {

    哪一个属性: { 配置项 },

    哪一个属性: { 配置项 }

})
```



```js
   // 目标对象（被劫持的对象，需要做操作的对象）
        let obj = {}

        // 为了解决全局变量的命名污染问题，可以使用一个对象的结构来专门做这个事情
        const setValue = {
            name: '王江',
            age: 18
        }

        // 参数1表示你要对那个对象做限定（目标对象）, 参数2表示对对象里面的那个属性进行限定，参数3表示配置项（是一个对象）
        // Object.defineProperty(obj, 'name', {
        //     get(){
        //         console.log('获取：每次你获取属性值的时候都会被默认调用')
        //         return setValue.name
        //     },
        //     set(value){
        //         // 注意点：在外界设置的属性值，通过set函数的value参数拿到
        //         setValue.name = value
        //         console.log('修改：每次你设置属性值的时候都会被默认调用')
        //     }
        // })

        // Object.defineProperty(obj, 'age', {
        //     get(){
        //         console.log('获取：每次你获取属性值的时候都会被默认调用')
        //         return setValue.age
        //     },
        //     set(value){
        //         // 注意点：在外界设置的属性值，通过set函数的value参数拿到
        //         setValue.age = value
        //         console.log('修改：每次你设置属性值的时候都会被默认调用')
        //     }
        // })

        // 数据劫持升级版本
        Object.defineProperties(obj, {
            'name': {
                get(){
                    return setValue.name
                },
                set(value){
                    setValue.name = value
                }
            },
            'age': {
                get(){
                    return setValue.age
                },
                set(value){
                    setValue.age = value
                }
            }
        })
        obj.name = '邓为'
        obj.age = 20
        console.log(obj.name, obj.age)
```



### 数据代理 Proxy

ES6 提供的语法

​        => 内置构造函数 Proxy(代理原始对象, { 配置项 })

​        \+  返回的实例对象, 就是代理结果数据

```javascript
 const obj = { name: 'Jack', age: 18 }
    // 开始代理
    const result = new Proxy(obj, {
      // 配置 get 来进行代理设置
      get (target, property) {
        // target 就是你要代理的目标对象, 我们当前案例内就是 obj
        // property 就是该对象内的每一个属性, 自动遍历
        return target[property]
      },
      // 配置 set 来进行修改
      set (target, property, val) {
        // target 就是你要代理的目标对象, 我们当前案例内就是 obj
        // property 就是该对象内的你要修改的那个属性
        // val 就是你要修改的那个属性的值
        target[property] = val
        console.log('你试图修改 ' + property + ' 属性, 你想修改为 : ', val, ' 我需要根据你修改的内容重新渲染页面')
      }
    })

```

```js
   const h1 = document.querySelector('h1')
        // 目标对象（代理的原始对象，你需要操作的对象，最终返回一个结果，可以使用这个结果进行一些列其他的操作）
        const obj = {
            name: '王江',
            age: 18
        } 
        // 使用代理，Proxy是代理的意思，其实就是对数据劫持进行了封装和升级改造
        const result = new Proxy(obj, {
            get(target, property){
                return target[property]
            },
            set(target, property, value){
                target[property] = value
                render()
            }
        })
        function render(){
            h1.innerHTML = `他的名字叫做：${result.name}, 是江湖里面曾经的传说！由于修仙...，已经过来无数岁月，他的年龄看起来像${result.age}岁！`
        }
        render()
        console.log(result)
```



## 可选链和空集合并符

```js
 // ? 可选链：可以防止一个未知的属性报错
        // const obj = {
        //     name: "Alice",
        //     cat: {
        //         name: "Dinah",
        //     },
        //     // dog: {
        //     //     name: '小黑'
        //     // }
        // }
        // console.log(obj.dog?.name)

        // ?? 空集合并符
        // num 表示输入框输入的数量
        let num = 20
        let count = 0
        count += num ?? 1 
        console.log(count)
        let total = 1000 * count
```



## flat方法

作用flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回

参数：可选

指定要提取嵌套数组的深度，默认值为 1

```js
let arr = [1,2,[3,[4,[5]]]]
```

注意点：当传入Infinity时，相当于扁平化最深层次的数组

```js
<body>
    <ul>
        <li>哈哈1</li>
        <li>哈哈2</li>
        <li>哈哈3</li>
        <li>哈哈4</li>
        <li>哈哈5</li>
    </ul>
    <script>
        // 判断数据类型是否为数组
        // console.log(Array.isArray('10'))
        // console.log(Array.isArray({}))
        // console.log(Array.isArray([]))

        // flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
        // 数组扁平化：可以把多维数组转成一位数组
        // const arr = [['a', 'b'], [1, 2, 3, ['10', '20', ['王江', [1, 2]]]]]
        // console.log(arr.flat(2))
        // Infinity 无论几维数组，都可以转成一位数组
        // console.log(arr.flat(Infinity))

        // const arr = ['a', 'b', 'c']
        // includes() 查看数组里面是否存在某个元素
        // console.log(arr.includes('s'))
        // console.log('hello'.includes('e'))
        // console.log('hello'.includes('s'))

        // console.log('hello'.startsWith('h'))
        // console.log('hello'.endsWith('h'))

        // 把其他的类型转成数组类型
        // const aLi = document.querySelectorAll('ul li')
        // console.log(Array.from(aLi))
        // console.log(Array.from('hello'))

        /*
            reduce()
            + 累加器
              => 可以把数组里面的元素进行相加
            + 参数
              => 回调函数
            + 回调函数的参数
              => 参数1表示的是数组的第一个要进行计算的元素（这个值不断变化的）。是每次相加计算的结果
              => 参数2表示的是其他要计算的数组元素
        */
        // const arr = [10, 20, 30, 40, 50, 60]
        // const result = arr.reduce((first, item)=>{
        //     return first + item
        // }, 0) // 默认值
        // console.log(result)

        // const cartList = [
        //     {id: 1, name: '小米手机', num:3, price: 2000},
        //     {id: 2, name: '华为手机', num:1, price: 6000},
        //     {id: 3, name: '苹果手机', num:2, price: 5000},
        // ]
        // 计算购物车的总价
        // const result = cartList.reduce((first, item)=>{
        //     return first += item.num * item.price
        // }, 0)
        // console.log(result)

        // reduceRight() 是从后面往前面相加
        // const arr = [10, 20, 30, 40, 50, 60]
        // const result = arr.reduceRight((first, item)=>{
        //     console.log(first)
        // })
    </script>
```



## XSS攻击

XSS攻击通常指的是通过利用网页开发时留下的漏洞，通过巧妙的方法注入恶意指令代码到网页，使用户加载并执行攻击者恶意制造的网页程序。这些恶意网页程序通常是JavaScript  

解决方案：请记住两条原则：过滤输入和转义输出



## Symbol 类型

ES5中包含5种原始类型：string、number、boolean、null和undefined。ES6引入了第6种原始类型——Symbol

ES5的对象属性名都是字符串，很容易造成属性名冲突。比如，使用了一个他人提供的对象，想为这个对象添加新的方法，新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的，这样就从根本上防止了属性名冲突。这就是ES6引入`Symbol`的原因。

Symbol 值通过`Symbol`函数生成。这就是说，对象的属性名可以有两种类型：一种是字符串，另一种是Symbol类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

注意点： symbol不能使用new去构造， 因为symbol是一个基本数据类型。

```js
var obj = {};
// obj.name = "张三";
// obj.name = "老王";

obj[Symbol("name")] = "张三";
obj[Symbol("name")] = "老王";
console.log(obj);
//返回是一个数组
Object.getOwnPropertySymbols(obj)
```



```js
// 注意点：在ES5的规范中，无论把什么类型添加进对象作为key，最终都会转成字符串类型。默认会调用toString()方法进行转换操作
        // const obj = {}
        // obj[1] = '数字'
        // obj[[1, 2, 3]] = '数组'
        // for(let key in obj){
        //     console.log(typeof key) // string
        // }
        // console.log(obj)

        // console.log([1, 2, 3].toString()) // 1,2,3

        // 产生冲突问题
        // const obj = {name: '王江'}
        // obj['name'] = '王旭'
        // console.log(obj)

        // Symbol() 函数，这个函数返回的类型岁独一无二的，不是引用数据类型，而是一个基本数据类型。Symbol()放的是描述信息，其实你可以理解为值
        // let num1 = 10
        // let num2 = 10
        // console.log(num1 == num2) // true

        // let num1 = Symbol(10)
        // let num2 = Symbol(10)
        // console.log(num1 == num2) // false

        // const obj = {name: '王江'}
        // obj[Symbol('name')] = '王旭'
        // console.log(obj)

        const obj = {
            name: '王江',
            [Symbol('name')]: '王旭',
            [Symbol('name')]: '邓为',
        }
        console.log(obj)
        let arr = Object.getOwnPropertySymbols(obj)
        console.log(obj[arr[0]])
        console.log(obj[arr[1]])
```



## Set() 、Map() 数据结构

Set是新的数据结构。它类似于数组，但是成员的值都是唯一的，没有重复的值。是一个值的集合

注意点：Set里面的值是唯一的，不能有重复的

```js
var s = new Set(["张三", "李四", "王五"]);
```

属性：

`size`：返回值的长度

方法

- `add(value)`：添加一个值，返回Set结构本身
- `delete(value)`：删除某个值，返回布尔值
- `has(value)`：返回布尔值，表示是否是成员
- `clear()`：清除所有成员，无返回值

可以用于数组去重

```js
var arr = [1, 2, 6, 2, 6];
var s = new Set(arr);
//把类数组对象转成数组返回
var newArr = Array.from(s);
console.log(newArr);
```

```js
// Set() 数据结构，它里面的数据是没有重复的
// const arr = new Set(['a', 'a', 'a', 'b', 'b', 10, '10', '20', 66])
// console.log(arr)

// 数组去重
// const arr = ['a', 'a', 'a', 'b', 'b', 10, '10', '20', 66]
// const s = Array.from(new Set(arr))
// console.log(s)

/*
    - `add(value)`：添加一个值，返回Set结构本身
    - `delete(value)`：删除某个值，返回布尔值
    - `has(value)`：返回布尔值，表示是否是成员
    - `clear()`：清除所有成员，无返回值
*/
const arr = new Set(['a', 'b', '10'])
// arr.add('王江')
// arr.add('哈哈')
// arr.delete('哈哈')
console.log(arr.has('哈哈'))
// arr.clear()
console.log(arr.size)
```

**Map**对象保存键/值对，是键/值对的集合。任何值(对象或者原始值) 都可以作为一个键或一个值。Map结构提供了值与值的对象， 是一种更完善的hash（哈希）结构。它类似对象也是键值对的集合，但是键的范围不限于字符串，各种类型都可以当做键。

**注意点**：对象不能把其他类型当做键

```js
var obj1 = {"a" : 1};
var obj2 = {"b" : 2};

var obj = {};
//在内部无论你传什么值进来,都会自动给你转成字符串
obj[obj1] = "hello";
obj[obj2] = "world";

console.log(obj);

console.log(typeof obj[obj1]); //string
```

Map方式创建

```js
var obj1 = {"a" : 1};
var obj2 = {"b" : 2};

//通过构造函数
//Map数据结构，咱们自己很少会使用到，规范在不断改变的中，需要用到的时候去查询下文档
//注意点：千万不要直接使用get获取地址，地址是获取不到的，需要在外界进行赋值然后把变量写在map里面
var map = new Map([
    ["name", "张三"],
    ["age", 18],
    ["sex", "男"],
    [obj1, "hello"],
    [obj2, "hello"],
    [[1, 2], "我是数组"]
]);
console.log(map);
```

属性:

`size`：返回值的长度

方法：

`keys()` : 取出Map里面所有的键

`values()` : 取出Map里面所有的值

`entries()` ：取出里面所有的键和值

方法:

`set()` :  增加、修改

`get()`:  获取

`has()`: 判断里面有没有这个值 true / false

`delete()` : 删除

`clear()` : 清除

```js
// Map() 是一种数据结构，可以把任意数据类型作为对象的key，之前对象key的类型只能是字符串
let arr = ['a', 'b']
let obj = {name: '王江'}
const mp = new Map([
    [arr, '我是一个数组'],
    [obj, '对象'],
    [10, '我是数字']
])
// console.log(mp.size)
// `keys()` : 取出Map里面所有的键
// console.log(mp.keys())

// `values()` : 取出Map里面所有的值
// console.log(mp.values())

// `entries()` ：取出里面所有的键和值
// console.log(mp)
// console.log(mp.entries())

// `set()` :  增加、修改
// mp.set('age', 18)
// mp.set(obj, 10)

// `get()`:  获取
// console.log(mp.get(obj))
// console.log(mp.get(arr))

// `has()`: 判断里面有没有这个值 true / false
// console.log(mp.has(arr))

// `delete()` : 删除
// mp.delete(arr)

// `clear()` : 清除
// mp.clear()
// console.log(mp)
</script>
```



## 防抖与节流

```js
// 防抖：指的是用户触发事件过于频繁，只要最后一次事件的操作
// 例如：生活中乘电梯
const txt = document.querySelector('input')
let timer = null
txt.oninput = function(){
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setTimeout(()=>{
        console.log(this.value)
    }, 500)
}
```



```html
   <style>
        body{
            height: 2000px;
        }
        div{
            width: 200px;
            height: 300px;
            background-color: hotpink;
        }
    </style>
</head>
<body>
    <div></div>
    <script>
        // 节流：控制事件执行的次数
        let flag = true
        window.onscroll = function(){
            if(flag){
                flag = false
                setTimeout(()=>{
                    console.log(document.documentElement.scrollTop)
                    flag = true
                }, 500)
            }
        }
    </script>
</body>
```



## flag 小技巧

```html
   <style>
        div{
            width: 200px;
            height: 300px;
            background-color: hotpink;
        }
    </style>
</head>
<body>
    <button>显示/隐藏</button>
    <div style="display: none;"></div>
    <script>
        const box = document.querySelector('div')
        const btn = document.querySelector('button')
        // flag 技巧可以简化判断条件，其实有些东西无法进行判断的，例如：颜色值
        let flag = true
        btn.onclick = ()=>{
            // if(box.style.display === 'none'){
            //     box.style.display = 'block'
            // }else{
            //     box.style.display = 'none'
            // }

            if(flag){
                box.style.display = 'block'
                flag = false
            }else{
                box.style.display = 'none'
                flag = true
            }
        }
    </script>
</body>
```



## 事件轮询（Event Loop）

**调用栈（call stack）**

代码在这里执行，last in first out，后进先出。

**WEB API**

提供异步机制，安排任务去哪个队列待命。

**宏任务队列（macrotask queue）**

接受 WEB API 安排来的宏任务，按序排好，先进先出的执行机制。

**微任务队列（microtask queue）**

接受 WEB API 安排来的微任务，按序排好，先进先出的执行机制。

**事件轮询（Event Loop）**

宏任务开始，执行完一个宏任务，询问一次微任务队列

微任务队列有任务，就清空微任务队列，循环往复

轮询： 轮流询问 宏任务队列 和 微任务队列