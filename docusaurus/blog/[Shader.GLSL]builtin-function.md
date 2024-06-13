---
tags: [shader]
---

## Function

> 常用函数原型

- `step(edge, x)`
- `mix(a, b, t)` also `lerp`
- `smoothstep(edge0, edge1, x)`

|              |                                                       |
| ------------ | ----------------------------------------------------- |
| `step`       | `if x < edge ? return 0.0 : return 1.0`               |
|              | `step(0.5, 0.0) -> 0.0`                               |
|              | `step(0.5, 1.0) -> 1.0`                               |
|              | `step(0.5, 0.49) -> 0.0`                              |
|              | `step(0.5, 0.51) -> 1.0`                              |
| `mix`        | `return a + t * (b - a)`                              |
|              | `mix(10., 20., 0.0) -> 10.`                           |
|              | `mix(10., 20., 1.0) -> 20.`                           |
|              | `mix(10., 20., .25) -> 12.5`                          |
|              | `mix(10., 20., .75) -> 17.5`                          |
| `smoothstep` | `t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);` |
|              | `return t * t * (3.0 - 2.0 * t);`                     |
|              | `smoothstep(10., 20. 10.) -> 0.0`                     |
|              | `smoothstep(10., 20. 20.) -> 1.0`                     |
|              | `smoothstep(10., 20. 12.5) -> .156`                   |
|              | `smoothstep(10., 20. 15.) -> 0.5`                     |


- `min(x, y)`
- `max(x, y)`
- `clamp(x, min, max)`

| | |
| -------------- | --------------- |
| `clamp` | `if a < min return min else if a > max return max else return a`  |

- `abs`
- `floor`
