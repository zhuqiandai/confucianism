---
tags: [algorithm]
---

## 思想

1. 从一个点开始深度遍历，并访问邻接节点继续深度遍历
2. 并不要求指定起始点，多个不连通的子图依次深度遍历
3. 记录 _visited_ _finished_ 防止重复访问
4. 针对 `DAG`，记录 _finished_ 的时间可以进行拓扑排序 (可以有一个或者多个拓扑排序结果)

---

## 实现

```typescript 

function dfs(graph) {

    function rec_dfs () {

    }
}

```
