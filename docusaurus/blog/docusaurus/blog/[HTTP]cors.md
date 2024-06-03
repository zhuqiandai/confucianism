---
tag: [network]
---

## 同源访问

---

> 通过 `URL` 访问的对象资源不存在跨域，只有通过 `ajax` 才会有跨域资源访问问题。

### 同源策略

> 协议 主机 端口完全相同

1. 没有同源策略下的 cookie 会自动携带到其他站点
2. 没有同源策略下的 script 会可以注入

---

### 访问策略

1. 可用性: HTML 创作者决定跨域请求是否对本站点安全

   1. `src` 属性
   2. 表单提交

2. 安全性: 防止来自脚本的危险动作

   1. Application 中的数据
   2. DOM 数据
   3. AJAX 请求

---

## 跨域访问

---

### 跨域资源共享

https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS

1. 简单请求的跨域访问 `GET/POST/HEAD`
2. 预检请求的跨域访问 `GET/POST/HEAD`

---

### 简单请求

> 在通过 `Origin` 和 `Access-Control-Allow-Origin` 的传递中，`Origin` 当发起 `ajax` 请求时被自动设置，而跨域限制由 `client` 端由 `Access-Control-Allow-Origin` 头部来控制，违规的跨域浏览器会阻止渲染

---

### 预检请求

预检请求需要使用 `OPTIONS` 提前协商，发送头部包括

    - `Access-Control-Request-Method`
    - `Access-Control-Request-Headers`

预检请求响应头部包括

    - `Access-Control-Allow-Method`
    - `Access-Control-Allow-Headers`
    - `Access-Control-Max-Age`
