(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{439:function(e,s,t){"use strict";t.r(s);var a=t(17),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"find-your-optimal-configurations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#find-your-optimal-configurations"}},[e._v("#")]),e._v(" Find your optimal configurations")]),e._v(" "),t("p",[e._v("Get your filecoin mining operation up and running is hard. Expanding growth of your system is even harder. It will take a lot of time to scale growth and make sure your setup running without errors.")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("General guidelines to follow when optimizing your sealing pipeline.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Pledge 2 to 4 sectors and record the exact time of each task (AP, P1, P2, C2) takes to finish")])]),e._v(" "),t("li",[t("p",[e._v("Make sure all your boxes have tasks assigned to them all the time")])]),e._v(" "),t("li",[t("p",[e._v("Automate your "),t("code",[e._v("sector pledge")]),e._v(" command with "),t("a",{attrs:{href:"https://filecoinproject.slack.com/archives/CPFTWMY7N/p1628092388117700?thread_ts=1628092099.117600&cid=CPFTWMY7N",target:"_blank",rel:"noopener noreferrer"}},[e._v("script"),t("OutboundLink")],1),e._v("/cron")])]),e._v(" "),t("li",[t("p",[e._v("Use "),t("code",[e._v("MaxSealingSectors")]),e._v(" to cap maximum number of sectors sealing in parallel")])]),e._v(" "),t("li",[t("p",[e._v("Every worker can be assigned with a subset of tasks (AP, P1, P2, C2) to specialize")])])]),e._v(" "),t("h2",{attrs:{id:"record-time-for-each-task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#record-time-for-each-task"}},[e._v("#")]),e._v(" Record time for each task")]),e._v(" "),t("p",[e._v("Types of task that a worker can do.")]),e._v(" "),t("div",{staticClass:"language-go extra-class"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[e._v("TTAddPiece   TaskType "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"seal/v0/addpiece"')]),e._v("\nTTPreCommit1 TaskType "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"seal/v0/precommit/1"')]),e._v("\nTTPreCommit2 TaskType "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"seal/v0/precommit/2"')]),e._v("\nTTCommit1    TaskType "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"seal/v0/commit/1"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// NOTE: We use this to transfer the sector into miner-local storage for now; Don't use on workers!")]),e._v("\nTTCommit2    TaskType "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"seal/v0/commit/2"')]),e._v("\n\nTTFinalize   TaskType "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"seal/v0/finalize"')]),e._v("\nTTFetch      TaskType "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"seal/v0/fetch"')]),e._v("\nTTUnseal     TaskType "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"seal/v0/unseal"')]),e._v("\n")])])]),t("p",[e._v("Each task shows up in log first with key word of "),t("code",[e._v("prepare")]),e._v(" (start and end) then with key word of "),t("code",[e._v("work")]),e._v(" as another log entry (also start and end).")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# seal/v0/fetch")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T14:00:07.925+0800    INFO    advmgr  sector-storage/sched_worker.go:401  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" prepare "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/fetch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T14:05:36.772+0800    INFO    advmgr  sector-storage/sched_worker.go:403  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" prepare "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/fetch end "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T14:05:36.772+0800    INFO    advmgr  sector-storage/sched_worker.go:442  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" work "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/fetch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T14:05:36.774+0800    INFO    advmgr  sector-storage/sched_worker.go:444  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" work "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/fetch end "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# seal/v0/addpiece")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T13:38:37.977+0800    INFO    advmgr  sector-storage/sched_worker.go:401  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" prepare "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/addpiece "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T13:38:37.978+0800    INFO    advmgr  sector-storage/sched_worker.go:403  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" prepare "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/addpiece end "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T13:38:37.978+0800    INFO    advmgr  sector-storage/sched_worker.go:442  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" work "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/addpiece "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T13:44:26.295+0800    INFO    advmgr  sector-storage/sched_worker.go:444  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" work "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/addpiece end "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# seal/v0/commit/2")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T13:26:02.119+0800    INFO    advmgr  sector-storage/sched_worker.go:401  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" prepare "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/commit/2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T13:26:02.119+0800    INFO    advmgr  sector-storage/sched_worker.go:403  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" prepare "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/commit/2 end "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T13:26:02.119+0800    INFO    advmgr  sector-storage/sched_worker.go:442  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" work "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/commit/2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T13:49:46.180+0800    INFO    advmgr  sector-storage/sched_worker.go:444  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" work "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/commit/2 end "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# seal/v0/finalize")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T13:54:17.414+0800    INFO    advmgr  sector-storage/sched_worker.go:401  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" prepare "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/finalize "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T13:59:30.471+0800    INFO    advmgr  sector-storage/sched_worker.go:403  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" prepare "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/finalize end "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T13:59:30.471+0800    INFO    advmgr  sector-storage/sched_worker.go:442  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" work "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/finalize "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-03T14:00:07.915+0800    INFO    advmgr  sector-storage/sched_worker.go:444  Sector "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" work "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" seal/v0/finalize end "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),t("p",[e._v("Some task may take more time in "),t("code",[e._v("prepare")]),e._v(" than"),t("code",[e._v("work")]),e._v(" and some are the other way around. Generally speaking, when task requires network transfer/bandwidth it will consume more time in "),t("code",[e._v("prepare")]),e._v(" while if the task require more computation resources it will consume more time in "),t("code",[e._v("work")]),e._v(". Eg, AP, P1, P2, C2.")]),e._v(" "),t("p",[e._v("To record time of core tasks like AP, P1, P2 and C2, we aggregate both the time of "),t("code",[e._v("fetch")]),e._v(" before it and the task itself. For example, time of P1 = time of P1 + time of fetch before P1.")]),e._v(" "),t("h2",{attrs:{id:"performance-factors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performance-factors"}},[e._v("#")]),e._v(" Performance factors")]),e._v(" "),t("p",[e._v("There are many factors cobtributes to the performance of your sealing pipeline.")]),e._v(" "),t("h3",{attrs:{id:"sealing-storage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sealing-storage"}},[e._v("#")]),e._v(" Sealing storage")]),e._v(" "),t("p",[e._v("During sealing of a sector, cahce files will be generated by the proof algorithm which requires high disk IO speed. Low IO speed may result in idling of your computation resources (CPUs/GPUs).")]),e._v(" "),t("p",[e._v("Choose apropriate hardware using forumla below.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" size * number of parallel threads / operation "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("time")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" average "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" IO speed\n")])])]),t("p",[e._v("To get more precise estimations, sum up per task IO throughput.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("AP IO throughput "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" AP "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("read")]),e._v(" + AP "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("write")]),e._v("\nP1 IO throughput "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" P1 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("read")]),e._v(" + P1 "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("write")]),e._v("\nP2 IO throughput "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" P2 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("read")]),e._v(" + P2 "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("write")]),e._v("\nC2 IO throughput "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" C2 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("read")]),e._v(" + C2 "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("write")]),e._v("\n")])])]),t("p",[e._v("SSD and NVMe are commonly used for sealing storages. To ensure effcient usage of these faster storage, it is recommended to use software RAID on these SSDs.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mdadm")]),e._v(" -C /dev/md1 -l "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" /dev/sdb1 /dev/sdc1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mdadm")]),e._v(" -C /dev/md2 -l "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" /dev/sd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("b-g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Options")]),e._v("\n-C, --create\nCreate a new array.\n-l, --level"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\nSet RAID level. \n-n, --raid-devices"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\nSpecify the number of active devices "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the array.\n-x, --spare-devices"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\nSpecify the number of spare "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("eXtra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" devices "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the initial array.\n-A, --assemble\nAssemble a pre-existing array.\n")])])]),t("p",[e._v("More on "),t("code",[e._v("mdadm")]),e._v(", please visit "),t("a",{attrs:{href:"http://raid.wiki.kernel.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(". Get latest version from "),t("a",{attrs:{href:"http://www.kernel.org/pub/linux/utils/raid/mdadm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"permenant-storage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permenant-storage"}},[e._v("#")]),e._v(" Permenant storage")]),e._v(" "),t("p",[e._v("Possible adversaries to overcome when setting up permenant storage.")]),e._v(" "),t("ol",[t("li",[e._v("When a sector is sealed, it will be transferred from sealer to permenant storage which takes up network bandwidth and disk IOs.")]),e._v(" "),t("li",[e._v("During a "),t("code",[e._v("windowPost")]),e._v(", random selections files will be read in large number. Slow read may result in failed "),t("code",[e._v("windowPost")]),e._v(".")]),e._v(" "),t("li",[e._v("Choose high RAID level to have redunancy when possible. Eg, RAID5, RAID6, RAID10.")]),e._v(" "),t("li",[e._v("Monitor usage of your disk array.")])]),e._v(" "),t("h3",{attrs:{id:"network-transfer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-transfer"}},[e._v("#")]),e._v(" Network transfer")]),e._v(" "),t("p",[e._v("During sealing, if you specialize your worker in one type of task (to increase efficiency of your resources), it will result in file transfer over the network. If file being copied too slowly over the network, it will drag the speed of your sealing pipeline down. Closely monitor your computation resources and see if there is any idling. For example, if PC2 takes 25 minutes, reads ~400G and writes ~100G, then IO throughput will be ~368 MB/s ("),t("code",[e._v("440 * 1024 / 25 / 60 + 100 * 1024 / 25 / 60")]),e._v(").")]),e._v(" "),t("p",[e._v("After sealing, the sealed sector need to be transferred to permanent storage which can be bottlenecked by the network bandwidth connecting your "),t("code",[e._v("venus-sealer")]),e._v(" and your HDD disk array.")]),e._v(" "),t("h3",{attrs:{id:"environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[e._v("#")]),e._v(" Environment variables")]),e._v(" "),t("p",[e._v("SHA extension would make a huge difference in computing P1 tasks. P1 could cost around 250 minutes with SHA extension enabled while may cost 420+ minutes without SHA.")]),e._v(" "),t("p",[e._v("When compiling "),t("code",[e._v("venus-sealer")]),e._v(", make sure you have set "),t("code",[e._v('RUSTFLAGS="-C target-cpu=native -g" FFI_BUILD_FROM_SOURCE="1"')]),e._v(" flags and you shall see the following example output.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("+ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("trap")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'{ rm -f "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$__build_output_log_tmp")]),e._v("; }'")]),e._v(" EXIT\n+ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("local")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'__rust_flags=--print native-static-libs -C target-feature=+sse2'")]),e._v("\n+ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("RUSTFLAGS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'--print native-static-libs -C target-feature=+sse2'")]),e._v("\n+ cargo +nightly-2021-04-24 build --release --no-default-features --features multicore-sdr --features pairing,gpu\n+ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tee")]),e._v(" /tmp/tmp.IYtnd3xka9\n   Compiling autocfg v1.0.1\n   Compiling libc v0.2.97\n   Compiling cfg-if v1.0.0\n   Compiling proc-macro2 v1.0.27\n   Compiling unicode-xid v0.2.2\n   Compiling syn v1.0.73\n   Compiling lazy_static v1.4.0\n   Compiling cc v1.0.68\n   Compiling typenum v1.13.0\n   Compiling serde_derive v1.0.126\n   Compiling serde v1.0.126\n")])])]),t("h3",{attrs:{id:"core-restriction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core-restriction"}},[e._v("#")]),e._v(" Core restriction")]),e._v(" "),t("p",[e._v("When running two types of tasks on same box, you may want to restrict CPU cores each task may use without competing for resources of the other.")]),e._v(" "),t("p",[e._v("Through "),t("code",[e._v("taskset")]),e._v(". Note you cannot dynamically change core restrictions during execution of the program.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("TRUST_PARAMS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("nohup")]),e._v(" taskset -c "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("-32 ./venus-worker run\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Non-consecutive core selection ")]),e._v("\ntaskset -c "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("-9,19-29,39-49\n")])])]),t("p",[e._v("Or through "),t("code",[e._v("Cgrep")]),e._v(", which supports dynamic core restrictions during program execution.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p /sys/fs/cgroup/cpuset/Pre1-worker\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("-31 "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /sys/fs/cgroup/cpuset/Pre1-worker/cpuset.cpus\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PID"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /sys/fs/cgroup/cpuset/Pre1-worker/cgroup.procs\n")])])]),t("h2",{attrs:{id:"worker-optimization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#worker-optimization"}},[e._v("#")]),e._v(" Worker optimization")]),e._v(" "),t("p",[e._v("All numbers are for 32G sectors. For 64G sectors, double what the numbers of 32G sector.")]),e._v(" "),t("h3",{attrs:{id:"p1-optimization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#p1-optimization"}},[e._v("#")]),e._v(" P1 optimization")]),e._v(" "),t("p",[e._v("Set following environment variable to speed up P1.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Store cache files in RAM; for 32G sectors, it will cost 56G RAM")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("FIL_PROOFS_MAXIMIZE_CACHING")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Use mutiple cores for P1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("FIL_PROOFS_USE_MULTICORE_SDR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])]),t("p",[e._v("P1 RAM usage includes 56G cache file and 2 layers of the sector for each sector sealing in parallel.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Assume 10 sector running in parallel")]),e._v("\n56G + 32G * "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" * "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" 696G\n")])])]),t("p",[e._v("P1 SSD usage includes 11 layers of the sector, 64G of "),t("code",[e._v("tree-d")]),e._v(" file and 32G of the unsealed sector.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# For 1 sector")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(" * 32G + "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),e._v(" + "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("32")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" 440G\n")])])]),t("h3",{attrs:{id:"p2-optimization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#p2-optimization"}},[e._v("#")]),e._v(" P2 optimization")]),e._v(" "),t("p",[e._v("Set following environment variable to speed up P2.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Use GPU for tree-r-last")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("FIL_PROOFS_USE_GPU_COLUMN_BUILDER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("   \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Use GPU for tree-c")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("FIL_PROOFS_USE_GPU_TREE_BUILDER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" \n")])])]),t("p",[e._v("P2 RAM usage is 96G.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Assume 10 sector running in parallel")]),e._v("\n96G * "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" 960G\n")])])]),t("p",[e._v("P1 SSD usage includes 4.6G tree-c file * 8, 9.2M tree-r-last file * 8, 4K t_aux file, 4K p_aux file and 32G unsealed sector file.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(".6G * "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" + "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" * "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9")]),e._v(".2M + 4K * "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" + 32G "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" ~70G\n")])])]),t("h3",{attrs:{id:"commit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[e._v("#")]),e._v(" Commit")]),e._v(" "),t("p",[e._v("C1 cost little CPU usage, but require sum of P1 and P2 SSD usage.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("P1 440G + P2 79G "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" 519G\n")])])]),t("p",[e._v("C2 environment variable")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BELLMAN_NO_GPU")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Example, if you are using 3090")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GPUBELLMAN_CUSTOM_GPU")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"GeForce RTX 3090:10496"')]),e._v(" \n")])])]),t("p",[e._v("C2 RAM usage.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("128G + 64G "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" 192G\n")])])]),t("h2",{attrs:{id:"optimize-sealing-pipeline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optimize-sealing-pipeline"}},[e._v("#")]),e._v(" Optimize sealing pipeline")]),e._v(" "),t("h3",{attrs:{id:"calculate-your-daily-growth"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calculate-your-daily-growth"}},[e._v("#")]),e._v(" Calculate your daily growth")]),e._v(" "),t("p",[e._v("Calculate how many tasks your sealing pipeline can process.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# for each type of task")]),e._v("\ntasks "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v(" / "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("time")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" production rate\ndaily production rate * "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("32G OR 64G"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" daily growth "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" power\n")])])]),t("p",[e._v("For example, if we have one box and can finish P1 in 240 minutes, P2 in 30 minutes and Commit in 35 minutes, then you can derive daily growth by the following chart.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Task")]),e._v(" "),t("th",[e._v("Minute")]),e._v(" "),t("th",[e._v("Parallel")]),e._v(" "),t("th",[e._v("Hourly production rate")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("P1")]),e._v(" "),t("td",[e._v("240")]),e._v(" "),t("td",[e._v("1")]),e._v(" "),t("td",[e._v("0.25 = 1 / (240 /60)")])]),e._v(" "),t("tr",[t("td",[e._v("P2")]),e._v(" "),t("td",[e._v("30")]),e._v(" "),t("td",[e._v("1")]),e._v(" "),t("td",[e._v("2 = 1 / (30 /60)")])]),e._v(" "),t("tr",[t("td",[e._v("Commit")]),e._v(" "),t("td",[e._v("35")]),e._v(" "),t("td",[e._v("1")]),e._v(" "),t("td",[e._v("1.71 = 1 / (35 /60)")])])])]),e._v(" "),t("h3",{attrs:{id:"finding-optimal-task-configurations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-optimal-task-configurations"}},[e._v("#")]),e._v(" Finding optimal task configurations")]),e._v(" "),t("p",[e._v("From the table above, we know that daily growth will be bottlenecked by P1. Adjust number of parallel tasks for different types of task to achieve maximum efficiency.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Task")]),e._v(" "),t("th",[e._v("Minutes")]),e._v(" "),t("th",[e._v("Parallel")]),e._v(" "),t("th",[e._v("Hourly productin")]),e._v(" "),t("th",[e._v("Output")]),e._v(" "),t("th",[e._v("Memory consumption")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("P1")]),e._v(" "),t("td",[e._v("240")]),e._v(" "),t("td",[e._v("7")]),e._v(" "),t("td",[e._v("1.75 = 7 / (240 /60)")]),e._v(" "),t("td",[e._v("1344 G")]),e._v(" "),t("td",[e._v("504 G = 7*64+56")])]),e._v(" "),t("tr",[t("td",[e._v("P2")]),e._v(" "),t("td",[e._v("30")]),e._v(" "),t("td",[e._v("1")]),e._v(" "),t("td",[e._v("2 = 1 / (30 /60)")]),e._v(" "),t("td",[e._v("1536 G")]),e._v(" "),t("td",[e._v("96 G = 1*96")])]),e._v(" "),t("tr",[t("td",[e._v("Commit")]),e._v(" "),t("td",[e._v("35")]),e._v(" "),t("td",[e._v("1")]),e._v(" "),t("td",[e._v("1.71 = 1 / (35 /60)")]),e._v(" "),t("td",[e._v("1316 G")]),e._v(" "),t("td",[e._v("192 G = 1*128+64")])])])]),e._v(" "),t("p",[e._v("The goal is to have "),t("code",[e._v("output")]),e._v(" for each task to be as close as possilbe so that the sealing pipeline runs in its maximum efficiency. Things to watchout for includes...")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("hourly production")]),e._v(" for Commit is lower than P1, which may result in tasks backlogged in Commit phase.")]),e._v(" "),t("li",[e._v("When one type of tasks being overly efficient than others, resources may become idle.")]),e._v(" "),t("li",[e._v("Miro management is needed to have highest possible efficiency.")])]),e._v(" "),t("h3",{attrs:{id:"finding-optimal-pledging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-optimal-pledging"}},[e._v("#")]),e._v(" Finding optimal pledging")]),e._v(" "),t("p",[e._v("For example, if you find 7 P1 task to the optimal for your system, change the following venus-sealer configurations.")]),e._v(" "),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[e._v("Sealing")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("  \n  "),t("span",{pre:!0,attrs:{class:"token key property"}},[e._v("MaxSealingSectors")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v("\n")])])]),t("h2",{attrs:{id:"stop-loss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stop-loss"}},[e._v("#")]),e._v(" Stop-loss")]),e._v(" "),t("p",[e._v("If one of tasks fails too many times, manual intervention is needed to get sealing pipeline back to its normal output.")]),e._v(" "),t("p",[e._v("Remove sectors when you have the following issues.")]),e._v(" "),t("ol",[t("li",[e._v("Expired ticket")]),e._v(" "),t("li",[e._v("Expired Commit")]),e._v(" "),t("li",[e._v("Corrupted proof params")])]),e._v(" "),t("p",[e._v("To remove incomplete sectors.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("venus-sealer sectors remove --really-do-it "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("sectorNum"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);