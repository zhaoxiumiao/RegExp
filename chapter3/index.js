// 分组

// var regex = /(ab)+/g;
// var string = "ababa abbb ababab";
// console.log( string.match(regex) );

// 分支结构

// var regex = /^I love (JavaScript|Regular Expression)$/;
// console.log( regex.test("I love JavaScript") );
// console.log( regex.test("I love Regular Expression") );

// 分组引用

// 提取数据

// var regex = /(\d{4})-(\d{2})-(\d{2})/;
// var string = "2017-06-12";
// console.log( string.match(regex) );


// var regex = /(\d{4})-(\d{2})-(\d{2})/;
// var string = "2017-06-12";
// regex.exec(string)
// console.log(RegExp.$1);
// console.log(RegExp.$2);
// console.log(RegExp.$3);

// 替换

// var regex = /(\d{4})-(\d{2})-(\d{2})/;
// var string = "2017-06-12";
// var result = string.replace(regex, "$2/$3/$1");
// console.log(result);

// var regex = /(\d{4})-(\d{2})-(\d{2})/;
// var string = "2017-06-12";
// var result = string.replace(regex, ()=> {
//   return RegExp.$2 + "/" + RegExp.$3 + "/" + RegExp.$1
// });
// console.log(result);

// var regex = /(\d{4})-(\d{2})-(\d{2})/;
// var string = "2017-06-12";
// var result = string.replace(regex,(match, year, month, day)=>{
//   return month + "/" + day + "/" + year
// });
// console.log(result);

// 反向引用

// var regex = /\d{4}(-|\/|\.)\d{2}\1\d{2}/;
// var string1 = "2017-06-12";
// var string2 = "2017/06/12";
// var string3 = "2017.06.12";
// var string4 = "2016-06/12";
// console.log( regex.test(string1) ); // true
// console.log( regex.test(string2) ); // true
// console.log( regex.test(string3) ); // true
// console.log( regex.test(string4) ); // false

// 括号嵌套

// var regex = /^((\d)(\d(\d)))\1\2\3\4$/;
// var string = "1231231233";
// console.log( regex.test(string) ); // true
// console.log( RegExp.$1 ); // 123
// console.log( RegExp.$2 ); // 1
// console.log( RegExp.$3 ); // 23
// console.log( RegExp.$4 ); // 3

// \10 表示什么呢？
// 表示第十个分组
// var regex = /(1)(2)(3)(4)(5)(6)(7)(8)(9)(#) \10+/;
// var string = "123456789# ######"
// console.log( regex.test(string) );

// tip: 如果真要匹配 \1 和 0 的话，请使用 (?:\1)0 或者 \1(?:0)。

// 引用不存在的分组会怎么样?

// var regex = /\1\2\3\4\5\6\7\8\9/;
// console.log( regex.test("\1\2\3\4\5\6\7\8\9") );
// console.log( "\1\2\3\4\5\6\7\8\9".split("") );

// 分组有量词

// var regex = /(\d)+ \1/;
// console.log( regex.test("12345 1") );
// // => false
// console.log( regex.test("12345 5") );

// 非捕获括号

// var regex = /(?:ab)+/g;
// var string = "ababa abbb ababab";
// console.log( string.match(regex) );
// => ["abab", "ab", "ababab"]

// var regex = /^I love (?:JavaScript|Regular Expression)$/;
// console.log( regex.test("I love JavaScript") );
// console.log( regex.test("I love Regular Expression") );
// => true
// => true

// 字符串 trim 方法模拟

// function trim(string) {
//   return string.replace(/^\s+|\s+$/g, '')
// }
// console.log(trim("  foobar   "));

// function trim (str) {
//   return str.replace(/^\s*(.*?)\s*$/g, "$1")
// }
// console.log(trim("  foobar  "));

// 将每个单词的首字母转换为大写
// function titleize(str) {
//   return str.toLowerCase().replace(/(?:^|\s)\w/g, function(c){
//     console.log(c, 'ss');
//     return c.toUpperCase()
//   })
// }

// console.log(titleize('my name is epeli'));

// 驼峰化

// function camelize (str) {
//   return str.replace(/[-_\s]+(.)?/g, function (match, c) {
//     console.log(match);
//     console.log(c);
//     return c ? c.toUpperCase() : '';
//   });
// }
// console.log( camelize('-moz-transform') );

// 中划线化

// function dasherize(str) {
//   return str.replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g,'-').toLowerCase()
// }
// console.log(dasherize('MozTransform'));

// HTML 转义和反转义

// function escapeHTML (str) {
//    var escapeChars = {
//     '<' : 'lt',
//     '>' : 'gt',
//     '"' : 'quot',
//     '&' : 'amp',
//     '\'' : '#39'
//   } 
//   return str.replace(new RegExp(`[${Reflect.ownKeys(escapeChars).join('')}]`,'g'),
//   (match)=>{
//     console.log(match);
//     return '&' + escapeChars[match] + ';';
//   })
// }
// console.log( escapeHTML('<div>Blah blah blah</div>') );

// 实体字符转换为等值的HTML。
// function unescapeHTML (str) {
//   var htmlEntities = {
//   nbsp: ' ',
//   lt: '<',
//   gt: '>',
//   quot: '"',
//   amp: '&',
//   apos: '\''
//   };
//   return str.replace(/\&([^;]+);/g, function (match, key) {
//   if (key in htmlEntities) {
//   return htmlEntities[key];
//   }
//   return match;
//   }); }
// console.log( unescapeHTML('&lt;div&gt;Blah blah blah&lt;/div&gt;') );

// 匹配成对标签
// var regex = /<([^>]+)>[\d\D]*<\/\1>/;
// var string1 = "<title>regular expression</title>";
// var string2 = "<p>laoyao bye bye</p>";
// var string3 = "<title>wrong!</p>";
// console.log( regex.test(string1) ); // true
// console.log( regex.test(string2) ); // true
// console.log( regex.test(string3) ); // false

// 惰性量词
var string = "12345";
var regex = /^(\d{1,3}?)(\d{1,3})$/;
console.log( string.match(regex) );
// => ["1234", "1", "234", index: 0, input: "12345"]