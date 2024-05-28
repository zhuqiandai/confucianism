---
tag: [network]
authors: chengzhi
---

## 常用 header

1. 连接

    - Connection: keep-alive | close
    - Host
        
        > http1.1 需要一个 host 头部

    - Content-Length: TCP 不提供

2. 代理转发

    - x-forwarded-for: 用于传递 IP，包括转发中代理的一系列 IP
    - x-real-ip: 用于传递用户 IP

3. 上下文

    - User-Agent: 用户代理
    - Referer: absolute-uri | partical-uri 浏览器对来自某一页面的请求自动添加的头部

        > 统计分析，缓存优化，防盗链接

    - Server
    - Allow: #method

    - Accept-Ranges

        > 多线程下载，断点续传

4. 内容协商

    > 沟通决定 server 生成不同的 http entity body 发送给 client

    - server
        - Accept-Encoding: gzip
        - Accept-Language: zh-CN

    - client
        - Content-Type
        - Content-Encoding

5. HTTP Body 传输方式

    - Content-Length: 1*DIGIT

        > Content-Length 小于实际包体会丢掉超过字节的内容，TCP 还是会传输完整内容


