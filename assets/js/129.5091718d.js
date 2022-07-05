(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{503:function(a,s,e){"use strict";e.r(s);var t=e(17),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"venus-market"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#venus-market"}},[a._v("#")]),a._v(" Venus Market")]),a._v(" "),e("p",[a._v("venus-gateway 是用于filecoin市场接受订单并提供检索功能的组件， 包括一个market组件和market客户端组件。用户可以使用venus-market配置venus-sealer完成市场订单的功能。 市场组件需要依赖venus来提供链信息服务，需要连接messager来提供消息推送服务，需要连接钱包提供签名服务。")]),a._v(" "),e("h2",{attrs:{id:"快速启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速启动"}},[a._v("#")]),a._v(" 快速启动")]),a._v(" "),e("h3",{attrs:{id:"下载并编译代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载并编译代码"}},[a._v("#")]),a._v(" 下载并编译代码")]),a._v(" "),e("h3",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/filecoin-project/venus-market.git\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n")])])]),e("h3",{attrs:{id:"启动市场服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动市场服务"}},[a._v("#")]),a._v(" 启动市场服务")]),a._v(" "),e("p",[a._v("作为venus服务层运行")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("./venus-market pool-run --auth-url "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("auth url"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --node-url "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("node url"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --messager-url "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("messager url"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  --gateway-url "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("signer url"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  --auth-token "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("auth token"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  --payment-addr "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("addr:account"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("单人运行")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("./venus-market solo-run --node-url "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("node url"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  --node-token "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("auth token"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --wallet-url "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("local wallet url"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  --wallet-token "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("local wallet token"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --miner "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("f0xxx"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  --payment-addr "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("addr:account"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("配置piecestorage存储配置,增加如下配置到配置文件当中")]),a._v(" "),e("p",[a._v("文件存储，如果存储仅仅只是供检索使用，可以把ReadOnly设置成true")]),a._v(" "),e("div",{staticClass:"language-toml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-toml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("PieceStorage.Fs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key property"}},[a._v("ReadOnly")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key property"}},[a._v("Path")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"path"')]),a._v("\n")])])]),e("p",[a._v("对象存储，如果存储仅仅只是供检索使用，可以把ReadOnly设置成true")]),a._v(" "),e("div",{staticClass:"language-toml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-toml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("PieceStorage.S3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key property"}},[a._v("ReadOnly")]),a._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key property"}},[a._v("EndPoint")]),a._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key property"}},[a._v("AccessKey")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key property"}},[a._v("SecretKey")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key property"}},[a._v("Token")]),a._v("     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n")])])]),e("p",[a._v("设置peerid和address")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("./venus-market net  listen  查看market地址和id\n./venus-market actor set-peer-id --miner "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("f0xxxx"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   设置peerid\n./venus-market actor set-addrs --miner "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("f0xxxx"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("addr"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   设置矿工的服务地址\n./venus-market actor info --miner "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("f0xxxx"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("               查看矿工的peerid和服务地址\n")])])]),e("p",[a._v("设置矿工的存储ask")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("./venus-market storage-deals set-ask --price "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("price"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --verified-price "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("price"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --min-piece-size  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("minsize "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("256B"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  --max-piece-size "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("max size "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("sector-size"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --miner "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("f0xxxx"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("设置矿工检索ask")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("./venus-market retrieval-deals set-ask --price "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pirce"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --unseal-price "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("price"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --payment-interval "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --payment-interval-increase "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --payment-addr "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("fxxx"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("h4",{attrs:{id:"venus-market水平扩充支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#venus-market水平扩充支持"}},[a._v("#")]),a._v(" venus-market水平扩充支持")]),a._v(" "),e("p",[a._v("目前水平扩充的方式，首先通过tcp代理，下面起多个节点，每个节点使用")]),a._v(" "),e("ol",[e("li",[a._v("tcp代理，根据客户端ip进行负载均衡")]),a._v(" "),e("li",[a._v("market采用mysql数据存储方式")]),a._v(" "),e("li",[a._v("dagstore topindex采用mongo存储方式"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('    [DAGStore]\n    RootDir = "/root/.venusmarket/dagstore"\n    MaxConcurrentIndex = 5\n    MaxConcurrentReadyFetches = 0\n    MaxConcurrencyStorageCalls = 100\n    GCInterval = "1m0s"\n    Transient = ""   #临时文件存放位置\n    Index = ""       #临时索引存放位置\n    UseTransient = false #开启此选项会先把文件从存储中加载到本地在给客户端检索，如果是使用对象存储方案，建议开启此选项\n')])])])]),a._v(" "),e("li",[a._v("piecstorage采用共享存储或者是对象存储")])]),a._v(" "),e("h3",{attrs:{id:"启动市场客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动市场客户端"}},[a._v("#")]),a._v(" 启动市场客户端")]),a._v(" "),e("p",[a._v("使用消息池的模式")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("./market-client run --node-url "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("node url"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --messager-url "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("messager-url"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --auth-token "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("auth token"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  --wallet-url "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("wallet url"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --wallet-token  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("wallet token"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --addr "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("client default address"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("使用本地钱包签名的模式")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("./market-client run --node-url "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("node url"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --node-token "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("auth token"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  --wallet-url "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("wallet url"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --wallet-token  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("wallet token"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --addr "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("client default address"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("发起订单命令")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client data "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  导入文件\n ./market-client storage deals init  交互式命令开始发送订单，一次根据提示输入数据cid，数据生命周期，yes接受订单设置之后，订单发起成功\n")])])]),e("h3",{attrs:{id:"检索数据流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检索数据流程"}},[a._v("#")]),a._v(" 检索数据流程")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("./market-client retrieval retrieve --miner "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("miner addr"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --maxPrice "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("max price"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("data-cid"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("dst path"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("h2",{attrs:{id:"客户端操作指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端操作指南"}},[a._v("#")]),a._v(" 客户端操作指南")]),a._v(" "),e("p",[a._v("客户端命令行和lotus的类似。")]),a._v(" "),e("h3",{attrs:{id:"数据相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据相关"}},[a._v("#")]),a._v(" 数据相关")]),a._v(" "),e("p",[a._v("导入数据")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("./market-client data "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("删除数据")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client data drop "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("data id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("显示本地数据")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client data "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v("\n")])])]),e("p",[a._v("查看本地导入的数据状态")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client data "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("stat")]),a._v("\n")])])]),e("h3",{attrs:{id:"检索相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检索相关"}},[a._v("#")]),a._v(" 检索相关")]),a._v(" "),e("p",[a._v("查找检索数据的位置")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client retrieval "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("data id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("检索数据")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client retrieval retrieve --miner "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("minerid"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  --maxPrice "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("price"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("data id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("output file"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("取消数据检索")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client retrieval cancel-retrieval  --deal-id "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("deal id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("显示在检索的订单")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client retrieval list-retrievals \n")])])]),e("h3",{attrs:{id:"存储相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储相关"}},[a._v("#")]),a._v(" 存储相关")]),a._v(" "),e("p",[a._v("发起存储订单")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client storage deals init\n")])])]),e("p",[a._v("查询矿工的要求（价格，等）")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client storage asks query-ask    \n")])])]),e("p",[a._v("显示本地存储订单列表")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client storage deals list-deals   \n")])])]),e("p",[a._v("显示存储订单详情")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client storage deals get-deal\n")])])]),e("p",[a._v("显示头部矿工的要求信息")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client storage asks list-asks     List asks "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("top")]),a._v(" miners\n")])])]),e("p",[a._v("查看本地存储订单的状态")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client storage asks deal-stats    Print statistics about "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" storage deals\n")])])]),e("p",[a._v("查看存储订单的详细信息")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client storage deals inspect-deal\n")])])]),e("h3",{attrs:{id:"工具命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工具命令"}},[a._v("#")]),a._v(" 工具命令")]),a._v(" "),e("p",[a._v("计算car文件的piececid")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client data commP "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("把文件转换成car文件")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client data generate-car "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("car file"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("查看市场中抵押的资产情况")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("./market-client actor-funds balances\n")])])]),e("p",[a._v("查看正在进行的数据传输")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" ./market-client transfer list-transfers \n")])])]),e("p",[a._v("重启数据传输")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("./market-client transfer restart-transfer "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("transfer id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("取消数据传输")]),a._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("./market-client transfer cancel-transfer  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("transfer id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("h3",{attrs:{id:"市场命令行指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#市场命令行指南"}},[a._v("#")]),a._v(" 市场命令行指南")]),a._v(" "),e("p",[a._v("piece相关指令")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("./venus-market pieces list-pieces")]),a._v("  列出本地接收到的pieces")]),a._v(" "),e("li",[e("code",[a._v("./venus-market pieces list-cids")]),a._v("  列出本地接受的数据id")]),a._v(" "),e("li",[e("code",[a._v("./venus-market pieces piece-info <piece cid>")]),a._v(" 列出piece数据订单情况")]),a._v(" "),e("li",[e("code",[a._v("./venus-market pieces cid-info <data cid>")]),a._v(" 列出数据cid")])]),a._v(" "),e("p",[a._v("检索命令")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("./venus-market retrieval-deals selection")]),a._v(" 检索的相关配置")]),a._v(" "),e("li",[e("code",[a._v("./venus-market retrieval-deals list")]),a._v(" 列出激活状态的订单")]),a._v(" "),e("li",[e("code",[a._v("./venus-market retrieval-deals set-ask")]),a._v(" 设置检索订单要求")]),a._v(" "),e("li",[e("code",[a._v("./venus-market retrieval-deals get-ask")]),a._v(" 查看设置的检索订单要求")])]),a._v(" "),e("p",[a._v("存储命令")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("./venus-market storage-deals import-data")]),a._v(" 手动导入订单数据")]),a._v(" "),e("li",[e("code",[a._v("./venus-market storage-deals list")]),a._v(" 列出本地存储订单")]),a._v(" "),e("li",[e("code",[a._v("./venus-market storage-deals selection")]),a._v(" 存储市场相关配置命令")]),a._v(" "),e("li",[e("code",[a._v("./venus-market storage-deals set-ask")]),a._v(" 设置存储市场的要求")]),a._v(" "),e("li",[e("code",[a._v("./venus-market storage-deals get-ask")]),a._v(" 查看现在的存储市场的要求")]),a._v(" "),e("li",[e("code",[a._v("./venus-market storage-deals set-blocklist")]),a._v(" 设置数据黑名单")]),a._v(" "),e("li",[e("code",[a._v("./venus-market storage-deals get-blocklist")]),a._v(" 查看设置的数据黑名单")]),a._v(" "),e("li",[e("code",[a._v("./venus-market storage-deals reset-blocklist")]),a._v(" 重制黑名单")]),a._v(" "),e("li",[e("code",[a._v("./venus-market storage-deals set-seal-duration")]),a._v(" 设置seal的时间")]),a._v(" "),e("li",[e("code",[a._v("./venus-market storage-deals pending-publish")]),a._v(" 查看挂起的发布订单消息")])]),a._v(" "),e("p",[a._v("网络命令")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("./venus-market net listen")]),a._v(" 查看本地libp2p网络的地址及peerid")]),a._v(" "),e("li",[e("code",[a._v("./venus-market net id")]),a._v(" 查看本地libp2p网络的peerid")])]),a._v(" "),e("p",[a._v("actor 命令")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("./venus-market actor info")]),a._v(" 查看矿工的peer和路径信息")]),a._v(" "),e("li",[e("code",[a._v("./venus-market actor set-addrs")]),a._v(" 设置矿工的监听网址")]),a._v(" "),e("li",[e("code",[a._v("./venus-market actor set-peer-id")]),a._v(" 设置矿工的peer id")])]),a._v(" "),e("p",[a._v("数据流管理命令")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("./venus-market data-transfers list")]),a._v(" 列出本地的数据流")]),a._v(" "),e("li",[e("code",[a._v("./venus-market data-transfers restart")]),a._v(" 重启本地数据流")]),a._v(" "),e("li",[e("code",[a._v("./venus-market data-transfers cancel")]),a._v("  取消数据流传输")])]),a._v(" "),e("p",[a._v("dagstore检索数据管理")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("./venus-market dagstore list-shards")]),a._v(" 列出本地所有的数据文件状态")]),a._v(" "),e("li",[e("code",[a._v("./venus-market dagstore initialize-shard <piece cid>")]),a._v(" 初始化数据文件")]),a._v(" "),e("li",[e("code",[a._v("./venus-market dagstore recover-shard <piece cid>")]),a._v(" 恢复错误的数据文件")]),a._v(" "),e("li",[e("code",[a._v("./venus-market dagstore gc")]),a._v(" 清理dagstore垃圾文件")])])])}),[],!1,null,null,null);s.default=r.exports}}]);