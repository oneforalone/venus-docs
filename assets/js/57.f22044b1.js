(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{431:function(e,a,s){"use strict";s.r(a);var t=s(17),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"venus-market"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#venus-market"}},[e._v("#")]),e._v(" venus-market")]),e._v(" "),s("p",[e._v("venus-market is a module/component for participating in the filecoin market to accept deals and provide retrieval functions. It includes a market module/component and a client module/component. Storage providers can use venus-market along with venus-sealer to fullfill deals from a client. venus-market module/component relies on venus node for chain information services, venus-messenger for message pushing services, and venus-wallets for signature services.")]),e._v(" "),s("h2",{attrs:{id:"quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick start")]),e._v(" "),s("p",[e._v("Download source code.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/filecoin-project/venus-market.git\n")])])]),s("p",[e._v("Compile.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" deps\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v("\n")])])]),s("p",[e._v("Start venus-market.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./venus-market run --node-url "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("node url"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --messager-url "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("messager-url"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --auth-token "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("auth token"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("  --signer-url "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("wallet url"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --signer-token  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("wallet token"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --piecestorage "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("piece storeage path"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --miner "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("miner address"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("Start client.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client run --node-url "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("node url"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --messager-url "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("messager-url"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --auth-token "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("auth token"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("  --signer-url "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("wallet url"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --signer-token  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("wallet token"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("client default address"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("h2",{attrs:{id:"client-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client-commands"}},[e._v("#")]),e._v(" Client commands")]),e._v(" "),s("p",[e._v("Client commands are similar to lotus.")]),e._v(" "),s("h3",{attrs:{id:"data-related"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-related"}},[e._v("#")]),e._v(" Data related")]),e._v(" "),s("p",[e._v("Import data.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("import")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("Remove data.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client drop "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("data id"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("Show local data.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("local")]),e._v("\n")])])]),s("p",[e._v("Check local data import status.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("stat")]),e._v("\n")])])]),s("h3",{attrs:{id:"retrieval-related"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieval-related"}},[e._v("#")]),e._v(" Retrieval related")]),e._v(" "),s("p",[e._v("Find retrieval data location.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("data id"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("Retrieval.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client retrieve --miner "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("minerid"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("data id"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("output file"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("Cancel retrieval.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client cancel-retrieval \n")])])]),s("p",[e._v("Show deals being retrieved.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client list-retrievals \n")])])]),s("h3",{attrs:{id:"storage-related"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage-related"}},[e._v("#")]),e._v(" Storage related")]),e._v(" "),s("p",[e._v("Initiate a deal.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client deal    \n")])])]),s("p",[e._v("Query ask price.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client query-ask    \n")])])]),s("p",[e._v("Show local deal list.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client list-deals   \n")])])]),s("p",[e._v("Show deal details.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client get-deal\n")])])]),s("p",[e._v("List asks for top miners.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client list-asks     "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# List asks for top miners")]),e._v("\n")])])]),s("p",[e._v("Print statistics about local storage deals.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client deal-stats    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Print statistics about local storage deals")]),e._v("\n")])])]),s("p",[e._v("Inspect storage deal details.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v(" ./market-client inspect-deal\n")])])]),s("h3",{attrs:{id:"cli-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-commands"}},[e._v("#")]),e._v(" CLI commands")]),e._v(" "),s("p",[e._v("Compute piececid of car file.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client commP "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("Generate car file from file.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client generate-car "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("car file"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("Check balances.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client balances\n")])])]),s("p",[e._v("List onging transfers.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client list-transfers \n")])])]),s("p",[e._v("Restart transfer.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client restart-transfer "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("transfer id"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("Cancel transfer.")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ ./market-client cancel-transfer "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("transfer id"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("h3",{attrs:{id:"market-cli-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#market-cli-commands"}},[e._v("#")]),e._v(" Market CLI commands")]),e._v(" "),s("p",[e._v("piece related")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("./venus-market pieces list-pieces")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market pieces list-cids")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market pieces piece-info <piece cid>")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market pieces cid-info <data cid>")])])]),e._v(" "),s("p",[e._v("retrieval related")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("./venus-market retrieval-deals selection")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market retrieval-deals list")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market retrieval-deals set-ask")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market retrieval-deals get-ask")])])]),e._v(" "),s("p",[e._v("storage related")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("./venus-market storage-deals import-data")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market storage-deals list")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market storage-deals selection")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market storage-deals set-ask")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market storage-deals get-ask")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market storage-deals set-blocklist")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market storage-deals get-blocklist")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market storage-deals reset-blocklist")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market storage-deals set-seal-duration")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market storage-deals pending-publish")])])]),e._v(" "),s("p",[e._v("network related")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("./venus-market net listen")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market net id")])])]),e._v(" "),s("p",[e._v("actor")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("./venus-market actor info")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market actor set-addrs")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market actor set-peer-id")])])]),e._v(" "),s("p",[e._v("transfer related")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("./venus-market data-transfers list")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market data-transfers restart")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market data-transfers cancel")])])]),e._v(" "),s("p",[e._v("dagstore retrieval related")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("./venus-market dagstore list-shards")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market dagstore initialize-shard <piece cid>")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market dagstore recover-shard <piece cid>")])]),e._v(" "),s("li",[s("code",[e._v("./venus-market dagstore gc")])])]),e._v(" "),s("h3",{attrs:{id:"initiate-a-deal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initiate-a-deal"}},[e._v("#")]),e._v(" Initiate a deal")]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v(" ./market-client generate-car  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("car file"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n ./market-client "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("import")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n ./market-client deal\n")])])]),s("h3",{attrs:{id:"retrieve-a-deal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-a-deal"}},[e._v("#")]),e._v(" Retrieve a deal")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("./market-client retrieve --miner "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("miner addr"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("data-cid"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("dst path"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);