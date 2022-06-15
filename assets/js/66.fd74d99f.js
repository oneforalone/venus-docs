(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{440:function(a,s,t){"use strict";t.r(s);var e=t(17),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"initial-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initial-setup"}},[a._v("#")]),a._v(" Initial setup")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ systemctl stop firewalld \n$ systemctl disbale firewalld\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/selinux/config\n\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SELINUX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("disabled "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# change selinux to disabled")]),a._v("\n$ setenforce "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# temporarily change selinux status")]),a._v("\n$ getenforce "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# check selinux status")]),a._v("\n")])])]),t("h2",{attrs:{id:"install-software-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-software-dependencies"}},[a._v("#")]),a._v(" Install software dependencies")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -Uvh https://repo.zabbix.com/zabbix/5.0/rhel/7/x86_64/zabbix-release-5.0-1.el7.noarch.rpm\n$ yum clean all "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" yum makecache\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Install zabbix-server and zabbix-agent")]),a._v("\n$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" zabbix-server-mysql zabbix-agent -y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Install zabbix-ready nginx")]),a._v("\n$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" centos-release-scl -y\n$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" rh-php72-php-mysqlnd zabbix-nginx-conf-scl -y\n")])])]),t("p",[a._v("Change zabbix configurations and start Web GUI.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/yum.repos.d/zabbix.repo \n")])])]),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("zabbix-frontend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("Zabbix Official Repository frontend - $basearch\n  "),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("http://repo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("zabbix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com/zabbix/"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.0")]),a._v("/rhel/"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v("/$basearch/frontend\n  "),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# change to 1")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX-A14FE591\n")])])]),t("h2",{attrs:{id:"install-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-mysql"}},[a._v("#")]),a._v(" Install MySQL")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" mysql-dir\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" mysql-dir\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://downloads.mysql.com/archives/get/p/23/file/mysql-5.7.30-1.el7.x86_64.rpm-bundle.tar\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf mysql-5.7.32-1.el7.x86_64.rpm-bundle.tar\n$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" *.rpm -y\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ systemctl start mysqld\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /var/log/mysqld.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" root\n")])])]),t("p",[a._v("Grep default password.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("-07-26T10:50:49.538494Z "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Note"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" A temporary password is generated "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" root@localhost: **20yyk:Ar67S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("**\n")])])]),t("p",[a._v("Login to database.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ mysql -uroot -p\nEnter password: 20yyk:Ar67S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Config database.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" global "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("validate_password_policy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" global "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("validate_password_length")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nalter user "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root'")]),a._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'localhost'")]),a._v(" identified by "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'venus'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Change root password ")]),a._v("\n\nuse mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nupdate user "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'%'")]),a._v(" where user "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ncreate user "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zabbix'")]),a._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'%'")]),a._v(" identified  by "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ngrant all privileges on zabbix.* to "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zabbix'")]),a._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nflush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Create tables for Zabbix ")]),a._v("\ncreate database zabbix character "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" utf8 collate utf8_bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Import zabbix template files.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ zcat /usr/share/doc/zabbix-server-mysql-5.0.14/create.sql.gz "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" mysql -uzabbix -p123456 zabbix\n")])])]),t("h2",{attrs:{id:"configure-zabbix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-zabbix"}},[a._v("#")]),a._v(" Configure zabbix")]),a._v(" "),t("p",[a._v("Change database password.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/zabbix/zabbix_server.conf\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DBPassword")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v("\n")])])]),t("p",[a._v("Configure Nginx.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/opt/rh/rh-php72/php-fpm.d/zabbix.conf\n")])])]),t("p",[a._v("Append "),t("code",[a._v("nginx")]),a._v(" at the end of line 6.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("listen.acl_users = apache,nginx\n")])])]),t("p",[a._v("Change location to your choice at line 24.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("php_value[date.timezone] = Asia/shanghai\n")])])]),t("p",[a._v("Configure port.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/opt/rh/rh-nginx116/nginx/conf.d/zabbix.conf\nserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        listen          "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# uncomment this line ")]),a._v("\n        server_name     test.zabbix.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# uncomment and change to your own ip")]),a._v("\n")])])]),t("p",[a._v("Change your hosts file too if using hostname.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/hosts\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".xx.xx test.zabbix.com\n")])])]),t("p",[a._v("If you are using windows.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# for window hosts")]),a._v("\nC:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Windows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("System32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("drivers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("etc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("hosts\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".xxx.xxx test.zabbix.com \n")])])]),t("p",[a._v("Start service and configure to run on boot.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl restart zabbix-server zabbix-agent rh-nginx116-nginx rh-php72-php-fpm\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" zabbix-server zabbix-agent rh-nginx116-nginx rh-php72-php-fpm\n")])])]),t("p",[a._v("Change zabbix agent config fie")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/zabbix/zabbix_agentd.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("egrep")]),a._v(" -v "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^$|^#"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PidFile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/var/run/zabbix/zabbix_agentd.pid\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LogFile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/var/log/zabbix/zabbix_agentd.log\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LogFileSize")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Server")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".88.11  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# point to ip of zabbix-server")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Hostname")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("venus-sealer\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Include")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/etc/zabbix/zabbix_agentd.d/*.conf\n")])])]),t("h2",{attrs:{id:"configure-monitoring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-monitoring"}},[a._v("#")]),a._v(" Configure monitoring")]),a._v(" "),t("p",[a._v("Visit your zabbix-server with a browser.\n"),t("img",{attrs:{src:"/01-zabbix-install.jpg",alt:""}}),a._v(" "),t("img",{attrs:{src:"/02-zabbix-install.jpg",alt:""}})]),a._v(" "),t("p",[a._v("Configure database connection information.\n"),t("img",{attrs:{src:"/03-zabbix-config.jpg",alt:""}}),a._v(" "),t("img",{attrs:{src:"/04-zabbix-hostname.jpg",alt:""}}),a._v(" "),t("img",{attrs:{src:"/05-zabbix-all.jpg",alt:""}}),a._v(" "),t("img",{attrs:{src:"/06-zabbix-finished.jpg",alt:""}})]),a._v(" "),t("p",[a._v("Login to zabbix. Default user is "),t("code",[a._v("Admin")]),a._v(" with "),t("code",[a._v("zabbix")]),a._v(" as password.\n"),t("img",{attrs:{src:"/07-zabbix-login.jpg",alt:""}}),a._v(" "),t("img",{attrs:{src:"/08-zabbix-dashboard.jpg",alt:""}})]),a._v(" "),t("p",[a._v("Add zabbix-agent.\n"),t("img",{attrs:{src:"/09-zabbix-agent.jpg",alt:""}}),a._v(" "),t("img",{attrs:{src:"/10-zabbix-agent-add.jpg",alt:""}})]),a._v(" "),t("p",[a._v("Check zabbix RAM usage.\n"),t("img",{attrs:{src:"/11-zabbix-graphs.jpg",alt:""}}),a._v(" "),t("img",{attrs:{src:"/12-zabbix-memory.jpg",alt:""}})]),a._v(" "),t("p",[a._v("Check problems in dashboard.\n"),t("img",{attrs:{src:"/13-Alarm-information.jpg",alt:""}})])])}),[],!1,null,null,null);s.default=n.exports}}]);