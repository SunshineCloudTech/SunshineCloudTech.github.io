import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a,o as l}from"./app-BNnvQicI.js";const e={};function p(t,s){return l(),n("div",null,s[0]||(s[0]=[a(`<h1 id="it系统运维工程师应聘指南02-监控优化专项指南" tabindex="-1"><a class="header-anchor" href="#it系统运维工程师应聘指南02-监控优化专项指南"><span>IT系统运维工程师应聘指南02 - 监控优化专项指南</span></a></h1><h2 id="岗位职责重点" tabindex="-1"><a class="header-anchor" href="#岗位职责重点"><span>岗位职责重点</span></a></h2><p><strong>监控IT资源使用情况，优化成本;提出成本节约方案，如资源整合、云服务优化等;定期检查系统日志，确保系统稳定且及时发现并解决潜在问题</strong></p><hr><h2 id="一、监控系统部署详细操作指南" tabindex="-1"><a class="header-anchor" href="#一、监控系统部署详细操作指南"><span>一、监控系统部署详细操作指南</span></a></h2><h3 id="_1-1-zabbix监控系统部署" tabindex="-1"><a class="header-anchor" href="#_1-1-zabbix监控系统部署"><span>1.1 Zabbix监控系统部署</span></a></h3><h4 id="zabbix-server安装配置" tabindex="-1"><a class="header-anchor" href="#zabbix-server安装配置"><span>Zabbix Server安装配置：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 系统环境准备（CentOS 8）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vim</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 安装Zabbix仓库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Uvh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://repo.zabbix.com/zabbix/6.0/rhel/8/x86_64/zabbix-release-6.0-4.el8.noarch.rpm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clean</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> all</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 安装Zabbix服务器和Web前端</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix-server-mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix-web-mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix-apache-conf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix-sql-scripts</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix-selinux-policy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 4. 安装MariaDB数据库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mariadb-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mariadb</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mariadb</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mariadb</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 5. 配置数据库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql_secure_installation</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -uroot</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">CREATE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> DATABASE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CHARACTER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SET</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> utf8mb4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> COLLATE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> utf8mb4_bin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">CREATE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> USER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;zabbix&#39;@&#39;localhost&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> IDENTIFIED</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> BY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;Zabbix@123!&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">GRANT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ALL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PRIVILEGES</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ON</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;zabbix&#39;@&#39;localhost&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">SET</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GLOBAL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> log_bin_trust_function_creators</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">quit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 6. 导入数据库结构</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">zcat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/share/zabbix-sql-scripts/mysql/server.sql.gz</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --default-character-set=utf8mb4</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -uzabbix</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 7. 配置Zabbix服务器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/zabbix/zabbix_server.conf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">DBPassword</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Zabbix@123!</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">DBHost</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">localhost</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">DBName</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">zabbix</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">DBUser</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">zabbix</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置日志级别和文件大小</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">LogLevel</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">3</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">LogFile</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/var/log/zabbix/zabbix_server.log</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">LogFileSize</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置缓存大小</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CacheSize</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">128M</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">HistoryCacheSize</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">64M</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">HistoryIndexCacheSize</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">32M</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">TrendCacheSize</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">32M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 8. 配置PHP</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/php-fpm.d/zabbix.conf</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 取消注释并设置时区</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php_value[date.timezone]</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Asia/Shanghai</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 9. 启动服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix-agent</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> httpd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php-fpm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix-agent</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> httpd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php-fpm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 10. 防火墙配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-service=http</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-port=10051/tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 11. Web界面配置</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 访问 http://server_ip/zabbix</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 默认用户名：Admin，密码：zabbix</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zabbix-agent安装配置" tabindex="-1"><a class="header-anchor" href="#zabbix-agent安装配置"><span>Zabbix Agent安装配置：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 在被监控主机上安装Agent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix-agent2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 配置Agent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/zabbix/zabbix_agent2.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 服务器配置</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Server</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">192.168.1.100</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ServerActive</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">192.168.1.100</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">web-server-01</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安全配置</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">AllowKey</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">system.run[*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">DenyKey</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">system.run[rm</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> *]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 监控配置</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RefreshActiveChecks</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">60</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">BufferSend</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">5</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">BufferSize</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 启动Agent服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix-agent2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix-agent2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 4. 防火墙配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-port=10050/tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 5. 自定义监控脚本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/zabbix/scripts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># CPU温度监控脚本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/zabbix/scripts/cpu_temp.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 获取CPU温度</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">TEMP=$(sensors | grep &#39;Core 0&#39; | awk &#39;{print $3}&#39; | sed &#39;s/+//g&#39; | sed &#39;s/°C//g&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo $TEMP</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/zabbix/scripts/cpu_temp.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 在zabbix_agent2.conf中添加用户参数</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;UserParameter=cpu.temperature,/etc/zabbix/scripts/cpu_temp.sh&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/zabbix/zabbix_agent2.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 重启Agent服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zabbix-agent2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-prometheus-grafana监控系统" tabindex="-1"><a class="header-anchor" href="#_1-2-prometheus-grafana监控系统"><span>1.2 Prometheus + Grafana监控系统</span></a></h3><h4 id="prometheus安装配置" tabindex="-1"><a class="header-anchor" href="#prometheus安装配置"><span>Prometheus安装配置：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 创建prometheus用户</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">useradd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --no-create-home</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --shell</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prometheus</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 创建目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/lib/prometheus</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prometheus:prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/lib/prometheus</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 下载安装Prometheus</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/prometheus/prometheus/releases/download/v2.40.0/prometheus-2.40.0.linux-amd64.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -xzf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prometheus-2.40.0.linux-amd64.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prometheus-2.40.0.linux-amd64/prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prometheus-2.40.0.linux-amd64/promtool</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prometheus:prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/promtool</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 4. 配置Prometheus</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/prometheus/prometheus.yml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">global:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  scrape_interval: 15s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  evaluation_interval: 15s</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">rule_files:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  - &quot;rules/*.yml&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">alerting:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  alertmanagers:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    - static_configs:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        - targets:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          - localhost:9093</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">scrape_configs:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  - job_name: &#39;prometheus&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    static_configs:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      - targets: [&#39;localhost:9090&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  - job_name: &#39;node-exporter&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    static_configs:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      - targets: </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        - &#39;192.168.1.101:9100&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        - &#39;192.168.1.102:9100&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  - job_name: &#39;mysql-exporter&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    static_configs:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      - targets: [&#39;192.168.1.101:9104&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  - job_name: &#39;nginx-exporter&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    static_configs:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      - targets: [&#39;192.168.1.101:9113&#39;]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prometheus:prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/prometheus/prometheus.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 5. 创建systemd服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/systemd/system/prometheus.service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Description=Prometheus</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Wants=network-online.target</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">After=network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">User=prometheus</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Group=prometheus</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Type=simple</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ExecStart=/usr/local/bin/prometheus \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    --config.file /etc/prometheus/prometheus.yml \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    --storage.tsdb.path /var/lib/prometheus/ \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    --web.console.templates=/etc/prometheus/consoles \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    --web.console.libraries=/etc/prometheus/console_libraries \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    --web.listen-address=0.0.0.0:9090 \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    --web.enable-lifecycle \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    --storage.tsdb.retention.time=30d</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">WantedBy=multi-user.target</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 6. 启动服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prometheus</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prometheus</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 7. 防火墙配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-port=9090/tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="node-exporter安装" tabindex="-1"><a class="header-anchor" href="#node-exporter安装"><span>Node Exporter安装：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 下载安装Node Exporter</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/prometheus/node_exporter/releases/download/v1.5.0/node_exporter-1.5.0.linux-amd64.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -xzf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> node_exporter-1.5.0.linux-amd64.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> node_exporter-1.5.0.linux-amd64/node_exporter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prometheus:prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/node_exporter</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 创建systemd服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/systemd/system/node_exporter.service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Description=Node Exporter</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Wants=network-online.target</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">After=network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">User=prometheus</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Group=prometheus</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Type=simple</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ExecStart=/usr/local/bin/node_exporter \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    --collector.systemd \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    --collector.processes \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    --web.listen-address=0.0.0.0:9100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">WantedBy=multi-user.target</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 启动服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> node_exporter</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> node_exporter</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 4. 防火墙配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-port=9100/tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="grafana安装配置" tabindex="-1"><a class="header-anchor" href="#grafana安装配置"><span>Grafana安装配置：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 添加Grafana仓库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/yum.repos.d/grafana.repo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[grafana]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">name=grafana</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">baseurl=https://packages.grafana.com/oss/rpm</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">repo_gpgcheck=1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">enabled=1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">gpgcheck=1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">gpgkey=https://packages.grafana.com/gpg.key</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sslverify=1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sslcacert=/etc/pki/tls/certs/ca-bundle.crt</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 安装Grafana</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> grafana</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 配置Grafana</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/grafana/grafana.ini</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[server]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">http_addr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">http_port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3000</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">domain</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> localhost</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">root_url</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://localhost:3000/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[database]</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sqlite3</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 127.0.0.1:3306</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> grafana</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">password</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[security]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">admin_user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> admin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">admin_password</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Grafana@123!</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">secret_key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SW2YcwTIb9zpOOhoPsMm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 4. 启动服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> grafana-server</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> grafana-server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 5. 防火墙配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-port=3000/tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 6. 配置数据源（通过Web界面）</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 访问 http://server_ip:3000</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 添加Prometheus数据源：http://localhost:9090</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-监控告警配置" tabindex="-1"><a class="header-anchor" href="#_1-3-监控告警配置"><span>1.3 监控告警配置</span></a></h3><h4 id="alertmanager配置" tabindex="-1"><a class="header-anchor" href="#alertmanager配置"><span>Alertmanager配置：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 下载安装Alertmanager</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/prometheus/alertmanager/releases/download/v0.25.0/alertmanager-0.25.0.linux-amd64.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -xzf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> alertmanager-0.25.0.linux-amd64.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> alertmanager-0.25.0.linux-amd64/alertmanager</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> alertmanager-0.25.0.linux-amd64/amtool</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prometheus:prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/alertmanager</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/amtool</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 创建配置目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/alertmanager</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prometheus:prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/alertmanager</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 配置Alertmanager</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/alertmanager/alertmanager.yml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">global:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  smtp_smarthost: &#39;smtp.163.com:587&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  smtp_from: &#39;monitor@company.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  smtp_auth_username: &#39;monitor@company.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  smtp_auth_password: &#39;password123&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">route:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  group_by: [&#39;alertname&#39;, &#39;instance&#39;]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  group_wait: 10s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  group_interval: 10s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  repeat_interval: 1h</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  receiver: &#39;web.hook&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">receivers:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  - name: &#39;web.hook&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    email_configs:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      - to: &#39;admin@company.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        subject: &#39;Alert: {{ .GroupLabels.alertname }}&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        body: |</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          {{ range .Alerts }}</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          Alert: {{ .Annotations.summary }}</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          Description: {{ .Annotations.description }}</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          Instance: {{ .Labels.instance }}</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          Severity: {{ .Labels.severity }}</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          {{ end }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    webhook_configs:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      - url: &#39;http://localhost:8080/webhook&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        send_resolved: true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">inhibit_rules:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  - source_match:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      severity: &#39;critical&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    target_match:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      severity: &#39;warning&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    equal: [&#39;alertname&#39;, &#39;instance&#39;]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prometheus:prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/alertmanager/alertmanager.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 4. 创建systemd服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/systemd/system/alertmanager.service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Description=Alertmanager</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Wants=network-online.target</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">After=network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">User=prometheus</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Group=prometheus</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Type=simple</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ExecStart=/usr/local/bin/alertmanager \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    --config.file /etc/alertmanager/alertmanager.yml \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    --storage.path /var/lib/alertmanager/ \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    --web.listen-address=0.0.0.0:9093</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">WantedBy=multi-user.target</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 5. 启动服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> alertmanager</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> alertmanager</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="prometheus告警规则配置" tabindex="-1"><a class="header-anchor" href="#prometheus告警规则配置"><span>Prometheus告警规则配置：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 创建规则目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/prometheus/rules</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 系统监控规则</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/prometheus/rules/system.yml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">groups:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  - name: system.rules</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    rules:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      # CPU使用率过高</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      - alert: HighCpuUsage</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        expr: 100 - (avg by(instance) (irate(node_cpu_seconds_total{mode=&quot;idle&quot;}[5m])) * 100) &gt; 80</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        for: 5m</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        labels:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          severity: warning</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        annotations:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          summary: &quot;High CPU usage detected&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          description: &quot;CPU usage is above 80% for more than 5 minutes on {{ $labels.instance }}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      # 内存使用率过高</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      - alert: HighMemoryUsage</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        expr: (node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / node_memory_MemTotal_bytes * 100 &gt; 85</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        for: 5m</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        labels:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          severity: warning</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        annotations:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          summary: &quot;High memory usage detected&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          description: &quot;Memory usage is above 85% on {{ $labels.instance }}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      # 磁盘空间不足</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      - alert: HighDiskUsage</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        expr: (node_filesystem_size_bytes - node_filesystem_avail_bytes) / node_filesystem_size_bytes * 100 &gt; 90</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        for: 5m</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        labels:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          severity: critical</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        annotations:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          summary: &quot;High disk usage detected&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          description: &quot;Disk usage is above 90% on {{ $labels.instance }} filesystem {{ $labels.mountpoint }}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      # 系统负载过高</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      - alert: HighSystemLoad</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        expr: node_load15 / count by(instance) (node_cpu_seconds_total{mode=&quot;idle&quot;}) &gt; 2</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        for: 5m</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        labels:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          severity: warning</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        annotations:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          summary: &quot;High system load detected&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          description: &quot;System load is above 2.0 on {{ $labels.instance }}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      # 服务器宕机</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      - alert: InstanceDown</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        expr: up == 0</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        for: 1m</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        labels:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          severity: critical</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        annotations:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          summary: &quot;Instance down&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          description: &quot;Instance {{ $labels.instance }} has been down for more than 1 minute&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 应用监控规则</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/prometheus/rules/application.yml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">groups:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  - name: application.rules</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    rules:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      # HTTP响应时间过长</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      - alert: HighHttpResponseTime</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) &gt; 0.5</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        for: 5m</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        labels:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          severity: warning</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        annotations:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          summary: &quot;High HTTP response time&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          description: &quot;95% of HTTP requests take more than 0.5s on {{ $labels.instance }}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      # HTTP错误率过高</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      - alert: HighHttpErrorRate</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        expr: rate(http_requests_total{code=~&quot;5..&quot;}[5m]) / rate(http_requests_total[5m]) * 100 &gt; 5</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        for: 5m</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        labels:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          severity: critical</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        annotations:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          summary: &quot;High HTTP error rate&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          description: &quot;HTTP error rate is above 5% on {{ $labels.instance }}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      # 数据库连接数过高</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      - alert: HighDatabaseConnections</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        expr: mysql_global_status_threads_connected / mysql_global_variables_max_connections * 100 &gt; 80</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        for: 5m</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        labels:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          severity: warning</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        annotations:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          summary: &quot;High database connections&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          description: &quot;Database connections usage is above 80% on {{ $labels.instance }}&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 4. 重载Prometheus配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -X</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> POST</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://localhost:9090/-/reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="二、日志管理详细操作指南" tabindex="-1"><a class="header-anchor" href="#二、日志管理详细操作指南"><span>二、日志管理详细操作指南</span></a></h2><h3 id="_2-1-elk-stack部署" tabindex="-1"><a class="header-anchor" href="#_2-1-elk-stack部署"><span>2.1 ELK Stack部署</span></a></h3><h4 id="elasticsearch安装配置" tabindex="-1"><a class="header-anchor" href="#elasticsearch安装配置"><span>Elasticsearch安装配置：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 安装Java</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> java-11-openjdk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> java-11-openjdk-devel</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 添加Elasticsearch仓库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://artifacts.elastic.co/GPG-KEY-elasticsearch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/yum.repos.d/elasticsearch.repo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[elasticsearch]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">name=Elasticsearch repository for 8.x packages</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">baseurl=https://artifacts.elastic.co/packages/8.x/yum</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">gpgcheck=1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">enabled=0</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">autorefresh=1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">type=rpm-md</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 安装Elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --enablerepo=elasticsearch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> elasticsearch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 4. 配置Elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/elasticsearch/elasticsearch.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cluster.name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> production-cluster</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">node.name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> node-1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">path.data:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/lib/elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">path.logs:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">network.host:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">http.port:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 9200</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">discovery.type:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> single-node</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安全配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xpack.security.enabled:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xpack.security.enrollment.enabled:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xpack.security.http.ssl:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  enabled:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xpack.security.transport.ssl:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  enabled:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># JVM配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/elasticsearch/jvm.options</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-Xms2g</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-Xmx2g</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 5. 启动服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> elasticsearch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 6. 设置密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/share/elasticsearch/bin/elasticsearch-setup-passwords</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> interactive</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 7. 防火墙配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-port=9200/tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="logstash安装配置" tabindex="-1"><a class="header-anchor" href="#logstash安装配置"><span>Logstash安装配置：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 安装Logstash</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --enablerepo=elasticsearch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logstash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 配置Logstash管道</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/logstash/conf.d/beats-input.conf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">input {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  beats {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    port =&gt; 5044</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">filter {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  if [fileset][module] == &quot;system&quot; {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if [fileset][name] == &quot;auth&quot; {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      grok {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        match =&gt; { &quot;message&quot; =&gt; &quot;%{SYSLOGTIMESTAMP:timestamp} %{IPORHOST:server} %{PROG:program}: %{GREEDYDATA:content}&quot; }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    else if [fileset][name] == &quot;syslog&quot; {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      grok {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        match =&gt; { &quot;message&quot; =&gt; &quot;%{SYSLOGTIMESTAMP:timestamp} %{IPORHOST:server} %{PROG:program}: %{GREEDYDATA:content}&quot; }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  if [fields][log_type] == &quot;nginx_access&quot; {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    grok {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      match =&gt; { &quot;message&quot; =&gt; &quot;%{NGINXACCESS}&quot; }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    date {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      match =&gt; [ &quot;timestamp&quot;, &quot;dd/MMM/yyyy:HH:mm:ss Z&quot; ]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    mutate {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      convert =&gt; { &quot;response&quot; =&gt; &quot;integer&quot; }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      convert =&gt; { &quot;bytes&quot; =&gt; &quot;integer&quot; }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      convert =&gt; { &quot;responsetime&quot; =&gt; &quot;float&quot; }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">output {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  elasticsearch {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    hosts =&gt; [&quot;localhost:9200&quot;]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    user =&gt; &quot;elastic&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    password =&gt; &quot;password123&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    index =&gt; &quot;%{[@metadata][beat]}-%{[@metadata][version]}-%{+YYYY.MM.dd}&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 配置JVM</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/logstash/jvm.options</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-Xms1g</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-Xmx1g</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 4. 启动服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logstash</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logstash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 5. 防火墙配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-port=5044/tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="kibana安装配置" tabindex="-1"><a class="header-anchor" href="#kibana安装配置"><span>Kibana安装配置：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 安装Kibana</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --enablerepo=elasticsearch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kibana</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 配置Kibana</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/kibana/kibana.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">server.port:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5601</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">server.host:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;0.0.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">elasticsearch.hosts:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://localhost:9200&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">elasticsearch.username:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;kibana_system&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">elasticsearch.password:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;password123&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安全配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xpack.security.enabled:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xpack.encryptedSavedObjects.encryptionKey:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;fhjskloppd678ehkdfdlliverpoolfcr&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 启动服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kibana</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kibana</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 4. 防火墙配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-port=5601/tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="filebeat配置-在客户端服务器" tabindex="-1"><a class="header-anchor" href="#filebeat配置-在客户端服务器"><span>Filebeat配置（在客户端服务器）：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 安装Filebeat</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --enablerepo=elasticsearch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> filebeat</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 配置Filebeat</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/filebeat/filebeat.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">filebeat.inputs:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> type:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> log</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  enabled:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  paths:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/messages</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/secure</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  fields:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    log_type:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> system</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  fields_under_root:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> type:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> log</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  enabled:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  paths:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/nginx/access.log</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  fields:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    log_type:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx_access</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  fields_under_root:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> type:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> log</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  enabled:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  paths:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/nginx/error.log</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  fields:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    log_type:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx_error</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  fields_under_root:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">output.logstash:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  hosts:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;192.168.1.100:5044&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">processors:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add_host_metadata:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      when.not.contains.tags:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> forwarded</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 启动服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> filebeat</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> filebeat</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-日志分析和告警" tabindex="-1"><a class="header-anchor" href="#_2-2-日志分析和告警"><span>2.2 日志分析和告警</span></a></h3><h4 id="日志分析脚本" tabindex="-1"><a class="header-anchor" href="#日志分析脚本"><span>日志分析脚本：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 系统日志分析脚本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/bin/log_analyzer.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">LOG_FILE=&quot;/var/log/messages&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ERROR_LOG=&quot;/var/log/log_errors.log&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">DATE=$(date +%Y-%m-%d)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 分析错误日志</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;=== 系统错误日志分析 - $DATE ===&quot; &gt; $ERROR_LOG</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 查找磁盘错误</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;磁盘错误:&quot; &gt;&gt; $ERROR_LOG</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">grep -i &quot;disk\\|I/O\\|filesystem&quot; $LOG_FILE | tail -20 &gt;&gt; $ERROR_LOG</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 查找内存错误</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n内存错误:&quot; &gt;&gt; $ERROR_LOG</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">grep -i &quot;memory\\|oom\\|killed&quot; $LOG_FILE | tail -20 &gt;&gt; $ERROR_LOG</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 查找网络错误</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n网络错误:&quot; &gt;&gt; $ERROR_LOG</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">grep -i &quot;network\\|connection\\|timeout&quot; $LOG_FILE | tail -20 &gt;&gt; $ERROR_LOG</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 查找SSH登录失败</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\nSSH登录失败:&quot; &gt;&gt; $ERROR_LOG</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">grep &quot;Failed password&quot; /var/log/secure | tail -20 &gt;&gt; $ERROR_LOG</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 统计错误频率</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n错误统计:&quot; &gt;&gt; $ERROR_LOG</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">grep -i &quot;error\\|fail\\|critical&quot; $LOG_FILE | awk &#39;{print $5}&#39; | sort | uniq -c | sort -nr &gt;&gt; $ERROR_LOG</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 发送邮件告警</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if [ -s $ERROR_LOG ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    mail -s &quot;系统错误日志报告 - $DATE&quot; admin@company.com &lt; $ERROR_LOG</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/log_analyzer.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 配置定时任务</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;0 1 * * * /usr/local/bin/log_analyzer.sh&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">crontab</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. Web访问日志分析</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/bin/web_log_analyzer.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">NGINX_LOG=&quot;/var/log/nginx/access.log&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">REPORT_FILE=&quot;/tmp/web_access_report.txt&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">DATE=$(date +%Y-%m-%d)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;=== Web访问日志分析 - $DATE ===&quot; &gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 访问量统计</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;总访问量:&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">wc -l $NGINX_LOG &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># IP访问排名</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n访问IP排名（前10）:&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">awk &#39;{print $1}&#39; $NGINX_LOG | sort | uniq -c | sort -nr | head -10 &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 页面访问排名</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n页面访问排名（前10）:&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">awk &#39;{print $7}&#39; $NGINX_LOG | sort | uniq -c | sort -nr | head -10 &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 状态码统计</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n状态码统计:&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">awk &#39;{print $9}&#39; $NGINX_LOG | sort | uniq -c | sort -nr &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 404错误页面</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n404错误页面（前10）:&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">awk &#39;$9==404 {print $7}&#39; $NGINX_LOG | sort | uniq -c | sort -nr | head -10 &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 异常IP检测（访问量超过1000的IP）</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n异常访问IP:&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">awk &#39;{print $1}&#39; $NGINX_LOG | sort | uniq -c | awk &#39;$1&gt;1000 {print $2 &quot; - &quot; $1 &quot; 次访问&quot;}&#39; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">cat $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/web_log_analyzer.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="三、性能监控详细操作指南" tabindex="-1"><a class="header-anchor" href="#三、性能监控详细操作指南"><span>三、性能监控详细操作指南</span></a></h2><h3 id="_3-1-系统性能监控" tabindex="-1"><a class="header-anchor" href="#_3-1-系统性能监控"><span>3.1 系统性能监控</span></a></h3><h4 id="系统性能监控脚本" tabindex="-1"><a class="header-anchor" href="#系统性能监控脚本"><span>系统性能监控脚本：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 综合性能监控脚本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/bin/performance_monitor.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">HOSTNAME=$(hostname)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">DATE=$(date &#39;+%Y-%m-%d %H:%M:%S&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">LOG_FILE=&quot;/var/log/performance.log&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;=== 系统性能报告 - $HOSTNAME - $DATE ===&quot; | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># CPU信息</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### CPU使用率 ###&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">top -bn1 | grep &quot;Cpu(s)&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;CPU负载:&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">uptime | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 内存信息</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 内存使用情况 ###&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">free -h | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;内存使用率:&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">free | awk &#39;NR==2{printf &quot;%.2f%%\\n&quot;, $3*100/$2}&#39; | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 磁盘信息</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 磁盘使用情况 ###&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">df -h | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 网络连接</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 网络连接统计 ###&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ss -s | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 进程信息</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 占用资源最多的进程 ###&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;CPU占用前5:&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ps aux --sort=-%cpu | head -6 | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;内存占用前5:&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ps aux --sort=-%mem | head -6 | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># I/O统计</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 磁盘I/O统计 ###&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">iostat -x 1 1 | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查告警条件</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">check_alerts() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # CPU使用率检查</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    CPU_USAGE=$(top -bn1 | grep &quot;Cpu(s)&quot; | awk &#39;{print $2}&#39; | awk -F&#39;%&#39; &#39;{print $1}&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if (( $(echo &quot;$CPU_USAGE &gt; 80&quot; | bc -l) )); then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo &quot;ALERT: CPU使用率超过80%: $CPU_USAGE%&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo &quot;CPU使用率告警: $CPU_USAGE%&quot; | mail -s &quot;CPU告警 - $HOSTNAME&quot; admin@company.com</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # 内存使用率检查</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    MEM_USAGE=$(free | awk &#39;NR==2{printf &quot;%.2f&quot;, $3*100/$2}&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if (( $(echo &quot;$MEM_USAGE &gt; 85&quot; | bc -l) )); then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo &quot;ALERT: 内存使用率超过85%: $MEM_USAGE%&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo &quot;内存使用率告警: $MEM_USAGE%&quot; | mail -s &quot;内存告警 - $HOSTNAME&quot; admin@company.com</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # 磁盘使用率检查</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    DISK_USAGE=$(df -h | awk &#39;$NF==&quot;/&quot;{printf &quot;%d&quot;, $5}&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if [ $DISK_USAGE -gt 90 ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo &quot;ALERT: 根分区使用率超过90%: $DISK_USAGE%&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo &quot;磁盘空间告警: $DISK_USAGE%&quot; | mail -s &quot;磁盘告警 - $HOSTNAME&quot; admin@company.com</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">check_alerts</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;======================================&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/performance_monitor.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 配置定时任务（每5分钟执行一次）</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;*/5 * * * * /usr/local/bin/performance_monitor.sh&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">crontab</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-数据库性能监控" tabindex="-1"><a class="header-anchor" href="#_3-2-数据库性能监控"><span>3.2 数据库性能监控</span></a></h3><h4 id="mysql性能监控" tabindex="-1"><a class="header-anchor" href="#mysql性能监控"><span>MySQL性能监控：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. MySQL性能监控脚本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/bin/mysql_monitor.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">MYSQL_USER=&quot;monitor&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">MYSQL_PASS=&quot;Monitor@123&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">MYSQL_HOST=&quot;localhost&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">DATE=$(date &#39;+%Y-%m-%d %H:%M:%S&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">LOG_FILE=&quot;/var/log/mysql_performance.log&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;=== MySQL性能监控 - $DATE ===&quot; | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 连接数监控</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 连接状态 ###&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mysql -u$MYSQL_USER -p$MYSQL_PASS -h$MYSQL_HOST -e &quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Threads_connected&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Threads_running&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Max_used_connections&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW VARIABLES LIKE &#39;max_connections&#39;;&quot; | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 查询统计</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 查询统计 ###&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mysql -u$MYSQL_USER -p$MYSQL_PASS -h$MYSQL_HOST -e &quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Queries&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Questions&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Slow_queries&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Com_select&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Com_insert&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Com_update&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Com_delete&#39;;&quot; | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># InnoDB状态</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### InnoDB状态 ###&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mysql -u$MYSQL_USER -p$MYSQL_PASS -h$MYSQL_HOST -e &quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Innodb_buffer_pool_read_requests&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Innodb_buffer_pool_reads&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Innodb_buffer_pool_pages_total&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Innodb_buffer_pool_pages_free&#39;;&quot; | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 锁状态</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 锁状态 ###&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mysql -u$MYSQL_USER -p$MYSQL_PASS -h$MYSQL_HOST -e &quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Table_locks_waited&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SHOW STATUS LIKE &#39;Table_locks_immediate&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SELECT * FROM information_schema.INNODB_LOCKS;&quot; | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 慢查询检查</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 当前正在执行的查询 ###&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mysql -u$MYSQL_USER -p$MYSQL_PASS -h$MYSQL_HOST -e &quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SELECT ID, USER, HOST, DB, COMMAND, TIME, STATE, INFO </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">FROM information_schema.PROCESSLIST </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">WHERE COMMAND != &#39;Sleep&#39; AND TIME &gt; 5 </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ORDER BY TIME DESC;&quot; | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 告警检查</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">check_mysql_alerts() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # 连接数检查</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    CONNECTIONS=$(mysql -u$MYSQL_USER -p$MYSQL_PASS -h$MYSQL_HOST -e &quot;SHOW STATUS LIKE &#39;Threads_connected&#39;;&quot; | awk &#39;NR==2 {print $2}&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    MAX_CONNECTIONS=$(mysql -u$MYSQL_USER -p$MYSQL_PASS -h$MYSQL_HOST -e &quot;SHOW VARIABLES LIKE &#39;max_connections&#39;;&quot; | awk &#39;NR==2 {print $2}&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    CONNECTION_USAGE=$(echo &quot;scale=2; $CONNECTIONS * 100 / $MAX_CONNECTIONS&quot; | bc)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if (( $(echo &quot;$CONNECTION_USAGE &gt; 80&quot; | bc -l) )); then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo &quot;ALERT: MySQL连接数使用率超过80%: $CONNECTION_USAGE%&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo &quot;MySQL连接数告警: $CONNECTION_USAGE%&quot; | mail -s &quot;MySQL连接数告警&quot; admin@company.com</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    # 慢查询检查</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    SLOW_QUERIES=$(mysql -u$MYSQL_USER -p$MYSQL_PASS -h$MYSQL_HOST -e &quot;SHOW STATUS LIKE &#39;Slow_queries&#39;;&quot; | awk &#39;NR==2 {print $2}&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if [ $SLOW_QUERIES -gt 100 ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo &quot;ALERT: 慢查询数量过多: $SLOW_QUERIES&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">check_mysql_alerts</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;======================================&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/mysql_monitor.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 配置定时任务</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;*/10 * * * * /usr/local/bin/mysql_monitor.sh&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">crontab</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="四、成本优化详细操作指南" tabindex="-1"><a class="header-anchor" href="#四、成本优化详细操作指南"><span>四、成本优化详细操作指南</span></a></h2><h3 id="_4-1-资源使用分析" tabindex="-1"><a class="header-anchor" href="#_4-1-资源使用分析"><span>4.1 资源使用分析</span></a></h3><h4 id="服务器资源分析脚本" tabindex="-1"><a class="header-anchor" href="#服务器资源分析脚本"><span>服务器资源分析脚本：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 资源使用分析脚本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/bin/resource_analyzer.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">HOSTNAME=$(hostname)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">DATE=$(date &#39;+%Y-%m-%d %H:%M:%S&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">REPORT_FILE=&quot;/tmp/resource_report_$(date +%Y%m%d).txt&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;=== 服务器资源使用分析报告 - $HOSTNAME - $DATE ===&quot; &gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># CPU分析</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### CPU使用分析 ###&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;CPU核心数: $(nproc)&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;CPU型号: $(lscpu | grep &#39;Model name&#39; | awk -F: &#39;{print $2}&#39; | xargs)&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 过去24小时平均CPU使用率</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;过去24小时平均CPU使用率:&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sar -u 1 1 | tail -1 | awk &#39;{printf &quot;用户: %.2f%%, 系统: %.2f%%, 空闲: %.2f%%\\n&quot;, $3, $5, $8}&#39; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 内存分析</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 内存使用分析 ###&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;总内存: $(free -h | awk &#39;NR==2{print $2}&#39;)&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;已使用: $(free -h | awk &#39;NR==2{print $3}&#39;)&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;可用内存: $(free -h | awk &#39;NR==2{print $7}&#39;)&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;使用率: $(free | awk &#39;NR==2{printf &quot;%.2f%%\\n&quot;, $3*100/$2}&#39;)&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 内存占用前10进程</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n内存占用前10进程:&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ps aux --sort=-%mem | head -11 | awk &#39;{printf &quot;%-10s %-8s %-8s %s\\n&quot;, $1, $4&quot;%&quot;, $6/1024&quot;MB&quot;, $11}&#39; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 磁盘分析</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 磁盘使用分析 ###&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">df -h &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 大文件检查</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n大文件检查（&gt;100MB）:&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">find / -type f -size +100M -exec ls -lh {} \\; 2&gt;/dev/null | head -10 &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 网络使用分析</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 网络使用分析 ###&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;网络接口:&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ip addr show | grep -E &#39;^[0-9]+:&#39; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 服务分析</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 运行服务分析 ###&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">systemctl list-units --type=service --state=running | wc -l | awk &#39;{print &quot;运行中的服务数量: &quot; $1}&#39; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 优化建议</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 优化建议 ###&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># CPU优化建议</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">CPU_IDLE=$(sar -u 1 1 | tail -1 | awk &#39;{print $8}&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if (( $(echo &quot;$CPU_IDLE &lt; 20&quot; | bc -l) )); then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;- CPU使用率过高，建议升级CPU或优化应用程序&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">elif (( $(echo &quot;$CPU_IDLE &gt; 80&quot; | bc -l) )); then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;- CPU资源充裕，可考虑降低配置或部署更多应用&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 内存优化建议</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">MEM_USAGE=$(free | awk &#39;NR==2{printf &quot;%.2f&quot;, $3*100/$2}&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if (( $(echo &quot;$MEM_USAGE &gt; 85&quot; | bc -l) )); then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;- 内存使用率过高，建议增加内存或优化应用&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">elif (( $(echo &quot;$MEM_USAGE &lt; 30&quot; | bc -l) )); then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;- 内存使用率较低，可考虑降低内存配置&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 磁盘优化建议</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">DISK_USAGE=$(df -h / | awk &#39;NR==2 {print $5}&#39; | sed &#39;s/%//&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if [ $DISK_USAGE -gt 85 ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;- 磁盘空间不足，建议清理或扩容&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">elif [ $DISK_USAGE -lt 30 ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;- 磁盘使用率较低，配置可能过大&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n报告生成时间: $DATE&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">cat $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/resource_analyzer.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 自动清理脚本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/bin/auto_cleanup.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">LOG_FILE=&quot;/var/log/cleanup.log&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">DATE=$(date &#39;+%Y-%m-%d %H:%M:%S&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;=== 自动清理任务开始 - $DATE ===&quot; | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 清理系统日志（保留30天）</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;清理系统日志...&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">journalctl --vacuum-time=30d 2&gt;&amp;1 | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 清理旧的日志文件</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;清理旧日志文件...&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">find /var/log -name &quot;*.log.*&quot; -mtime +30 -delete 2&gt;&amp;1 | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">find /var/log -name &quot;*.gz&quot; -mtime +30 -delete 2&gt;&amp;1 | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 清理临时文件</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;清理临时文件...&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">find /tmp -type f -mtime +7 -delete 2&gt;&amp;1 | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">find /var/tmp -type f -mtime +7 -delete 2&gt;&amp;1 | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 清理包缓存</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;清理包缓存...&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">dnf clean all 2&gt;&amp;1 | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 清理内核旧版本（保留最新3个版本）</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;清理旧内核版本...&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">dnf remove $(dnf repoquery --installonly --latest-limit=-3 -q) -y 2&gt;&amp;1 | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 统计清理效果</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;清理完成统计:&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">df -h / | tee -a $LOG_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;=== 自动清理任务完成 - $(date &#39;+%Y-%m-%d %H:%M:%S&#39;) ===&quot; | tee -a $LOG_FILE</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/auto_cleanup.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 配置定时清理任务</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;0 2 * * 0 /usr/local/bin/auto_cleanup.sh&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">crontab</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-云服务成本优化" tabindex="-1"><a class="header-anchor" href="#_4-2-云服务成本优化"><span>4.2 云服务成本优化</span></a></h3><h4 id="阿里云成本分析脚本" tabindex="-1"><a class="header-anchor" href="#阿里云成本分析脚本"><span>阿里云成本分析脚本：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 阿里云成本分析脚本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/bin/aliyun_cost_analyzer.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 配置阿里云CLI</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">REGION=&quot;cn-hangzhou&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">REPORT_FILE=&quot;/tmp/aliyun_cost_report_$(date +%Y%m%d).txt&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">DATE=$(date &#39;+%Y-%m-%d %H:%M:%S&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;=== 阿里云资源成本分析报告 - $DATE ===&quot; &gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># ECS实例分析</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### ECS实例分析 ###&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">aliyun ecs DescribeInstances --RegionId $REGION | jq -r &#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.Instances.Instance[] | </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;实例ID: \\(.InstanceId), 规格: \\(.InstanceType), 状态: \\(.Status), 创建时间: \\(.CreationTime)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 获取ECS实例数量</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ECS_COUNT=$(aliyun ecs DescribeInstances --RegionId $REGION | jq &#39;.Instances.Instance | length&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;ECS实例总数: $ECS_COUNT&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># RDS实例分析</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### RDS实例分析 ###&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">aliyun rds DescribeDBInstances --RegionId $REGION | jq -r &#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.Items.DBInstance[] | </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;实例ID: \\(.DBInstanceId), 规格: \\(.DBInstanceClass), 状态: \\(.DBInstanceStatus), 存储: \\(.DBInstanceStorage)GB&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># SLB实例分析</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 负载均衡实例分析 ###&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">aliyun slb DescribeLoadBalancers --RegionId $REGION | jq -r &#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.LoadBalancers.LoadBalancer[] | </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;实例ID: \\(.LoadBalancerId), 类型: \\(.LoadBalancerSpec), 状态: \\(.LoadBalancerStatus)&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 优化建议</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 成本优化建议 ###&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查停止的ECS实例</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">STOPPED_ECS=$(aliyun ecs DescribeInstances --RegionId $REGION | jq &#39;.Instances.Instance[] | select(.Status==&quot;Stopped&quot;) | .InstanceId&#39; | wc -l)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if [ $STOPPED_ECS -gt 0 ]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;- 发现 $STOPPED_ECS 台停止的ECS实例，建议释放或转换为按量付费&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查低使用率实例（需要配合监控数据）</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;- 建议定期检查实例CPU、内存使用率，优化配置&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;- 考虑使用预留实例或包年包月获得折扣&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;- 评估是否可以使用竞价实例降低成本&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;- 设置费用预算和告警，避免意外超支&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">cat $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/aliyun_cost_analyzer.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 资源利用率监控脚本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/bin/resource_utilization.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">REPORT_FILE=&quot;/tmp/utilization_report_$(date +%Y%m%d).txt&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">DATE=$(date &#39;+%Y-%m-%d %H:%M:%S&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;=== 资源利用率报告 - $DATE ===&quot; &gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 过去24小时的平均利用率</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 过去24小时资源利用率 ###&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># CPU利用率</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">CPU_AVG=$(sar -u -s $(date -d &#39;1 day ago&#39; &#39;+%H:%M:%S&#39;) | grep Average | awk &#39;{print 100-$8}&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;平均CPU利用率: \${CPU_AVG}%&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 内存利用率</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">MEM_TOTAL=$(free -b | awk &#39;NR==2{print $2}&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">MEM_USED=$(free -b | awk &#39;NR==2{print $3}&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">MEM_USAGE=$(echo &quot;scale=2; $MEM_USED * 100 / $MEM_TOTAL&quot; | bc)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;当前内存利用率: \${MEM_USAGE}%&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 磁盘利用率</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n磁盘利用率:&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">df -h | awk &#39;NR&gt;1 {print $6 &quot;: &quot; $5}&#39; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 网络利用率</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n网络统计:&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">cat /proc/net/dev | awk &#39;NR&gt;2 {printf &quot;接口%s: 接收%sMB, 发送%sMB\\n&quot;, $1, $2/1024/1024, $10/1024/1024}&#39; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 资源优化建议</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 资源优化建议 ###&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if (( $(echo &quot;$CPU_AVG &lt; 20&quot; | bc -l) )); then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;- CPU利用率较低(\${CPU_AVG}%)，考虑降低配置或整合服务&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if (( $(echo &quot;$MEM_USAGE &lt; 30&quot; | bc -l) )); then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;- 内存利用率较低(\${MEM_USAGE}%)，考虑减少内存配置&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查是否有长期运行但CPU使用率很低的进程</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n长期运行的低CPU进程:&quot; &gt;&gt; $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ps -eo pid,ppid,cmd,%cpu,time --sort=-%cpu | awk &#39;$4&lt;1.0 &amp;&amp; $5&gt;&quot;01:00:00&quot; {print}&#39; | head -10 &gt;&gt; $REPORT_FILE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">cat $REPORT_FILE</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/resource_utilization.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="面试重点问题详解" tabindex="-1"><a class="header-anchor" href="#面试重点问题详解"><span>面试重点问题详解</span></a></h2><h3 id="q1-如何设计一套完整的监控体系" tabindex="-1"><a class="header-anchor" href="#q1-如何设计一套完整的监控体系"><span>Q1: 如何设计一套完整的监控体系？</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>A: 监控体系设计要点：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 监控层次设计：</span></span>
<span class="line"><span>   - 基础设施监控：硬件、操作系统、网络</span></span>
<span class="line"><span>   - 应用层监控：中间件、数据库、应用服务</span></span>
<span class="line"><span>   - 业务监控：关键业务指标、用户体验</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 监控工具选择：</span></span>
<span class="line"><span>   - 系统监控：Zabbix/Prometheus + Grafana</span></span>
<span class="line"><span>   - 日志监控：ELK Stack/EFK Stack</span></span>
<span class="line"><span>   - APM监控：SkyWalking/Pinpoint</span></span>
<span class="line"><span>   - 业务监控：自定义指标收集</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 告警策略：</span></span>
<span class="line"><span>   - 分级告警：Critical/Warning/Info</span></span>
<span class="line"><span>   - 告警收敛：避免告警风暴</span></span>
<span class="line"><span>   - 通知渠道：邮件/短信/微信/钉钉</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 监控覆盖范围：</span></span>
<span class="line"><span>   - 可用性监控：服务健康检查</span></span>
<span class="line"><span>   - 性能监控：响应时间、吞吐量</span></span>
<span class="line"><span>   - 资源监控：CPU、内存、磁盘、网络</span></span>
<span class="line"><span>   - 安全监控：登录异常、权限变更</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="q2-如何处理监控系统的海量数据" tabindex="-1"><a class="header-anchor" href="#q2-如何处理监控系统的海量数据"><span>Q2: 如何处理监控系统的海量数据？</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>A: 海量监控数据处理策略：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 数据收集优化：</span></span>
<span class="line"><span>   - 采样策略：关键指标高频采集，普通指标低频采集</span></span>
<span class="line"><span>   - 数据压缩：使用高效的数据格式和压缩算法</span></span>
<span class="line"><span>   - 本地缓存：Agent端本地缓存，批量发送</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 数据存储优化：</span></span>
<span class="line"><span>   - 时序数据库：InfluxDB、TimescaleDB</span></span>
<span class="line"><span>   - 数据分层存储：热数据SSD，冷数据HDD</span></span>
<span class="line"><span>   - 数据生命周期：自动清理过期数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 数据查询优化：</span></span>
<span class="line"><span>   - 索引优化：合理设计时间序列索引</span></span>
<span class="line"><span>   - 预聚合：预计算常用查询结果</span></span>
<span class="line"><span>   - 缓存策略：查询结果缓存</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 架构扩展：</span></span>
<span class="line"><span>   - 水平扩展：多节点集群部署</span></span>
<span class="line"><span>   - 读写分离：分离查询和写入负载</span></span>
<span class="line"><span>   - 负载均衡：分布式存储和查询</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="q3-如何进行有效的成本优化" tabindex="-1"><a class="header-anchor" href="#q3-如何进行有效的成本优化"><span>Q3: 如何进行有效的成本优化？</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>A: 成本优化策略：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 资源使用分析：</span></span>
<span class="line"><span>   - 定期资源使用率报告</span></span>
<span class="line"><span>   - 识别低使用率资源</span></span>
<span class="line"><span>   - 分析资源使用趋势</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 技术优化：</span></span>
<span class="line"><span>   - 服务器整合：虚拟化技术</span></span>
<span class="line"><span>   - 自动化运维：减少人工成本</span></span>
<span class="line"><span>   - 性能调优：提高资源利用率</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 采购策略优化：</span></span>
<span class="line"><span>   - 预留实例：长期稳定业务</span></span>
<span class="line"><span>   - 竞价实例：非关键业务</span></span>
<span class="line"><span>   - 包年包月：获得折扣优惠</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 监控和控制：</span></span>
<span class="line"><span>   - 成本监控工具：实时费用跟踪</span></span>
<span class="line"><span>   - 预算控制：设置费用预警</span></span>
<span class="line"><span>   - 定期审查：月度成本分析</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="q4-如何设计日志管理策略" tabindex="-1"><a class="header-anchor" href="#q4-如何设计日志管理策略"><span>Q4: 如何设计日志管理策略？</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>A: 日志管理策略设计：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 日志分类：</span></span>
<span class="line"><span>   - 系统日志：操作系统、硬件日志</span></span>
<span class="line"><span>   - 应用日志：应用程序运行日志</span></span>
<span class="line"><span>   - 访问日志：Web服务器访问记录</span></span>
<span class="line"><span>   - 安全日志：审计、安全事件日志</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 日志收集：</span></span>
<span class="line"><span>   - 集中收集：统一日志收集平台</span></span>
<span class="line"><span>   - 实时传输：实时或近实时传输</span></span>
<span class="line"><span>   - 格式标准化：统一日志格式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 日志存储：</span></span>
<span class="line"><span>   - 分层存储：热、温、冷数据分层</span></span>
<span class="line"><span>   - 压缩存储：节省存储空间</span></span>
<span class="line"><span>   - 备份策略：关键日志异地备份</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 日志分析：</span></span>
<span class="line"><span>   - 全文搜索：快速定位问题</span></span>
<span class="line"><span>   - 统计分析：趋势分析、异常检测</span></span>
<span class="line"><span>   - 可视化展示：图表展示分析结果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 生命周期管理：</span></span>
<span class="line"><span>   - 保留策略：不同类型日志保留期限</span></span>
<span class="line"><span>   - 自动清理：自动删除过期日志</span></span>
<span class="line"><span>   - 合规要求：满足法规要求</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="实战练习建议" tabindex="-1"><a class="header-anchor" href="#实战练习建议"><span>实战练习建议</span></a></h2><h3 id="技能提升路径" tabindex="-1"><a class="header-anchor" href="#技能提升路径"><span>技能提升路径</span></a></h3><ol><li><strong>监控系统实战</strong>：搭建完整的Zabbix/Prometheus监控环境</li><li><strong>日志分析实战</strong>：部署ELK Stack，分析实际日志数据</li><li><strong>自动化脚本开发</strong>：编写监控、告警、清理脚本</li><li><strong>性能调优实战</strong>：在测试环境中进行性能压测和优化</li></ol><h3 id="面试准备要点" tabindex="-1"><a class="header-anchor" href="#面试准备要点"><span>面试准备要点</span></a></h3><ol><li><strong>监控指标设计</strong>：能够设计合理的监控指标体系</li><li><strong>告警策略制定</strong>：能够制定有效的告警策略</li><li><strong>成本控制经验</strong>：有实际的成本优化案例</li><li><strong>故障处理经验</strong>：通过监控快速定位和解决问题</li></ol><hr><p><em>建议结合实际工作环境进行深入实践，积累丰富的监控运维经验。</em></p>`,70)]))}const d=i(e,[["render",p]]),r=JSON.parse(`{"path":"/%E8%BF%90%E7%BB%B4%E7%AC%94%E8%AE%B0/%E5%BA%94%E8%81%98%E6%8C%87%E5%8D%9702-%E7%9B%91%E6%8E%A7%E4%BC%98%E5%8C%96.html","title":"IT系统运维工程师应聘指南：监控优化专项","lang":"zh-CN","frontmatter":{"title":"IT系统运维工程师应聘指南：监控优化专项","icon":"chart-line","date":"2024-03-05T00:00:00.000Z","category":["运维笔记","职业发展","面试指导"],"tags":["运维工程师","系统监控","性能优化","成本控制","日志分析"],"description":"深入解析IT运维工程师监控优化职责，涵盖Zabbix、Prometheus等监控工具部署和资源优化策略。","index":true,"cover":"/images/backgrounds/background2-min.png"},"git":{"createdTime":1755445140000,"updatedTime":1755445140000,"contributors":[{"name":"SunshineCloud","username":"SunshineCloud","email":"jamesmith0817@gmail.com","commits":1,"url":"https://github.com/SunshineCloud"}]},"readingTime":{"minutes":19.79,"words":5938},"filePathRelative":"运维笔记/应聘指南02-监控优化.md","excerpt":"\\n<h2>岗位职责重点</h2>\\n<p><strong>监控IT资源使用情况，优化成本;提出成本节约方案，如资源整合、云服务优化等;定期检查系统日志，确保系统稳定且及时发现并解决潜在问题</strong></p>\\n<hr>\\n<h2>一、监控系统部署详细操作指南</h2>\\n<h3>1.1 Zabbix监控系统部署</h3>\\n<h4>Zabbix Server安装配置：</h4>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code class=\\"language-bash\\"><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 1. 系统环境准备（CentOS 8）</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">dnf</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> update</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -y</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">dnf</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -y</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> wget</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> curl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> vim</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 2. 安装Zabbix仓库</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">rpm</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -Uvh</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> https://repo.zabbix.com/zabbix/6.0/rhel/8/x86_64/zabbix-release-6.0-4.el8.noarch.rpm</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">dnf</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> clean</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> all</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 3. 安装Zabbix服务器和Web前端</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">dnf</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -y</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> zabbix-server-mysql</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> zabbix-web-mysql</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> zabbix-apache-conf</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> zabbix-sql-scripts</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> zabbix-selinux-policy</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 4. 安装MariaDB数据库</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">dnf</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -y</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> mariadb-server</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> mariadb</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> start</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> mariadb</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> enable</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> mariadb</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 5. 配置数据库</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">mysql_secure_installation</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">mysql</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -uroot</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -p</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">CREATE</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> DATABASE</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> zabbix</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> CHARACTER</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> SET</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> utf8mb4</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> COLLATE</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> utf8mb4_bin</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">CREATE</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> USER</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 'zabbix'@'localhost'</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> IDENTIFIED</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> BY</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 'Zabbix@123!'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">GRANT</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> ALL</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> PRIVILEGES</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> ON</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> zabbix.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">*</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> TO</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 'zabbix'@'localhost'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">SET</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> GLOBAL</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> log_bin_trust_function_creators</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> =</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 1</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">quit</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 6. 导入数据库结构</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">zcat</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> /usr/share/zabbix-sql-scripts/mysql/server.sql.gz</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> | </span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">mysql</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --default-character-set=utf8mb4</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -uzabbix</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -p</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> zabbix</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 7. 配置Zabbix服务器</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">vi</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> /etc/zabbix/zabbix_server.conf</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">DBPassword</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">Zabbix@123!</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">DBHost</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">localhost</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">DBName</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">zabbix</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">DBUser</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">zabbix</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 配置日志级别和文件大小</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">LogLevel</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">3</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">LogFile</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">/var/log/zabbix/zabbix_server.log</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">LogFileSize</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">100</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 配置缓存大小</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">CacheSize</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">128M</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">HistoryCacheSize</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">64M</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">HistoryIndexCacheSize</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">32M</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">TrendCacheSize</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">32M</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 8. 配置PHP</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">vi</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> /etc/php-fpm.d/zabbix.conf</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 取消注释并设置时区</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">php_value[date.timezone]</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> =</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> Asia/Shanghai</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 9. 启动服务</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> restart</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> zabbix-server</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> zabbix-agent</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> httpd</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> php-fpm</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> enable</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> zabbix-server</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> zabbix-agent</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> httpd</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> php-fpm</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 10. 防火墙配置</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">firewall-cmd</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --add-service=http</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --permanent</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">firewall-cmd</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --add-port=10051/tcp</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --permanent</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">firewall-cmd</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --reload</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 11. Web界面配置</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 访问 http://server_ip/zabbix</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 默认用户名：Admin，密码：zabbix</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{d as comp,r as data};
