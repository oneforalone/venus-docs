(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{451:function(s,t,a){"use strict";a.r(t);var e=a(17),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"venus-multisig-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-multisig-wallet"}},[s._v("#")]),s._v(" Venus: Multisig wallet")]),s._v(" "),a("p",[s._v("多签（multi-signature）钱包是指需要多个密钥来授权一个FIL交易的钱包。它适用于多方共管一笔FIL，设置一定的赞成比阙值完成message的签发。")]),s._v(" "),a("h2",{attrs:{id:"cli范例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli范例"}},[s._v("#")]),s._v(" CLI范例")]),s._v(" "),a("ul",[a("li",[s._v("以下示范为了方便阅读都将使用“t0”地址，实际上也支持“t3”地址操作。")]),s._v(" "),a("li",[s._v("范例中包含了多签钱包所有的CLI操作方式，并以流程性的方式介绍如何使用多签钱包，同时概念性描述也会随着逻辑的下沉而变少，相同业务逻辑的介绍只会被详细描述一次。")]),s._v(" "),a("li",[s._v("指令标签\n"),a("ul",[a("li",[s._v('"[]"：选填')]),s._v(" "),a("li",[s._v('"[--phrase]" ：带描述符参数，需要"--phrase"指定才能使用')]),s._v(" "),a("li",[s._v('"<phrase>"：占位参数，不需要指明含义，需要严格按照顺位填写')]),s._v(" "),a("li",[s._v("\"[--]\"： '带描述符参数' 和 '占位参数' 的边界")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("指令标签示例：venus msig create [--phrase1=<phrase1>] [--] <phrase2> [<phrase3>]")]),s._v(" "),a("ol",[a("li",[s._v('phrase1: 带描述符参数，选填，如需使用，必须"--phrase1=xxx"指定')]),s._v(" "),a("li",[s._v("phrase2: 占位参数，必填")]),s._v(" "),a("li",[s._v("phrase3: 占位参数，选填")])])]),s._v(" "),a("h3",{attrs:{id:"创建一个多签钱包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个多签钱包"}},[s._v("#")]),s._v(" 创建一个多签钱包")]),s._v(" "),a("blockquote",[a("p",[s._v("./venus msig create [--required=<required>] [--value=<value>] [--duration=<duration>] [--from=<from>] [--] <addresses>")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus msig create --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01001 --required"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" --value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" --duration"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t01001,t01002,t01003"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Created new multisig: t01004 <multiAddress>"')]),s._v("\n")])])]),a("ul",[a("li",[s._v("from: 发起钱包地址，生成create msg用，需要花费gas。创建多签钱包时，发起的钱包地址默认不加入到多签密钥之中，如需添加，需要额外指定（如以下指令中t01001出现了2次，第2次为指定该地址包含在多签钱包之中）")]),s._v(" "),a("li",[s._v("required: 多签钱包签名通过的阙值。以上钱包设置为2/3，即当多签钱包包含的3个地址中，有2个钱包地址通过决议即生效。")]),s._v(" "),a("li",[s._v("value: 创建钱包后直接转账的FIL数额，由from提供。")]),s._v(" "),a("li",[s._v("duration: 资金解锁的时间长度，即创建后的钱包中所带的金额锁定的时间长度。")])]),s._v(" "),a("h3",{attrs:{id:"查询创建的多签钱包状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询创建的多签钱包状态"}},[s._v("#")]),s._v(" 查询创建的多签钱包状态")]),s._v(" "),a("blockquote",[a("p",[s._v("./venus msig inspect [--vesting] [--decode-params] [--] <address>")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus msig inspect t01004 --vesting"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true --decode-params"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 状态信息")]),s._v("\nBalance: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" FIL\nSpendable: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.15")]),s._v(" FIL\nInitialBalance: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" FIL\nStartEpoch: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nUnlockDuration: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20000")]),s._v("\nThreshold: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nSigners:\nID      Address\nt01001  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\nt01002  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("\nt01003  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v("\nTransactions:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),a("ul",[a("li",[s._v("vesting： 默认false,为true将呈现更多信息")]),s._v(" "),a("li",[s._v("decode-params：将状态中Transactions的params字段以json格式显示，默认为hex格式")])]),s._v(" "),a("h3",{attrs:{id:"往多签钱包转账fil"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#往多签钱包转账fil"}},[s._v("#")]),s._v(" 往多签钱包转账FIL")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus send t01004 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("msg打包成功后，多签钱包将会增加2000FIL")])]),s._v(" "),a("h3",{attrs:{id:"提议往多签钱包添加新的钱包地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提议往多签钱包添加新的钱包地址"}},[s._v("#")]),s._v(" 提议往多签钱包添加新的钱包地址")]),s._v(" "),a("blockquote",[a("p",[s._v("./venus msig add-propose [--increase-threshold] [--from=<from>] [--] <multisigAddress> <signer>")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus msig add-propose --increase-threshold"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01001 t01004 t01005\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# reponse")]),s._v("\nsent "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" singer proposal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" message: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("msgCId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nTxnID: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 状态变化")]),s._v("\nTransactions:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nID      State    Approvals  To             Value   Method        Params\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       pending  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          t01004 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" FIL   AddSigner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Signer"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t01005"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Increase"')]),s._v(":false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("往t01004多签钱包中提议新增t01005地址，且投票阙值不增加")])]),s._v(" "),a("ul",[a("li",[s._v("increase-threshold： 是否添加新地址成功后，自动增加投票阙值，默认为false")]),s._v(" "),a("li",[s._v("signer：待添加的钱包地址，未包含与多签钱包中")])]),s._v(" "),a("h3",{attrs:{id:"同意添加新地址提议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同意添加新地址提议"}},[s._v("#")]),s._v(" 同意添加新地址提议")]),s._v(" "),a("blockquote",[a("p",[s._v("./venus msig add-approve [--from=<from>] [--] <multisigAddress> <proposerAddress> <txId> <newAddress> <increaseThreshold>")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus msig add-approve --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01002 t01004 t01001 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" t01005 "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# reponse")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sent add approval in message: <msgCId>"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 状态变化")]),s._v("\nThreshold: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\nSigners:\nID      Address\nt01001  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\nt01002  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("\nt01003  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v("\nt01005  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("5")]),s._v(">")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("因为之前的投票比是2/3，所以一个地址通过后，该提议将会执行，投票阙值会因为新成员的加入变为2/4")])]),s._v(" "),a("ul",[a("li",[s._v("proposerAddress: 发起者的地址")]),s._v(" "),a("li",[s._v("txId: 多签地址状态中Transcations下对应的ID")]),s._v(" "),a("li",[s._v("newAddress: 指定添加的新地址，必须和状态数据中的Params下对应的地址一样")]),s._v(" "),a("li",[s._v("increaseThreshold: 是否影响投票阙值分母，必须与状态数据中Params下对应的Increase相同")])]),s._v(" "),a("h3",{attrs:{id:"提议修改投票阙值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提议修改投票阙值"}},[s._v("#")]),s._v(" 提议修改投票阙值")]),s._v(" "),a("blockquote",[a("p",[s._v("./venus msig propose-threshold [<multisigAddress>] <newM>")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(".$ /venus msig propose-threshold --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01001 t01004 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# reponse")]),s._v("\nsent change threshold proposal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" message: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("msgCId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nTxnID: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 状态变化")]),s._v("\nTransactions:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nID      State    Approvals  To             Value   Method                          Params\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("       pending  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          t01004 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" FIL   ChangeNumApprovalsThreshold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NewThreshold"')]),s._v(":3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("newM： 目标阙值分母")])]),s._v(" "),a("h3",{attrs:{id:"同意修改投票阙值提议-approve指令为万用同意指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同意修改投票阙值提议-approve指令为万用同意指令"}},[s._v("#")]),s._v(" 同意修改投票阙值提议(approve指令为万用同意指令)")]),s._v(" "),a("blockquote",[a("p",[s._v("./venus msig approve [--from=<from>] [--] <multisigAddress> <messageId> [<proposerAddress>] [<destination>] [<value>] [<methodId>] [<methodParams>]")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus msig approve --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01002 t01004 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# reponse")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sent approval in message: <msgCId>"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 状态变化")]),s._v("\nThreshold: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("普通情况下，同意一个提议只需要使用approve指令并指定多签地址和多签地址Transactions状态中的ID即可")])]),s._v(" "),a("ul",[a("li",[s._v("multisigAddress： 操作多签地址")]),s._v(" "),a("li",[s._v("messageId： propose操作返回的TxID,在inspect指令中可以查寻")]),s._v(" "),a("li",[s._v("proposerAddress：提议发起者钱包地址")]),s._v(" "),a("li",[s._v("destination：目标地址（如：多签地址转账给第3方地址时，该字段就是第三方地址）")]),s._v(" "),a("li",[s._v("value： 转账FIL数额")]),s._v(" "),a("li",[s._v("methodId：propose对应的methodNum,在inspect指令中可以查寻\n"),a("ul",[a("li",[s._v("Propose: 2")]),s._v(" "),a("li",[s._v("Approve: 3")]),s._v(" "),a("li",[s._v("Cancel: 4")]),s._v(" "),a("li",[s._v("AddSigner: 5")]),s._v(" "),a("li",[s._v("RemoveSigner: 6")]),s._v(" "),a("li",[s._v("SwapSinger: 7")]),s._v(" "),a("li",[s._v("ChangeNumApprovalsThreshold: 8")]),s._v(" "),a("li",[s._v("LockBalance: 9")])])]),s._v(" "),a("li",[s._v("methodParams: 发起propose的操作参数，在inspect指令中可以查寻")])]),s._v(" "),a("h3",{attrs:{id:"提议移除多签成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提议移除多签成员"}},[s._v("#")]),s._v(" 提议移除多签成员")]),s._v(" "),a("blockquote",[a("p",[s._v("./venus msig propose-remove [--decrease-threshold] [--from=<from>] [--] <multisigAddress> <signer>")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$  ./venus msig propose-remove --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01001 t01004 t01005 \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# response")]),s._v("\nsent remove singer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" message: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("msgCId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nTxnID: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 状态变化")]),s._v("\nThreshold: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\nSigners:\nID      Address\nt01001  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\nt01002  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("\nt01003  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v("\nt01005  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("5")]),s._v(">")]),s._v("\nTransactions:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nID      State    Approvals  To             Value   Method           Params\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("       pending  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          t01004 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" FIL   RemoveSigner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Signer"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t01005"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Decrease"')]),s._v(":false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# propose-remove 在 approve 之后")]),s._v("\nThreshold: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nSigners:\nID      Address\nt01001  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\nt01002  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("\nt01003  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v("\n")])])]),a("h3",{attrs:{id:"提议替换多签成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提议替换多签成员"}},[s._v("#")]),s._v(" 提议替换多签成员")]),s._v(" "),a("blockquote",[a("p",[s._v("./venus msig swap-propose [--from=<from>] [--] <multisigAddress> <oldAddress> <newAddress>")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus msig swap-propose --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01001 t01004 t01003 t01005\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# response")]),s._v("\nsent swap singer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" message: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("msgCId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nTxID: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 状态变化")]),s._v("\nThreshold: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nSigners:\nID      Address\nt01001  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\nt01002  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("\nt01003  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v("\nTransactions:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nID      State    Approvals  To             Value   Method         Params\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("       pending  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          t01004 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" FIL   SwapSigner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"From"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t01003"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"To"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t01005"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# approve之后")]),s._v("\nThreshold: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nSigners:\nID      Address\nt01001  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\nt01002  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("\nt01005  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("t3Address"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("5")]),s._v(">")]),s._v("\nTransactions:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"取消多签成员地址替换提议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取消多签成员地址替换提议"}},[s._v("#")]),s._v(" 取消多签成员地址替换提议")]),s._v(" "),a("blockquote",[a("p",[s._v("./venus msig swap-cancel [<multisigAddress>] <txId> <oldAddress> <newAddress>")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发起新的替换提议")]),s._v("\n$ ./venus msig swap-propose --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01001 t01004 t01005 t01003\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 状态变化")]),s._v("\nTransactions:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nID      State    Approvals  To             Value   Method         Params\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("       pending  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          t01004 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" FIL   SwapSigner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"From"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t01005"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"To"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t01003"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n$ ./venus msig swap-cancel --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01001 t01004 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" t01005 t01003\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sent swap cancellation in message: <msgCId>"')]),s._v("\n")])])]),a("h3",{attrs:{id:"查询多签地址在指定间隔区块被授予的fil数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询多签地址在指定间隔区块被授予的fil数"}},[s._v("#")]),s._v(" 查询多签地址在指定间隔区块被授予的FIL数")]),s._v(" "),a("blockquote",[a("p",[s._v("./venus msig vested [--start-epoch=<start-epoch>] [--end-epoch=<end-epoch>] [--] <multisigAddress>")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$  ./venus msig vested --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01001 --start-epoch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" --end-epoch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" t01004\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# reponse")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Vested: 9.5 FIL between 10 and 200"')]),s._v("\n")])])]),a("h3",{attrs:{id:"提议冻结多签地址中的定量fil"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提议冻结多签地址中的定量fil"}},[s._v("#")]),s._v(" 提议冻结多签地址中的定量FIL")]),s._v(" "),a("blockquote",[a("p",[s._v("./venus msig lock-propose [--from=<from>] [--] <multisigAddress> <startEpoch> <unlockDuration> <amount>")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus msig lock-propose --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01001 t01004 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# response")]),s._v("\nsent lock balance "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" message: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("msgCId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nTxnID: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 状态变化")]),s._v("\nTransactions:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nID      State    Approvals  To             Value   Method          Params\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("       pending  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          t01004 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" FIL   LockBalance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"StartEpoch"')]),s._v(":1600,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UnlockDuration"')]),s._v(":100,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Amount"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"50000000000000000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("startEpoch：开始生效的块高")]),s._v(" "),a("li",[s._v("unlockDuration：balance锁定区块跨度，startEpoch+unlockDuration后，锁定的balance将会自动解锁")]),s._v(" "),a("li",[s._v("amount：目标锁定的FIL数额")])]),s._v(" "),a("h3",{attrs:{id:"取消冻结提议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取消冻结提议"}},[s._v("#")]),s._v(" 取消冻结提议")]),s._v(" "),a("blockquote",[a("p",[s._v("./venus msig lock-cancel [--from=<from>] [--] <multisigAddress> <txId> <startEpoch> <unlockDuration> <amount>")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ./venus msig lock-cancel --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01001 t01004 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 同意冻结")]),s._v("\n$ ./venus msig lock-approve --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01001 t01004 t01001 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同意后状态变化")]),s._v("\nInitialBalance: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" FIL\n")])])]),a("ul",[a("li",[s._v("startEpoch，unlockDuration，amount需要和lock-propose的参数一样")]),s._v(" "),a("li",[s._v("提议通过后，多签账户下的balance中将会把指定量的balance冻结锁定，显示为InitialBalance")])])])}),[],!1,null,null,null);t.default=r.exports}}]);