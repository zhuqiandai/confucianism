---
tags: [network]
---

`HTTP HyperText Transfer Protocol` 包括其他 `Application Layer` 服务模型，实现不同主机之间的进程通信，`HTTP` 使用 `Message` 来实现。

## Application 

> 不限制于 `http`

1. 通信中进程的寻址 定位

    - 主机
    - 传输协议
    - 端口 (_16 bit_)
    - 进程使用 `IP + Port` 标识一个 `endpoint`
    - 一对主机之间的进程通信由两个端节点构成

2. 通信中进程使用传输层接口 服务
3. 通信中进程根据传输层服务构建应用层协议，实现报文交换和构建应用

## HTTP Message

- `request line`  
- `header line` 
- `entity body`

[http-request](./assets/http-request.png) 

