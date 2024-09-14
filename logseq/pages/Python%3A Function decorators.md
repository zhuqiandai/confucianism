tags:: python
status:: doing

-
-
- ## 函数装饰器
-
- ### 函数调用
-
- 将 **被修饰的函数** 传入 **修饰函数** 参数，在闭包中构造 **新函数** 并返回
  logseq.order-list-type:: number
- **装饰函数** 链式调用
  logseq.order-list-type:: number
-
- ```python
  @say_hello
  def name(a, b):
    print('name', a, b)
    
  def say_hello(func):
    def inner(a, b):
      print("say hello", a, b)
      func()
    return inner
  
  name("first", "second")
  ```
-
- ### 装饰参数
-
- **装饰函数传入参数** 等于调用一次该函数并返回 **装饰函数**
-
-
- ### 语法糖 `@functools.wrap`
-
- ## 类装饰器