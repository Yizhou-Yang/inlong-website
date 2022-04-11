"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3096],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76047:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Hive Example",sidebar_position:2},c=void 0,s={unversionedId:"quick_start/hive_example",id:"quick_start/hive_example",title:"Hive Example",description:"Here we use a simple example to help you experience InLong.",source:"@site/docs/quick_start/hive_example.md",sourceDirName:"quick_start",slug:"/quick_start/hive_example",permalink:"/docs/next/quick_start/hive_example",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/quick_start/hive_example.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Hive Example",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to Build",permalink:"/docs/next/quick_start/how_to_build"},next:{title:"Pulsar Example",permalink:"/docs/next/quick_start/pulsar_example"}},u={},p=[{value:"Install Hive",id:"install-hive",level:2},{value:"Install InLong",id:"install-inlong",level:2},{value:"Create a data access",id:"create-a-data-access",level:2},{value:"Approve the data access",id:"approve-the-data-access",level:2},{value:"Configure the agent file",id:"configure-the-agent-file",level:2}],d={toc:p};function h(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here we use a simple example to help you experience InLong."),(0,i.kt)("h2",{id:"install-hive"},"Install Hive"),(0,i.kt)("p",null,"Hive is the necessary component. If you don't have Hive in your machine, we recommand using Docker to install it. Details can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/big-data-europe/docker-hive"},"here"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that if you use Docker, you need to add a port mapping ",(0,i.kt)("inlineCode",{parentName:"p"},"8020:8020"),", because it's the port of HDFS DefaultFS, and we need to use it later.")),(0,i.kt)("h2",{id:"install-inlong"},"Install InLong"),(0,i.kt)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install InLong with Docker by according to the ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/deployment/docker"},"instructions here"),".(Recommanded)"),(0,i.kt)("li",{parentName:"ol"},"Install InLong binary according to the ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/deployment/bare_metal"},"instructions here"),".")),(0,i.kt)("h2",{id:"create-a-data-access"},"Create a data access"),(0,i.kt)("p",null,'After deployment, we first enter the "Data Access" interface, click "Create an Access" in the upper right corner to create a new date access, and fill in the data streams group information as shown in the figure below.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Group",src:n(99407).Z,width:"828",height:"758"})),(0,i.kt)("p",null,"Then we click the next button, and fill in the stream information as shown in the figure below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Stream",src:n(28125).Z,width:"960",height:"582"})),(0,i.kt)("p",null,'Note that the message source is "File", you can create a data source manually and configure ',(0,i.kt)("inlineCode",{parentName:"p"},"Agent Address")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"File Path"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"File Source",src:n(78183).Z,width:"827",height:"388"})),(0,i.kt)("p",null,'Then we fill in the following information in the "data information" column below.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Data Information",src:n(72320).Z,width:"1501",height:"469"})),(0,i.kt)("p",null,'Then we select Hive in the data flow and click "Add" to add Hive configuration'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Hive Config",src:n(92319).Z,width:"1194",height:"824"})),(0,i.kt)("p",null,"Note that the target table does not need to be created in advance, as InLong Manager will automatically create the table for us after the access is approved. Also, please use connection test to ensure that InLong Manager can connect to your Hive."),(0,i.kt)("p",null,'Then we click the "Submit for Approval" button, the connection will be created successfully and enter the approval state.'),(0,i.kt)("h2",{id:"approve-the-data-access"},"Approve the data access"),(0,i.kt)("p",null,'Then we enter the "Approval Management" interface and click "My Approval" to approve the data access that we just applied for.'),(0,i.kt)("p",null,"At this point, the data access has been created successfully. We can see that the corresponding table has been created in Hive, and we can see that the corresponding topic has been created successfully in the management GUI of TubeMQ."),(0,i.kt)("h2",{id:"configure-the-agent-file"},"Configure the agent file"),(0,i.kt)("p",null,"Then we need to create a new file ",(0,i.kt)("inlineCode",{parentName:"p"},"/data/collect-data/test.log")," and add content to it to trigger the agent to send data to the dataproxy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir collect-data\nEND=100000\nfor ((i=1;i<=END;i++)); do\n    sleep 3\n    echo "name_$i | $i" >> /data/collect-data/test.log\ndone\n')),(0,i.kt)("p",null,"Then you can observe the Audit Data Pages, and see that the data has been collected and sent successfully."))}h.isMDXComponent=!0},99407:function(e,t,n){t.Z=n.p+"assets/images/create-group-3e0d534bf7696918f427703865a53d69.png"},28125:function(e,t,n){t.Z=n.p+"assets/images/create-stream-217302a472d9c730b422f1de7a1d554a.png"},72320:function(e,t,n){t.Z=n.p+"assets/images/data-information-840b6e3b3554bcaed25ba134776577b7.png"},78183:function(e,t,n){t.Z=n.p+"assets/images/file-source-46b2dcbc5e869ade504ca5e40c69ce0a.png"},92319:function(e,t,n){t.Z=n.p+"assets/images/hive-config-74dec6dfd1d35c6bd9ba81d262abec95.png"}}]);