// url 用来把url转换成对象的
/**
 * 引入 Node.js 的 url 模块，用于处理和解析 URL。
 * 注意：在现代 JavaScript 中，建议使用 ES 模块语法（import）代替 CommonJS 的 require。
 */
const url = require('url')

/**
 * 定义一个示例 URL 字符串，包含协议、主机、端口、路径名和查询参数。
 */
const href = 'http://www.xxx.com:8080/pathname?username=zhangsan&password=123'

/**
 * 使用 url.parse 方法解析 URL 字符串，返回一个 Url 对象。
 * 第二个参数默认为 false，表示不将查询字符串解析为对象。
 */
console.log(url.parse(href))

console.log('-------------')

/**
 * 使用 url.parse 方法解析 URL 字符串，第二个参数设置为 true。
 * 这将把查询字符串解析为一个对象。
 */
console.log(url.parse(href, true))

console.log('-------------')

/**
 * 输出解析后的 Url 对象中的查询参数部分，作为一个对象。
 */
console.log(url.parse(href, true).query)

/**
 * 输出解析后的查询参数对象中的 username 属性。
 */
console.log(url.parse(href, true).query.username)

/**
 * 输出解析后的查询参数对象中的 password 属性。
 */
console.log(url.parse(href, true).query.password)


