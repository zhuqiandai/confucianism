tag:: vim
status:: doing

-
- ## 记录宏
- `q{register}`
- `:reg {register}`
-
- ## 执行宏
-
- `{range}@{register}` : 串行执行 （在第一次失败之后会终止）
- `@@`
- `{range} normal @{register}` : 并行执行 （并行执行在每一行）
-
- ## 修改宏
-
- ### 追加
-
- 如果在 `@a` 中录制，在 `@A` 中进行追加
- 如果在 `@b` 中录制，在 `@B` 中进行追加
-
- ### 编辑
-
- 使用 `:put {register}` 获取寄存器内容
- 使用 `"{register} yank` 复制回寄存器
-
-