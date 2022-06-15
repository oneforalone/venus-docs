(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{463:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"venus-wallet-系统设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-wallet-系统设计"}},[t._v("#")]),t._v(" Venus-wallet 系统设计")]),t._v(" "),a("h3",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[t._v("venus-wallet是旷工接入"),a("a",{attrs:{href:"https://filecoinfoundation.medium.com/introducing-the-filecoin-storage-provider-incubation-center-ea8743e18e",target:"_blank",rel:"noopener noreferrer"}},[t._v("venus incubation"),a("OutboundLink")],1),t._v("的必要组件之一.")]),t._v(" "),a("p",[t._v("出于对旷工私钥的安全性考虑,孵化器并不会掌握旷工的私钥, 同时孵化器又需要私钥进行签名,所以我们设计并实现了venus-wallet,用于接入孵化器的旷工自己管理的相关私钥,并提供旷工相关的消息的签名服务.")]),t._v(" "),a("h3",{attrs:{id:"设计思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计思路"}},[t._v("#")]),t._v(" 设计思路")]),t._v(" "),a("p",[t._v("对于这样一个特殊的组件,我们从以下几个方面来介绍对于venus-wallet的设计思路.")]),t._v(" "),a("ol",[a("li",[t._v("venus-wallet以何种方式与"),a("a",{attrs:{href:"https://github.com/ipfs-force-community/venus-gateway",target:"_blank",rel:"noopener noreferrer"}},[t._v("venus-gateway"),a("OutboundLink")],1),t._v("进行交互-交互模式")]),t._v(" "),a("li",[t._v("venus-wallet私钥的安全性-安全性")])]),t._v(" "),a("h4",{attrs:{id:"交互模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交互模式"}},[t._v("#")]),t._v(" 交互模式")]),t._v(" "),a("p",[t._v("venus-wallet是通过与venus-gateway的交互, 参与到孵化器系统中为旷工提供签名服务的.")]),t._v(" "),a("p",[t._v("其中venus-wallet是client端定义如下:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" WalletRegisterClient "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tResponseWalletEvent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n\tListenWalletEvent   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" policy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("walletevent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WalletRegisterPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RequestEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tSupportNewAccount   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" channelId uuid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" account "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n\tAddNewAddress       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" channelId uuid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newAddrs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n\tRemoveAddress       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" channelId uuid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newAddrs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其中接口:")]),t._v(" "),a("blockquote",[a("p",[t._v("ListenWalletEvent\nResponseWalletEvent")])]),t._v(" "),a("p",[t._v("利用了"),a("a",{attrs:{href:"https://github.com/filecoin-project/go-jsonrpc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-jsonrpc"),a("OutboundLink")],1),t._v("包采用websocket连接client对server调用支持channel模式的特性模拟了异步消息队列的方式来处理gateway发出的调用请求并返回数据.")]),t._v(" "),a("p",[t._v("相关逻辑实现在"),a("code",[t._v("WalletEvent")]),t._v("类型中, 主体逻辑.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("调用"),a("code",[t._v("ListenWalletEven")]),t._v("t开始循环监听管道消息")])]),t._v(" "),a("li",[a("p",[t._v("解析收到的消息请求类型,并执行相应的函数")])]),t._v(" "),a("li",[a("p",[t._v("将执行的结果通"),a("code",[t._v("ResponseWalletEvent")]),t._v("函数返回到gateway")])])]),t._v(" "),a("p",[t._v("代码如下:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// WalletEvent定义")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" WalletEvent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tprocessor IWalletProcess\n\tclient    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("WalletRegisterClient\n\tlog       logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StandardLogger\n\tchannel   uuid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UUID\n\tcfg       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("APIRegisterHubConfig\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听gateway请求并处理.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("WalletEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listenWalletRequestOnce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cancel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithCancel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tpolicy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("walletevent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WalletRegisterPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tSupportAccounts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cfg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SupportAccounts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tSignBytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("       core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RandSignBytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Infow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rand sign byte"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RandSignBytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\twalletEventCh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListenWalletEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" policy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" xerrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Errorf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"listenWalletRequestOnce listenWalletRequestOnce call failed: %w"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" event "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" walletEventCh "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Method "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"InitConnect"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\treq "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ConnectedCompleted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\terr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unmarshal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\te"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Errorf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"init connect error %s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\te"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("channel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChannelId\n\t\t\te"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Infof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connect to server success %v"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChannelId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//do not response")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WalletList"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("walletList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WalletSign"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("walletSign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\te"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Errorf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unexpect proof event type %s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回调用结果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("WalletEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id uuid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\trespBytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Marshal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\te"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Errorf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"marshal address list error %s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\terr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ResponseWalletEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("      id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tPayload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\te"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Errorf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"response wallet event error %s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\terr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ResponseWalletEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("      id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tPayload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" respBytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\te"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Errorf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"response error %v"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"安全性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全性"}},[t._v("#")]),t._v(" 安全性")]),t._v(" "),a("h5",{attrs:{id:"地址私钥认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#地址私钥认证"}},[t._v("#")]),t._v(" 地址私钥认证")]),t._v(" "),a("p",[t._v("在venus-wallet与gateway建立连接后,其第一件事请, 是通过"),a("code",[t._v("AddNewAddress")]),t._v("接口告诉gateway其包含了的地址私钥, 以便gateway需要签名时,能够通过地址定位到自己进行签名.")]),t._v(" "),a("p",[t._v("但是gateway并不完全信任venus-wallet,需要其能够证明自己的确包含了这个地址的私钥.")]),t._v(" "),a("p",[t._v("在大多数场景中这种情况只需要按下面的流程进行验证就行了:")]),t._v(" "),a("ol",[a("li",[t._v("gateway发送message到venus-wallet")]),t._v(" "),a("li",[t._v("venus-wallet对message执行签名,并返回给gateway")]),t._v(" "),a("li",[t._v("gateway验证签名")]),t._v(" "),a("li",[t._v("地址确认完成")])]),t._v(" "),a("p",[t._v("但在gateway不信任wallet的同时,wallet同样不信任gateway, wallet有理由怀疑, 这个签名会对其资金安全造成威胁,\n比如gateway发送了一个从这个地址转出资金的消息的hash值给他签名,然后就可以把消息发送到filecoin链上了.")]),t._v(" "),a("p",[t._v("同时也不能单独让wallet自己提供签名的message, 因为wallet可以在filecoin链上随便找到一条这个地址对某串消息的签名来冒充.")]),t._v(" "),a("p",[t._v("所以, 要建立这种信任,在地址私钥认证的过程中, 我们设计了一套方案:")]),t._v(" "),a("p",[a("strong",[t._v("签名验证的消息由双方共同生成,以确保万无一失.")])]),t._v(" "),a("p",[t._v("具体流程如下图:")]),t._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/filecoin-project/venus-docs/master/docs/.vuepress/public/venus-wallet-verify-address.png"}}),t._v(" "),a("h5",{attrs:{id:"签名api安全性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#签名api安全性"}},[t._v("#")]),t._v(" 签名API安全性")]),t._v(" "),a("p",[t._v("由于venus-wallet对gateway提供"),a("code",[t._v("WalletSign")]),t._v("用于签名, Venus-wallet需要保证gateway无法利用这个接口做非法的事情.")]),t._v(" "),a("p",[t._v("所以针对这个问题,设计了一套协议,保证venus-wallet对数据进行签名之前, 可以对需要签名的消息进行验证, 以确定是否需要对这个数据签名.")]),t._v(" "),a("p",[t._v("协议中定义了签名类型和MsgMeta:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tMTUnknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unknown"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Signing message CID. MsgMeta.Extra contains raw cbor message bytes")]),t._v("\n\tMTChainMsg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Signing a blockheader. signing raw cbor block bytes (MsgMeta.Extra is empty)")]),t._v("\n\tMTBlock "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"block"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Signing a deal proposal. signing raw cbor proposal bytes (MsgMeta.Extra is empty)")]),t._v("\n\tMTDealProposal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dealproposal"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// extra is nil, 'toSign' is cbor raw bytes of 'DrawRandomParams'")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  following types follow above rule")]),t._v("\n\tMTDrawRandomParam "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"drawrandomparam"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tMTSignedVoucher   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"signedvoucher"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tMTStorageAsk      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"storageask"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tMTAskResponse     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"askresponse"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tMTNetWorkResponse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"networkresposne"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reference : storagemarket/impl/remotecli.go:330")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sign storagemarket.ClientDeal.ProposalCid,")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MsgMeta.Extra is nil, 'toSign' is market.ClientDealProposal")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// storagemarket.ClientDeal.ProposalCid equals cborutil.AsIpld(market.ClientDealProposal).Cid()")]),t._v("\n\tMTClientDeal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clientdeal"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tMTProviderDealState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"providerdealstate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tMTVerifyAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MsgType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"verifyaddress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MsgMeta "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tType MsgType\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Additional data related to what is signed. Should be verifiable with the")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// signed bytes (e.g. CID(Extra).Bytes() == toSign)")]),t._v("\n\tExtra "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("定义签名接口:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ShimWallet "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WalletList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WalletSign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" signer core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toSign "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MsgMeta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Signature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在venus-walelt处理WalletSign请求时,按照下面的流程处理,中间任何一个步骤不符合预期都会签名失败,返回错误:")]),t._v(" "),a("ol",[a("li",[t._v("判断"),a("code",[t._v("MsgMeta.MsgType")]),t._v("是否为合法的签名类型")]),t._v(" "),a("li",[t._v("根据"),a("code",[t._v("MsgType")]),t._v(" 和"),a("code",[t._v("MsgMeta.Extra")]),t._v("可以 unmarshal出真正需要签名的数据的数据结构.")]),t._v(" "),a("li",[t._v("通过Unmarshal的数据结构重新计算需要签名的Message")]),t._v(" "),a("li",[t._v("检查Message是否与toSign相等.")])]),t._v(" "),a("p",[t._v("然后根据数据结构计算出需要真正需要签名的签名message, 这个message应该和参数中的"),a("code",[t._v("tosign")]),t._v("是相等的.")]),t._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("Venus inclubation是一个复杂的分布式系统, 系统比较庞大, 如果需要对孵化器进行详细的了解请参考文档:"),a("a",{attrs:{href:"https://github.com/filecoin-project/venus-docs/blob/master/docs/guide/Using-venus-Shared-Modules.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("venus-Shared-Modules"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);