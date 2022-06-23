(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{408:function(t,e,a){"use strict";a.r(e);var s=a(17),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"snapdeal-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snapdeal-support"}},[t._v("#")]),t._v(" SnapDeal support")]),t._v(" "),a("h2",{attrs:{id:"snapdeal-brief"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snapdeal-brief"}},[t._v("#")]),t._v(" SnapDeal Brief")]),t._v(" "),a("p",[a("code",[t._v("SnalDeal")]),t._v(" is a sector proposed in "),a("a",{attrs:{href:"https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0019.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("FIP-19"),a("OutboundLink")],1),t._v(", which is launched on "),a("code",[t._v("network15")]),t._v(" upgrade plan.\nCompared with the huge overhead of the previous upgrade plan, which needs to complete the packaging process again and again, "),a("code",[t._v("SnalDeal")]),t._v(" is quite lightweight, and its overhead is about:")]),t._v(" "),a("ul",[a("li",[t._v("Complete an "),a("code",[t._v("add piece")])]),t._v(" "),a("li",[t._v("complete "),a("code",[t._v("tree d")]),t._v(" once")]),t._v(" "),a("li",[t._v("Complete one "),a("code",[t._v("snap_encode")]),t._v(", the cost is approximately equal to one "),a("code",[t._v("pc2")])]),t._v(" "),a("li",[t._v("To complete a "),a("code",[t._v("snap_prove")]),t._v(", the cost is approximately equal to one "),a("code",[t._v("c1")]),t._v(" + "),a("code",[t._v("c2")]),t._v("\nTherefore, "),a("code",[t._v("SnalDeal")]),t._v(" is quite attractive whether it is for the new real data storage requirements or the conversion of the stock "),a("code",[t._v("CC sectors")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"venus-cluster-support-for-snapdeal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-cluster-support-for-snapdeal"}},[t._v("#")]),t._v(" venus-cluster support for SnapDeal")]),t._v(" "),a("p",[t._v("Currently, in the existing computing power schemes of "),a("code",[t._v("lotus")]),t._v(" and "),a("code",[t._v("venus")]),t._v(", the support for "),a("code",[t._v("SnapDeal")]),t._v(" is limited to a relatively crude way of manually triggering.\n"),a("code",[t._v("venus-cluster")]),t._v(" was designed to provide a computing power production solution in the production line mode. For this reason, we provide a "),a("code",[t._v("SnapDeal")]),t._v(" production solution that requires less manual intervention, which we call "),a("code",[t._v("SnapUp")]),t._v(". Its steps are roughly as follows:")]),t._v(" "),a("ol",[a("li",[t._v("Batch import existing "),a("code",[t._v("CC sectors")]),t._v(" as local candidate sectors")]),t._v(" "),a("li",[t._v("Configure "),a("code",[t._v("venus-sector-manager")]),t._v(" to enable "),a("code",[t._v("SnapUp")]),t._v(" support for the specified "),a("code",[t._v("SP")])]),t._v(" "),a("li",[t._v("Configure "),a("code",[t._v("venus-worker")]),t._v(", convert existing "),a("code",[t._v("sealing_thread")]),t._v(" into "),a("code",[t._v("SnapUp")]),t._v(" production plan, or add "),a("code",[t._v("sealing_thread")]),t._v(" for "),a("code",[t._v("SnapUp")]),t._v("\nDuring the whole process, the user only needs to pay attention to the import and allowance of the local candidate sector, and the rest of the process will be completed automatically.")])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("p",[t._v("The following takes a production cluster on the "),a("code",[t._v("butterfly")]),t._v(" network as an example to demonstrate step by step how to configure the production scheme of "),a("code",[t._v("SnapUp")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"import-of-candidate-sectors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-of-candidate-sectors"}},[t._v("#")]),t._v(" Import of candidate sectors")]),t._v(" "),a("p",[t._v("Using the new "),a("code",[t._v("util sealer snap fetch")]),t._v(" tool, you can import "),a("code",[t._v("CC sectors")]),t._v(" that meet the limit (the remaining life cycle is greater than 180 days, which meets the minimum life cycle of the order) as local candidate sectors according to the "),a("code",[t._v("deadline")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./dist/bin/venus-sector-manager --net butterfly util sealer snap fetch "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1153")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v("-04-15T04:28:03.380Z DEBUG policy policy/const.go:18 NETWORK SETUP "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"butterfly"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v("-04-15T04:28:03.401Z INFO cmd internal/util_sealer_snap.go:53 cadidate sectors fetched "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"available-in-deadline"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"added"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"observe-the-margin-of-the-candidate-sector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observe-the-margin-of-the-candidate-sector"}},[t._v("#")]),t._v(" Observe the margin of the candidate sector")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./dist/bin/venus-sector-manager --net butterfly util sealer snap candidates "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1153")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v("-04-15T04:28:13.955Z DEBUG policy policy/const.go:18 NETWORK SETUP "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"butterfly"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ndeadline count\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),a("p",[t._v("It can be seen that there are currently 2 "),a("code",[t._v("CC sectors")]),t._v(" in "),a("code",[t._v("#3 deadline")]),t._v(" as candidates for upgrade")]),t._v(" "),a("h3",{attrs:{id:"configure-venus-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-venus-worker"}},[t._v("#")]),t._v(" Configure "),a("code",[t._v("venus-worker")])]),t._v(" "),a("p",[t._v("The content that needs to be configured in "),a("code",[t._v("venus-worker")]),t._v(" is mainly "),a("code",[t._v("sealing_thread")]),t._v(" for "),a("code",[t._v("SnapUp")]),t._v(" task, and computing resource allocation for "),a("code",[t._v("snap_encode")]),t._v(", "),a("code",[t._v("snap_prove")]),t._v(".")]),t._v(" "),a("p",[t._v("An example is as follows:")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("sealing_thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/local-snap"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("plan")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"snapup"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("processors.limitation.concurrent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("tree_d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("snap_encode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("snap_prove")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("processors.snap_encode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("cgroup.cpuset")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"48-63"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("envs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("FIL_PROOFS_USE_GPU_COLUMN_BUILDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("FIL_PROOFS_USE_GPU_TREE_BUILDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("CUDA_VISIBLE_DEVICES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("processors.snap_prove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("cgroup.cpuset")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"16-31"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("envs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("CUDA_VISIBLE_DEVICES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The computing resource allocation of "),a("code",[t._v("snap_encode")]),t._v(" can refer to "),a("code",[t._v("pc2")]),t._v(", and the computing resource allocation of "),a("code",[t._v("snap_prove")]),t._v(" can refer to "),a("code",[t._v("c2")])]),t._v(" "),a("h3",{attrs:{id:"configure-venus-sector-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-venus-sector-manager"}},[t._v("#")]),t._v(" Configure "),a("code",[t._v("venus-sector-manager")])]),t._v(" "),a("p",[t._v("The configuration content required in "),a("code",[t._v("venus-sector-manager")]),t._v(" is mainly to enable "),a("code",[t._v("SnapUp")]),t._v(" for the specified "),a("code",[t._v("SP")]),t._v(", the example is as follows:")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Miners")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Actor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1153")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Miners.Sector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("InitNumber")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxNumber")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Enabled")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("EnableDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Miners.SnapUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Enabled")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Sender")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t1abjxfbp274xpdqcpuaykwkfb43omjotacm2p3za"')]),t._v("\n")])])]),a("p",[t._v("in")]),t._v(" "),a("ul",[a("li",[t._v("The configuration content in the "),a("code",[t._v("[Miners.Sector]")]),t._v(" block does not affect the operation of "),a("code",[t._v("SnapUp")]),t._v(".")]),t._v(" "),a("li",[t._v("Under this configuration, it will be possible to support:\n"),a("ul",[a("li",[a("code",[t._v("CC Sector")]),t._v(" continuous production")]),t._v(" "),a("li",[a("code",[t._v("SnapUp")]),t._v(" keeps producing if the local candidate sector has slack")])])])]),t._v(" "),a("h3",{attrs:{id:"precautions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#precautions"}},[t._v("#")]),t._v(" Precautions:")]),t._v(" "),a("ol",[a("li",[t._v("Considering the computing resources required by "),a("code",[t._v("snap_encode")]),t._v(" and "),a("code",[t._v("snap_prove")]),t._v(", if you enable both regular sector encapsulation and "),a("code",[t._v("SnapUp")]),t._v(" in the same "),a("code",[t._v("venus-worker")]),t._v(" instance, you may need to consider the resource competition situation, you can refer to "),a("a",{attrs:{href:"https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/07.venus-worker%E5%A4%96%E9%83%A8%E6%89%A7%E8%A1%8C%E5%99%A8%E7%9A%84%E9%85%8D%E7%BD%AE%E8%8C%83%E4%BE%8B.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("07.Example configuration of venus-worker external actuator"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Considering the distribution of persistent data in sectors, the "),a("code",[t._v("venus-worker")]),t._v(" used for "),a("code",[t._v("SnapUp")]),t._v(" needs to be able to access all persistent storage spaces ("),a("code",[t._v("persist store")]),t._v(") in a readable and writable manner at the same time, and ensure that they The naming is the same as in "),a("code",[t._v("venus-sector-manager")]),t._v(".")]),t._v(" "),a("li",[t._v("Based on the above two points, we recommend using a separate device for the production of "),a("code",[t._v("SnapUp")]),t._v(", so as to avoid the complexity of configuration and operation and maintenance caused by the mixed distribution of regular sectors and "),a("code",[t._v("SnapUp")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"continuous-optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#continuous-optimization"}},[t._v("#")]),t._v(" Continuous optimization")]),t._v(" "),a("p",[t._v("The improvement and optimization of the "),a("code",[t._v("SnapUp")]),t._v(" program is still in progress. At present, we mainly focus on:")]),t._v(" "),a("ul",[a("li",[t._v("Convert semi-automatic candidate sector import to automatic mode, or provide equivalent operation and maintenance tools")]),t._v(" "),a("li",[t._v("More candidate sector import rules, such as import by storage configuration")]),t._v(" "),a("li",[t._v("Aggregation of on-chain messages to reduce costs")]),t._v(" "),a("li",[t._v("Other optimizations and tools that simplify operations, reduce costs, and increase efficiency")])])])}),[],!1,null,null,null);e.default=n.exports}}]);