tags:: unix
status:: done

-
- ## 处理中文
-
- 使用 `--pdf-engine=xelatex` 设置引擎
  logseq.order-list-type:: number
- 使用 `fc-list :lang=zh` 查看系统中文字体
  logseq.order-list-type:: number
- 使用 `-V mainfont="KaiTi"` 设置中文字体
  logseq.order-list-type:: number
-
- ```bash
   pandoc --pdf-engine=xelatex -V mainfont="KaiTi" hello.md -o hello.pdf
  ```
-