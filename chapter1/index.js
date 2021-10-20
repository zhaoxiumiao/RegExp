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

const regex = /\d{2,5}?/g
const string = "123 1234 12345 123456"
console.log(string.match(regex));