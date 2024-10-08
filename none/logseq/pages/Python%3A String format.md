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
  # `{char}<`
  # `{char}>`
  # `{char}^`
  
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
  '{:%Y-%m-%d %H:%M}'.format(datetime(2001, 2, 3, 4, 5))

  # format named: 
  data = {'first': 'Hodor', 'last': 'Hodor!'}
  '{first} {last}'.format(**data)

  '{first} {last}'.format(first='Hodor', last='Hodor!')
  
  ```
