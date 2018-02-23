---
path: "/css-base"
date: "2018-02-23T08:57:10.962Z"
title: "前端面试：CSS基础"
category: "css"
---

__1 、介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？__

标准盒子模型：宽度=内容的宽度（content）+ border + padding + margin
低版本IE盒子模型：宽度=内容宽度（content+border+padding）+ margin

__2、 box-sizing属性？__

用来控制元素的盒子模型的解析模式，默认为content-box
context-box：W3C的标准盒子模型，设置元素的 height/width 属性指的是content部分的高/宽
border-box：IE传统盒子模型。设置元素的height/width属性指的是border + padding + content部分的高/宽

__3、 CSS选择器有哪些？哪些属性可以继承？__

CSS选择符：id选择器(#myid)、类选择器(.myclassname)、标签选择器(div, h1, p)、相邻选择器(h1 + p)、子选择器（ul > li）、后代选择器（li a）、通配符选择器（*）、属性选择器（a[rel="external"]）、伪类选择器（a:hover, li:nth-child）

可继承的属性：font-size, font-family, color

不可继承的样式：border, padding, margin, width, height

优先级（就近原则）：!important > [ id > class > tag ]   
!important 比内联优先级高

__4、 CSS优先级算法如何计算？__

元素选择符： 1  
class选择符： 10  
id选择符：100  
元素标签：1000  

➤!important声明的样式优先级最高，如果冲突再进行计算。  
➤如果优先级相同，则选择最后出现的样式。  
➤继承得到的样式的优先级最低。  

__5 、CSS3新增伪类有那些?__

p:first-of-type 选择属于其父元素的首个元素  
p:last-of-type 选择属于其父元素的最后元素  
p:only-of-type 选择属于其父元素唯一的元素  
p:only-child 选择属于其父元素的唯一子元素  
p:nth-child(2) 选择属于其父元素的第二个子元素  
:enabled :disabled 表单控件的禁用状态。  
:checked 单选框或复选框被选中。  

__6、如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？__

div：

> border: 1px solid red;margin: 0 auto;  
> height: 50px;width: 80px;

浮动元素的上下左右居中：

> border: 1px solid red;  
float: left;position:   
absolute;width: 200px;  
height: 100px;  
left: 50%;  
top: 50%;  
margin: -50px 0 0 -100px; 

绝对定位的左右居中：

> border: 1px solid black;  
position: absolute;  
width: 200px;  
height: 100px;  
margin: 0 auto;  
left: 0;  
right: 0;   

__7 、display有哪些值？说明他们的作用?__

inline（默认）--内联  
none--隐藏  
block--块显示  
table--表格显示  
list-item--项目列表  
inline-block  

__8、 position的值？__

static（默认）：按照正常文档流进行排列；  
relative（相对定位）：不脱离文档流，参考自身静态位置通过 top, bottom, left, right 定位；  
absolute(绝对定位)：参考距其最近一个不为static的父级元素通过top, bottom, left, right 定位；  
fixed(固定定位)：所固定的参照对像是可视窗口。  

__9、 CSS3有哪些新特性？__

➤RGBA和透明度  
➤background-image background-origin(content-box/padding-box/border-box) background-size background-repeat  
➤word-wrap（对长的不可分割单词换行）word-wrap：break-word  
➤文字阴影：text-shadow： 5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）  
➤font-face属性：定义自己的字体  
➤圆角（边框半径）：border-radius 属性用于创建圆角  
➤边框图片：border-image: url(border.png) 30 30 round  
➤盒阴影：box-shadow: 10px 10px 5px #888888  
➤媒体查询：定义两套css，当浏览器的尺寸变化时会采用不同的属性  

__10、 请解释一下CSS3的flexbox（弹性盒布局模型）,以及适用场景？__

该布局模型的目的是提供一种更加高效的方式来对容器中的条目进行布局、对齐和分配空间。在传统的布局方式中，block 布局是把块在垂直方向从上到下依次排列的；

而 inline 布局则是在水平方向来排列。弹性盒布局并没有这样内在的方向限制，可以由开发人员自由操作。
试用场景：弹性布局适合于移动前端开发，在Android和ios上也完美支持。

__11 、用纯CSS创建一个三角形的原理是什么？__

首先，需要把元素的宽度、高度设为0。然后设置边框样式。

width: 0;  
height: 0;  
border-top: 40px solid transparent;  
border-left: 40px solid transparent;  
border-right: 40px solid transparent;  
border-bottom: 40px solid #ff0000;  

__12 、一个满屏品字布局如何设计?__

第一种真正的品字：

➤三块高宽是确定的；  
➤上面那块用margin: 0 auto;居中；  
➤下面两块用float或者inline-block不换行；  
➤用margin调整位置使他们居中。

第二种全屏的品字布局:  
上面的div设置成100%，下面的div分别宽50%，然后使用float或者inline使其不换行。

__13、 常见的兼容性问题？__

➤不同浏览器的标签默认的margin和padding不一样。  
*{margin:0;padding:0;}  
➤IE6双边距bug：块属性标签float后，又有横行的margin情况下，在IE6显示margin比设置的大。hack：display:inline;将其转化为行内属性。  
➤渐进识别的方式，从总体中逐渐排除局部。首先，巧妙的使用“9”这一标记，将IE浏览器从所有情况中分离出来。接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

> {background-color:#f1ee18;  
/*所有识别*/  
.background-color:#00deff\9;   
/*IE6、7、8识别*/  
+background-color:#a200ff;  
/*IE6、7识别*/  
_background-color:#1e0bd1;  
/*IE6识别*/}  

➤设置较小高度标签（一般小于10px），在IE6，IE7中高度超出自己设置高度。hack：给超出高度的标签设置overflow:hidden;或者设置行高line-height 小于你设置的高度。  
➤IE下，可以使用获取常规属性的方法来获取自定义属性,也可以使用getAttribute()获取自定义属性；Firefox下，只能使用getAttribute()获取自定义属性。解决方法:统一通过getAttribute()获取自定义属性。  
➤Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。  
➤超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不再具有hover和active了。

解决方法是改变CSS属性的排列顺序:L-V-H-A ( love hate ): a:link {} a:visited {} a:hover {} a:active {}

__14、 为什么要初始化CSS样式__

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。

__15、 absolute的containing block计算方式跟正常流有什么不同？__

无论属于哪种，都要先找到其祖先元素中最近的 position 值不为 static 的元素，然后再判断：

➤若此元素为 inline 元素，则 containing block 为能够包含这个元素生成的第一个和最后一个 inline box 的 padding box (除 margin, border 外的区域) 的最小矩形；  
➤否则,则由这个祖先元素的 padding box 构成。

如果都找不到，则为 initial containing block。

__补充：__  
➤static(默认的)/relative：简单说就是它的父元素的内容框（即去掉padding的部分）  
➤absolute: 向上找最近的定位为absolute/relative的元素  
➤fixed: 它的containing block一律为根元素(html/body)

__16、 CSS里的visibility属性有个collapse属性值？在不同浏览器下以后什么区别？__

当一个元素的visibility属性被设置成collapse值后，对于一般的元素，它的表现跟hidden是一样的。

➤chrome中，使用collapse值和使用hidden没有区别。  
➤firefox，opera和IE，使用collapse值和使用display：none没有什么区别。

__17、 display:none与visibility：hidden的区别？__

display：none 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）  
visibility：hidden 隐藏对应元素，在文档布局中仍保留原来的空间（重绘）

__18、 position跟display、overflow、float这些特性相互叠加后会怎么样？__

display属性规定元素应该生成的框的类型；position属性规定元素的定位类型；float属性是一种布局方式，定义元素在哪个方向浮动。

类似于优先级机制：position：absolute/fixed优先级最高，有他们在时，float不起作用，display值需要调整。float 或者absolute定位的元素，只能是块元素或表格。

__19、 对BFC规范(块级格式化上下文：block formatting context)的理解？__

BFC规定了内部的Block Box如何布局。  
定位方案：

➤内部的Box会在垂直方向上一个接一个放置。  
➤Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠。 
➤每个元素的margin box 的左边，与包含块border box的左边相接触。  
➤BFC的区域不会与float box重叠。  
➤BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。  
➤计算BFC的高度时，浮动元素也会参与计算。

满足下列条件之一就可触发BFC

➤根元素，即html  
➤float的值不为none（默认）  
➤overflow的值不为visible（默认）  
➤display的值为inline-block、table-cell、table-caption  
➤position的值为absolute或fixed

__20、 为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式？__

浮动元素碰到包含它的边框或者浮动元素的边框停留。由于浮动元素不在文档流中，所以文档流的块框表现得就像浮动框不存在一样。

浮动元素会漂浮在文档流的块框上。  
浮动带来的问题：

➤父元素的高度无法被撑开，影响与父元素同级的元素  
➤与浮动元素同级的非浮动元素（内联元素）会跟随其后  
➤若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构。

清除浮动的方式：

➤父级div定义height  
➤最后一个浮动元素后加空div标签 并添加样式clear:both。  
➤包含浮动元素的父标签添加样式overflow为hidden或auto。  
➤父级div定义zoom

__21、 上下margin重合的问题__

在重合元素外包裹一层容器，并触发该容器生成一个BFC。  
例子：
```javascript
<div class="aside"></div>
<div class="text">
    <div class="main"></div>
</div>
<!--下面是css代码-->   
.aside {              
    margin-bottom: 100px;    
    width: 100px;       
    height: 150px;              
    background: #f66;  
}  
.main {           
    margin-top: 100px;             
    height: 200px;            
    background: #fcc;  
}  
.text {              
    /*盒子main的外面包一个div，  
    通过改变此div的属性使两个  
    盒子分属于两个不同的BFC，  
    以此来阻止margin重叠*/overflow: hidden;    
    //此时已经触发了BFC属性。  
}  
```

__22、设置元素浮动后，该元素的display值是多少？__

自动变成display:block

__23 、移动端的布局用过媒体查询吗？__

通过媒体查询可以为不同大小和尺寸的媒体定义不同的css，适应相应的设备的显示。

➤`<head>`里边  
`<link rel="stylesheet" type="text/css" href="xxx.css" media="only screen and (max-device-width:480px)">`  
➤CSS : @media only screen and (max-device-width:480px) {/css样式/}

__24 、使用 CSS 预处理器吗？__

Less sass

__25、 CSS优化、提高性能的方法有哪些？__

➤避免过度约束  
➤避免后代选择符  
➤避免链式选择符  
➤使用紧凑的语法  
➤避免不必要的命名空间  
➤避免不必要的重复  
➤最好使用表示语义的名字。一个好的类名应该是描述他是什么而不是像什么  
➤避免！important，可以选择其他选择器  
➤尽可能的精简规则，你可以合并不同类里的重复规则

__26 、浏览器是怎样解析CSS选择器的？__

CSS选择器的解析是从右向左解析的。若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。

若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。

两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找上面。

而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。

在建立 Render Tree 时（WebKit 中的「Attachment」过程），浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果（Style Rules）来确定生成怎样的 Render Tree。

__27、 在网页中的应该使用奇数还是偶数的字体？为什么呢？__

使用偶数字体。偶数字号相对更容易和 web 设计的其他部分构成比例关系。Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵，而 13、15、17 px时用的是小一号的点。（即每个字占的空间大了 1 px，但点阵没变），于是略显稀疏。

__28、 margin和padding分别适合什么场景使用？__

何时使用margin：

➤需要在border外侧添加空白  
➤空白处不需要背景色  
➤上下相连的两个盒子之间的空白，需要相互抵消时。

何时使用padding：

➤需要在border内侧添加空白  
➤空白处需要背景颜色  
➤上下相连的两个盒子的空白，希望为两者之和。

兼容性的问题：在IE5 IE6中，为float的盒子指定margin时，左侧的margin可能会变成两倍的宽度。通过改变padding或者指定盒子的display：inline解决。

__29、 元素竖向的百分比设定是相对于容器的高度吗？__

当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性，例如 padding-top , padding-bottom , margin-top , margin-bottom 等，当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。

30、 全屏滚动的原理是什么？用到了CSS的哪些属性？

➤原理：有点类似于轮播，整体的元素一直排列下去，假设有5个需要展示的全屏页面，那么高度是500%，只是展示100%，剩下的可以通过transform进行y轴定位，也可以通过margin-top实现  
➤overflow：hidden；transition：all 1000ms ease；
