---
title: "[IP]NAT"
status: "Pending"
date: "2024-05-23"
---

[NAT#wiki](https://www.wikiwand.com/en/Network_address_translation)

`Network Address Translation (RFC 1631)`

## 原理

控制 `IP` 数量，transform private address into unique public address

> `NAT` 提供其他很多传输控制功能，之后补充

## 特点

### NAT Translation Table

`NAT Router` 维护一张表，包含 `PORT and IP Address`

`IP Packet` 都有源地址和目的地址。从私有网络发送到公共网络的 `IP Packet` 需要修改，而从公共网络传递回私有网络的 `IP Packet` 也需要修改，这里的修改包括 `address` 和 `port`

### Private Network Address (RFC 1918)

内部通信不能和公网通信，`Private Address` 可能嵌套，拨号获取的可以是公网 `IP` 或者运营商的私网 `IP`

> `Virtual Private Network`: 利用公用的互联网作为本机构各专用网之间的通信载体，VPN 通过隧道连接到一起

## 使用

