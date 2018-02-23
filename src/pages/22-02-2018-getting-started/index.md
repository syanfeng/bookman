---
path: "/javascript-typeof"
date: "2018-02-12T20:22:10.962Z"
title: "前端面试：typeof判断对象的潜在陷阱"
category: "javascript"
---

今天我们来讲一个比较简单但是会比较常遇到的问题。

__问：使用 typeof bar === "object" 来确定 bar 是否是对象的潜在陷阱是什么？如何避免这个陷阱？__

尽管 `typeof bar === "object"` 是检查 `bar` 是否对象的可靠方法，令人惊讶的是在JavaScript中 `null` 也被认为是对象！

因此，令大多数开发人员惊讶的是，下面的代码将输出 `true` 控制台：
```javascript
var bar = null;
console.log(typeof bar === "object");
// logs true!
```

只要清楚这一点，同时检查 `bar` 是否为 `null`，就可以很容易地避免问题：
```javascript
console.log(
    (bar !== null) 
    && 
    (typeof bar === "object")
);  
// logs false
```

要答全问题，还有其他两件事情值得注意：

首先，上述解决方案将返回 `false`，当 `bar` 是一个函数的时候。在大多数情况下，这是期望行为，但当你也想对函数返回 `true` 的话，你可以修改上面的解决方案为：

```javascript
console.log(
    (bar !== null) 
    && 
    ((typeof bar === "object") 
    || 
    (typeof bar === "function"))
);
```

第二，上述解决方案将返回 `true`，当 `bar` 是一个数组（例如，当 `var bar = []`;）的时候。

在大多数情况下，这是期望行为，因为数组是真正的对象，但当你也想对数组返回 false 时，你可以修改上面的解决方案为：

```javascript
console.log(
    (bar !== null) 
    && 
    (typeof bar === "object") 
    && 
    (toString.call(bar) !== "[object Array]")
);
```

或者，如果你使用jQuery的话：

```javascript
console.log(
    (bar !== null) 
    && 
    (typeof bar === "object") 
    && (! $.isArray(bar))
);
```