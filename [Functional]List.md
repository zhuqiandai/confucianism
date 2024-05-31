---
tags: [functional]
---

## List (Unbounded)

---

函数式编程中列表用单链表实现，所以一些方法 `head (fst)` `tail (snd)` 变得合理。使用一个指针指向链表头部，递归应用于链表其他部分的方法变得容易实现

```ocaml
1 :: [2; 3; 4; 5]

let rec sum lst =
    match lst with
        | [] -> 0
        | h :: t -> h + sum t

let rec map f x =
    match x with 
        | [] -> []
        | h :: t -> f h :: map f t
```
---

## Record (Bounded) (By name)

---

## Tuple (Bounded) (By position)

> Pairs are tuples that have two elements

---
