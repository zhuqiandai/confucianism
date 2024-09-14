tags:: python
status:: doing

-
- https://pyformat.info/
-
- > `:` variable
-
- ## string: prefixes
-
- `r''` : raw string (regex usage)
- `u''` : unicode string
-
- ```python

  # format pading:
  # `:{n}`

  '{:_4d}'.format(42)
  
  # format align: `< > ^` : 对齐方式 `左 右 中`
  
  # format conversion: 
  # `!r`: `__repr__`
  # `!s`: `__str__`
  # `!a`: ascii
  
  # format truncat:
  # `.`
  
  '{:.5}'.format('xylophone')
  
  # format number:
  # `:{signed}{n}d` `:{signed}{n}f` `:{signed}{n}h` `:{signed}{n}b`

  # format datetime:


  # format parametrized: 
  
  ```
