tag:: unix
status:: done

- ## `sed`
-
- > 维基百科：面向行的文本处理实用程序，它从输入流或文件中逐行读取文本到一个称为*模式空间* 的内部缓冲区。每读一行开始一个*循环* 。对于模式空间，`sed` 会应用`sed script` 指定的一个或多个操作。
-
- 使用 `stream editor` 在文件中或者标准输入中替换文本，基础结构为 `(range)(s|a|i|c)/pattern/replacement/(g|d|p)`
	-
	- `range`: 限定行
	- `s` : search
	- `a`: append
	- `i`: insert
	- `c`: change
-
	- `g`: global 如果不使用 global 默认处理每一行的第一次匹配
	- `d`: delete
	- `p`: print
	- `w`: write
-
- ### 替换
-
- ```bash
  sed 's/regexp/replacement/g' inputFileName > outputFileName
  ```
-
- ## `awk`
-
- > 维基百科：读取输入文件、为数据排序、处理数据、对输入执行计算以及生成报表
-
- ```bash
  awk [选项] '程序' [文件...] -v
  
  	-v: 定义变量
      -F: 设置字段分隔（默认是空格和制表符）
  ```
-
- 程序结构：`pattern {action}`，其中 `pattern` 表示在数据中查找的内容，`action` 是在找到匹配内容时所执行的一系列命令
-
- ### `pattern`
-
- ### `action` ： 包含字段变量，内置变了，运算符，控制流和内置函数
	-
	- `$0`: 当前行
	- `$1` `$2` `$3`: 依次表示字段
	- `NF`: 字段数
	- `NR`: 行号
	- `FS`: 字段分隔符（默认是空格和制表符）
	- `END`: 最后匹配块
-
-