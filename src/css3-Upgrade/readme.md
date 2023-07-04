## 概念汇总

1. html 语义 - 写出更优雅的 html
   通俗理解 - 用正确的标签做正确的事。内容语义化，代码语义化
   好处：seo 优化，搜索引擎的抓取，爬虫。在样式丢失的时候，还能呈现较好的结构。支持各种终端。利于团队维护和开发
   如何写出？
1. 结构搭建上 - css 头部，js 末尾，便于页面显示之后加载 js，以加快代码的读取速度，助于 js 对页面中的元素进行操作
1. 代码校验 - eslint
1. 良好的代码排版
1. 语义化设计 - 减少 span，div 的使用
1. 布局规范

- p 用来放文字，不用来布局，浏览器自身的样式中 p 和 margin 有样式。实现换行使用，block 元素或者 css 的 display 属性避免使用 br
- 不要滥用 div，当没有其他元素可用时才能使用 div，如果想让 link，img 这列元素在结尾换行，可以在样式中添加 display：block，这样比把他们放进 div 或者 br 要好很多。
- 必须知道哪些是块级元素，这样就可以避免把块级元素放入 div 里面，比如列表就不需要放入 div 里面
- table 不要布局
- 盒模型再度理解，什么时候用 padding，什么时候用 margin
  使用 margin 的规则
  通常情况下，margin 都是添加在元素的 bottom 或者 right，有时候也可以是 top 或者 left
  无论如何，应该精良避免 同事在 bottom 和 top，left 和 right 添加 margin，可以用 last-of-type 选择器来去掉最后一个子元素的 margin

  6.标签嵌套规范

- 块元素可以包含内敛元素或者某些块级元素，但内敛元素却不能包含块元素，他只能包含其他的内敛元素
- 块级元素中不要放 P 标签

```html
<p><ol><li></li></ol></p>  错误
<p><div></div></p> 错误
// 有几个特殊的块级元素只能包含内敛元素，不能再包含会计元素 -  h1~h6,p,dt
<h1><div></div></h1> 错误
<p><div></div></p> 错误
<dt><div></div></dt> 错误
// 父子级关系的标签 ul-li  ol-li dl dt dd - ul,ol下面只能跟li，dl只能跟dt.dd
<ul><li><a></a></li></ul> dui
<ul><a></a><li></li></ul> cuo
<dl><dt><a></a></dt><dd></dd></dl> dui

```

7.网站代码优化

- 语义化标签
- 语义化代码
- a 标签设置 title 属性，外部链接还需要设置 rel 属性， rel='no-follow',no-follow 值会使得网络爬虫不顺着网络爬出
- 所有标题使用 h1 标签，样式可以 css 设置
- br 只能用于文本换行
- table 一定要使用 caption 设置表格题目
- strong 用来设置 重表，em 设置斜体
- img 属性一定要设置 alt 属性
  2.html 拓展

3. css 属性绘制
4. css 机制 At-rule
5. css 变量 var 的使用
