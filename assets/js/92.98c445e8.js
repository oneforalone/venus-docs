(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{469:function(e,s,n){"use strict";n.r(s);var a=n(17),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"venus-worker-的配置解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#venus-worker-的配置解析"}},[e._v("#")]),e._v(" venus-worker 的配置解析")]),e._v(" "),n("p",[e._v("venus-worker 是数据封装的执行主体，我们来了解一下它的配置文件结构和配置方式。")]),e._v(" "),n("p",[n("code",[e._v("venus-worker")]),e._v(" 的配置文件采用了 "),n("code",[e._v("toml")]),e._v(" 格式，需要注意的是，这种格式中，以 "),n("code",[e._v("#")]),e._v(" 开头的行将被视为注释，不会生效。")]),e._v(" "),n("p",[e._v("以 mock 实例为例，一份基础的配置大概会是这样：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[worker]\n# name = "worker-#1"\n# rpc_server.host = "192.168.1.100"\n# rpc_server.port = 17891\n\n[sector_manager]\nrpc_client.addr = "/ip4/127.0.0.1/tcp/1789"\n# rpc_client.headers = { User-Agent = "jsonrpc-core-client" }\n# piece_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMS0xMjUiLCJwZXJtIjoic2lnbiIsImV4dCI6IiJ9.JenwgK0JZcxFDin3cyhBUN41VXNvYw-_0UUT2ZOohM0"\n\n[sealing]\n# allowed_miners = [10123, 10124, 10125]\n# allowed_sizes = ["32GiB", "64GiB"]\nenable_deals = true\n# max_deals = 3\nmax_retries = 3\n# seal_interval = "30s"\n# recover_interval = "60s"\n# rpc_polling_interval = "180s"\n# ignore_proof_check = false\n\n[[sealing_thread]]\nlocation = "./mock-tmp/store1"\n# plan = "snapup"\n# sealing.allowed_miners = [10123, 10124, 10125]\n# sealing.allowed_sizes = ["32GiB", "64GiB"]\n# sealing.enable_deals = true\n# sealing.max_deals = 3\n# sealing.max_retries = 3\n# sealing.seal_interval = "30s"\n# sealing.recover_interval = "60s"\n# sealing.rpc_polling_interval = "180s"\n# sealing.ignore_proof_check = false\n\n[[sealing_thread]]\nlocation = "./mock-tmp/store2"\n\n[[sealing_thread]]\nlocation = "./mock-tmp/store3"\n\n# deprecated\n# [remote_store]\n# name = "persist-store1"\n# location = "./mock-tmp/remote"\n\n[[attached]]\n# name = "persist-store1"\nlocation = "./mock-tmp/remote"\n\n[attached_selection]\n# enable_space_weighted = false\n\n[processors.limit]\n# pc1 = 3\n# pc2 = 2\n# c2 = 1\n\n[processors.ext_locks]\n# gpu1 = 1\n\n[processors.static_tree_d]\n# 2KiB = "./tmp/2k/sc-02-data-tree-d.dat"\n\n# fields for tree_d processor\n[[processors.tree_d]]\n\n# fields for pc1 processors\n[[processors.pc1]]\n# bin = "./dist/bin/venus-worker-plugin-pc1"\n# args = ["--args-1", "1", --"args-2", "2"]\nnuma_preferred = 0\ncgroup.cpuset = "4-5"\nenvs = { RUST_LOG = "info" }\n\n[[processors.pc1]]\nnuma_preferred = 0\ncgroup.cpuset = "6-7"\n\n[[processors.pc1]]\nnuma_preferred = 1\ncgroup.cpuset = "12-13"\n\n# fields for pc2 processors\n[[processors.pc2]]\n# cgroup.cpuset = "24-27"\n\n[[processors.pc2]]\ncgroup.cpuset = "28-31"\n\n\n# fields for c2 processor\n[[processors.c2]]\ncgroup.cpuset = "32-47"\n')])])]),n("p",[e._v("下面我们将逐一分析其中的可配置项。")]),e._v(" "),n("h2",{attrs:{id:"worker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#worker"}},[e._v("#")]),e._v(" [worker]")]),e._v(" "),n("p",[n("code",[e._v("worker")]),e._v(" 配置项用于配置本实例的一些基础信息。")]),e._v(" "),n("h3",{attrs:{id:"基础配置范例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础配置范例"}},[e._v("#")]),e._v(" 基础配置范例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[worker]\n# 实例名，选填项，字符串类型\n# 默认以连接 `venus-sector-manager` 所使用的网卡 IP 地址作为实例名\n# name = "worker-#1"\n\n# rpc 服务监听地址，选填项，字符串类型\n# 默认为 "0.0.0.0"，即监听本机所有地址\n# rpc_server.host = "192.168.1.100"\n\n# rpc 服务监听端口，选填项，数字类型\n# 默认为 17890\n# rpc_server.port = 17891\n')])])]),n("p",[e._v("绝大多数情况下，本配置项内的各个字段无需手工配置。")]),e._v(" "),n("p",[e._v("仅在一些特殊情况，诸如：")]),e._v(" "),n("ul",[n("li",[e._v("希望按照自己的编排习惯命名每个 "),n("code",[e._v("venus-worker")]),e._v(" 实例")]),e._v(" "),n("li",[e._v("不希望监听所有网卡IP，仅允许本地的 rpc 请求")]),e._v(" "),n("li",[e._v("一台机器上部署了多个 "),n("code",[e._v("venus-worker")]),e._v("，为避免端口冲突，需要进行区分")])]),e._v(" "),n("p",[e._v("等场景，需要按需手动配置这里的选项。")]),e._v(" "),n("h2",{attrs:{id:"sector-manager"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sector-manager"}},[e._v("#")]),e._v(" [sector_manager]")]),e._v(" "),n("p",[n("code",[e._v("sector_manager")]),e._v(" 用于配置 "),n("code",[e._v("venus-sector-manager")]),e._v(" 相关的信息，以使得 "),n("code",[e._v("venus-worker")]),e._v(" 可以正确的连接到对应的服务。")]),e._v(" "),n("h3",{attrs:{id:"基础配置范例-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础配置范例-2"}},[e._v("#")]),e._v(" 基础配置范例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[sector_manager]\n# 构造 rpc 客户端时使用的连接地址，必填项，字符串类型\n# 可以接受 `multiaddr` 格式，也可以接受诸如 `http://127.0.0.1:1789`，`ws://127.0.0.1:1789` 这样的 url 格式\n# 通常情况下，使用 `multiaddr` 格式以和其他组件保持一致\nrpc_client.addr = "/ip4/127.0.0.1/tcp/1789"\n\n# 构造 rpc 客户端时使用的 http 头信息，选填项，字典类型\n# 默认为 null\n# rpc_client.headers = { User-Agent = "jsonrpc-core-client" }\n\n# 请求订单 piece 数据时携带的校验 token， 选填项，字符串类型\n# 默认为 null\n# 当本实例允许封装带有订单数据的扇区时，通常需要设置此项\n# 此项的值通常即为所使用的 venus 系列服务的 token 值\n# piece_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMS0xMjUiLCJwZXJtIjoic2lnbiIsImV4dCI6IiJ9.JenwgK0JZcxFDin3cyhBUN41VXNvYw-_0UUT2ZOohM0"\n')])])]),n("h2",{attrs:{id:"sealing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sealing"}},[e._v("#")]),e._v(" [sealing]")]),e._v(" "),n("p",[n("code",[e._v("sealing")]),e._v(" 用于配置封装过程中的通用参数选项。")]),e._v(" "),n("h3",{attrs:{id:"基础配置范例-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础配置范例-3"}},[e._v("#")]),e._v(" 基础配置范例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[sealing]\n# 允许的`SP`，选填项，数字数组格式\n# 默认为 null，允许来自任何 `SP` 的任务\n# 配置后，仅可执行来自数组中罗列的 `SP` 的封装任务\n# allowed_miners = [10123, 10124, 10125]\n\n# 允许的扇区大小，选填项，字符串数组格式\n# 默认为 null， 允许任意大小的扇区任务\n# 配置后，仅可执行符合数组中罗列的扇区大小的任务\n# allowed_sizes = ["32GiB", "64GiB"]\n\n# 是否允许向扇区内添加订单，选填项，布尔类型\n# 默认为 false\n# 当设置为 true 时，通常需要同时设置 `sector_manager` 中的 `piece_token` 项\n# enable_deals = true\n\n# 允许向扇区内添加的最大订单数量，选填项，数字类型\n# 默认为 null\n# max_deals = 3\n\n# 封装过程中遇到 temp 类型的错误时，重试的次数，选填项，数字格式\n# 默认为 5\n# max_retries = 3\n\n# 封装过程中遇到 temp 类型的错误时，重试的间隔，选填项，时间字符串格式\n# 默认为 "30s"， 即30秒\n# recover_interval = "30s"\n\n# 空闲的 `sealing_store` 申请封装任务的间隔， 选填项，时间字符串格式\n# 默认为 "30s"， 即30秒\n# seal_interval = "30s"\n\n# rpc 状态轮询请求的间隔，选填项，时间字符串格式\n# 默认为 "180s"， 即180秒\n# 封装过程中，部分环节使用了轮询方式来获取非实时的信息，如消息上链等。\n# 这个值有助于避免过于频繁的请求占用网络资源\n# rpc_polling_interval = "180s"\n\n# 是否跳过 proof 的本地校验环节，选填项，布尔格式\n# 默认为 false\n# 通常只在诸如测试之类的情况下设置此项\n# ignore_proof_check = false\n')])])]),n("p",[n("code",[e._v("sealing")]),e._v(" 中的配置项通常有根据经验预设的默认项，这使得我们在绝大多数情况下无需自行配置。")]),e._v(" "),n("h3",{attrs:{id:"特殊配置范例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特殊配置范例"}},[e._v("#")]),e._v(" 特殊配置范例")]),e._v(" "),n("h4",{attrs:{id:"_1-测试网络-仅为特定-sp-提供服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-测试网络-仅为特定-sp-提供服务"}},[e._v("#")]),e._v(" 1. 测试网络，仅为特定 "),n("code",[e._v("SP")]),e._v("  提供服务")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("allowed_miners = [2234, 2236, 2238]\n")])])]),n("h4",{attrs:{id:"_2-大规模集群-降低网络占用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-大规模集群-降低网络占用"}},[e._v("#")]),e._v(" 2. 大规模集群，降低网络占用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# 在可恢复的异常中，有相当一部分是网络抖动带来的，增大自动恢复的间隔时间降低请求频率\nrecover_interval = "90s"\n\n# 正常过程中的轮询请求也增大间隔时间降低请求频率\nrpc_polling_interval = "300s"\n')])])]),n("h4",{attrs:{id:"_3-增大扇区异常自愈的可能性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-增大扇区异常自愈的可能性"}},[e._v("#")]),e._v(" 3. 增大扇区异常自愈的可能性")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# 增大自动恢复的尝试次数\nmax_retries = 10\n\n# 增大自动恢复的间隔时间\nrecover_interval = "60s"\n')])])]),n("h2",{attrs:{id:"sealing-thread"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sealing-thread"}},[e._v("#")]),e._v(" [[sealing_thread]]")]),e._v(" "),n("p",[n("code",[e._v("sealing_thread")]),e._v(" 用于为每个扇区工作线程进行配置。一份配置文件中可以存在多个 "),n("code",[e._v("sealing_thread")]),e._v(" 配置组。")]),e._v(" "),n("h3",{attrs:{id:"基础配置范例-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础配置范例-4"}},[e._v("#")]),e._v(" 基础配置范例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[[sealing_thread]]\n# 扇区数据目录路径，必填项，字符串类型\n# 建议使用绝对路径，数据目录和工作线程是一对一绑定的\nlocation = "/mnt/nvme1/store"\n\n# 任务类型，选填项，字符串类型\n# 默认值为 null\n# 可选填 sealer 或 snapup, 当不填写时，默认等效为 selaer\n# plan = "snapup"\n\n# 封装过程的定制参数，仅对当前工作线程生效\n# sealing.allowed_miners = [10123, 10124, 10125]\n# sealing.allowed_sizes = ["32GiB", "64GiB"]\n# sealing.enable_deals = true\n# sealing.max_retries = 3\n# sealing.seal_interval = "30s"\n# sealing.recover_interval = "60s"\n# sealing.rpc_polling_interval = "180s"\n# sealing.ignore_proof_check = false\n\n[[sealing_thread]]\nlocation = "/mnt/nvme2/store"\n\n\n[[sealing_thread]]\nlocation = "/mnt/nvme3/store"\n\n')])])]),n("p",[n("code",[e._v("sealing_thread")]),e._v(" 的数量和对应的数据路径需要根据规划情况编排。")]),e._v(" "),n("p",[e._v("为了方便组合搭配，每个 "),n("code",[e._v("sealing_thread")]),e._v(" 可以配置独立的 "),n("code",[e._v("sealing")]),e._v(" 子项，它满足：")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("可配置项的命名、类型、效果与通用的 "),n("code",[e._v("sealing")]),e._v(" 项保持一致")])]),e._v(" "),n("li",[n("p",[e._v("仅对当前工作线程生效")])]),e._v(" "),n("li",[n("p",[e._v("未配置时使用通用的 "),n("code",[e._v("sealing")]),e._v(" 项内的值")])])]),e._v(" "),n("h3",{attrs:{id:"特殊配置范例-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特殊配置范例-2"}},[e._v("#")]),e._v(" 特殊配置范例")]),e._v(" "),n("h4",{attrs:{id:"_1-两个工作线程-分别为不同的-sp-服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-两个工作线程-分别为不同的-sp-服务"}},[e._v("#")]),e._v(" 1. 两个工作线程，分别为不同的 "),n("code",[e._v("SP")]),e._v(" 服务")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[[sealing_thread]]\nlocation = "/mnt/nvme2/store"\nsealing.allowed_miners = [1357]\n\n\n[[sealing_thread]]\nlocation = "/mnt/nvme3/store"\nsealing.allowed_miners = [2468]\n')])])]),n("h4",{attrs:{id:"_2-两个工作线程-分别为不同的扇区大小服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-两个工作线程-分别为不同的扇区大小服务"}},[e._v("#")]),e._v(" 2. 两个工作线程，分别为不同的扇区大小服务")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[[sealing_thread]]\nlocation = "/mnt/nvme2/store"\nsealing.allowed_sizes = ["32GiB"]\n\n\n[[sealing_thread]]\nlocation = "/mnt/nvme3/store"\nsealing.allowed_sizes = ["64GiB"]\n')])])]),n("h2",{attrs:{id:"remote-store-已废弃"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remote-store-已废弃"}},[e._v("#")]),e._v(" [remote_store] 已废弃")]),e._v(" "),n("p",[n("code",[e._v("remote_store")]),e._v(" 用于配置已完成的扇区持久化数据保存的位置。")]),e._v(" "),n("h3",{attrs:{id:"基础配置范例-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础配置范例-5"}},[e._v("#")]),e._v(" 基础配置范例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[remote_store]\n# 名称， 选填项，字符串类型\n# 默认为路径对应的绝对路径\n# name = "remote-store1"\n\n# 路径，必填项，字符串类型\n# 建议直接填写绝对路径\nlocation = "/mnt/remote/10.0.0.14/store"\n\n')])])]),n("p",[e._v("由于需要在 "),n("code",[e._v("venus-worker")]),e._v(" 和 "),n("code",[e._v("venus-sector-manager")]),e._v(" 之间协调存储位置信息，而在很多情况下，同一个持久化存储目录在"),n("code",[e._v("venus-worker")]),e._v(" 机器和 "),n("code",[e._v("venus-sector-manager")]),e._v(" 机器上的挂载路径不完全一致，因此我们决定使用 "),n("code",[e._v("name")]),e._v(" 作为协调的基础信息.")]),e._v(" "),n("p",[e._v("如果持久化存储目录在所有机器上的挂载路径都统一的话，配置时也可以选择在 "),n("code",[e._v("venus-worker")]),e._v(" 和"),n("code",[e._v("venus-sector-manager")]),e._v(" 两侧都不配置 "),n("code",[e._v("name")]),e._v("。这种情况下，两者都会使用绝对路径作为 "),n("code",[e._v("name")]),e._v("，也能匹配。")]),e._v(" "),n("h2",{attrs:{id:"attached-selection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attached-selection"}},[e._v("#")]),e._v(" [attached_selection]")]),e._v(" "),n("p",[n("code",[e._v("attached_selection")]),e._v(" 用于配置选择已完成的扇区持久化数据保存的位置")]),e._v(" "),n("h3",{attrs:{id:"基础配置范例-6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础配置范例-6"}},[e._v("#")]),e._v(" 基础配置范例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[attached_selection]\n# 是否启用以剩余空间作为权重的选择策略，选填项，布尔类型\n# 默认值为 false\n# enable_space_weighted = false\n\n")])])]),n("h2",{attrs:{id:"attached"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attached"}},[e._v("#")]),e._v(" [[attached]]")]),e._v(" "),n("p",[n("code",[e._v("attached")]),e._v(" 用于配置已完成的扇区持久化数据保存的位置，允许同时配置多个。")]),e._v(" "),n("h3",{attrs:{id:"基础配置范例-7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础配置范例-7"}},[e._v("#")]),e._v(" 基础配置范例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[attached]\n# 名称， 选填项，字符串类型\n# 默认为路径对应的绝对路径\n# name = "remote-store1"\n\n# 路径，必填项，字符串类型\n# 建议直接填写绝对路径\nlocation = "/mnt/remote/10.0.0.14/store"\n\n# 只读，选填项，布尔类型\n# 默认值为 false\n# readonly = true\n\n')])])]),n("p",[e._v("由于需要在 "),n("code",[e._v("venus-worker")]),e._v(" 和 "),n("code",[e._v("venus-sector-manager")]),e._v(" 之间协调存储位置信息，而在很多情况下，同一个持久化存储目录在"),n("code",[e._v("venus-worker")]),e._v(" 机器和 "),n("code",[e._v("venus-sector-manager")]),e._v(" 机器上的挂载路径不完全一致，因此我们决定使用 "),n("code",[e._v("name")]),e._v(" 作为协调的基础信息.")]),e._v(" "),n("p",[e._v("如果持久化存储目录在所有机器上的挂载路径都统一的话，配置时也可以选择在 "),n("code",[e._v("venus-worker")]),e._v(" 和"),n("code",[e._v("venus-sector-manager")]),e._v(" 两侧都不配置 "),n("code",[e._v("name")]),e._v("。这种情况下，两者都会使用绝对路径作为 "),n("code",[e._v("name")]),e._v("，也能匹配。")]),e._v(" "),n("h2",{attrs:{id:"processors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#processors"}},[e._v("#")]),e._v(" [processors]")]),e._v(" "),n("p",[n("code",[e._v("processors")]),e._v(" 用于配置封装执行器，和封装计算过程中的一些信息。")]),e._v(" "),n("p",[e._v("这个配置项实际上分为三个子项，我们逐一分析。")]),e._v(" "),n("h3",{attrs:{id:"processors-limit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#processors-limit"}},[e._v("#")]),e._v(" [processors.limit]")]),e._v(" "),n("p",[n("code",[e._v("processors.limit")]),e._v(" 用于配置不同封装阶段的并行任务数量控制。这是为了降低不同阶段的资源相互争抢的情况。")]),e._v(" "),n("p",[e._v("需要注意的是，当配置了外部执行器时，外部执行器的数量和允许的并发总量也会影响并行任务数量。")]),e._v(" "),n("h4",{attrs:{id:"基础配置范例-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础配置范例-8"}},[e._v("#")]),e._v(" 基础配置范例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[processors.limit]\n# tree_d 阶段的并发数限制，选填项，数字类型\n# tree_d = 1\n\n# pc1 阶段的并发数限制，选填项，数字类型\n# pc1 = 3\n\n# pc2 阶段的并发数限制，选填项，数字类型\n# pc2 = 2\n\n# c2 阶段的并发数限制，选填项，数字类型\n# c2 = 1\n")])])]),n("p",[e._v("举例来说，如果设置了 "),n("code",[e._v("pc2 = 2")]),e._v("，那么同一时间最多只会有两个扇区可以执行 "),n("code",[e._v("pc2")]),e._v(" 阶段的任务。")]),e._v(" "),n("h3",{attrs:{id:"processors-ext-locks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#processors-ext-locks"}},[e._v("#")]),e._v(" [processors.ext_locks]")]),e._v(" "),n("p",[n("code",[e._v("processors.ext_locks")]),e._v(" 用于配置一些自定义的锁限制, 它是和 "),n("code",[e._v("[[processors.{stage_name}]]")]),e._v(" 中的 "),n("code",[e._v("locks")]),e._v(" 配置项联动使用的。\n这个配置项允许使用者自定一些限制条件，并令不同的外部处理器受其约束。")]),e._v(" "),n("h4",{attrs:{id:"基础配置范例-9"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础配置范例-9"}},[e._v("#")]),e._v(" 基础配置范例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[processors.ext_locks]\n# some_name = some_number\n")])])]),n("h4",{attrs:{id:"特殊配置范例-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特殊配置范例-3"}},[e._v("#")]),e._v(" 特殊配置范例")]),e._v(" "),n("p",[n("code",[e._v("processors.ext_locks")]),e._v(" 自身是不能独立生效的。")]),e._v(" "),n("h5",{attrs:{id:"一块-gpu-pc2-和-c2-公用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一块-gpu-pc2-和-c2-公用"}},[e._v("#")]),e._v(" 一块 GPU， pc2 和 c2 公用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[processors.ext_locks]\ngpu = 1\n\n[[processors.pc2]]\nlocks = ["gpu"]\n\n[[processors.c2]]\nlocks = ["gpu"]\n')])])]),n("p",[e._v("这样，"),n("code",[e._v("pc2")]),e._v(" "),n("code",[e._v("c2")]),e._v(" 会各启动一个外部处理器，两者将会产生竞争关系，也就意味着两者将不会同时发生。")]),e._v(" "),n("h5",{attrs:{id:"两块-gpu-pc2-和-c2-公用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#两块-gpu-pc2-和-c2-公用"}},[e._v("#")]),e._v(" 两块 GPU， pc2 和 c2 公用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[processors.ext_locks]\ngpu1 = 1\ngpu2 = 1\n\n[[processors.pc2]]\nlocks = ["gpu1"]\n\n[[processors.pc2]]\nlocks = ["gpu2"]\n\n[[processors.c2]]\nlocks = ["gpu1"]\n\n[[processors.c2]]\nlocks = ["gpu2"]\n')])])]),n("p",[e._v("这样，"),n("code",[e._v("pc2")]),e._v(" "),n("code",[e._v("c2")]),e._v(" 会各启动两个外部处理器，将会产生两两竞争的关系，从而允许限制一块 GPU 上只能执行其中一个阶段的任务。")]),e._v(" "),n("h3",{attrs:{id:"processors-static-tree-d"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#processors-static-tree-d"}},[e._v("#")]),e._v(" [processors.static_tree_d]")]),e._v(" "),n("p",[n("code",[e._v("processors.static_tree_d")]),e._v(" 是为了提升 "),n("code",[e._v("cc 扇区")]),e._v(" 的效率而引入的配置项。")]),e._v(" "),n("p",[e._v("当为相应扇区大小配置了静态文件路径时，将会直接使用此文件作为 "),n("code",[e._v("cc 扇区")]),e._v(" 的 tree_d 文件，而不会尝试再次生成。")]),e._v(" "),n("h4",{attrs:{id:"基础配置范例-10"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础配置范例-10"}},[e._v("#")]),e._v(" 基础配置范例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[processors.static_tree_d]\n2KiB = "/var/tmp/2k/sc-02-data-tree-d.dat"\n32GiB = "/var/tmp/32g/sc-02-data-tree-d.dat"\n64GiB = "/var/tmp/64g/sc-02-data-tree-d.dat"\n\n')])])]),n("h3",{attrs:{id:"processors-stage-name"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#processors-stage-name"}},[e._v("#")]),e._v(" [[processors.{stage_name}]]")]),e._v(" "),n("p",[e._v("这是用于配置外部执行器的配置组。")]),e._v(" "),n("p",[e._v("目前 "),n("code",[e._v("{stage_name}")]),e._v(" 可选")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("tree_d")])]),e._v(" "),n("li",[n("code",[e._v("pc1")])]),e._v(" "),n("li",[n("code",[e._v("pc2")])]),e._v(" "),n("li",[n("code",[e._v("c2")])])]),e._v(" "),n("p",[e._v("每一个这样的配置组意味着将启动一个对应阶段的外部执行器，可选的配置项包含：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[[processors.pc1]]\n# 自定义外部执行器可执行文件路径，选填项，字符串类型\n# 默认会使用主进程对应的可执行文件路径\n# bin = "./dist/bin/venus-worker-plugin-pc1"\n\n# 自定义外部执行器的参数，选填项，字符串数组类型\n# 默认值为 null，将使用 `venus-worker` 自己的执行器默认参数\n# args = ["--args-1", "1", --"args-2", "2"]\n\n# numa 亲和性分区 id，选填项，数字类型\n# 默认值为 null，不会设置亲和性\n# 需要根据宿主机的 numa 分区进行填写\n# numa_preferred = 0\n\n# cpu 核绑定和限制选项，选填项，字符串类型\n# 默认值为 null，不设置绑定\n# 值的格式遵循标准 cgroup.cpuset 格式\n# cgroup.cpuset = "4-5"\n\n# 外部执行器的附加环境变量，选填项，字典类型\n# 默认值为 null\n# envs = { RUST_LOG = "info" }\n\n# 本执行器允许的并发任务数量上限\n# 默认值为 null，无限制，但任务具体是否并发执行，视使用的外部执行器实现而定\n# 主要使用在 pc1 这样可以多个并行的环节，可以有效节约共享内存、线程池等资源\n# concurrent = 4\n\n# 自定义的外部限制锁名称，选填项，字符串数组类型\n# 默认值为 null\n# locks = ["gpu1"]\n')])])]),n("h4",{attrs:{id:"基础配置范例-11"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础配置范例-11"}},[e._v("#")]),e._v(" 基础配置范例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[processors.limit]\npc1 = 4\npc2 = 2\nc2 = 1\n\n[[processors.pc1]]\nnuma_preferred = 0\ncgroup.cpuset = "0-7"\nconcurrent = 2\nenvs = { FIL_PROOFS_USE_MULTICORE_SDR = "1" }\n\n[[processors.pc1]]\nnuma_preferred = 1\ncgroup.cpuset = "12-19"\nconcurrent = 2\nenvs = { FIL_PROOFS_USE_MULTICORE_SDR = "1" }\n\n[[processors.pc2]]\ncgroup.cpuset = "8-11,24-27"\nenvs = { FIL_PROOFS_USE_GPU_COLUMN_BUILDER = "1", FIL_PROOFS_USE_GPU_TREE_BUILDER = "1", CUDA_VISIBLE_DEVICES = "0" }\n\n[[processors.pc2]]\ncgroup.cpuset = "20-23,36-39"\nenvs = { FIL_PROOFS_USE_GPU_COLUMN_BUILDER = "1", FIL_PROOFS_USE_GPU_TREE_BUILDER = "1", CUDA_VISIBLE_DEVICES = "1" }\n\n\n[[processors.c2]]\ncgroup.cpuset = "28-35"\nenvs = { CUDA_VISIBLE_DEVICES = "2,3" }\n\n\n[[processors.tree_d]]\ncgroup.cpuset = "40-45"\n')])])]),n("p",[e._v("以上是基于一台 48C + 4GPU 的设备的 "),n("code",[e._v("processors.{stage_name}")]),e._v("  配置范例，在这套配置下，将启动：")]),e._v(" "),n("ul",[n("li",[e._v("2个 "),n("code",[e._v("pc1")]),e._v(" 外部执行器，采用 "),n("code",[e._v("MULTICORE_SDR")]),e._v(" 模式，各分配 8 核，允许 2 个并发任务，且内存分配优先使用本 numa 分区")]),e._v(" "),n("li",[e._v("2个 "),n("code",[e._v("pc2")]),e._v(" 外部执行器，各分配 8 核，各使用一块 GPU")]),e._v(" "),n("li",[e._v("1个 "),n("code",[e._v("c2")]),e._v(" 外部执行器，分配 8 核， 使用一块 GPU")]),e._v(" "),n("li",[e._v("1 个 "),n("code",[e._v("tree_d")]),e._v(" 外部执行器，分配 6 核")])]),e._v(" "),n("h4",{attrs:{id:"特殊配置范例-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特殊配置范例-4"}},[e._v("#")]),e._v(" 特殊配置范例")]),e._v(" "),n("h5",{attrs:{id:"_1-使用-patch-了闭源的、经过算法优化的-c2-外部执行器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-patch-了闭源的、经过算法优化的-c2-外部执行器"}},[e._v("#")]),e._v(" 1. 使用 patch 了闭源的、经过算法优化的 c2 外部执行器")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[[processors.c2]]\nbin = /usr/local/bin/venus-worker-c2-optimized\ncgroup.cpuset = "40-47"\nenvs = { CUDA_VISIBLE_DEVICES = "2,3" }\n')])])]),n("h5",{attrs:{id:"_2-使用外包模式的-c2-外部执行器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用外包模式的-c2-外部执行器"}},[e._v("#")]),e._v(" 2. 使用外包模式的 c2 外部执行器")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[[processors.c2]]\nbin = /usr/local/bin/venus-worker-c2-outsource\nargs = ["--url", "/ip4/apis.filecoin.io/tcp/10086/https", "--timeout", "10s"]\nenvs = { LICENCE_PATH = "/var/tmp/c2.licence.dev" }\n')])])]),n("h5",{attrs:{id:"_3-gpu-不足的情况下使用-cpu-模式弥补-pc2-计算能力"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-gpu-不足的情况下使用-cpu-模式弥补-pc2-计算能力"}},[e._v("#")]),e._v(" 3. GPU 不足的情况下使用 CPU 模式弥补 pc2 计算能力")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[[processors.pc2]]\ncgroup.cpuset = "8-11,24-27"\nenvs = { FIL_PROOFS_USE_GPU_COLUMN_BUILDER = "1", FIL_PROOFS_USE_GPU_TREE_BUILDER = "1", CUDA_VISIBLE_DEVICES = "0" }\n\n[[processors.pc2]]\ncgroup.cpuset = "20-23,36-45"\n')])])]),n("h4",{attrs:{id:"_4-最优配比下-pc1-总量为奇数-无法平分"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-最优配比下-pc1-总量为奇数-无法平分"}},[e._v("#")]),e._v(" 4. 最优配比下，pc1 总量为奇数，无法平分")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[processors.limit]\npc1 = 29\npc2 = 2\nc2 = 1\n\n[[processors.pc1]]\nnuma_preferred = 0\ncgroup.cpuset = "0-41"\nconcurrent = 14\nenvs = { FIL_PROOFS_USE_MULTICORE_SDR = "1" }\n\n[[processors.pc1]]\nnuma_preferred = 1\ncgroup.cpuset = "48-92"\nconcurrent = 15\nenvs = { FIL_PROOFS_USE_MULTICORE_SDR = "1" }\n\n')])])]),n("h4",{attrs:{id:"_5-希望优先集中使用-numa-0-区完成-pc1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-希望优先集中使用-numa-0-区完成-pc1"}},[e._v("#")]),e._v(" 5. 希望优先集中使用 numa 0 区完成 pc1")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[processors.limit]\npc1 = 29\npc2 = 2\nc2 = 1\n\n[[processors.pc1]]\nnuma_preferred = 0\ncgroup.cpuset = "0-47"\nconcurrent = 16\nenvs = { FIL_PROOFS_USE_MULTICORE_SDR = "1" }\n\n[[processors.pc1]]\nnuma_preferred = 1\ncgroup.cpuset = "48-86"\nconcurrent = 13\nenvs = { FIL_PROOFS_USE_MULTICORE_SDR = "1" }\n\n')])])]),n("h2",{attrs:{id:"一份最简可工作的配置文件范例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一份最简可工作的配置文件范例"}},[e._v("#")]),e._v(" 一份最简可工作的配置文件范例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[sector_manager]\nrpc_client.addr = "/ip4/{some_ip}/tcp/1789"\n\n# 根据实际资源规划\n[[sealing_thread]]\nlocation = "{path to sealing store1}"\n\n[[sealing_thread]]\nlocation = "{path to sealing store2}"\n\n[[sealing_thread]]\nlocation = "{path to sealing store3}"\n\n[[sealing_thread]]\nlocation = "{path to sealing store4}"\n\n[[sealing_thread]]\nlocation = "{path to sealing store5}"\n\n[[sealing_thread]]\nlocation = "{path to sealing store6}"\n\n[[sealing_thread]]\nlocation = "{path to sealing store7}"\n\n[[sealing_thread]]\nlocation = "{path to sealing store8}"\n\n\n[remote_store]\nname = "{remote store name}"\nlocation = "{path to remote store}"\n\n[processors.static_tree_d]\n32GiB = "{path to static tree_d for 32GiB}"\n64GiB = "{path to static tree_d for 64GiB}"\n\n# 根据实际资源规划\n[processors.limit]\npc1 = 4\npc2 = 2\nc2 = 1\n\n[[processors.pc1]]\nnuma_preferred = 0\ncgroup.cpuset = "0-7"\nconcurrent = 2\nenvs = { FIL_PROOFS_USE_MULTICORE_SDR = "1" }\n\n[[processors.pc1]]\nnuma_preferred = 1\ncgroup.cpuset = "12-19"\nconcurrent = 2\nenvs = { FIL_PROOFS_USE_MULTICORE_SDR = "1" }\n\n\n[[processors.pc2]]\ncgroup.cpuset = "8-11,24-27"\nenvs = { FIL_PROOFS_USE_GPU_COLUMN_BUILDER = "1", FIL_PROOFS_USE_GPU_TREE_BUILDER = "1", CUDA_VISIBLE_DEVICES = "0" }\n\n[[processors.pc2]]\ncgroup.cpuset = "20-23,36-39"\nenvs = { FIL_PROOFS_USE_GPU_COLUMN_BUILDER = "1", FIL_PROOFS_USE_GPU_TREE_BUILDER = "1", CUDA_VISIBLE_DEVICES = "1" }\n\n\n[[processors.c2]]\ncgroup.cpuset = "28-35"\nenvs = { CUDA_VISIBLE_DEVICES = "2,3" }\n\n\n[[processors.tree_d]]\ncgroup.cpuset = "40-45"\n')])])]),n("p",[e._v("在按实际情况进行规划并填写相应信息后，以上就是一份:")]),e._v(" "),n("ul",[n("li",[e._v("只进行 "),n("code",[e._v("cc 扇区")])]),e._v(" "),n("li",[e._v("32GiB 和 64GiB 扇区免 tree_d")]),e._v(" "),n("li",[e._v("一体化资源分配")])]),e._v(" "),n("p",[e._v("的最简配置文件了。")])])}),[],!1,null,null,null);s.default=r.exports}}]);