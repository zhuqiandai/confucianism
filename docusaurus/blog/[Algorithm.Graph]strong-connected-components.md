---
tags: [algorithm]
---

## 思想

强连通分量（_Strongly Connected Components，SCC_）： 极大的强连通子图

1. 如果图中每一个顶点都可以从该图任意顶点到达，该图即强连通
2. 将有向图分解成强连通分量
3. 应用算法至每个强连通分量，再组合成连通图得到结果

## 实现

> `Kosaraju`
