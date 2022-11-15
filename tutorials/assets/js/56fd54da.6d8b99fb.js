"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={title:"2. Convert Local Script Code into an Azure Function",sidebar_position:2},i="Exercise 2",s={unversionedId:"Automate Data Reporting with Azure Functions and Power Automate/Convert Local Script Code into an Azure Function",id:"Automate Data Reporting with Azure Functions and Power Automate/Convert Local Script Code into an Azure Function",title:"2. Convert Local Script Code into an Azure Function",description:"Convert Local Script Code into an Azure Function",source:"@site/docs/Automate Data Reporting with Azure Functions and Power Automate/02-Convert Local Script Code into an Azure Function.md",sourceDirName:"Automate Data Reporting with Azure Functions and Power Automate",slug:"/Automate Data Reporting with Azure Functions and Power Automate/Convert Local Script Code into an Azure Function",permalink:"/MicrosoftCloud/tutorials/docs/Automate Data Reporting with Azure Functions and Power Automate/Convert Local Script Code into an Azure Function",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. Convert Local Script Code into an Azure Function",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Install the Azure Functions Extension and Create a New Function",permalink:"/MicrosoftCloud/tutorials/docs/Automate Data Reporting with Azure Functions and Power Automate/Install the Azure Functions Extension and Create a New Function"},next:{title:"3. Create and Deploy the Function App to Azure",permalink:"/MicrosoftCloud/tutorials/docs/Automate Data Reporting with Azure Functions and Power Automate/Create and Deploy the Function App to Azure"}},p={},c=[{value:"Convert Local Script Code into an Azure Function",id:"convert-local-script-code-into-an-azure-function",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exercise-2"},"Exercise 2"),(0,r.kt)("h2",{id:"convert-local-script-code-into-an-azure-function"},"Convert Local Script Code into an Azure Function"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The code that you'll be adding to the Azure Function calls out to the GitHub API to retrieve clones, forks, and views data. A local version of the script can be ",(0,r.kt)("a",{href:"https://github.com/DanWahlin/github-repo-stats/blob/main/getStats.js",target:"_blank"},"found here"),"."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Although this tutorial relies on data returned from a ",(0,r.kt)("a",{href:"https://docs.github.com/en/rest",target:"_blank"},"GitHub API"),", an Azure Function can return virtually any type of data related to your work tasks."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to install the GitHub REST API SDK:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npm install @octokit/rest\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"getGetHubRepoStats/index.ts")," file in your editor and take a moment to explore the code."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { AzureFunction, Context, HttpRequest } from "@azure/functions"\n\nconst httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {\n    context.log(\'HTTP trigger function processed a request.\');\n    const name = (req.query.name || (req.body && req.body.name));\n    const responseMessage = name\n        ? "Hello, " + name + ". This HTTP triggered function executed successfully."\n        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";\n\n    context.res = {\n        // status: 200, /* Defaults to 200 */\n        body: responseMessage\n    };\n\n};\n\nexport default httpTrigger;\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new file in the  in the ",(0,r.kt)("strong",{parentName:"p"},"getGitHubRepoStats")," function folder named ",(0,r.kt)("strong",{parentName:"p"},"getStats.ts"),". Add the following code to the file."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},'If you hover over the code you can select the "copy" icon to copy the code to your clipboard.')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    import { Octokit } from '@octokit/rest';\n    import { v4 as uuidv4 } from 'uuid';\n\n    // Create personal access token (with repo --\x3e public rights) at https://github.com/settings/tokens\n    let octokit: Octokit;\n    let ownersRepos;\n    let context;\n\n    export async function getStats(ctx) {\n        context = ctx || { log: console.log };\n        ownersRepos = getRepos();\n        const stats = [];\n        for (const repo of ownersRepos) {\n            octokit = new Octokit({\n                auth: repo.token\n            });\n            const ownerRepo = {\n                owner: repo.owner,\n                repo: repo.repo\n            }\n            const clones = await getClones(ownerRepo);\n            const forks = await getTotalForks(ownerRepo);\n            const views = await getPageViews(ownerRepo);\n\n            const yesterdayRow = getTodayRow(ownerRepo, clones, forks, views);\n            stats.push(yesterdayRow);\n        }\n\n        return stats;\n    }\n\n    function getRepos() {\n        try {\n            const repos = JSON.parse(process.env['GITHUB_REPOS']);\n            context.log('Repos:', repos);\n            return repos;\n        }\n        catch (e) {\n            context.log(e);\n            return [];\n        }\n    }\n\n    function getTodayRow(ownerRepo, clones, forks, views) {\n        const today = new Date();\n        const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1)\n        .toISOString().split('T')[0] + 'T00:00:00Z';\n\n        const todayClonesViewsForks ={\n            id: uuidv4(),\n            timestamp: yesterday,\n            owner: ownerRepo.owner,\n            repo: ownerRepo.repo,\n            clones: 0,\n            forks: forks,\n            views: 0\n        };\n        const todayClones = clones.clones.find(c => c.timestamp === yesterday);\n        const todayViews = views.views.find(v => v.timestamp === yesterday);\n        if (todayClones) {\n            todayClonesViewsForks.clones = todayClones.count;\n        }\n        if (todayViews) {\n            todayClonesViewsForks.views = todayViews.count;\n        }\n        return todayClonesViewsForks;\n    }\n\n    async function getClones(ownerRepo) {\n        try {\n            // https://docs.github.com/en/rest/metrics/traffic#get-repository-clones\n            const { data } = await octokit.rest.repos.getClones(ownerRepo);\n            context.log(`${ownerRepo.owner}/${ownerRepo.repo} clones:`, data.count);\n            return data;\n        }\n        catch (e) {\n            context.log(`Unable to get clones for ${ownerRepo.owner}/${ownerRepo.repo}. You probably don't have push access.`);\n        }\n        return 0;\n    }\n\n    async function getTotalForks(ownerRepo) {\n        try {\n            // https://docs.github.com/en/rest/repos/forks\n            const { data } = await octokit.rest.repos.get(ownerRepo);\n            const forksCount = (data) ? data.forks_count : 0;\n            context.log(`${ownerRepo.owner}/${ownerRepo.repo} forks:`, forksCount);\n            return forksCount\n        }\n        catch (e) {\n            context.log(e);\n            context.log(`Unable to get forks for ${ownerRepo.owner}/${ownerRepo.repo}. You probably don't have push access.`);\n        }\n        return 0;\n    }\n\n    async function getPageViews(ownerRepo) {\n        try {\n            // https://docs.github.com/en/rest/metrics/traffic#get-page-views\n            const { data } = await await octokit.rest.repos.getViews(ownerRepo);\n            context.log(`${ownerRepo.owner}/${ownerRepo.repo} visits:`, data.count);\n            return data;\n        }\n        catch (e) {\n            context.log(`Unable to get page views for ${ownerRepo.owner}/${ownerRepo.repo}. You probably don't have push access.`);\n            context.log(e);\n        }\n        return 0;\n    }\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go back to the ",(0,r.kt)("strong",{parentName:"p"},"getGitHubRepoStats/index.ts")," file and modify it to look like the following. Notice that the code imports the ",(0,r.kt)("inlineCode",{parentName:"p"},"getStats")," function you created previously. This keeps the function code nice and clean."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AzureFunction, Context, HttpRequest } from '@azure/functions';\nimport { getStats } from './getStats';\n\nconst httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {\n    context.log('HTTP trigger function processed a GitHub repo stats request.');\n    const stats = await getStats(context);\n    context.log(\"The stats\", stats);\n    context.res = {\n        body: stats\n    };\n};\n\nexport default httpTrigger;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com"},"https://github.com"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/MicrosoftCloud"},"https://github.com/microsoft/MicrosoftCloud")," and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fork")," option. Select your GitHub user account/organization and the ",(0,r.kt)("inlineCode",{parentName:"p"},"MicrosoftCloud")," repository will be added to your GitHub account. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"While at ",(0,r.kt)("a",{parentName:"p",href:"http://github.com"},"http://github.com"),", select your user icon in the upper-right of the screen followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings"),". Perform the following steps:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Developer settings")," from the left menu."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Personal access tokens"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Tokens (classic)"),"."),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Generate new token")," button followed by ",(0,r.kt)("inlineCode",{parentName:"li"},"Generate new token (classic)"),"."),(0,r.kt)("li",{parentName:"ul"},"Give the token ",(0,r.kt)("inlineCode",{parentName:"li"},"Note")," field a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"github-api-test"),"."),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"Select scopes"),", select the ",(0,r.kt)("inlineCode",{parentName:"li"},"public_repo")," checkbox."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Generate token")," at the bottom of the screen."),(0,r.kt)("li",{parentName:"ul"},"Copy the token value to a local file. You'll need it in the next step."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Back in VS Code, open ",(0,r.kt)("inlineCode",{parentName:"p"},"local.settings.json")," and add the following key/value pair into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Values")," section. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_GITHUB_USERNAME>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_GITHUB_TOKEN")," with the appropriate values."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'"GITHUB_REPOS": "[ { \\"owner\\": \\"<YOUR_GITHUB_USERNAME>\\", \\"repo\\": \\"MicrosoftCloud\\", \\"token\\": \\"<YOUR_GITHUB_TOKEN>\\" }]"\n')),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Adding the ",(0,r.kt)("strong",{parentName:"p"},"GITHUB_REPOS")," value to ",(0,r.kt)("inlineCode",{parentName:"p"},"local.settings.json")," will cause it pass the value as an environment variable to the function when you run it locally."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a terminal window in VS Code at the root of your project and select ",(0,r.kt)("inlineCode",{parentName:"p"},"func start"),"."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You may be prompted me to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"core")," tools."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the function starts, you should see a URL value of ",(0,r.kt)("strong",{parentName:"p"},"http://localhost:7071/api/getGitHubRepoStats")," displayed in the console. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a browser and navigate to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"http://localhost:7071/api/getGitHubRepoStats"},"http://localhost:7071/api/getGitHubRepoStats")),". If everything has been done correctly up to this point you should see stats returned for your ",(0,r.kt)("strong",{parentName:"p"},"MicrosoftCloud")," repo.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop the process running in the terminal window by selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl + c"),"."))))}u.isMDXComponent=!0}}]);