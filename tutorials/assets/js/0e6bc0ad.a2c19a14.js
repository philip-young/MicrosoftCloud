"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,A=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(A,i(i({ref:t},s),{},{components:n})):r.createElement(A,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"1. Install the Azure Functions Extension and Create a New Function",sidebar_position:1},i="Exercise 1",u={unversionedId:"Automate Data Reporting with Azure Functions and Power Automate/Install the Azure Functions Extension and Create a New Function",id:"Automate Data Reporting with Azure Functions and Power Automate/Install the Azure Functions Extension and Create a New Function",title:"1. Install the Azure Functions Extension and Create a New Function",description:"Install the Azure Functions Extension for VS Code",source:"@site/docs/Automate Data Reporting with Azure Functions and Power Automate/01-Install the Azure Functions Extension and Create a New Function.md",sourceDirName:"Automate Data Reporting with Azure Functions and Power Automate",slug:"/Automate Data Reporting with Azure Functions and Power Automate/Install the Azure Functions Extension and Create a New Function",permalink:"/MicrosoftCloud/tutorials/docs/Automate Data Reporting with Azure Functions and Power Automate/Install the Azure Functions Extension and Create a New Function",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Install the Azure Functions Extension and Create a New Function",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Automate Data Reporting with Azure Functions and Power Automate",permalink:"/MicrosoftCloud/tutorials/docs/Automate Data Reporting with Azure Functions and Power Automate/"},next:{title:"2. Convert Local Script Code into an Azure Function",permalink:"/MicrosoftCloud/tutorials/docs/Automate Data Reporting with Azure Functions and Power Automate/Convert Local Script Code into an Azure Function"}},l={},c=[{value:"Install the Azure Functions Extension for VS Code",id:"install-the-azure-functions-extension-for-vs-code",level:2}],s={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exercise-1"},"Exercise 1"),(0,a.kt)("h2",{id:"install-the-azure-functions-extension-for-vs-code"},"Install the Azure Functions Extension for VS Code"),(0,a.kt)("p",null,"In this exercise you'll create an empty project, install the Azure Functions extension for VS Code, and create a new function."),(0,a.kt)("p",null,"To get started, perform the following tasks:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create an empty folder on your desktop and open it in VS Code.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions"},"Azure Functions extension")," if it's not already installed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the ",(0,a.kt)("strong",{parentName:"p"},"Azure")," icon in the VS Code sidebar."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you don't see the Azure icon after installing the Azure Functions extension, right-click on the VS Code sidebar and select ",(0,a.kt)("strong",{parentName:"p"},"Azure")," from the menu."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign in to Azure if you're not already signed in."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Sign in to Azure",src:n(3906).Z,title:"Sign in to Azure",width:"938",height:"394"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Locate the ",(0,a.kt)("strong",{parentName:"p"},"Workspace")," section and click the ",(0,a.kt)("strong",{parentName:"p"},"+")," icon.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Create Function")," and then select ",(0,a.kt)("strong",{parentName:"p"},"Yes"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Create Azure Function Dialog",src:n(4237).Z,title:"Create Azure Function Dialog",width:"260",height:"215"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the following:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Language")," : TypeScript"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Trigger")," : HTTP trigger"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Function Name")," : getGitHubRepoStats"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Authorization level")," : Anonymous")),(0,a.kt)("br",null),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you opened an existing project folder instead of an empty one, you may be prompted to overwrite the ",(0,a.kt)("strong",{parentName:"p"},".gitignore")," and ",(0,a.kt)("strong",{parentName:"p"},"package.json")," files."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will see the following folder and files added to your project:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Create Azure Function Project Dialog",src:n(7800).Z,title:"Create Azure Function Project Dialog",width:"313",height:"151"})))))}p.isMDXComponent=!0},7800:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},4237:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-function-dialog-ce82b4d8a33d14671da0cae4f2216bb4.png"},3906:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/functions-sign-into-azure-347d91e0ce25a767b99148e1a53ca242.png"}}]);