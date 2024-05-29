"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7219],{3767:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/[HTTP]headers","metadata":{"permalink":"/confucianism/blog/[HTTP]headers","source":"@site/blog/[HTTP]headers.md","title":"[HTTP]headers","description":"\u5e38\u7528 header","date":"2024-05-28T08:59:15.000Z","tags":[],"readingTime":1.65,"hasTruncateMarker":false,"authors":[{"name":"\u8bda\u77e5","title":"\u5c3d\u5fc3\u77e5\u6027","url":"https://github.com/zhuqiandai","imageURL":"https://github.com/zhuqiandai.png","key":"chengzhi"}],"frontMatter":{"tag":["network"],"authors":"chengzhi"},"unlisted":false,"nextItem":{"title":"[Shader]shape-func","permalink":"/confucianism/blog/[Shader]shape-func"}},"content":"## \u5e38\u7528 header\\n\\n### 1. \u8fde\u63a5\\n\\n    - Connection: keep-alive | close\\n    - Host\\n        \\n        > http1.1 \u9700\u8981\u4e00\u4e2a host \u5934\u90e8\\n\\n    - Content-Length: TCP \u4e0d\u63d0\u4f9b\\n\\n### 2. \u4ee3\u7406\u8f6c\u53d1\\n\\n    - x-forwarded-for: \u7528\u4e8e\u4f20\u9012 IP\uff0c\u5305\u62ec\u8f6c\u53d1\u4e2d\u4ee3\u7406\u7684\u4e00\u7cfb\u5217 IP\\n    - x-real-ip: \u7528\u4e8e\u4f20\u9012\u7528\u6237 IP\\n\\n### 3. \u4e0a\u4e0b\u6587\\n\\n    - User-Agent: \u7528\u6237\u4ee3\u7406\\n    - Referer: absolute-uri | partical-uri \u6d4f\u89c8\u5668\u5bf9\u6765\u81ea\u67d0\u4e00\u9875\u9762\u7684\u8bf7\u6c42\u81ea\u52a8\u6dfb\u52a0\u7684\u5934\u90e8\\n\\n        > \u7edf\u8ba1\u5206\u6790\uff0c\u7f13\u5b58\u4f18\u5316\uff0c\u9632\u76d7\u94fe\u63a5\\n\\n    - Server\\n    - Allow: #method\\n\\n    - Accept-Ranges\\n\\n        > \u591a\u7ebf\u7a0b\u4e0b\u8f7d\uff0c\u65ad\u70b9\u7eed\u4f20\\n\\n### 4. \u5185\u5bb9\u534f\u5546\\n\\n    > \u6c9f\u901a\u51b3\u5b9a server \u751f\u6210\u4e0d\u540c\u7684 http entity body \u53d1\u9001\u7ed9 client\\n\\n    - server\\n        - Accept-Encoding: gzip\\n        - Accept-Language: zh-CN\\n\\n    - client\\n        - Content-Type\\n        - Content-Encoding\\n\\n### 5. HTTP Body \u4f20\u8f93\u65b9\u5f0f\\n\\n    - \u5b9a\u957f\u5305\u4f53 Content-Length: 1*DIGIT\\n\\n        > Content-Length \u5c0f\u4e8e\u5b9e\u9645\u5305\u4f53\u4f1a\u4e22\u6389\u8d85\u8fc7\u5b57\u8282\u7684\u5185\u5bb9\uff0cTCP \u8fd8\u662f\u4f1a\u4f20\u8f93\u5b8c\u6574\u5185\u5bb9\\n\\n        > Content-Length \u5927\u4e8e\u5b9e\u9645\u5305\u4f53\u4f1a\u8fdd\u53cd http \u89c4\u8303\\n\\n    - \u4e0d\u5b9a\u957f\u5305\u4f53 Transfer-Encoding: chunked\\n\\n        > \u57fa\u4e8e\u957f\u8fde\u63a5\u63a8\u9001\u52a8\u6001\u5185\u5bb9\u7ed9\u5ba2\u6237\u7aef; \u538b\u7f29\u5185\u5bb9\u53ef\u4ee5\u540c\u6b65\u53d1\u9001\uff1b\\n\\n\\n### 6. Chunked transfer encoding\\n\\n    - chunk-body = *chunk , last-chunk, trailer-part CRLF\\n    - chunk = chunk-size CRLF chunk-data CRLF\\n\\n        - chunk-size = 1*HEXDIG\\n        - chunk-data = 1*OCTET\\n\\n    - last-chunk = \\"0\\" CRLF\\n    - trailer-part = *(header-field CRLF)\\n\\n\\n### 7. MIME Multipurpose Internet Mail Extensions\\n\\n    - Content-Type: type / subtype (parameters)\\n        - type := discrete-type | composite-type\\n        - subtype \u5b50\u7c7b\u578b\\n    - Content-Disposition: diposition-type \\n        - disposition-type := \\"inline\\" | \\"attachment\\"\\n        \\n        > \u6307\u5b9a\u6d4f\u89c8\u5668\u5c06\u5305\u4f53\u4f5c\u4e3a\u9644\u4ef6\u4e0b\u8f7d"},{"id":"/[Shader]shape-func","metadata":{"permalink":"/confucianism/blog/[Shader]shape-func","source":"@site/blog/[Shader]shape-func.md","title":"[Shader]shape-func","description":"","date":"2024-05-28T02:22:07.000Z","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tag":["shader"]},"unlisted":false,"prevItem":{"title":"[HTTP]headers","permalink":"/confucianism/blog/[HTTP]headers"},"nextItem":{"title":"[Toolbox]powertoy","permalink":"/confucianism/blog/[Toolbox]powertoy"}},"content":""},{"id":"/[Toolbox]powertoy","metadata":{"permalink":"/confucianism/blog/[Toolbox]powertoy","source":"@site/blog/[Toolbox]powertoy.md","title":"[Toolbox]powertoy","description":"\u5e38\u7528\u529f\u80fd","date":"2024-05-28T02:22:07.000Z","tags":[],"readingTime":0.17,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tag":["toolbox"]},"unlisted":false,"prevItem":{"title":"[Shader]shape-func","permalink":"/confucianism/blog/[Shader]shape-func"},"nextItem":{"title":"[Nginx]location","permalink":"/confucianism/blog/[Nginx]location"}},"content":"## \u5e38\u7528\u529f\u80fd\\n\\n|               |                 |\\n| ------------- | --------------- |\\n| Powertoys run | Alt + Space     |\\n| \u5c4f\u5e55\u53d6\u8272      | Win + Shift + c |\\n| \u5c4f\u5e55\u50cf\u7d20      | Win + Shift + m |"},{"id":"/[Nginx]location","metadata":{"permalink":"/confucianism/blog/[Nginx]location","source":"@site/blog/[Nginx]location.md","title":"[Nginx]location","description":"\u5185\u5bb9","date":"2024-05-27T09:03:40.000Z","tags":[],"readingTime":0.065,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tag":["nginx"]},"unlisted":false,"prevItem":{"title":"[Toolbox]powertoy","permalink":"/confucianism/blog/[Toolbox]powertoy"},"nextItem":{"title":"[Configuration]alacritty","permalink":"/confucianism/blog/[Configuration]alacritty"}},"content":"## \u5185\u5bb9\\n\\n1. nginx locator match\\n2. nginx port\\n3. nginx proxy_pass"},{"id":"/[Configuration]alacritty","metadata":{"permalink":"/confucianism/blog/[Configuration]alacritty","source":"@site/blog/[Configuration]alacritty.md","title":"[Configuration]alacritty","description":"","date":"2024-05-27T08:54:05.000Z","tags":[],"readingTime":0.335,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"[Nginx]location","permalink":"/confucianism/blog/[Nginx]location"},"nextItem":{"title":"[HTTP]cookie","permalink":"/confucianism/blog/[HTTP]cookie"}},"content":"```toml\\n[shell]\\nprogram=\\"C:\\\\\\\\Windows\\\\\\\\System32\\\\\\\\wsl.exe\\"\\nargs=[\\"--cd\\", \\"~\\"]\\n\\n[font]\\nnormal = { family = \\"JetBrainsMonoNL Nerd Font\\", style = \\"Italic\\" }\\nbold = { family = \\"JetBrainsMonoNL Nerd Font\\",  style = \\"Italic\\" }\\nitalic = { family = \\"JetBrainsMonoNL Nerd Font\\",  style = \\"Italic\\" }\\nsize = 11\\noffset = { x = 0, y = 8 }\\n\\n\\n[window]\\npadding = { x = 8, y = 8 }\\n\\n```"},{"id":"/[HTTP]cookie","metadata":{"permalink":"/confucianism/blog/[HTTP]cookie","source":"@site/blog/[HTTP]cookie.md","title":"[HTTP]cookie","description":"\u94fe\u63a5","date":"2024-05-27T08:54:05.000Z","tags":[],"readingTime":0.435,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tag":["network"]},"unlisted":false,"prevItem":{"title":"[Configuration]alacritty","permalink":"/confucianism/blog/[Configuration]alacritty"},"nextItem":{"title":"category/[useful-ramda]lens","permalink":"/confucianism/blog/category/[useful-ramda]lens"}},"content":"## \u94fe\u63a5\\n\\nhttps://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies\\nhttps://en.wikipedia.org/wiki/HTTP_cookie\\n\\n## cookie \u6a21\u578b\\n\\n> \u5728 _stateless_ \u7684 _http_ \u63d0\u4f9b\u4e86 _session layer_\\n\\n1. \u54cd\u5e94\u62a5\u6587\u4e2d\u7684 cookie \u9996\u90e8\u5b57\u6bb5\\n2. \u8bf7\u6c42\u62a5\u6587\u4e2d\u7684 cookie \u9996\u90e8\u5b57\u6bb5\\n3. \u5ba2\u6237\u7aef\u4fdd\u5b58 cookie \u6587\u4ef6\uff0c\u7531\u6d4f\u89c8\u5668\u7ba1\u7406\\n4. \u670d\u52a1\u7aef\u5b58\u50a8 cookie \u7684\u8868\u9879\uff0c\u5f53\u6709 cookie \u65f6\u6267\u884c cookie \u7279\u5b9a\u64cd\u4f5c\\n\\n## cookie \u4f7f\u7528\\n\\n> cookie \u4e0e seesion \u76f8\u7ed3\u5408"},{"id":"/category/[useful-ramda]lens","metadata":{"permalink":"/confucianism/blog/category/[useful-ramda]lens","source":"@site/blog/category/[useful-ramda]lens.md","title":"category/[useful-ramda]lens","description":"","date":"2024-05-27T08:54:05.000Z","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tag":["functor"]},"unlisted":false,"prevItem":{"title":"[HTTP]cookie","permalink":"/confucianism/blog/[HTTP]cookie"},"nextItem":{"title":"[Application]service-model","permalink":"/confucianism/blog/[Application]service-model"}},"content":""},{"id":"/[Application]service-model","metadata":{"permalink":"/confucianism/blog/[Application]service-model","source":"@site/blog/[Application]service-model.md","title":"[Application]service-model","description":"HTTP HyperText Transfer Protocol \u5305\u62ec\u5176\u4ed6 Application Layer \u670d\u52a1\u6a21\u578b\uff0c\u5b9e\u73b0\u4e0d\u540c\u4e3b\u673a\u4e4b\u95f4\u7684\u8fdb\u7a0b\u901a\u4fe1\uff0cHTTP \u4f7f\u7528 Message \u6765\u5b9e\u73b0\u3002","date":"2024-05-24T09:24:11.000Z","tags":[{"label":"network","permalink":"/confucianism/blog/tags/network"}],"readingTime":2.155,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["network"]},"unlisted":false,"prevItem":{"title":"category/[useful-ramda]lens","permalink":"/confucianism/blog/category/[useful-ramda]lens"},"nextItem":{"title":"[Web]cors","permalink":"/confucianism/blog/[Web]cors"}},"content":"`HTTP HyperText Transfer Protocol` \u5305\u62ec\u5176\u4ed6 `Application Layer` \u670d\u52a1\u6a21\u578b\uff0c\u5b9e\u73b0\u4e0d\u540c\u4e3b\u673a\u4e4b\u95f4\u7684\u8fdb\u7a0b\u901a\u4fe1\uff0c`HTTP` \u4f7f\u7528 `Message` \u6765\u5b9e\u73b0\u3002\\n\\n## Application \u4e0a\u5c42\\n\\n> \u4e0d\u9650\u5236\u4e8e `http`\\n\\n1. \u901a\u4fe1\u4e2d\u8fdb\u7a0b\u7684\u5bfb\u5740 \u5b9a\u4f4d\\n\\n   - \u4e3b\u673a\\n   - \u4f20\u8f93\u534f\u8bae\\n   - \u7aef\u53e3 (_16 bit_)\\n   - \u8fdb\u7a0b\u4f7f\u7528 `IP + Port` \u6807\u8bc6\u4e00\u4e2a `endpoint`\\n   - \u4e00\u5bf9\u4e3b\u673a\u4e4b\u95f4\u7684\u8fdb\u7a0b\u901a\u4fe1\u7531\u4e24\u4e2a\u7aef\u8282\u70b9\u6784\u6210\\n\\n2. \u901a\u4fe1\u4e2d\u8fdb\u7a0b\u4f7f\u7528\u4f20\u8f93\u5c42\u63a5\u53e3 `Socket` \u670d\u52a1\\n\\n   - \u4e24\u4e2a\u8fdb\u7a0b\u4e4b\u95f4\u901a\u4fe1\u9700\u8981\u5efa\u7acb\u8fde\u63a5\\n   - \u4e24\u4e2a\u8fdb\u7a0b\u4e4b\u95f4\u901a\u4fe1\u4f1a\u6301\u7eed\u4e00\u6bb5\u65f6\u95f4\\n   - \u5efa\u7acb\u8fde\u63a5\u6210\u529f\u540e\u64cd\u4f5c\u7cfb\u7edf\u8fd4\u56de\u4e00\u4e2a **\u672c\u5730\u6574\u6570\u6807\u8bc6** \u4e24\u4e2a `endpoint` \u4e4b\u95f4\u7684\u901a\u4fe1\u5173\u7cfb\\n   - \u8be5 _Socket_ \u6574\u6570\u5373\u6807\u8bc6\u51fa\uff1a\u672c\u5730 `IP Port` \u8fdc\u7a0b `IP Port`\\n\\n3. \u901a\u4fe1\u4e2d\u8fdb\u7a0b\u6839\u636e\u4f20\u8f93\u5c42\u670d\u52a1\u6784\u5efa\u5e94\u7528\u5c42\u534f\u8bae\uff0c\u5b9e\u73b0\u62a5\u6587\u4ea4\u6362\u548c\u6784\u5efa\u5e94\u7528\\n\\n### `TCP` \u4e4b\u4e0a\u7684 `Socket`\\n\\n\u63d0\u4f9b 4\u5143\u7ec4, \u64cd\u4f5c\u7cfb\u7edf\u63d0\u4f9b\u4e00\u5f20\u5df2\u7ecf\u5efa\u7acb `Socket` \u7684\u72b6\u6001\u8868\uff0c`TCP Socket` \u672c\u8d28\u6807\u8bc6\u4e00\u4e2a\u8fde\u63a5\u5173\u7cfb\\n\\n### `UDP` \u4e4b\u4e0a\u7684 `Socket`\\n\\n\u63d0\u4f9b 2\u5143\u7ec4\uff0c\u53ea\u63d0\u4f9b\u4e00\u4e2a\u6574\u6570\u6807\u8bc6\uff1a\u672c\u5730 `IP Port`\uff0c\u4f46\u662f\u4f20\u8f93\u6570\u636e\u65f6\u9700\u8981 \u8fdc\u7a0b `IP Port`\\n\\n## Application \u534f\u8bae\\n\\n\u901a\u8fc7\u4ea4\u6362\u62a5\u6587\u5728\u5e94\u7528\u5c42\u8fdb\u884c\u901a\u4fe1\uff0c\u534f\u8bae\u4f5c\u4e3a\u5e94\u7528\u7684\u4e00\u90e8\u5206\\n\\n    - \u62a5\u6587\u7c7b\u578b\\n    - \u8bed\u6cd5\\n    - \u8bed\u4e49\\n    - \u89c4\u5219\\n\\n## Application \u4e0b\u5c42\\n\\n\u5373\u5e94\u7528\u5c42\u5411\u4f20\u8f93\u5c42\u63d0\u4f9b\u7684\u670d\u52a1\uff1a\\n\\n    1. \u6570\u636e\u4e22\u5931\u7387\\n    2. \u5ef6\u8fdf\\n    3. \u541e\u5410\\n    4. \u5b89\u5168\u6027\\n        - \u5b8c\u6574\\n        - \u53ef\u8ba4\u8bc1\\n\\n### HTTP Message\\n\\n- `request line`\\n- `header line`\\n- `entity body`\\n\\n[http-request-format](./assets/http-request-format.png)\\n\\n### World Wide Web\\n\\n\u5b9a\u4e49\uff1a\u57fa\u4e8e `Restful` \u67b6\u6784\uff0c\u4ee5 `URI` \u4f5c\u4e3a\u6c9f\u901a\u4f9d\u636e\uff0c\u901a\u8fc7 `HTTP` \u63d0\u4f9b\u670d\u52a1\\n\\n## TCP \u4e4b\u4e0a\u7684\u5b89\u5168\\n\\n`SSL` \u63d0\u4f9b\u5305\u62ec\u8ba4\u8bc1\u3001\u79c1\u5bc6\u3001\u5b8c\u6574\u6027\u7b49\u670d\u52a1\uff0c`SSL over TCP`"},{"id":"/[Web]cors","metadata":{"permalink":"/confucianism/blog/[Web]cors","source":"@site/blog/[Web]cors.md","title":"[Web]cors","description":"\u901a\u8fc7 URL \u8bbf\u95ee\u7684\u5bf9\u8c61\u8d44\u6e90\u4e0d\u5b58\u5728\u8de8\u57df\uff0c\u53ea\u6709\u901a\u8fc7 ajax \u624d\u4f1a\u6709\u8de8\u57df\u8d44\u6e90\u8bbf\u95ee\u95ee\u9898\u3002","date":"2024-05-24T09:24:11.000Z","tags":[],"readingTime":0.165,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"[Application]service-model","permalink":"/confucianism/blog/[Application]service-model"},"nextItem":{"title":"[CI.CD]model","permalink":"/confucianism/blog/[CI.CD]model"}},"content":"> \u901a\u8fc7 `URL` \u8bbf\u95ee\u7684\u5bf9\u8c61\u8d44\u6e90\u4e0d\u5b58\u5728\u8de8\u57df\uff0c\u53ea\u6709\u901a\u8fc7 `ajax` \u624d\u4f1a\u6709\u8de8\u57df\u8d44\u6e90\u8bbf\u95ee\u95ee\u9898\u3002\\n\\nhttps://en.wikipedia.org/wiki/Cross-origin_resource_sharing"},{"id":"/[CI.CD]model","metadata":{"permalink":"/confucianism/blog/[CI.CD]model","source":"@site/blog/[CI.CD]model.md","title":"[CI.CD]model","description":"","date":"2024-05-24T03:50:53.000Z","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"[Web]cors","permalink":"/confucianism/blog/[Web]cors"},"nextItem":{"title":"[Chrome]network-pane","permalink":"/confucianism/blog/[Chrome]network-pane"}},"content":""},{"id":"/[Chrome]network-pane","metadata":{"permalink":"/confucianism/blog/[Chrome]network-pane","source":"@site/blog/[Chrome]network-pane.md","title":"[Chrome]network-pane","description":"\u7ec4\u6210","date":"2024-05-24T03:50:53.000Z","tags":[],"readingTime":0.2,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tag":["network","chrome-dev-tools"]},"unlisted":false,"prevItem":{"title":"[CI.CD]model","permalink":"/confucianism/blog/[CI.CD]model"},"nextItem":{"title":"[DNS]service-model","permalink":"/confucianism/blog/[DNS]service-model"}},"content":"## \u7ec4\u6210\\n\\n|          |         |\\n| -------- | ------- |\\n| \u63a7\u5236\u5668   | Item2.1 |\\n| \u8fc7\u6ee4\u5668   | Item2.2 |\\n| \u6982\u89c8     | Item2.3 |\\n| \u8bf7\u6c42\u5217\u8868 | Item2.3 |\\n| \u6982\u8981     | Item2.3 |\\n\\n## \u7f51\u7edc\u6d3b\u52a8\\n\\n## \u7f51\u7edc\u529f\u80fd"},{"id":"/[DNS]service-model","metadata":{"permalink":"/confucianism/blog/[DNS]service-model","source":"@site/blog/[DNS]service-model.md","title":"[DNS]service-model","description":"","date":"2024-05-24T03:50:53.000Z","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"[Chrome]network-pane","permalink":"/confucianism/blog/[Chrome]network-pane"},"nextItem":{"title":"[HTTP]URI","permalink":"/confucianism/blog/[HTTP]URI"}},"content":""},{"id":"/[HTTP]URI","metadata":{"permalink":"/confucianism/blog/[HTTP]URI","source":"@site/blog/[HTTP]URI.md","title":"[HTTP]URI","description":"URI \u683c\u5f0f","date":"2024-05-24T03:50:53.000Z","tags":[],"readingTime":0.225,"hasTruncateMarker":false,"authors":[{"name":"\u8bda\u77e5","title":"\u5c3d\u5fc3\u77e5\u6027","url":"https://github.com/zhuqiandai","imageURL":"https://github.com/zhuqiandai.png","key":"chengzhi"}],"frontMatter":{"tag":["network"],"authors":"chengzhi"},"unlisted":false,"prevItem":{"title":"[DNS]service-model","permalink":"/confucianism/blog/[DNS]service-model"},"nextItem":{"title":"[HTTP]form","permalink":"/confucianism/blog/[HTTP]form"}},"content":"## URI \u683c\u5f0f\\n\\n```\\nscheme://username:password@host:port/path?query#fragment\\n```\\n\\n## URI \u7f16\u7801\\n\\n> Why: `URI` \u4e2d\u4fdd\u7559\u5b57\u7b26\uff0c\u7a7a\u683c\uff0c\u4e2d\u6587\uff0cASCII \u4e2d\u4e0d\u5305\u542b\u7684\u5b57\u7b26\u7b49\u9700\u8981\u4f20\u9012\uff0c\u6240\u4ee5\u9700\u8981\u8fdb\u884c\u7f16\u7801\u518d\u67e5\u8be2"},{"id":"/[HTTP]form","metadata":{"permalink":"/confucianism/blog/[HTTP]form","source":"@site/blog/[HTTP]form.md","title":"[HTTP]form","description":"","date":"2024-05-24T03:50:53.000Z","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[{"name":"\u8bda\u77e5","title":"\u5c3d\u5fc3\u77e5\u6027","url":"https://github.com/zhuqiandai","imageURL":"https://github.com/zhuqiandai.png","key":"chengzhi"}],"frontMatter":{"tag":["network"],"authors":"chengzhi"},"unlisted":false,"prevItem":{"title":"[HTTP]URI","permalink":"/confucianism/blog/[HTTP]URI"},"nextItem":{"title":"[HTTP]service-model","permalink":"/confucianism/blog/[HTTP]service-model"}},"content":""},{"id":"/[HTTP]service-model","metadata":{"permalink":"/confucianism/blog/[HTTP]service-model","source":"@site/blog/[HTTP]service-model.md","title":"[HTTP]service-model","description":"\u672f\u8bed","date":"2024-05-24T03:50:53.000Z","tags":[{"label":"network","permalink":"/confucianism/blog/tags/network"}],"readingTime":2.16,"hasTruncateMarker":false,"authors":[{"name":"\u8bda\u77e5","title":"\u5c3d\u5fc3\u77e5\u6027","url":"https://github.com/zhuqiandai","imageURL":"https://github.com/zhuqiandai.png","key":"chengzhi"}],"frontMatter":{"tags":["network"],"authors":"chengzhi"},"unlisted":false,"prevItem":{"title":"[HTTP]form","permalink":"/confucianism/blog/[HTTP]form"},"nextItem":{"title":"[IP]ARP","permalink":"/confucianism/blog/[IP]ARP"}},"content":"## \u672f\u8bed\\n\\n\u5b9a\u4e49\uff1a_web page_ \u662f\u7531\u5bf9\u8c61\u7ec4\u6210\u3002\u4e00\u4e2a\u5bf9\u8c61\u53ea\u662f\u4e00\u4e2a\u6587\u4ef6\uff0c\u800c\u53ef\u4ee5\u901a\u8fc7 `URL` \u8fdb\u884c\u5bfb\u5740\u3002\u591a\u6570 _web page_ \u5305\u542b\u4e00\u4e2a `base HTML file`\uff0c\u5f15\u7528\u7684\u6587\u4ef6\u90fd\u662f\u4e00\u4e2a\u5355\u72ec\u5bf9\u8c61\\n\\n1. URL `Uniform Resolution Locator` [uri](./[HTTP]URI.md) \\n\\n   Protocal://user:psw@www.somedomain.com/dir/pic.gif:port\\n\\n   **\u534f\u8bae \u7528\u6237:\u53e3\u4ee4 \u4e3b\u673a\u540d \u8def\u5f84 \u7aef\u53e3**\\n\\n## HTTP `HyperText Transfer Protocol`\\n\\n\u6982\u5ff5\uff1a`HTTP` \u5b9a\u4e49\u4e86 _web client_ \u5411 _web server_ \u8bf7\u6c42 _web page_ \u7684\u65b9\u5f0f\uff0c\u4ee5\u53ca _web server_ \u5411 _web client_ \u4f20\u9001 _web page_ \u7684\u65b9\u5f0f\\n\\n1. `HTTP` \u4f7f\u7528 `client` / `server` \u6a21\u5f0f\uff0c\u591a\u4e2a\u8fde\u63a5\u8bf7\u6c42 `server` \u4f1a\u521b\u5efa\u591a\u4e2a `socket`\\n\\n   - `client` \u5b9e\u73b0\u4e86 `http` \u7684\u5ba2\u6237\u7aef\\n   - `server` \u5b9e\u73b0\u4e86 `http` \u7684\u670d\u52a1\u5668\uff0c\u5b58\u50a8 _web object_\uff0c\u7531 `URL` \u8fdb\u884c\u5bfb\u5740\\n\\n2. _web server_ \u4e0d\u5b58\u50a8 _web client_ \u7684\u4efb\u4f55\u4fe1\u606f `stateless protocal`\\n\\n> \u9ed8\u8ba4\u65b9\u5f0f\u5927\u90e8\u5206\u6d4f\u89c8\u5668\u4f1a\u6253\u5f00 5 ~ 10 \u4e2a\u5e76\u884c\u7684 `TCP` \u8fde\u63a5\\n\\n### RTT (Round Trip Time)\\n\\n\u5b9a\u4e49\uff1a\u4e00\u4e2a\u77ed\u5206\u7ec4\u4ece\u5ba2\u6237\u7aef\u5230\u670d\u52a1\u5668\uff0c\u518d\u8fd4\u56de\u5230\u5ba2\u6237\u7aef\u6240\u82b1\u8d39\u7684\u65f6\u95f4\\n\\n- \u975e\u6301\u4e45\u8fde\u63a5\uff1a\u4e00\u822c\u60c5\u51b5\u6587\u4ef6\u4f20\u8f93 \u5efa\u7acb TCP \u8fde\u63a5\u9700\u8981\u4e00\u4e2a RTT\uff0c\u4f20\u9012\u62a5\u6587\u9700\u8981\u4e00\u4e2a RTT\\n- \u6301\u4e45\u8fde\u63a5\uff1a\u6d41\u6c34\u7ebf\u6216\u8005\u975e\u6d41\u6c34\u7ebf\uff0c\u53ef\u4ee5\u5e76\u884c\u4f7f\u6240\u6709\u8bf7\u6c42\u8fbe\u5230\u4e00\u4e2a RTT\\n\\n## HTTP Message\\n\\n1. \u8bf7\u6c42\u62a5\u6587\\n\\n   `request line = method SP request-target SP HTTP-version CRLF`\\n\\n   - request line\\n\\n     - METHOD (GET POST HEAD PUT DELETE OPTIONS)\\n     - URL\\n     - VERSION\\n\\n   - header line\\n   - `cr lf`\\n   - entity body\\n\\n2. \u54cd\u5e94\u62a5\u6587\\n\\n   - status line\\n\\n     - VERSION\\n     - STATUS CODE\\n     - MESSAGE\\n\\n   - header line\\n   - `cr lf`\\n   - entity body\\n\\n> `TCP` \u4e0d\u63d0\u4f9b\u6bcf\u4e2a\u62a5\u6587\u7684\u8fb9\u754c\uff0c`HTTP` \u8981\u6839\u636e `Content-Length` \u81ea\u884c\u533a\u5206\\n\\n### Response Status Code\\n\\n| code | description                                               |\\n| ---- | --------------------------------------------------------- |\\n| 100  | Continue \u5ba2\u6237\u7aef \u643a\u5e26 _Expect: 100 continue_ \u5934\u90e8          |\\n| 101  | Switch Protocol \u5ba2\u6237\u7aef\u643a\u5e26 _upgrade_ \u5934\u90e8\uff0c\u8868\u793a\u53ef\u5347\u7ea7\u8bf7\u6c42 |\\n| 102  | For WebDAV                                                |"},{"id":"/[IP]ARP","metadata":{"permalink":"/confucianism/blog/[IP]ARP","source":"@site/blog/[IP]ARP.md","title":"[IP]ARP","description":"","date":"2024-05-24T03:50:53.000Z","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"[HTTP]service-model","permalink":"/confucianism/blog/[HTTP]service-model"},"nextItem":{"title":"[IP]CIDR","permalink":"/confucianism/blog/[IP]CIDR"}},"content":""},{"id":"/[IP]CIDR","metadata":{"permalink":"/confucianism/blog/[IP]CIDR","source":"@site/blog/[IP]CIDR.md","title":"[IP]CIDR","description":"Classless Inter-Domain Routing","date":"2024-05-24T03:50:53.000Z","tags":[],"readingTime":0.47,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"[IP]ARP","permalink":"/confucianism/blog/[IP]ARP"},"nextItem":{"title":"[IP]ICMP","permalink":"/confucianism/blog/[IP]ICMP"}},"content":"`Classless Inter-Domain Routing`\\n\\n## \u5b9a\u4e49\\n\\n> \u65e0\u5206\u7c7b\u57df\u95f4\u8def\u7531\u9009\u62e9\uff0c\u4f7f\u7528\u5730\u5740\u63a9\u7801\u66ff\u4ee3\u5206\u7c7b ABC \u7684\u5b50\u7f51\u63a9\u7801;\\n\\n## \u7279\u70b9\\n\\n1. \u4f7f\u7528 `slash notation` \u6807\u6ce8\u7f51\u7edc\u6240\u7528\u4f4d\u6570\\n2. \u533a\u5206\u7f51\u7edc\u524d\u7f00\u548c\u4e3b\u673a\uff0c\u53ef\u4ee5\u5f97\u5230\u4e3b\u673a\u5730\u5740\u8303\u56f4\\n3. \u524d\u7f00\u8def\u7531\u805a\u5408\uff0c\u9012\u5f52\u805a\u5408\u5c0f\u7f51\u7edc\u4e3a\u4e00\u4e2a\u7f51\u7edc\uff0c\u51cf\u5c11\u8def\u7531\u8868\u6570\u91cf\\n\\n## \u4f7f\u7528"},{"id":"/[IP]ICMP","metadata":{"permalink":"/confucianism/blog/[IP]ICMP","source":"@site/blog/[IP]ICMP.md","title":"[IP]ICMP","description":"Internet Control Message Protocol","date":"2024-05-24T03:50:53.000Z","tags":[],"readingTime":0.545,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"[IP]CIDR","permalink":"/confucianism/blog/[IP]CIDR"},"nextItem":{"title":"[IP]service-model","permalink":"/confucianism/blog/[IP]service-model"}},"content":"`Internet Control Message Protocol`\\n\\n## \u5b9a\u4e49\\n\\n`ICMP` \u62a5\u6587\u627f\u8f7d\u5728 `IP` \u62a5\u6587\u7684 `payload` \u4e2d\u3002\u7406\u8bba\u4e0a\u5728 `IP` \u4e4b\u4e0a\uff0c\u5728\u4e3b\u673a\u548c\u8def\u7531\u4e4b\u95f4\u6c9f\u901a\u7f51\u7edc\u5c42\u7684\u4fe1\u606f\\n\\n## \u7279\u70b9\\n\\n> \u4fdd\u8bc1 `IP` \u5c3d\u529b\u800c\u4e3a\u7684\u7279\u6027\\n\\n1. \u5dee\u9519\u62a5\u544a\\n\\n- \u7f51\u7edc\u4e0d\u53ef\u8fbe\\n- \u4e3b\u673a\u4e0d\u53ef\u8fbe\\n- \u534f\u8bae\u4e0d\u53ef\u8fbe\\n- \u7aef\u53e3\u4e0d\u53ef\u8fbe\\n- \u672a\u77e5\\n- `TTL` \u8fc7\u671f\\n- `IP` \u5934\u90e8\u635f\u574f\\n\\n2. \u6e90\u6291\u5236 \u62e5\u585e\u63a7\u5236\\n\\n## \u4f7f\u7528\\n\\n> `ping` and `traceroute` \u4e2d\u4f7f\u7528 `ICMP` \u6765\u63a2\u6d4b"},{"id":"/[IP]service-model","metadata":{"permalink":"/confucianism/blog/[IP]service-model","source":"@site/blog/[IP]service-model.md","title":"[IP]service-model","description":"","date":"2024-05-24T03:50:53.000Z","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tag":["network"]},"unlisted":false,"prevItem":{"title":"[IP]ICMP","permalink":"/confucianism/blog/[IP]ICMP"},"nextItem":{"title":"[Network]model","permalink":"/confucianism/blog/[Network]model"}},"content":""},{"id":"/[Network]model","metadata":{"permalink":"/confucianism/blog/[Network]model","source":"@site/blog/[Network]model.md","title":"[Network]model","description":"Layer","date":"2024-05-24T03:50:53.000Z","tags":[],"readingTime":0.56,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"[IP]service-model","permalink":"/confucianism/blog/[IP]service-model"},"nextItem":{"title":"[TCP]service-model","permalink":"/confucianism/blog/[TCP]service-model"}},"content":"## Layer\\n\\n> \u5206\u5c42\u7684\u597d\u5904\uff1a_Layer is a functional component_\\n\\n1. Modularity\\n2. Well defined service\\n3. Reuse\\n4. Separation of concerns\\n5. Continuous improvement\\n6. Peer-to-peer communication\\n\\n## Network\\n\\n> \\"The network\'s job is to transmit datagrams as efficiently and flexibly as possible. Everything else should be done at fringes\\"\\n\\n\u5173\u4e8e\u7f51\u7edc\u7684\u5c01\u88c5\uff0c\u6838\u5fc3\u4f20\u8f93\u6570\u636e\u62a5 (\u9ad8\u6548\u548c\u7075\u6d3b)\uff0c\u5176\u4ed6\u5185\u5bb9\u5e94\u8be5\u7531\u7f51\u7edc\u5916\u5c42\u5b8c\u6210\\n\\n## Style\\n\\n\u7f51\u7edc\u67b6\u6784\u98ce\u683c\\n\\n1. \u6570\u636e\u6d41\\n2. \u590d\u5236\\n3. \u5206\u5c42\\n4. \u79fb\u52a8\u4ee3\u7801\\n5. \u70b9\u5bf9\u70b9"},{"id":"/[TCP]service-model","metadata":{"permalink":"/confucianism/blog/[TCP]service-model","source":"@site/blog/[TCP]service-model.md","title":"[TCP]service-model","description":"\u5411 Application Layer \u63d0\u4f9b\u7684\u670d\u52a1 Socket API","date":"2024-05-24T03:50:53.000Z","tags":[{"label":"network","permalink":"/confucianism/blog/tags/network"}],"readingTime":1.03,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["network"]},"unlisted":false,"prevItem":{"title":"[Network]model","permalink":"/confucianism/blog/[Network]model"},"nextItem":{"title":"link-layer","permalink":"/confucianism/blog/link-layer"}},"content":"\x3c!-- \u540c\u6b65 --\x3e\\n\\n> \u5411 `Application Layer` \u63d0\u4f9b\u7684\u670d\u52a1 `Socket API`\\n\\n| Property           | Behavior                                              |\\n| ------------------ | ----------------------------------------------------- |\\n| Stream of bytes    | Reliable byte dilivery service                        |\\n| Reliable delivery  | 1. Acknowledgements indicate correct dilivery         |\\n|                    | 2. Checksums detect corrupted data                    |\\n|                    | 3. Sequence numbers detect missing data               |\\n|                    | 4. Flow-control prevents overruning receiver          |\\n| In-sequence        | Data delivered to application in sequence transmitted |\\n| Congestion Control | Controls network congestion                           |\\n\\n## Reliable delivery\\n\\n1. \u4fdd\u8bc1\u4f20\u8f93\\n2. \u4fdd\u8bc1\u5185\u5bb9\\n3. \u4fdd\u8bc1\u65e0\u4e22\u5931\\n4. \u4fdd\u8bc1\u5728\u7f13\u51b2\u8303\u56f4\u5185\u63a5\u53d7\\n\\n## TCP Segement\\n\\n> \u4e24\u4e2a `Stream` \u4e4b\u95f4\u7684\u540c\u6b65\\n\\n### TCP Segment Flags\\n\\n1. `SYN`: \u53d1\u9001\u540c\u6b65\u4fe1\u53f7\\n2. `ACK`: \u786e\u8ba4\u5e8f\u5217\u53f7\u6709\u6548\\n3. `FIN`: \u8fde\u63a5\u7684\u4e00\u7aef\u5173\u95ed\\n4. `PSH`: \u8fde\u63a5\u7684\u53e6\u4e00\u7aef\u7acb\u5373\u4f20\u9001\u6570\u636e\\n\\n## Socket\\n\\n> \u4f7f\u7528 \u4f20\u8f93\u5c42\u7f16\u7a0b\u63d0\u4f9b\u7684 `Socket API` \u5b9e\u73b0\u81ea\u5b9a\u4e49\u5e94\u7528\u5c42\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u4f7f\u7528 `TCP` \u63d0\u4f9b\u7684\u670d\u52a1"},{"id":"/link-layer","metadata":{"permalink":"/confucianism/blog/link-layer","source":"@site/blog/link-layer.md","title":"link-layer","description":"Address Resolution Protocol ARP","date":"2024-05-24T03:50:53.000Z","tags":[],"readingTime":0.6,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"[TCP]service-model","permalink":"/confucianism/blog/[TCP]service-model"},"nextItem":{"title":"[IP]NAT","permalink":"/confucianism/blog/[IP]NAT"}},"content":"## Address Resolution Protocol `ARP`\\n\\n> from `IP Address` to `MAC Address`\\n\\n### `DNS` vs. `ARP`\\n\\n### `ARP` Table\\n\\n1. \u5e7f\u64ad\u5f62\u5f0f\u67e5\u8be2 `ARP`\uff0c\u94fe\u8def\u5c42\u5e27\u5f62\u5f0f\u54cd\u5e94 `ARP`\\n2. `ARP Table` \u662f\u5373\u63d2\u5373\u7528\u7684\uff0c\u4e0d\u9700\u8981\u7ef4\u62a4\uff0c\u8fc7\u4e86 `TTL` \u4e4b\u540e\uff0c\u5c31\u4f1a\u88ab\u6e05\u9664\\n\\n> TTL \u901a\u5e38\u662f 20 \u5206\u949f\\n\\n## \u4ee5\u592a\u7f51\u534f\u8bae\\n\\n### Ethernet Card (Interface) (\u7f51\u5361)\\n\\n> 6 \u5b57\u8282\uff0c16 \u8fdb\u5236\u8868\u793a\\n\\n## \u94fe\u8def\u5c42\u5730\u5740 `MAC Address`\\n\\n> NOTES: \u4e3b\u673a\u548c\u8def\u7531\u5668\u5e76\u6ca1\u6709\u94fe\u8def\u5c42\u5730\u5740\uff0c\u9002\u914d\u5668 (`Interface`) \u5177\u6709\u94fe\u8def\u5c42\u5730\u5740"},{"id":"/[IP]NAT","metadata":{"permalink":"/confucianism/blog/[IP]NAT","source":"@site/blog/[IP]NAT.md","title":"[IP]NAT","description":"NAT#wiki","date":"2024-05-23T00:00:00.000Z","tags":[],"readingTime":1.01,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"[IP]NAT","status":"Pending","date":"2024-05-23"},"unlisted":false,"prevItem":{"title":"link-layer","permalink":"/confucianism/blog/link-layer"}},"content":"[NAT#wiki](https://www.wikiwand.com/en/Network_address_translation)\\n\\n`Network Address Translation (RFC 1631)`\\n\\n## \u539f\u7406\\n\\n\u63a7\u5236 `IP` \u6570\u91cf\uff0ctransform private address into unique public address\\n\\n> `NAT` \u63d0\u4f9b\u5176\u4ed6\u5f88\u591a\u4f20\u8f93\u63a7\u5236\u529f\u80fd\uff0c\u4e4b\u540e\u8865\u5145\\n\\n## \u7279\u70b9\\n\\n### NAT Translation Table\\n\\n`NAT Router` \u7ef4\u62a4\u4e00\u5f20\u8868\uff0c\u5305\u542b `PORT and IP Address`\\n\\n`IP Packet` \u90fd\u6709\u6e90\u5730\u5740\u548c\u76ee\u7684\u5730\u5740\u3002\u4ece\u79c1\u6709\u7f51\u7edc\u53d1\u9001\u5230\u516c\u5171\u7f51\u7edc\u7684 `IP Packet` \u9700\u8981\u4fee\u6539\uff0c\u800c\u4ece\u516c\u5171\u7f51\u7edc\u4f20\u9012\u56de\u79c1\u6709\u7f51\u7edc\u7684 `IP Packet` \u4e5f\u9700\u8981\u4fee\u6539\uff0c\u8fd9\u91cc\u7684\u4fee\u6539\u5305\u62ec `address` \u548c `port`\\n\\n### Private Network Address (RFC 1918)\\n\\n\u5185\u90e8\u901a\u4fe1\u4e0d\u80fd\u548c\u516c\u7f51\u901a\u4fe1\uff0c`Private Address` \u53ef\u80fd\u5d4c\u5957\uff0c\u62e8\u53f7\u83b7\u53d6\u7684\u53ef\u4ee5\u662f\u516c\u7f51 `IP` \u6216\u8005\u8fd0\u8425\u5546\u7684\u79c1\u7f51 `IP`\\n\\n> `Virtual Private Network`: \u5229\u7528\u516c\u7528\u7684\u4e92\u8054\u7f51\u4f5c\u4e3a\u672c\u673a\u6784\u5404\u4e13\u7528\u7f51\u4e4b\u95f4\u7684\u901a\u4fe1\u8f7d\u4f53\uff0cVPN \u901a\u8fc7\u96a7\u9053\u8fde\u63a5\u5230\u4e00\u8d77\\n\\n## \u4f7f\u7528"}]}}')}}]);