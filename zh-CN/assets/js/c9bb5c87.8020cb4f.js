"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8769],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=u(n),d=a,N=s["".concat(p,".").concat(d)]||s[d]||k[d]||l;return n?r.createElement(N,i(i({ref:e},m),{},{components:n})):r.createElement(N,i({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},71821:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return k}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},p=void 0,u={unversionedId:"modules/sort/quick_start",id:"version-0.12.0/modules/sort/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u914d\u7f6eflink\u8fd0\u884c\u73af\u5883",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.12.0/modules/sort/quick_start.md",sourceDirName:"modules/sort",slug:"/modules/sort/quick_start",permalink:"/zh-CN/docs/0.12.0/modules/sort/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.12.0/modules/sort/quick_start.md",tags:[],version:"0.12.0",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/0.12.0/modules/sort/overview"},next:{title:"Zookeeper\u914d\u7f6e\u4ecb\u7ecd",permalink:"/zh-CN/docs/0.12.0/modules/sort/protocol_introduction"}},m={},k=[{value:"\u914d\u7f6eflink\u8fd0\u884c\u73af\u5883",id:"\u914d\u7f6eflink\u8fd0\u884c\u73af\u5883",level:2},{value:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",id:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",level:2},{value:"\u542f\u52a8inlong-sort\u5e94\u7528",id:"\u542f\u52a8inlong-sort\u5e94\u7528",level:2},{value:"\u5fc5\u8981\u7684\u914d\u7f6e",id:"\u5fc5\u8981\u7684\u914d\u7f6e",level:2},{value:"\u6240\u6709\u652f\u6301\u7684\u914d\u7f6e",id:"\u6240\u6709\u652f\u6301\u7684\u914d\u7f6e",level:2}],s={toc:k};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u914d\u7f6eflink\u8fd0\u884c\u73af\u5883"},"\u914d\u7f6eflink\u8fd0\u884c\u73af\u5883"),(0,l.kt)("p",null,"\u5f53\u524dinlong-sort\u662f\u57fa\u4e8eflink\u7684\u4e00\u4e2a\u5e94\u7528\uff0c\u56e0\u6b64\u8fd0\u884cinlong-sort\u5e94\u7528\u524d\uff0c\u9700\u8981\u51c6\u5907\u597d",(0,l.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.9/ops/deployment/cluster_setup.html"},"flink \u73af\u5883"),"\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u5f53\u524dinlong-sort\u4f9d\u8d56\u7684\u662fflink1.9.3\u7248\u672c\uff0c\u56e0\u6b64\u5728\u4e0b\u8f7d\u90e8\u7f72\u5305\u65f6\uff0c\u8bf7\u9009\u62e9",(0,l.kt)("inlineCode",{parentName:"p"},"flink-1.9.3-bin-scala_2.11.tgz")),(0,l.kt)("p",null,"flink\u73af\u5883\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95eeflink\u7684web ui\uff0c\u5bf9\u5e94\u7684\u5730\u5740\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"/{flink\u90e8\u7f72\u8def\u5f84}/conf/masters"),"\u6587\u4ef6\u4e2d\u7684\u5730\u5740"),(0,l.kt)("h2",{id:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6"},"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6"),(0,l.kt)("p",null,"\u5b89\u88c5\u6587\u4ef6\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"inlong-sort"),"\u76ee\u5f55\u3002"),(0,l.kt)("h2",{id:"\u542f\u52a8inlong-sort\u5e94\u7528"},"\u542f\u52a8inlong-sort\u5e94\u7528"),(0,l.kt)("p",null,"\u6709\u4e86\u4e0a\u8ff0\u7f16\u8bd1\u9636\u6bb5\u4ea7\u51fa\u7684jar\u5305\u540e\uff0c\u5c31\u53ef\u4ee5\u542f\u52a8inlong-sort\u7684\u5e94\u7528\u4e86\u3002\u63d0\u4ea4\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.9/ops/deployment/yarn_setup.html#submit-job-to-flink"},"\u5982\u4f55\u63d0\u4ea4flink\u4f5c\u4e1a"),"\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./bin/flink run -c org.apache.inlong.sort.flink.Entrance inlong-sort/sort-core-[version].jar \\\n--cluster-id inlong_app --zookeeper.quorum 127.0.0.1:2181 --zookeeper.path.root /inlong_sort \\\n--source.type tubemq --sink.type hive\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"-c org.apache.inlong.sort.flink.Entrance")," \u8868\u793amain class name")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"inlong-sort/sort-core-[version].jar")," \u4e3a\u7f16\u8bd1\u9636\u6bb5\u4ea7\u51fa\u7684jar\u5305"))),(0,l.kt)("h2",{id:"\u5fc5\u8981\u7684\u914d\u7f6e"},"\u5fc5\u8981\u7684\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--cluster-id ")," \u7528\u6765\u552f\u4e00\u6807\u8bc6\u4e00\u4e2ainlong-sort\u4f5c\u4e1a\uff0c\u540cinlong-manager\u4e2d",(0,l.kt)("inlineCode",{parentName:"li"},"sort.appName"),"\u914d\u7f6e\u4e00\u81f4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--zookeeper.quorum")," zk quorum\uff0c\u540cinlong-manager\u4e2d",(0,l.kt)("inlineCode",{parentName:"li"},"cluster.zk.url"),"\u914d\u7f6e\u4e00\u81f4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--zookeeper.path.root")," zk\u6839\u76ee\u5f55\uff0c\u540cinlong-manager\u4e2d",(0,l.kt)("inlineCode",{parentName:"li"},"cluster.zk.root"),"\u914d\u7f6e\u4e00\u81f4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--source.type"),' \u6570\u636e\u6e90\u7684\u79cd\u7c7b, \u5f53\u524d\u652f\u6301\uff1a"tubemq"\u3001"pulsar"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--sink.type"),' \u5b58\u50a8\u7cfb\u7edf\u7684\u79cd\u7c7b\uff0c\u5f53\u524d\u652f\u6301\uff1a"clickhouse"\u3001"hive"')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--cluster-id inlong_app --zookeeper.quorum 192.127.0.1:2181 \\\n--zookeeper.path.root /inlong_sort --source.type tubemq --sink.type hive\n")),(0,l.kt)("h2",{id:"\u6240\u6709\u652f\u6301\u7684\u914d\u7f6e"},"\u6240\u6709\u652f\u6301\u7684\u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cluster-id"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u552f\u4e00\u6807\u8bc6\u4e00\u4e2ainlong-sort\u4f5c\u4e1a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zookeeper.quorum"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"zk quorum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zookeeper.path.root"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"/inlong-sort"),(0,l.kt)("td",{parentName:"tr",align:null},"zk\u6839\u76ee\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source.type"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},'\u6570\u636e\u6e90\u7684\u79cd\u7c7b, \u5f53\u524d\u652f\u6301"tubemq"\u548c"pulsar"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.type"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},'\u5b58\u50a8\u7cfb\u7edf\u7684\u79cd\u7c7b\uff0c\u5f53\u524d\u652f\u6301"clickhouse" \u548c "hive"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source.parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"source\u7684\u5e76\u884c\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deserialization.parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"deserialization\u7684\u5e76\u884c\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"sink\u7684\u5e76\u884c\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tubemq.master.address"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605tube\u7684master address\uff0c\u4f18\u5148\u7ea7\u4f4e\u4e8ezk\u4e0a\u7684\u5143\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tubemq.session.key"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-sort"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605tube\u4f7f\u7528\u7684session key\u524d\u7f00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tubemq.bootstrap.from.max"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4ece\u6700\u5927\u4f4d\u7f6e\u5f00\u59cb\u6d88\u8d39tube")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tubemq.message.not.found.wait.period"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"350ms"),(0,l.kt)("td",{parentName:"tr",align:null},"tube\u8fd4\u56demessage not found\u540e\u7684\u7b49\u5f85\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tubemq.subscribe.retry.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"300000"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605tube\u7684\u91cd\u8bd5\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3ams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zookeeper.client.session-timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"60000"),(0,l.kt)("td",{parentName:"tr",align:null},"zk session\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3ams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zookeeper.client.connection-timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"15000"),(0,l.kt)("td",{parentName:"tr",align:null},"zk\u8fde\u63a5\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3ams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zookeeper.client.retry-wait"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"5000"),(0,l.kt)("td",{parentName:"tr",align:null},"zk\u91cd\u8fde\u95f4\u7684\u7b49\u5f85\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3ams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zookeeper.client.max-retry-attempts"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"zk\u91cd\u8fde\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zookeeper.client.acl"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},'"open"'),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the ACL (open/creator) to be configured on ZK node. The configuration value can be set to \u201ccreator\u201d if the ZooKeeper server configuration has the \u201cauthProvider\u201d property mapped to use SASLAuthenticationProvider and the cluster is configured to run in secure mode (Kerberos)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zookeeper.sasl.disable"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7981\u7528sasl")))))}d.isMDXComponent=!0}}]);