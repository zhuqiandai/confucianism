"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3059],{1829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var l=t(6070),r=t(5710);const s={tags:["network"]},i=void 0,c={permalink:"/confucianism/blog/[TCP]service-model",source:"@site/blog/[TCP]service-model.md",title:"[TCP]service-model",description:"\u5411 Application Layer \u63d0\u4f9b\u7684\u670d\u52a1 Socket API",date:"2024-05-24T03:50:53.000Z",tags:[{label:"network",permalink:"/confucianism/blog/tags/network"}],readingTime:1.03,hasTruncateMarker:!1,authors:[],frontMatter:{tags:["network"]},unlisted:!1,prevItem:{title:"[Network]model",permalink:"/confucianism/blog/[Network]model"},nextItem:{title:"link-layer",permalink:"/confucianism/blog/link-layer"}},d={authorsImageUrls:[]},o=[{value:"Reliable delivery",id:"reliable-delivery",level:2},{value:"TCP Segement",id:"tcp-segement",level:2},{value:"TCP Segment Flags",id:"tcp-segment-flags",level:3},{value:"Socket",id:"socket",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5411 ",(0,l.jsx)(n.code,{children:"Application Layer"})," \u63d0\u4f9b\u7684\u670d\u52a1 ",(0,l.jsx)(n.code,{children:"Socket API"})]}),"\n"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Property"}),(0,l.jsx)(n.th,{children:"Behavior"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Stream of bytes"}),(0,l.jsx)(n.td,{children:"Reliable byte dilivery service"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Reliable delivery"}),(0,l.jsx)(n.td,{children:"1. Acknowledgements indicate correct dilivery"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"2. Checksums detect corrupted data"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"3. Sequence numbers detect missing data"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"4. Flow-control prevents overruning receiver"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"In-sequence"}),(0,l.jsx)(n.td,{children:"Data delivered to application in sequence transmitted"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Congestion Control"}),(0,l.jsx)(n.td,{children:"Controls network congestion"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"reliable-delivery",children:"Reliable delivery"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u4fdd\u8bc1\u4f20\u8f93"}),"\n",(0,l.jsx)(n.li,{children:"\u4fdd\u8bc1\u5185\u5bb9"}),"\n",(0,l.jsx)(n.li,{children:"\u4fdd\u8bc1\u65e0\u4e22\u5931"}),"\n",(0,l.jsx)(n.li,{children:"\u4fdd\u8bc1\u5728\u7f13\u51b2\u8303\u56f4\u5185\u63a5\u53d7"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"tcp-segement",children:"TCP Segement"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4e24\u4e2a ",(0,l.jsx)(n.code,{children:"Stream"})," \u4e4b\u95f4\u7684\u540c\u6b65"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"tcp-segment-flags",children:"TCP Segment Flags"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"SYN"}),": \u53d1\u9001\u540c\u6b65\u4fe1\u53f7"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ACK"}),": \u786e\u8ba4\u5e8f\u5217\u53f7\u6709\u6548"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"FIN"}),": \u8fde\u63a5\u7684\u4e00\u7aef\u5173\u95ed"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"PSH"}),": \u8fde\u63a5\u7684\u53e6\u4e00\u7aef\u7acb\u5373\u4f20\u9001\u6570\u636e"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"socket",children:"Socket"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528 \u4f20\u8f93\u5c42\u7f16\u7a0b\u63d0\u4f9b\u7684 ",(0,l.jsx)(n.code,{children:"Socket API"})," \u5b9e\u73b0\u81ea\u5b9a\u4e49\u5e94\u7528\u5c42\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"TCP"})," \u63d0\u4f9b\u7684\u670d\u52a1"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},5710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var l=t(758);const r={},s=l.createContext(r);function i(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);