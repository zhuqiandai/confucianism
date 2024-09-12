tag:: vue
status:: done

- [vuejs](https://vuejs.org/api/)
-
- ```javascript
  /** predicate */
  
  // isRef() => type predicate `Ref<T> | T`
  
  // isProxy() => `reactive()` `shallowReactive()` readonly()` `shallowReadonly()`
  
  // isReactive() => `reactive()` `shallowReactive()`
  
  // isReadonly() => `readonly()` `shallowReadonly()` `computed() without set function`
  ```
-
- ```javascript
  /** convert */
  
  // toRef(): normalize values/refs/getters into refs
  
  // toRefs(): from a reactive object => plin object where each property is a ref pointing (created using `toRef()`)
  
  // toValue(): normalize values/refs/getters into values
  
  // unref(): normalize ref into values
  ```
-