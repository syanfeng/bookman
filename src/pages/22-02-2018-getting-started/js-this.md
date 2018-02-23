---
path: "/javascript-this"
date: "2018-02-14T21:13:10.962Z"
title: "前端面试：this指向问题"
category: "javascript"
---

今天我们了解一下关于函数内部this指向的问题，用一个简单的例子来讲解一下：

看下面的代码，你觉得输出的结果是什么？
```javascript
var myObject = {
    foo: "bar",
    func: function() {        
        var self = this;        
        console.log(this.foo);        
        console.log(self.foo);
        (function() {            
            console.log(this.foo);            
            console.log(self.foo);
        }());
    }
};
myObject.func();
```

代码中我们4次调用来`console.log()`来在控制台输出内容，请问4次的内容分别是什么？

在外部函数中，  `this` 和 `self` 两者都指向了 `myObject`  ，因此两者都可以正确地引用和访问 `foo` 。 

在内部函数中, `this`不再指向`myObject`。其结果是，`this.foo` 没有在内部函数中被定义，相反，指向到本地的变量 `self` 保持在范围内，并且可以访问。 （在ECMA 5之前，在内部函数中的`this` 将指向全局的 `window` 对象；反之，因为作为ECMA 5，内部函数中的功能this 是未定义的。）

所以，上面的代码将输出以下内容到控制台：

    bar
    bar
    undefined
    bar