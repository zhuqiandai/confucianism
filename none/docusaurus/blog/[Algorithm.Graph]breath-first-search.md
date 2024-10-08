---
tags: [algorithm]
---

## 思想

1. 给定图 `G = (V, E)` 和一个可以识别的源节点 `s`，`BFS` 对图 `G` 中的边进行系统性探索发现所有可以从源节点 `s` 到达的节点
2. `BFS` 计算从源节点 `s` 到每个可到达节点的距离
3. 始终保持已发现节点和未发现节点的边界，向外扩展
4. `BFS` 关注一个 `s` 和 `node` 之间的关系，所以只需要一定一个关注的 `s`
5. `Prim` `Dijkstra` 使用类似 `BFS` 思想

---

## 实现

```typescript
const graph = {
  s: ["r", "w"],
  r: ["s", "v"],
  v: ["r"],
  w: ["s", "t", "x"],
  t: ["w", "x", "u"],
  x: ["w", "t", "y", "u"],
  u: ["t", "y", "x"],
  y: ["x", "u"],
};
type kog = keyof typeof g;

const breathFirstSearch = (g: typeof graph) => {
  const queue: kog[] = [];
  const visited = new Set();
  const finished = new Set();

  // entry point
  const point = "s" as kog;
  queue.push(point);
  visited.add(point);

  while (queue.length) {
    const v = queue.shift() as kog;
    const neighbors = g[v];

    for (const n of neighbors) {
      if (!visited.has(n)) {
        visited.add(n);

        queue.push(n as kog);
      }
    }

    finished.add(v);
  }
};
```
