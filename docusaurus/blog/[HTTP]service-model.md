---
tags: [network]
authors: chengzhi
---

## 术语

定义：_web page_ 是由对象组成。一个对象只是一个文件，而可以通过 `URL` 进行寻址。多数 _web page_ 包含一个 `base HTML file`，引用的文件都是一个单独对象

1. URL `Uniform Resolution Locator` [uri](./[HTTP]URI.md)

   Protocal://user:psw@www.somedomain.com/dir/pic.gif:port

   **协议 用户:口令 主机名 路径 端口**

## HTTP `HyperText Transfer Protocol`

概念：`HTTP` 定义了 _web client_ 向 _web server_ 请求 _web page_ 的方式，以及 _web server_ 向 _web client_ 传送 _web page_ 的方式

1. `HTTP` 使用 `client` / `server` 模式，多个连接请求 `server` 会创建多个 `socket`

   - `client` 实现了 `http` 的客户端
   - `server` 实现了 `http` 的服务器，存储 _web object_，由 `URL` 进行寻址

2. _web server_ 不存储 _web client_ 的任何信息 `stateless protocal`

> 默认方式大部分浏览器会打开 5 ~ 10 个并行的 `TCP` 连接

### RTT (Round Trip Time)

定义：一个短分组从客户端到服务器，再返回到客户端所花费的时间

- 非持久连接：一般情况文件传输 建立 TCP 连接需要一个 RTT，传递报文需要一个 RTT
- 持久连接：流水线或者非流水线，可以并行使所有请求达到一个 RTT

## HTTP Message

1. 请求报文

   `request line = method SP request-target SP HTTP-version CRLF`

   - request line

     - METHOD (GET POST HEAD PUT DELETE OPTIONS)
     - URL
     - VERSION

   - header line
   - `cr lf`
   - entity body

2. 响应报文

   - status line

     - VERSION
     - STATUS CODE
     - MESSAGE

   - header line
   - `cr lf`
   - entity body

> `TCP` 不提供每个报文的边界，`HTTP` 要根据 `Content-Length` 自行区分

### Response Status Code

| code | description                                               |
| ---- | --------------------------------------------------------- |
| 100  | Continue 客户端 携带 _Expect: 100 continue_ 头部          |
| 101  | Switch Protocol 客户端携带 _upgrade_ 头部，表示可升级请求 |
| 102  | For WebDAV                                                |
