### chapter7

#### 7.2.9. 修饰符

<table>
  <thead>
    <th>修饰符</th>
    <th>描述</th>
  </thead>
  <tr>
    <td>g</td>
    <td>全局匹配，即找到所有匹配的，单词是 global。</td>
  </tr>
  <tr>
    <td>i</td>
    <td>忽略字母大小写，单词是 ingoreCase。</td>
  </tr>
  <tr>
    <td>m</td>
    <td>多行匹配，只影响 ^ 和 $，二者变成行的概念，即行开头和行结尾。单词是 multiline。</td>
  </tr>
</table>

#### 7.2.11 构造函数属性

<table>
  <thead>
    <th>静态属性</th>
    <th>描述</th>
    <th>简写形式</th>
  </thead>
  <tr>
    <td>RegExp.input</td>
    <td>最近一次目标字符串</td>
    <td>RegExp["$_"]</td>
  </tr>
  <tr>
    <td>RegExp.lastMatch</td>
    <td>最近一次匹配的文本</td>
    <td>RegExp["$&"]</td>
  </tr>
  <tr>
    <td>RegExp.lastParen</td>
    <td>最近一次捕获的文本</td>
    <td>RegExp["$+"]</td>
  </tr>
  <tr>
    <td>RegExp.leftContext</td>
    <td>目标字符串中lastMatch之前的文本</td>
    <td>RegExp["$`"]</td>
  </tr>
  <tr>
    <td>RegExp.rightContext</td>
    <td>目标字符串中lastMatch之后的文本</td>
    <td>RegExp["$'"]</td>
  </tr>
</table>