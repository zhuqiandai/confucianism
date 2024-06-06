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
```
