// sourec属性

// var className = "high";
// var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");
// console.log( regex.source )
// console.log(regex);
// => (^|\s)high(\s|$) 即字符串"(^|\\s)high(\\s|$)"

// 正则属性

// var regex = /([abc])(\d)/g;
// var string = "a1b2c3d4e5";
// string.match(regex);
// console.log( RegExp.input );
// console.log( RegExp["$_"]);
// // => "a1b2c3d4e5"
// console.log( RegExp.lastMatch );
// console.log( RegExp["$&"] );
// // => "c3"
// console.log( RegExp.lastParen );
// console.log( RegExp["$+"] );
// // => "3"
// console.log( RegExp.leftContext );
// console.log( RegExp["$`"] );
// // => "a1b2"
// console.log( RegExp.rightContext );
// console.log( RegExp["$'"] );
// => "d4e5

// 使用字符串保存数据

// var utils = {};
// "Boolean|Number|String|Function|Array|Date|RegExp|Object|Error".split("|").forEach(function (item) {
//   utils["is" + item] = function (obj) {
//     return {}.toString.call(obj) == "[object " + item + "]";
//   };
// });
// console.log( utils.isArray([1, 2, 3]) );


// 使用强大的 replace

function compress (source) {
  var keys = {};
  source.replace(/([^=&]+)=([^&]*)/g, function (full, key, value) {
    keys[key] = (keys[key] ? keys[key] + ',' : '') + value;
  });
  var result = [];
  for (var key in keys) {
    result.push(key + '=' + keys[key]);
  }
  return result.join('&'); }
console.log( compress("a=1&b=2&a=3&b=4") );