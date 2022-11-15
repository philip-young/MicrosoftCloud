"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="Automate Data Reporting with Azure Functions and Power Automate",u={unversionedId:"Automate Data Reporting with Azure Functions and Power Automate/index",id:"Automate Data Reporting with Azure Functions and Power Automate/index",title:"Automate Data Reporting with Azure Functions and Power Automate",description:"Level: Intermediate",source:"@site/docs/Automate Data Reporting with Azure Functions and Power Automate/index.md",sourceDirName:"Automate Data Reporting with Azure Functions and Power Automate",slug:"/Automate Data Reporting with Azure Functions and Power Automate/",permalink:"/MicrosoftCloud/tutorials/docs/Automate Data Reporting with Azure Functions and Power Automate/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/MicrosoftCloud/tutorials/docs/ACS to Teams/Congratulations"},next:{title:"1. Install the Azure Functions Extension and Create a New Function",permalink:"/MicrosoftCloud/tutorials/docs/Automate Data Reporting with Azure Functions and Power Automate/Install the Azure Functions Extension and Create a New Function"}},l={},s=[{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Technologies used in this tutorial include",id:"technologies-used-in-this-tutorial-include",level:3}],c={toc:s};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"automate-data-reporting-with-azure-functions-and-power-automate"},"Automate Data Reporting with Azure Functions and Power Automate"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Level"),": Intermediate"),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this tutorial you'll learn how to migrate a local Node.js script to Azure Functions using Visual Studio Code so that data can be retrieved more easily for reporting purposes. To automate calling the API, you'll learn how to setup a Power Automate flow, call the Azure Function, and store the data in Excel Online."),(0,o.kt)("p",null,"Here's an overview of the application solution. Power Automate is used to setup a recurring action that calls out to Azure Functions, retrieves JSON data, parses it, extracts the desired values, and stores the data in Excel Online (note that many other storage options could be chosen)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Power Automate and Azure Functions Flow",src:r(3148).Z,title:"Power Automate and Azure Functions Flow",width:"1295",height:"888"})),(0,o.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Node")," - Node LTS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/devops/develop/git/install-and-set-up-git"},"git")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions"},"Azure Functions Extension for VS Code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/free/search"},"Azure subscription")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/microsoft-365/dev-program"},"Microsoft 365 developer tenant"))),(0,o.kt)("h3",{id:"technologies-used-in-this-tutorial-include"},"Technologies used in this tutorial include"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node.js"),(0,o.kt)("li",{parentName:"ul"},"Azure Functions"),(0,o.kt)("li",{parentName:"ul"},"GitHub"),(0,o.kt)("li",{parentName:"ul"},"Power Automate"),(0,o.kt)("li",{parentName:"ul"},"VS Code")))}p.isMDXComponent=!0},3148:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/scenario-overview-d540c31e34fab4c7d60b6468d93fc19d.png"}}]);