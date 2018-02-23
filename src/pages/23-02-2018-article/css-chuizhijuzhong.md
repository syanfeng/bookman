---
path: "/css-czjz"
date: "2018-02-23T09:57:10.962Z"
title: "前端面试：CSS 实现元素垂直居中"
category: "css"
---

__1.不知道自己高度和父容器高度的情况下, 利用绝对定位只需要以下三行：__

```javascript
parentElement{
    position:relative;
}

childElement{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```

__2.若父容器下只有一个元素，且父元素设置了高度，则只需要使用相对定位即可__

```javascript
parentElement {
    height:200px;
}

.childElement {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
```

__3.Flex 布局：__

不考虑兼容老式浏览器的话，用Flex布局简单直观一劳永逸：

```javascript
parentElement {
    display:flex;/*Flex布局*/
    display: -webkit-flex; /* Safari */
    align-items:center;/*指定垂直居中*/
}
```
