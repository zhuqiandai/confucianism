---
tags: [network]
---

`HTTP HyperText Transfer Protocol` 包括其他 `Application Layer` 服务模型，实现不同主机之间的进程通信，`HTTP` 使用 `Message` 来实现。

## Application 上层

> 不限制于 `http`

1. 通信中进程的寻址 定位

   - 主机
   - 传输协议
   - 端口 (_16 bit_)
   - 进程使用 `IP + Port` 标识一个 `endpoint`
   - 一对主机之间的进程通信由两个端节点构成

2. 通信中进程使用传输层接口 `Socket` 服务

   - 两个进程之间通信需要建立连接
   - 两个进程之间通信会持续一段时间
   - 建立连接成功后操作系统返回一个 **本地整数标识** 两个 `endpoint` 之间的通信关系
   - 该 _Socket_ 整数即标识出：本地 `IP Port` 远程 `IP Port`

3. 通信中进程根据传输层服务构建应用层协议，实现报文交换和构建应用

### `TCP` 之上的 `Socket`

提供 4元组, 操作系统提供一张已经建立 `Socket` 的状态表，`TCP Socket` 本质标识一个连接关系

### `UDP` 之上的 `Socket`

提供 2元组，只提供一个整数标识：本地 `IP Port`，但是传输数据时需要 远程 `IP Port`

## Application 协议

通过交换报文在应用层进行通信，协议作为应用的一部分

    - 报文类型
    - 语法
    - 语义
    - 规则

## Application 下层

即应用层向传输层提供的服务：

    1. 数据丢失率
    2. 延迟
    3. 吞吐
    4. 安全性
        - 完整
        - 可认证

### HTTP Message

- `request line`
- `header line`
- `entity body`

[http-request-format](./assets/http-request-format.png)

### World Wide Web

定义：基于 `Restful` 架构，以 `URI` 作为沟通依据，通过 `HTTP` 提供服务

## Application 安全

`SSL` 提供包括认证、私密、完整性等服务，`SSL over TCP`
