---
tags: [algorithm]
---

## 思想

1. 从源节点开始直到所有出发边都被发现
2. 并不要求指定起始点，多个不连通的子图每个都会遍历到
3. 记录 _visited_ _finished_ 不需要访问相同的临边
4. 记录 _time_ 针对 `DAG`

---

## 实现

```typescript
const graph = {
  u: ["x", "v"],
  v: ["y"],
  w: ["y", "z"],
  x: ["v"],
  y: ["x"],
  z: [],
};

type kog = keyof typeof graph;

const dfs = (g: typeof graph) => {
  const visited = new Set<kog>();
  const finished = new Set<kog>();

  let time = 0;

  const visitedTime = new Map();
  const finishedTime = new Map();

  const topoStack: kog[] = [];

  const rec = (key: kog) => {
    if (!visited.has(key)) {
      visited.add(key);
      time += 1;
      visitedTime.set(key, time);
      console.log("current visited", key);

      for (const neighbor of g[key]) {
        rec(neighbor as kog);
      }

      finished.add(key);
      time += 1;
      finishedTime.set(key, time);
      console.log("current finished", key);
    }
  };

  // every vertex
  for (const v of Object.keys(g)) {
    rec(v as kog);
  }

  console.log("visitedTime Map", visitedTime);
  console.log("finishedTime Map", finishedTime);
};

dfs(graph);
```
