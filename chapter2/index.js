// 匹配开头和结尾
// var result = "hello".replace(/^|$/g, '#')
// console.log(result);

// 有m修饰符的时：
// var result = "I\nlove\njavascript".replace(/^|$/gm, '#');
// console.log(result);

// \b 单词边界
// var result = "[JS] Lesson_01.mp4".replace(/\b/g, '#');
// console.log(result);

// \B 非单词边界
// var result = "[JS] Lesson_01.mp4".replace(/\B/g, '#');
// console.log(result);

// (?=l) 表示 "l" 字符前面的位置
// var result = "hello".replace(/(?=l)/g, '#')
// console.log(result);

// (?!p) 就是 (?=p) 的反面意思，比如:
// var result = "hello".replace(/(?!l)/g, '#');
// console.log(result);

// 不匹配任何东西的正则
// /.^/

// 数字的千位分隔符表示法

// 搞出最后一个逗号

// var result = "12345678".replace(/(?=\d{3}$)/g, ',')
// console.log(result);

// 搞出所有的逗号

// var result = "12345678".replace(/(?=(\d{3})+$)/g, ',')
// console.log(result);

// 匹配其余案例

// var result = "123456789".replace(/(?!^)(?=(\d{3})+$)/g, ',')
// console.log(result);


// 支持其他形式

// var result = "12345678 123456789".replace(/(?!\b)(?=(\d{3})+\b)/g, ',')
// console.log(result);

// 最终形式

// var result = "12345678 123456789".replace(/\B(?=(\d{3})+\b)/g, ',')
// console.log(result);

// 货币格式化

// 1888 格式化成为：$ 1888.00

// function format(num){
//   return num.toFixed(2).replace(/\B(?=(\d{3})+\b)/, ',').replace(/^/, "$$ ")
// }

// console.log(format(1888));

// 验证密码问题

// var regex = /(?=.*[0-9])(?=.*[a-z])^[0-9A-Za-z]{6,12}$/

// var regex = /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[0-9A-Za-z]{6,12}$/

// console.log( regex.test("1234567") ); // false 全是数字
// console.log( regex.test("abcdef") ); // false 全是小写字母
// console.log( regex.test("ABCDEFGH") ); // false 全是大写字母
// console.log( regex.test("ab23C") ); // false 不足6位
// console.log( regex.test("ABCDEF234") ); // true 大写字母和数字
// console.log( regex.test("abcdEF234") ); // true 三者都有

// 另一种解法

// var regex = /(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9A-Za-z]{6,12}$/

// console.log( regex.test("1234567") ); // false 全是数字
// console.log( regex.test("abcdef") ); // false 全是小写字母
// console.log( regex.test("ABCDEFGH") ); // false 全是大写字母
// console.log( regex.test("ab23C") ); // false 不足6位
// console.log( regex.test("ABCDEF234") ); // true 大写字母和数字
// console.log( regex.test("abcdEF234") ); // true 三者都有