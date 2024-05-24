---
tags: [network]
---

<!-- 同步 -->

> 向 `Application Layer` 提供的服务 `Socket API`

| Property           | Behavior                                              |
| ------------------ | ----------------------------------------------------- |
| Stream of bytes    | Reliable byte dilivery service                        |
| Reliable delivery  | 1. Acknowledgements indicate correct dilivery         |
|                    | 2. Checksums detect corrupted data                    |
|                    | 3. Sequence numbers detect missing data               |
|                    | 4. Flow-control prevents overruning receiver          |
| In-sequence        | Data delivered to application in sequence transmitted |
| Congestion Control | Controls network congestion                           |

## Reliable delivery

1. 保证传输
2. 保证内容
3. 保证无丢失
4. 保证在缓冲范围内接受

## TCP Segement

> 两个 `Stream` 之间的同步

### TCP Segment Flags

1. `SYN`: 发送同步信号
2. `ACK`: 确认序列号有效
3. `FIN`: 连接的一端关闭
4. `PSH`: 连接的另一端立即传送数据

## Socket

> 使用 传输层编程提供的 `Socket API` 实现自定义应用层的功能，可以使用 `TCP` 提供的服务
