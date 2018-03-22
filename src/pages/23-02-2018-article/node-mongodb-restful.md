---
path: "/node-mongodb"
date: "2018-02-23T21:23:10.962Z"
title: "Nodejs + Mongodb编写 Restful 风格 API"
category: "javascript"
---

__简介__

搭建一个restful风格的个人博客api。restful风格：就是使用同一个接口，通过不同的请求方式例如post，get，put，delete等实现数据的增删查改等。

__需要的工具__

* node
* Postman或者其他接口测试工具

__用到的模块介绍__

* express : nodejs框架
* mongoose : 用来方便的和mongodb交互
* body-parser : 方便我们从post请求中解析参数
* morgan : 把请求信息打印在控制台
* jsonwebtoken : 用来生成和确认token数据

__主要操作流程__

1.新建一个项目文件夹，使用npm初始化

> npm init -y

2.手动输入依赖环境，或者npm install直接安装

> cnpm install --save express mongoose body-parser morgan jsonwebtoken  
> cnpm install

3.新建所需要的文件夹以及文件，目录结构如下

> -app/  
> -----models/                //模块  
> ----------blog.js  
> ----------category.js  
> ----------user.js  
> -----routes/                //路由  
> ----------blog.js  
> ----------category.js  
> ----------comment.js  
> ----------setup.js  
> ----------user.js  
> -node_modules/              //依赖环境安装后生成  
> -config.js                  //一些配置  
> -package.json               //项目依赖环境(初始化后自动生成)  
> -server.js                  //项目启动文件  

__基础代码如下__  
modules/ 模块文件  
主要就是导出各种模板供启动文件server.js调用

user.js user模块 
```javascript
var mongoose = require('mongoose'); //引入mongoose依赖
var Schema = mongoose.Schema;//mongoose的一切都是以Schema开始的

// 使用modules.exports导出User模块
module.exports = mongoose.model('User',new Schema({ //利用模板的方式启动模板，并导出
    name:String,
    password:String,
    admin:Boolean
}))
```

category.js
```javascript
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Category', new Schema({    
    title:String
}))
```

blog.js blog 模块

```javascript
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Blog', new Schema({
    title: String,
    body:String,
    antuor:String,
    category:String,
    comment:[{body: String,date:Date}],
    tags:[{title:String}],
    date:{type:Date,default:Date.now},
    hidden:Boolean,
    mete:{
        vores:Number,
        favs:Number
    }
}))
```

config.js 内容为各种配置
```javascript
module.exports = {
    'secret':'zp,zp',    
    'database':'mongodb://127.0.0.1'
}
```

__说明：__
* secret的值可以随便取，主要是用来生成token时用的
* 数据库设置要连接数据库的信息

__未完，今天先写到这，早点休息了__


