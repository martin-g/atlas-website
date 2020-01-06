(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"./src/documents/Security/AtlasRangerAuthorizer.md":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return c}));var i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/esm.js")),r=(t("./theme/styles/styled-colors.js"),t("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),l=t("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),o=t("./theme/components/shared/Img/index.js"),s={};function c(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(n.mdx)("wrapper",Object.assign({},s,t,{components:a,mdxType:"MDXLayout"}),Object(n.mdx)("h1",{id:"atlas-ranger-authorizer"},"Atlas Ranger Authorizer"),Object(n.mdx)("h2",{id:"setting-up-apache-atlas-to-use-apache-ranger-authorization"},"Setting up Apache Atlas to use Apache Ranger Authorization"),Object(n.mdx)("p",null,"As detailed in ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"#/AuthorizationModel"}),"Atlas Authorization Model"),", Apache Atlas supports pluggable authorization\nmodel. Apache Ranger provides an authorizer implementation that uses Apache Ranger policies for authorization. In\naddition, the authorizer provided by Apache Ranger audits all authorizations into a central audit store."),Object(n.mdx)("h3",{id:"configure-apache-atlas"},"Configure Apache Atlas"),Object(n.mdx)("p",null,"To configure Apache Atlas to use Apache Ranger authorizer, please follow the instructions given below:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Include the following property in atlas-application.properties config file:")),Object(n.mdx)(l.a,{wrapLines:!0,language:"shell",style:r.a,mdxType:"SyntaxHighlighter"},"atlas.authorizer.impl=ranger"),Object(n.mdx)("p",null,"   If you use Apache Ambari to deploy Apache Atlas and Apache Ranger, enable Atlas plugin in configuration pages for\nApache Ranger."),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Include libraries of Apache Ranger plugin in libext directory of Apache Atlas",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"<Atlas installation directory>"),"/libext/ranger-atlas-plugin-impl/"),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"<Atlas installation directory>"),"/libext/ranger-atlas-plugin-shim-",Object(n.mdx)("version",null),".jar"),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"<Atlas installation directory>"),"/libext/ranger-plugin-classloader-",Object(n.mdx)("version",null),".jar")))),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Include configuration files for Apache Ranger plugin in configuration directory of Apache Atlas - typically under /etc/atlas/conf directory. For more details on configuration file contents, please refer to appropriate documentation in Apache Ranger.",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"<Atlas configuration directory>"),"/ranger-atlas-audit.xml"),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"<Atlas configuration directory>"),"/ranger-atlas-security.xml"),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"<Atlas configuration directory>"),"/ranger-policymgr-ssl.xml"),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"<Atlas configuration directory>"),"/ranger-security.xml")))),Object(n.mdx)("h3",{id:"apache-ranger-authorization-policy-model-for-apache-atlas"},"Apache Ranger authorization policy model for Apache Atlas"),Object(n.mdx)("p",null,"Apache Ranger authorization policy model for Apache Atlas supports 3 resource hierarchies, to control access to: types,\nentities and admin operations. Following images show various details of each type of policy in Apache Ranger."),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},"Types"))),Object(n.mdx)("p",null,"Following authorization policy allows user 'admin' to create/update/delete any classification type."),Object(n.mdx)(o.a,{alt:"Apache Ranger policy for type operations",src:"/images/twiki/ranger-policy-types.png",width:"600",mdxType:"Img"}),Object(n.mdx)("hr",null),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},"Entity"))),Object(n.mdx)("p",null,"Following authorization policy allows user 'admin' perform all operations on metadata entities of Hive database named \"my_db\"."),Object(n.mdx)(o.a,{alt:"Apache Ranger policy for entity operations",src:"/images/twiki/ranger-policy-entities.png",width:"600",mdxType:"Img"}),Object(n.mdx)("hr",null),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},"Admin Operations"),"\nFollowing authorization policy allows user 'admin' to perform export/import admin operations.")),Object(n.mdx)(o.a,{alt:"Apache Ranger policy for admin operations",src:"/images/twiki/ranger-policy-admin.png",width:"600",mdxType:"Img"}),Object(n.mdx)("hr",null),Object(n.mdx)("h3",{id:"apache-ranger-access-audit-for-apache-atlas-authorizations"},"Apache Ranger access audit for Apache Atlas authorizations"),Object(n.mdx)("p",null,"Apache Ranger authorization plugin generates audit logs with details of the access authorized by the plugin. The details\ninclude the object accessed (eg. hive_table with ID cost_savings.claim_savings@cl1), type of access performed (eg.\nentity-add-classification, entity-remove-classification), name of the user, time of access and the IP address the access\nrequest came from - as shown in the following image."),Object(n.mdx)(o.a,{alt:"Apache Ranger audit ",src:"/images/twiki/ranger-audit.png",width:"800",mdxType:"Img"}))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Security/AtlasRangerAuthorizer.md"}}),c.isMDXComponent=!0},"./theme/components/shared/Img/index.js":function(e,a,t){"use strict";var i=t("./node_modules/react/index.js"),n=t("./docz-lib/docz/dist/index.js");a.a=e=>{const{src:a,width:t,height:r}=e,{baseUrl:l}=Object(n.useConfig)();return i.createElement("div",null,i.createElement("img",{style:{boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",WebkitBoxShadow:"0 2px 2px 0 rgba(0,0,0,0.14) 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",MozBoxShadow:"0 2px 2px 0 rgba(0,0,0,0.14) 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"},src:`${l}${a}`,height:`${r||"auto"}`,width:`${t||"100%"}`}))}},"./theme/styles/styled-colors.js":function(e,a,t){"use strict";var i=t("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");i.a.hljs.color="#37bb9b",a.a=i.a}}]);
//# sourceMappingURL=documents-security-atlas-ranger-authorizer.cdd3d9e3fb8d1c0c525e.js.map