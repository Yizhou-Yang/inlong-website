"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7771],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),g=r,m=s["".concat(p,".").concat(g)]||s[g]||h[g]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},37438:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"0.12.0 \u7248\u672c\u53d1\u5e03",sidebar_position:2},p=void 0,u={permalink:"/zh-CN/blog/apache-inlong-0.12.0",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/blog/blog/apache-inlong-0.12.0.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/apache-inlong-0.12.0.md",title:"0.12.0 \u7248\u672c\u53d1\u5e03",description:"InLong(\u5e94\u9f99) : \u4e2d\u56fd\u795e\u8bdd\u6545\u4e8b\u91cc\u7684\u795e\u517d\uff0c\u5f15\u6d41\u5165\u6d77\uff0c\u501f\u55bb InLong \u7cfb\u7edf\u63d0\u4f9b\u6570\u636e\u63a5\u5165\u80fd\u529b\u3002",date:"2022-05-18T02:01:00.000Z",formattedDate:"2022\u5e745\u670818\u65e5",tags:[],readingTime:8.66,truncated:!1,authors:[],frontMatter:{title:"0.12.0 \u7248\u672c\u53d1\u5e03",sidebar_position:2},prevItem:{title:"0.11.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/apache-inlong-0.11.0"},nextItem:{title:"1.1.0 \u7248\u672c\u53d1\u5e03",permalink:"/zh-CN/blog/apache-inlong-1.1.0"}},c={authorsImageUrls:[]},h=[{value:"Apache InLong(incubating) \u7b80\u4ecb",id:"apache-inlongincubating-\u7b80\u4ecb",level:3},{value:"Apache InLong(incubating) 0.12.0 \u4e3b\u8981\u7279\u6027",id:"apache-inlongincubating-0120-\u4e3b\u8981\u7279\u6027",level:3},{value:"1. \u6253\u901a Apache Pulsar \u5168\u94fe\u8def",id:"1-\u6253\u901a-apache-pulsar-\u5168\u94fe\u8def",level:4},{value:"2. \u652f\u6301 JMX \u548c Prometheus \u6307\u6807",id:"2-\u652f\u6301-jmx-\u548c-prometheus-\u6307\u6807",level:4},{value:"3. \u6a21\u5757\u80fd\u529b\u6269\u5145",id:"3-\u6a21\u5757\u80fd\u529b\u6269\u5145",level:4},{value:"4. \u5b98\u7f51\u6587\u6863\u76ee\u5f55\u91cd\u6784",id:"4-\u5b98\u7f51\u6587\u6863\u76ee\u5f55\u91cd\u6784",level:4},{value:"5. \u5176\u4ed6\u7279\u6027\u53ca\u95ee\u9898\u4fee\u590d",id:"5-\u5176\u4ed6\u7279\u6027\u53ca\u95ee\u9898\u4fee\u590d",level:4},{value:"Apache InLong(incubating) \u540e\u7eed\u89c4\u5212",id:"apache-inlongincubating-\u540e\u7eed\u89c4\u5212",level:3},{value:"Apache InLong(incubating) \u8d21\u732e\u8005\u62db\u52df",id:"apache-inlongincubating-\u8d21\u732e\u8005\u62db\u52df",level:3}],s={toc:h};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"InLong(\u5e94\u9f99) : \u4e2d\u56fd\u795e\u8bdd\u6545\u4e8b\u91cc\u7684\u795e\u517d\uff0c\u5f15\u6d41\u5165\u6d77\uff0c\u501f\u55bb InLong \u7cfb\u7edf\u63d0\u4f9b\u6570\u636e\u63a5\u5165\u80fd\u529b\u3002"),(0,i.kt)("p",null,"Apache InLong\uff08\u5e94\u9f99\uff09\u662f\u4e00\u4e2a\u4e00\u7ad9\u5f0f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u540c\u65f6\u652f\u6301\u6279\u548c\u6d41\uff0c\u65b9\u4fbf\u4e1a\u52a1\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002InLong\u652f\u6301\u5927\u6570\u636e\u9886\u57df\u7684\u91c7\u96c6\u3001\u6c47\u805a\u3001\u7f13\u5b58\u548c\u5206\u62e3\u529f\u80fd\uff0c\u7528\u6237\u53ea\u9700\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u628a\u6570\u636e\u4ece\u6570\u636e\u6e90\u5bfc\u5165\u5230\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\u6216\u8005\u843d\u5730\u5230\u79bb\u7ebf\u5b58\u50a8\u3002"),(0,i.kt)("p",null,"\u521a\u521a\u53d1\u5e03\u7684 0.12.0-incubating \u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u540c\u65f6\u652f\u6301\u6279\u548c\u6d41"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u5b98\u7f51\u6587\u6863\u7ed3\u6784\u8fdb\u884c\u91cd\u6784\uff0c\u65b9\u4fbf\u7528\u6237\u6839\u636e\u4e3b\u7ebf\u67e5\u9605\u76f8\u5173\u6587\u6863"),(0,i.kt)("li",{parentName:"ul"},"\u5168\u6d41\u7a0b\u652f\u6301Pulsar\u6570\u636e\u6d41\u5411\uff0c\u5b8c\u6210\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u9760\u573a\u666f\u7684\u5168\u6d41\u7a0b\u8986\u76d6"),(0,i.kt)("li",{parentName:"ul"},"\u5168\u6d41\u7a0b\u652f\u6301\u6307\u6807\uff0c\u5305\u62ec JMX \u548c Prometheus \u8f93\u51fa"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u5ba1\u8ba1\u5bf9\u8d26\u4e00\u671f\uff0c\u5c06\u5ba1\u8ba1\u6570\u636e\u5199\u5165 MySQL")),(0,i.kt)("p",null,"\u8be5\u7248\u672c\u5173\u95ed\u4e86\u7ea6 120+ \u4e2a issue\uff0c\u5305\u542b\u56db\u4e2a\u91cd\u5927 feature \u548c 35 \u4e2a improvements\u3002"),(0,i.kt)("h3",{id:"apache-inlongincubating-\u7b80\u4ecb"},"Apache InLong(incubating) \u7b80\u4ecb"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://inlong.apache.org/zh-cn/"},"Apache InLong\uff08\u5e94\u9f99\uff09")," \u662f\u817e\u8baf\u6350\u732e\u7ed9 Apache \u793e\u533a\u7684\u4e00\u7ad9\u5f0f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u65b9\u4fbf\u4e1a\u52a1\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002 InLong \u9879\u76ee\u539f\u540d TubeMQ \uff0c\u4e13\u6ce8\u4e8e\u9ad8\u6027\u80fd\u3001\u4f4e\u6210\u672c\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1\u3002\u4e3a\u4e86\u8fdb\u4e00\u6b65\u91ca\u653e TubeMQ \u5468\u8fb9\u7684\u751f\u6001\u80fd\u529b\uff0c\u6211\u4eec\u5c06\u9879\u76ee\u5347\u7ea7\u4e3a InLong\uff0c\u4e13\u6ce8\u6253\u9020\u4e00\u7ad9\u5f0f\u6570\u636e\u6d41\u63a5\u5165\u670d\u52a1\u5e73\u53f0\u3002"),(0,i.kt)("p",null,"Apache InLong \u4ee5\u817e\u8baf\u5185\u90e8\u4f7f\u7528\u7684 TDBank \u4e3a\u539f\u578b\uff0c\u5177\u6709\u4e07\u4ebf\u7ea7\u6570\u636e\u7684\u63a5\u5165\u548c\u5904\u7406\u80fd\u529b\uff0c\u6574\u5408\u4e86\u6570\u636e\u91c7\u96c6\u3001\u6c47\u805a\u3001\u5b58\u50a8\u3001\u5206\u62e3\u6570\u636e\u5904\u7406\u5168\u6d41\u7a0b\uff0c\u62e5\u6709\u7b80\u5355\u6613\u7528\u3001\u7075\u6d3b\u6269\u5c55\u3001\u7a33\u5b9a\u53ef\u9760\u7b49\u7279\u6027\u3002"),(0,i.kt)("img",{src:"/img/inlong_architecture.png",align:"center",alt:"Apache InLong"}),(0,i.kt)("p",null," Apache InLong \u670d\u52a1\u4e8e\u6570\u636e\u91c7\u96c6\u5230\u843d\u5730\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\uff0c\u6309\u6570\u636e\u7684\u4e0d\u540c\u9636\u6bb5\u63d0\u4f9b\u4e0d\u540c\u7684\u5904\u7406\u6a21\u5757\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"inlong-agent")," \uff0c\u6570\u636e\u91c7\u96c6 Agent \uff0c\u652f\u6301\u4ece\u6307\u5b9a\u76ee\u5f55\u6216\u6587\u4ef6\u8bfb\u53d6\u5e38\u89c4\u65e5\u5fd7\uff0c\u8fdb\u884c\u9010\u6761\u7684\u6570\u636e\u4e0a\u62a5\u3002\u540e\u7eed\u4e5f\u5c06\u6269\u5c55 DB \u91c7\u96c6\uff0c\u6269\u5c55HTTP\u4e0a\u62a5\u7b49\u80fd\u529b\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"inlong-dataproxy")," \uff0c\u4e00\u4e2a\u57fa\u4e8e Flume-ng \u7684 Proxy \u7ec4\u4ef6\uff0c\u652f\u6301\u6570\u636e\u53d1\u9001\u963b\u585e\u3001\u843d\u76d8\u91cd\u53d1\uff0c\u62e5\u6709\u5c06\u63a5\u6536\u6570\u636e\u540e\u8f6c\u53d1\u5230\u4e0d\u540cMQ\uff08\u6d88\u606f\u961f\u5217\uff09\u7684\u80fd\u529b\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"inlong-tubemq")," \uff0c\u817e\u8baf\u81ea\u7814\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1\uff0c\u4e13\u6ce8\u670d\u52a1\u5927\u6570\u636e\u573a\u666f\u4e0b\u6d77\u91cf\u6570\u636e\u7684\u9ad8\u6027\u80fd\u5b58\u50a8\u548c\u4f20\u8f93\uff0c\u5728\u6d77\u91cf\u5b9e\u8df5\u548c\u4f4e\u6210\u672c\u65b9\u9762\u6709\u7740\u6bd4\u8f83\u597d\u7684\u6838\u5fc3\u4f18\u52bf\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"inlong-sort")," \uff0c\u4ece\u4e0d\u540c\u7684 MQ \u6d88\u8d39\u6570\u636e\u540e\u8fdb\u884c ETL \u5904\u7406\uff0c\u7136\u540e\u5c06\u6570\u636e\u6c47\u805a\u5e76\u5199\u5165 Hive\u3001ClickHouse\u3001Hbase\u3001IceBerg \u7b49\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"inlong-manager")," \uff0c\u63d0\u4f9b\u5b8c\u6574\u7684\u6570\u636e\u670d\u52a1\u7ba1\u63a7\u80fd\u529b\uff0c\u5305\u62ec\u5143\u6570\u636e\u3001OpenAPI\u3001\u4efb\u52a1\u6d41\u3001\u6743\u9650\u7b49\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"inlong-website")," \uff0c\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406\u6570\u636e\u63a5\u5165\u7684\u524d\u7aef\u9875\u9762\uff0c\u7b80\u5316\u6574\u4e2a InLong \u7ba1\u63a7\u5e73\u53f0\u7684\u4f7f\u7528\u3002")),(0,i.kt)("h3",{id:"apache-inlongincubating-0120-\u4e3b\u8981\u7279\u6027"},"Apache InLong(incubating) 0.12.0 \u4e3b\u8981\u7279\u6027"),(0,i.kt)("h4",{id:"1-\u6253\u901a-apache-pulsar-\u5168\u94fe\u8def"},"1. \u6253\u901a Apache Pulsar \u5168\u94fe\u8def"),(0,i.kt)("p",null,"\u5728 0.12.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u8865\u9f50\u4e86 FileAgent \u2192 DataProxy \u2192 Pulsar \u2192 Sort \u7684\u6570\u636e\u4e0a\u62a5\u80fd\u529b\uff0c\u81f3\u6b64\uff0cInLong \u652f\u6301\u9ad8\u6027\u80fd\u548c\u9ad8\u53ef\u9760\u6570\u636e\u63a5\u5165\u573a\u666f\uff1a\u76f8\u6bd4\u9ad8\u541e\u5410\u7684 TubeMQ\uff0cApache Pulsar\u80fd\u63d0\u4f9b\u66f4\u597d\u7684\u6570\u636e\u4e00\u81f4\u6027\uff0c\u66f4\u9002\u7528\u4e8e\u91d1\u878d\u3001\u8ba1\u8d39\u7b49\u5bf9\u6570\u636e\u53ef\u9760\u6027\u8981\u6c42\u6781\u9ad8\u7684\u573a\u666f\u3002"),(0,i.kt)("img",{src:"/img/pulsar-arch-zh.png",align:"center",alt:"Report via Pulsar"}),(0,i.kt)("p",null,"\u611f\u8c22 @healzhou\u3001 @baomingyu\u3001@leezng\u3001@bruceneenhl\u3001@ifndef-SleePy \u7b49\u540c\u5b66\u5bf9\u8fd9\u4e2a\u7279\u6027\u7684\u8d21\u732e\uff0c\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003\uff0c\u76f8\u5173 PR \u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1310"},"INLONG-1310")," \uff0c\u4f7f\u7528\u6307\u5f15\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://inlong.apache.org/zh-CN/docs/next/quick_start/pulsar_example/"},"Pulsar\u4f7f\u7528\u793a\u4f8b")," \u3002"),(0,i.kt)("h4",{id:"2-\u652f\u6301-jmx-\u548c-prometheus-\u6307\u6807"},"2. \u652f\u6301 JMX \u548c Prometheus \u6307\u6807"),(0,i.kt)("p",null,"\u5728\u5df2\u6709\u7684\u4ee5\u6587\u4ef6\u8f93\u51fa\u6307\u6807\u4e4b\u5916\uff0cInLong \u7684\u5404\u4e2a\u7ec4\u4ef6\u5f00\u59cb\u9010\u6b65\u652f\u6301 JMX \u548c Prometheus \u6307\u6807\u7684\u8f93\u51fa\uff0c\u4ee5\u63d0\u5347\u6574\u4e2a\u7cfb\u7edf\u7684\u53ef\u89c1\u6027\u3002\u76ee\u524d\u5305\u62ec Agent\uff0cDataProxy\uff0cTubeMQ\uff0cSort-Standalone \u7b49\u6a21\u5757\u5df2\u7ecf\u652f\u6301\u4e0a\u8ff0\u6307\u6807\uff0c\u5404\u4e2a\u6a21\u5757\u8f93\u51fa\u7684\u6307\u6807\u7684\u6587\u6863\u6b63\u5728\u6574\u7406\u4e2d\u3002"),(0,i.kt)("p",null,"\u611f\u8c22 @shink\uff0c@luchunliang\uff0c@EMsnap\uff0c@gosonzhang \u7b49\u540c\u5b66\u7684\u8d21\u732e\uff0c\u76f8\u5173 PR \u89c1",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1712"},"INLONG-1712")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1786"},"INLONG-1786")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1796"},"INLONG-1796")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1827"},"INLONG-1827")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1851"},"INLONG-1851")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1926"},"INLONG-1926")," \u3002"),(0,i.kt)("h4",{id:"3-\u6a21\u5757\u80fd\u529b\u6269\u5145"},"3. \u6a21\u5757\u80fd\u529b\u6269\u5145"),(0,i.kt)("p",null,"Sort \u6a21\u5757\u589e\u52a0\u4e86\u5bf9 Apache Doris \u5b58\u50a8\u7684\u652f\u6301\uff0c\u5b9e\u73b0\u4e86 Sort \u5206\u62e3\u6570\u636e\u843d\u5730\u5230 Apache Doris \u7684\u80fd\u529b\uff0c\u4f7f InLong \u7684\u5165\u5e93\u9009\u62e9\u53c8\u591a\u4e86\u4e00\u9879\u3002\u6b64\u5916\uff0c\u4e3a\u4e86\u4e30\u5bcc\u6570\u636e\u63a5\u5165\u5168\u6d41\u7a0b\u7684\u529f\u80fd\uff0c\u589e\u52a0\u4e86 Audit\u3001Sort-Standalone \u6a21\u5757\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Audit \u6a21\u5757\u63d0\u4f9b\u6570\u636e\u6d41\u5168\u6d41\u7a0b\u7684\u5bf9\u8d26\u80fd\u529b\uff0c\u901a\u8fc7\u6570\u636e\u6d41\u6307\u6807\u6765\u76d1\u63a7\u7cfb\u7edf\u7684\u670d\u52a1\u8d28\u91cf\uff1b"),(0,i.kt)("li",{parentName:"ul"},"Sort-Standalone \u6a21\u5757\u662f\u4e00\u4e2a\u4e0d\u57fa\u4e8e Flink \u7684\u6570\u636e\u5206\u62e3\u6a21\u5757\uff0c\u7ed9\u7cfb\u7edf\u589e\u52a0\u4e86\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u5206\u62e3\u80fd\u529b\uff0c\u4fbf\u4e8e\u4e1a\u52a1\u5feb\u901f\u642d\u5efa\u53ca\u4f7f\u7528\u3002")),(0,i.kt)("p",null,"Audit\u3001Sort-Standalone \u6a21\u5757\u4ecd\u5728\u5f00\u53d1\u4e2d\uff0c\u7248\u672c\u7a33\u5b9a\u540e\u5c06\u5bf9\u5916\u53d1\u5e03\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u611f\u8c22 @huzk8\uff0c@doleyzi\uff0c@luchunliang \u7b49\u540c\u5b66\u7684\u8d21\u732e\uff0c\u76f8\u5173 PR \u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1821"},"INLONG-1821")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1738"},"INLONG-1738")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1889"},"INLONG-1889")," \u3002"),(0,i.kt)("h4",{id:"4-\u5b98\u7f51\u6587\u6863\u76ee\u5f55\u91cd\u6784"},"4. \u5b98\u7f51\u6587\u6863\u76ee\u5f55\u91cd\u6784"),(0,i.kt)("p",null,"0.12.0 \u7248\u672c\u5bf9\u529f\u80fd\u6a21\u5757\u7684\u6539\u8fdb\u4e4b\u5916\uff0c\u5b98\u7f51\u7ed3\u6784\u4ee5\u53ca\u4f7f\u7528\u6587\u6863\u65b9\u9762\u4e5f\u505a\u4e86\u6df1\u5ea6\u8c03\u6574\uff0c\u5305\u62ec\u91cd\u6784\u6587\u6863\u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u8865\u5145\u5b8c\u5584\u5404\u4e2a\u6a21\u5757\u7684\u529f\u80fd\u4ecb\u7ecd\uff0c\u589e\u52a0\u6587\u6863\u7ffb\u8bd1\uff0c\u8fdb\u4e00\u6b65\u63d0\u9ad8 InLong \u5b98\u7f51\u7684\u6587\u6863\u53ef\u9605\u8bfb\u6027\uff0c\u5b9e\u73b0\u5feb\u901f\u67e5\u627e\u3001\u65b9\u4fbf\u9605\u8bfb\u3002\u8fd9\u5757\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b\u5b98\u7f51\u8fdb\u884c\u4e86\u89e3\uff0c\u76ee\u524d\u6587\u6863\u8fd8\u5728\u6301\u7eed\u5efa\u8bbe\u4e2d\uff0c\u6b22\u8fce\u5927\u5bb6\u63d0\u51fa\u5b9d\u8d35\u7684\u610f\u89c1\u6216\u5efa\u8bae\u3002"),(0,i.kt)("p",null,"\u611f\u8c22 @bluewang\uff0c@dockerzhang\uff0c@healchow \u7b49\u540c\u5b66\u7684\u8d21\u732e\uff0c\u76f8\u5173 PR \u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1711"},"INLONG-1711")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1740"},"INLONG-1740")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1802"},"INLONG-1802")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1809"},"INLONG-1809")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1810"},"INLONG-1810")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1815"},"INLONG-1815")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1822"},"INLONG-1822")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1840"},"INLONG-1840")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1856"},"INLONG-1856")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1861"},"INLONG-1861")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1867"},"INLONG-1867")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1878"},"INLONG-1878")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1901"},"INLONG-1901")," \uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/issues/1939"},"INLONG-1939")," \u3002"),(0,i.kt)("h4",{id:"5-\u5176\u4ed6\u7279\u6027\u53ca\u95ee\u9898\u4fee\u590d"},"5. \u5176\u4ed6\u7279\u6027\u53ca\u95ee\u9898\u4fee\u590d"),(0,i.kt)("p",null,"\u76f8\u5173\u5185\u5bb9\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/blob/0.12.0-incubating-RC0/CHANGES.md"},"\u7248\u672c\u53d1\u7248\u8bf4\u660e")," \uff0c\u91cc\u9762\u5217\u51fa\u4e86\u672c\u6b21\u7248\u672c\u8be6\u7ec6\u7684\u7279\u6027\u3001\u6539\u8fdb\uff0cBug \u4fee\u590d\uff0c\u4ee5\u53ca\u5177\u4f53\u7684\u8d21\u732e\u8005\u3002"),(0,i.kt)("h3",{id:"apache-inlongincubating-\u540e\u7eed\u89c4\u5212"},"Apache InLong(incubating) \u540e\u7eed\u89c4\u5212"),(0,i.kt)("p",null,"\u540e\u7eed\u7248\u672c\uff0c\u6211\u4eec\u4f1a\u8fdb\u4e00\u6b65\u91ca\u653e InLong \u7684\u80fd\u529b\uff0c\u8986\u76d6\u66f4\u591a\u7684\u4f7f\u7528\u573a\u666f\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u63a5\u5165 ClickHouse \u7684\u94fe\u8def"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 DB \u6570\u636e\u7684\u91c7\u96c6"),(0,i.kt)("li",{parentName:"ul"},"\u5168\u94fe\u8def\u7684\u6307\u6807\u5ba1\u8ba1\u4e8c\u671f\u529f\u80fd")),(0,i.kt)("h3",{id:"apache-inlongincubating-\u8d21\u732e\u8005\u62db\u52df"},"Apache InLong(incubating) \u8d21\u732e\u8005\u62db\u52df"),(0,i.kt)("p",null,"Apache InLong(incubating) \u5f53\u524d\u5171\u6709 71 \u540d contributor\uff0c\u4ecd\u5904\u5728\u9879\u76ee\u5b75\u5316\u7684\u521d\u671f\uff0c\u8fd8\u6709\u5f88\u591a\u5f85\u529e\u4e8b\u9879\uff0c\u5305\u62ec\uff1aFeature \u5f00\u53d1\u3001\u793e\u533a\u8fd0\u8425\uff0c\u6587\u6863\u7ffb\u8bd1\u7b49\uff0c\u671f\u5f85\u66f4\u591a\u5f00\u6e90\u7231\u597d\u8005\u52a0\u5165 InLong\uff0c\u4e00\u8d77\u5c06 InLong \u6253\u9020\u6210 Apache \u9876\u7ea7\u9879\u76ee\u3002\u4ee5\u4e0b\u4e3a InLong \u9879\u76ee\u7684\u65f6\u95f4\u7ebf\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2021\u5e7412\u670822\u65e5\uff0c\u53d1\u5e03 0.12.0 \u7248\u672c"),(0,i.kt)("li",{parentName:"ul"},"2021\u5e7411\u67085\u65e5\uff0c\u53d1\u5e030.11.0\u7248\u672c"),(0,i.kt)("li",{parentName:"ul"},"2021\u5e749\u67083\u65e5\uff0c\u53d1\u5e030.10.0\u7248\u672c"),(0,i.kt)("li",{parentName:"ul"},"2021\u5e747\u670812\u65e5\uff0c\u53d1\u8d77\u66f4\u540d\u540e\u7b2c\u4e00\u4e2a\u7248\u672c 0.9.0 \u6295\u7968"),(0,i.kt)("li",{parentName:"ul"},"2021\u5e744\u670811\u65e5\uff0c\u5b8c\u6210\u793e\u533a\u6539\u540d\uff0c\u8c03\u6574\u4e3a Apache InLong"),(0,i.kt)("li",{parentName:"ul"},"2021\u5e742\u670811\u65e5\uff0c\u53d1\u8d77\u793e\u533a\u6539\u540d\u53d8\u66f4\u7533\u8bf7"),(0,i.kt)("li",{parentName:"ul"},"2020\u5e7412\u670820\u65e5\uff0c\u8fdb\u884c\u9879\u76ee\u6539\u540d\u8ba8\u8bba\u548c\u6295\u7968"),(0,i.kt)("li",{parentName:"ul"},"2020\u5e745\u670830\u65e5\uff0c\u6309\u7167 Apache \u793e\u533a\u89c4\u8303\u53d1\u5e03\u7b2c\u4e00\u4e2a\u793e\u533a\u7248\u672c"),(0,i.kt)("li",{parentName:"ul"},"2019\u5e7411\u67083\u65e5\uff0c\u8fdb\u5165 Apache \u793e\u533a\u5b75\u5316"),(0,i.kt)("li",{parentName:"ul"},"2019\u5e749\u670812\u65e5\uff0cTubeMQ \u5bf9\u5916\u5f00\u6e90\u5e76\u6350\u732e\u7ed9 Apache \u793e\u533a")))}g.isMDXComponent=!0}}]);