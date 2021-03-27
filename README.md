# css-homework

### OOCSS

原则

1. 容器与内容分离 我们希望内容在任何容器中都是能用的
2. 结构(基础对象)和皮肤(另一个对象)分离 结构-> div+css ，比如需要对基础对象换肤，只需要加上分离出去的对象 // <div class='menu fix'/>
   vue中的组件=OOCSS OOCSS应用 栅格系统、布局组件

## BEM

1. 块(Block)、元素(Element__)、 修饰符(Modifier--),对两个极其相似的块的样式做微调

```jsx
// 作用 带来了一种命名规范，让页面结构清晰，进阶版的OOCSS
<div class="menu menu--tab1"> // 修饰块 => B
  <div class="menu__tab menu__tab--style1"></div> // 修饰元素 => E -- M
</div>
<div class="menu menu--tab2">
  <div class="menu__tab menu__tab--style2"></div>
</div>
```

## SMACSS

1. 分类 Base、Layout、Modules、State、Theme
   
    * base文件夹: 默认浏览器样式重置 (normailze.css) 一些标签特殊化的样式设置
    * layout文件夹: 页面可能的一些布局方式
    * modules文件夹: 可复用的一些样式，公共的小模块
    * state文件夹: 管理模块不同状态的样式
    * theme文件夹: 网站的一些主题样色
2. 好处
    * 易维护
    * 易拓展
    * 易复用

3. 命名规范
   .l-header .is-hidden .theme-nav
