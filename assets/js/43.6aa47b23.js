(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{414:function(t,s,n){"use strict";n.r(s);var a=n(17),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"contributing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[t._v("#")]),t._v(" Contributing")]),t._v(" "),n("p",[t._v("PRs, bug reports, and issue suggestions are welcome! For major changes, please propose in an issue first so benefits and impacts can be discussed.")]),t._v(" "),n("p",[t._v("👉 You can also click on click on "),n("code",[t._v("Edit this page")]),t._v(" links at the bottom of each page to jump directly to Edit mode.")]),t._v(" "),n("h2",{attrs:{id:"deployment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[t._v("#")]),t._v(" Deployment")]),t._v(" "),n("h3",{attrs:{id:"running-locally"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-locally"}},[t._v("#")]),t._v(" Running locally")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  $ yarn install\n  $ yarn docs:dev \n")])])]),n("h3",{attrs:{id:"building"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#building"}},[t._v("#")]),t._v(" Building")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  $ yarn docs:links   # verify all links are well-formed\n  $ yarn docs:build\n")])])]),n("p",[t._v("Then deploy the "),n("code",[t._v("docs/.vuepress/dist")]),t._v(" directory to the "),n("code",[t._v("gh-pages")]),t._v(" branch of this repo.")]),t._v(" "),n("h3",{attrs:{id:"deploy-script"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploy-script"}},[t._v("#")]),t._v(" Deploy script")]),t._v(" "),n("p",[t._v("You can also run the following script to combine building and deployment together. Make sure everything is running okay locally.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# abort on errors")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# navigate into the build output directory")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if you are deploying to a custom domain")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'venus.filecoin.io'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" CNAME\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if you are deploying to https://<USERNAME>.github.io")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if you are deploying to https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@github.com:filecoin-project/venus-docs.git master:gh-pages\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),n("h3",{attrs:{id:"notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes:")]),t._v(" "),n("ul",[n("li",[t._v("When new documentation pages are added "),n("code",[t._v("./docs/config.js")]),t._v(" will need to be "),n("strong",[t._v("manually updated")]),t._v(" in this repo")])])])}),[],!1,null,null,null);s.default=e.exports}}]);