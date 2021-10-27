// 横向模糊匹配

// 长度是不固定的，可以是多种情况
// const regex = /ab{2,5}c/g;
// const string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
// console.log(string.match(regex));

// 纵向模糊匹配

// 不是某个确定的字符，可以有多种可能
// const regex = /a[123]b/g
// const string = "a0b a1b a2b a3b a4b"
// console.log(string.match(regex));

// 贪婪匹配

// const regex = /\d{2,5}/g
// const string = "123 1234 12345 123456"
// console.log(string.match(regex));

// 惰性匹配

// const regex = /\d{2,5}?/g
// const string = "123 1234 12345 123456"
// console.log(string.match(regex));

// 多选分支

// const regex = /good|nice/g
// const string = "good idea, nice try."
// console.log(string.match(regex));

// 分支结构是惰性的

// const regex = /goodbye|good/g
// const string = "goodbye"
// console.log(string.match(regex));

// const regex = /good|goodbye/g
// const string = "goodbye"
// console.log(string.match(regex));

// 案例

// 1.5.1 匹配16进制颜色值

// 要求匹配:
// #ffbbad
// #Fc01DF
// #FFF
// #ffE

// const regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g
// const string = "#ffbbad #Fc01DF #FFF #ffE"
// console.log(string.match(regex));

// 1.5.2. 匹配时间

// 要求匹配:
// 23:59
// 02:07

// const regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/
// console.log(regex.test("23:59"));
// console.log(regex.test("02:07"));

// 匹配"7:9"

// const regex = /^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/
// console.log( regex.test("23:59") );
// console.log( regex.test("02:07") );
// console.log( regex.test("7:9") );


// 1.5.3. 匹配日期

// 要求匹配:
// 2017-06-10

// const regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
// console.log(regex.test("2017-06-10"))

// 1.5.4. 匹配windows文件路径

// var regex = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
// console.log( regex.test("F:\\study\\javascript\\regex\\regular expression.pdf") );
// console.log( regex.test("F:\\study\\javascript\\regex\\") );
// console.log( regex.test("F:\\study\\javascript") );
// console.log( regex.test("F:\\") );

// 1.5.5. 匹配id

// var regex = /id=".*"/
// var string = '<div id="container" class="main"></div>';
// console.log(string.match(regex[0]));

//惰性匹配 id

// var regex = /id=".*?"/
// var string = '<div id="container" class="main"></div>';
// console.log(string.match(regex)[0]);

// 效率低 可以这样优化 设计回溯

var regex = /id="[^"]*"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]);