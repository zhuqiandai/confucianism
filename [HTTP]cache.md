---
title: "[HTTP]缓存"
tags: [network]
---

## 条件请求 (Condition GET) 与 条件验证

---

### 条件验证

> 根据条件验证判断是否需要 建立缓存，更新缓存，使用缓存，增量更新

- ETag

  1. 强验证器 `ETag: "tag value"`
  2. 弱验证器 `ETag: W/"tag value"`

- Last-Modified: `HTTP-date`

  - `if-Modified-Since`: 与 `Last-Modified` 比对
  - `if-UnModified-Since`: 与 `Last-Modified` 比对
  - `if-None-Match`: 与 `ETag` 比对
  - `if-Match`: 与 `ETag` 比对

  > 未通过的请求会有 `412` 的响应码

- Content-Range

  - `if-Ragne`: 与 `ETag` 比对进行大文件增量请求

---

## 缓存

---

### 缓存控制

> Chrome Devtools 中提供缓存位置，客户端缓存包括 `Memory Cache` 和 `Disk Cache`

- Cache-Control and Expires

