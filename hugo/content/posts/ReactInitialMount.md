+++
title = "ReactRootRender"
date = 2024-09-24
categories = ["ReactDeep"]
description = ""
+++

## 0. Before schedule

![text](/react-before-schedule.png) 

## 1. Render phrase

### 1.1 `performConcurrentWorkOnRoot`

![text](/react-before-performconcurrentworkonroot.png) 

> `initial` 和 `re-render` 的入口，这里的匿名函数就是 `scheduleImmediateTask` 的 `callback`，从这里开始

### 1.2 `renderRootSync`

`executionContext` `dispatcher` `asyncDispatcher`

> **Current and WIP**: So current means the current version which is painted on the UI, workInProgress means the version that is the being built and will be used as next current.

### 1.3 `prepareFreshStack`

从 `root.current (HostRoot)` 创建 `WIP` 的 `Local variables`

### 1.4 `workLoopSync => performUnitOfWork => beginWork`


```javascript
function workLoopSync() {
  while (workInProgress !== null) {
    performUnitOfWork(workInProgress);
  }
}
```

### 1.5 `updateHostRoot`

### 1.6 `mountChildFibers` and `reconcileChildFibers`

```javascript
const reconcileChildFibers = createChildReconciler(true);
const mountChildFibers = createChildReconciler(false);

function createChildReconciler() {
    function placeSingleChild() {}
    function reconcileSingleElement() {

    }
    function reconcileChildFibersImpl() {
        ...
        const firstChild = placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, lanes));
        ...
    }
    function reconcileChildFibers() {

    }
    return reconcileChildFibers
}
```

### 1.7 `reconcileSingleElement` and `createFiberFromElement`

### 1.8 `updateFunctionComponent` 

> `FunctionComponent` 函数组件 `FiberNode tags`

### 1.9 `updateHostComponent`

> `HostComponent` 原生组件 `FiberNode tags`

## 2. Commit phrase

### 2.1 `commitMutationEffects`

![](/react-before-commit.png)

### 2.2 `commitReconciliationEffects`

### 2.3 `commitHostPlacement => commitPlacement`

### 2.4 `insertOrAppendPlacementNodeIntoContainer`

### 2.5 `insertInContainerBefore` and `appendChildToContainer`
