import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a,o as l}from"./app-DbSsbPov.js";const e={};function h(p,s){return l(),n("div",null,s[0]||(s[0]=[a(`<h1 id="it系统运维工程师应聘指南03-故障处理与技术支持专项指南" tabindex="-1"><a class="header-anchor" href="#it系统运维工程师应聘指南03-故障处理与技术支持专项指南"><span>IT系统运维工程师应聘指南03 - 故障处理与技术支持专项指南</span></a></h1><h2 id="岗位职责重点" tabindex="-1"><a class="header-anchor" href="#岗位职责重点"><span>岗位职责重点</span></a></h2><p><strong>快速响应并解决系统故障、网络中断等问题，确保业务连续性;提供技术支持，协助开发人员解决硬件、软件及网络问题;记录故障处理过程，编写故障报告，分析根本原因并制定预防措施</strong></p><hr><h2 id="一、故障诊断详细操作指南" tabindex="-1"><a class="header-anchor" href="#一、故障诊断详细操作指南"><span>一、故障诊断详细操作指南</span></a></h2><h3 id="_1-1-系统故障诊断流程" tabindex="-1"><a class="header-anchor" href="#_1-1-系统故障诊断流程"><span>1.1 系统故障诊断流程</span></a></h3><h4 id="故障分类和优先级定义" tabindex="-1"><a class="header-anchor" href="#故障分类和优先级定义"><span>故障分类和优先级定义：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 故障等级分类</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">P1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 紧急故障（影响全业务）：4小时内解决</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">P2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 重要故障（影响部分业务）：8小时内解决</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">P3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 一般故障（功能缺陷）：24小时内解决</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">P4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 轻微故障（改进建议）：72小时内解决</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 故障类型分类</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 硬件故障：服务器、网络设备、存储设备</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 软件故障：操作系统、应用程序、数据库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 网络故障：连通性、性能、安全</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 人为故障：误操作、配置错误</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="标准故障处理流程" tabindex="-1"><a class="header-anchor" href="#标准故障处理流程"><span>标准故障处理流程：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 故障接收和记录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">故障编号：INC-2024-08-16-001</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">报告时间：2024-08-16</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 14:30:00</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">报告人：张三（业务部门）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">联系方式：13800138000</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">故障现象：Web应用无法访问</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">影响范围：所有用户</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">业务影响：电商网站无法下单</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 初步分析和分级</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">根据影响范围和业务重要性确定故障等级</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">分配给相应技术人员处理</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">设定解决时间目标</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 故障诊断步骤</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">步骤1：确认故障现象</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">步骤2：收集相关信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">步骤3：分析可能原因</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">步骤4：制定处理方案</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">步骤5：实施解决方案</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">步骤6：验证修复效果</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">步骤7：总结和文档化</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-linux系统故障诊断" tabindex="-1"><a class="header-anchor" href="#_1-2-linux系统故障诊断"><span>1.2 Linux系统故障诊断</span></a></h3><h4 id="系统无法启动故障诊断" tabindex="-1"><a class="header-anchor" href="#系统无法启动故障诊断"><span>系统无法启动故障诊断：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 检查硬件状态</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看BIOS/UEFI启动信息</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 检查内存、硬盘、电源状态</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 检查引导加载器</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进入GRUB救援模式</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grub</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rescu</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ls</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grub</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rescu</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hd0,msdos1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grub</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rescu</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">linux</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /vmlinuz-3.10.0-957.el7.x86_64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root=/dev/sda1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grub</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rescu</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">initrd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /initramfs-3.10.0-957.el7.x86_64.img</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grub</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rescu</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">boot</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 单用户模式诊断</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 在GRUB菜单中添加参数</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">linux16</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /vmlinuz...</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> single</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">linux16</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /vmlinuz...</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init=/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 4. 文件系统检查</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fsck</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /dev/sda1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mount</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remount,rw</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 5. 修复系统配置</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 检查/etc/fstab文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/fstab</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 修复错误的挂载点</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 6. 重建initramfs</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dracut</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --force</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /boot/initramfs-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">uname</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.img</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">uname</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 7. 重新安装GRUB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grub2-install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /dev/sda</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grub2-mkconfig</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /boot/grub2/grub.cfg</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="系统性能问题诊断" tabindex="-1"><a class="header-anchor" href="#系统性能问题诊断"><span>系统性能问题诊断：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. CPU性能问题诊断</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看CPU使用率</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">top</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">htop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看CPU详细信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /proc/cpuinfo</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lscpu</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看系统负载</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">uptime</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">w</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 分析CPU使用历史</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 每秒采样，共5次</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/sa/sa16</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 查看历史数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查找CPU占用高的进程</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ps</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> aux</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --sort=-%cpu</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">head</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -20</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pidstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 内存问题诊断</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看内存使用情况</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">free</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -h</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /proc/meminfo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看内存使用详情</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vmstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查找内存占用高的进程</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ps</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> aux</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --sort=-%mem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">head</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -20</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pmap</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">d&gt;  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看进程内存映射</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 检查内存泄漏</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">valgrind</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --tool=memcheck</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --leak-check=full</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./program</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 磁盘I/O问题诊断</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看磁盘使用情况</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">df</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -h</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">du</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看磁盘I/O统计</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iostat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iotop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看磁盘队列和等待</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查找大文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> f</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -size</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +100M</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ls</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -lh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 2&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/dev/null</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 检查磁盘错误</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dmesg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> error</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">smartctl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /dev/sda</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 4. 网络问题诊断</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看网络连接</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">netstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -tulnp</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ss</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -tulnp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看网络统计</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">netstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> DEV</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 网络连通性测试</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 4</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 8.8.8.8</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">traceroute</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 8.8.8.8</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mtr</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 8.8.8.8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># DNS解析测试</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nslookup</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> www.baidu.com</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dig</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> www.baidu.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 端口连通性测试</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">telnet</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 192.168.1.1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 80</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -zv</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 192.168.1.1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 80</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-应用故障诊断" tabindex="-1"><a class="header-anchor" href="#_1-3-应用故障诊断"><span>1.3 应用故障诊断</span></a></h3><h4 id="web应用故障诊断" tabindex="-1"><a class="header-anchor" href="#web应用故障诊断"><span>Web应用故障诊断：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. Nginx故障诊断</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 检查Nginx状态</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 检查配置文件语法</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看Nginx日志</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tail</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/nginx/error.log</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tail</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/nginx/access.log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 检查Nginx进程</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ps</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> aux</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">netstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -tlnp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :80</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 常见Nginx错误处理</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 502 Bad Gateway</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">upstream</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> backend</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 127.0.0.1:8080</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> max_fails=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fail_timeout=30s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 127.0.0.1:8081</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> backup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 504 Gateway Timeout</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">proxy_connect_timeout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 60s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">proxy_send_timeout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 60s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">proxy_read_timeout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 60s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. Tomcat故障诊断</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 检查Tomcat状态</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tomcat</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ps</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> aux</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> java</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看Tomcat日志</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tail</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/tomcat/catalina.out</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tail</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/tomcat/localhost.log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 检查JVM状态</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -l</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 查看Java进程</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -gc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">d&gt;  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看GC情况</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jmap</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -histo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">d&gt;  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看内存使用</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># JVM调优参数</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-Xms2g</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Xmx4g</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-XX:NewRatio</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=3</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-XX:+UseConcMarkSweepGC</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-XX:+UseCMSInitiatingOccupancyOnly</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-XX:CMSInitiatingOccupancyFraction</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=70</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 数据库故障诊断</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># MySQL故障诊断</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysqld</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;SHOW PROCESSLIST;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看MySQL错误日志</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tail</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/mysqld.log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 检查数据库连接</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;SHOW STATUS LIKE &#39;Threads_connected&#39;;&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;SHOW STATUS LIKE &#39;Max_used_connections&#39;;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看慢查询</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;SHOW STATUS LIKE &#39;Slow_queries&#39;;&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysqldumpslow</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> t</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/mysql-slow.log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 检查表锁情况</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;SHOW OPEN TABLES WHERE In_use &gt; 0;&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;SELECT * FROM information_schema.INNODB_LOCKS;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="二、应急响应详细操作指南" tabindex="-1"><a class="header-anchor" href="#二、应急响应详细操作指南"><span>二、应急响应详细操作指南</span></a></h2><h3 id="_2-1-应急响应流程" tabindex="-1"><a class="header-anchor" href="#_2-1-应急响应流程"><span>2.1 应急响应流程</span></a></h3><h4 id="_7×24小时值班体系" tabindex="-1"><a class="header-anchor" href="#_7×24小时值班体系"><span>7×24小时值班体系：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 值班安排表</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">一线值班：初级工程师（接收告警，初步处理）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">二线值班：高级工程师（复杂问题处理）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">三线值班：技术专家（架构级问题）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 值班时间安排</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">白班：09:00-18:00</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">夜班：18:00-09:00</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">节假日：24小时轮班</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 告警接收渠道</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">监控系统告警：Zabbix/Prometheus</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">用户报障：电话/邮件/工单系统</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">业务部门通知：企业微信/钉钉</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 响应时间要求</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">P1故障：5分钟内响应，15分钟内现场或远程处理</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">P2故障：10分钟内响应，30分钟内开始处理</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">P3故障：30分钟内响应，4小时内开始处理</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">P4故障：4小时内响应，次工作日处理</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="应急响应操作手册" tabindex="-1"><a class="header-anchor" href="#应急响应操作手册"><span>应急响应操作手册：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 接收告警后的标准操作</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">步骤1：确认告警信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 告警时间</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 告警内容</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 影响范围</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 联系人信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">步骤2：初步判断</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 确定故障等级</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 评估影响范围</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 决定处理方式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">步骤3：启动应急流程</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 通知相关人员</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 建立沟通群组</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 记录开始时间</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 远程处理标准流程</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 建立安全连接</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 22</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> admin@192.168.1.100</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 或VPN连接后处理</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 收集基础信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hostname</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">uptime</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">df</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -h</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">free</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -h</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">top</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -bn1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">head</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 检查关键服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tomcat</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看系统日志</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">journalctl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tail</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/messages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 3. 现场处理标准流程</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 携带设备清单</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 笔记本电脑</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 网线和转换器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> U盘（包含常用工具）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 万用表（硬件故障）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 串口线（网络设备）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 现场操作记录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">操作时间：2024-08-16</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 15:30:00</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">操作人员：李四</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">操作内容：重启Web服务器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">操作结果：服务恢复正常</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-典型故障应急处理" tabindex="-1"><a class="header-anchor" href="#_2-2-典型故障应急处理"><span>2.2 典型故障应急处理</span></a></h3><h4 id="web服务中断应急处理" tabindex="-1"><a class="header-anchor" href="#web服务中断应急处理"><span>Web服务中断应急处理：</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1. 快速诊断脚本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/bin/web_emergency_check.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;=== Web服务应急检查 $(date) ===&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查Web服务进程</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;### 检查Nginx进程 ###&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if pgrep nginx &gt; /dev/null; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;Nginx进程正常运行&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    systemctl status nginx --no-pager</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;ERROR: Nginx进程未运行！&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;尝试启动Nginx...&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    systemctl start nginx</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    sleep 2</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if pgrep nginx &gt; /dev/null; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo &quot;Nginx启动成功&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo &quot;ERROR: Nginx启动失败，检查配置文件&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        nginx -t</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查端口监听</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 检查端口监听 ###&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if netstat -tlnp | grep :80 &gt; /dev/null; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;端口80正常监听&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;ERROR: 端口80未监听！&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查后端服务</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 检查后端服务 ###&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if pgrep java &gt; /dev/null; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;Java应用进程正常运行&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;ERROR: Java应用进程未运行！&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;尝试启动Tomcat...&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    systemctl start tomcat</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查数据库连接</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 检查数据库连接 ###&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if mysql -u webapp -ppassword -e &quot;SELECT 1&quot; &gt; /dev/null 2&gt;&amp;1; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;数据库连接正常&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;ERROR: 数据库连接失败！&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    systemctl status mysqld --no-pager</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查磁盘空间</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 检查磁盘空间 ###&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">df -h | awk &#39;$5 &gt; 90 {print &quot;WARNING: &quot; $6 &quot; 分区使用率: &quot; $5}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查系统负载</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### 检查系统负载 ###&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">uptime</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># HTTP连通性测试</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo -e &quot;\\n### HTTP连通性测试 ###&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if curl -s --connect-timeout 5 http://localhost/ &gt; /dev/null; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;本地HTTP访问正常&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;ERROR: 本地HTTP访问失败！&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &quot;=== 检查完成 ===&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/web_emergency_check.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2. 自动恢复脚本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/bin/web_auto_recovery.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">LOGFILE=&quot;/var/log/auto_recovery.log&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">DATE=$(date &#39;+%Y-%m-%d %H:%M:%S&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">log_message() {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    echo &quot;[$DATE] $1&quot; | tee -a $LOGFILE</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查并恢复Nginx</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if ! pgrep nginx &gt; /dev/null; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    log_message &quot;检测到Nginx停止，尝试重启...&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    systemctl start nginx</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    sleep 3</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if pgrep nginx &gt; /dev/null; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        log_message &quot;Nginx重启成功&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        log_message &quot;ERROR: Nginx重启失败&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        # 发送告警</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo &quot;Nginx自动重启失败&quot; | mail -s &quot;Web服务告警&quot; admin@company.com</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查并恢复Tomcat</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if ! pgrep java &gt; /dev/null; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    log_message &quot;检测到Tomcat停止，尝试重启...&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    systemctl start tomcat</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    sleep 10</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if pgrep java &gt; /dev/null; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        log_message &quot;Tomcat重启成功&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        log_message &quot;ERROR: Tomcat重启失败&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo &quot;Tomcat自动重启失败&quot; | mail -s &quot;应用服务告警&quot; admin@company.com</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"># 检查并恢复MySQL</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">if ! pgrep mysqld &gt; /dev/null; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    log_message &quot;检测到MySQL停止，尝试重启...&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    systemctl start mysqld</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    sleep 5</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    if pgrep mysqld &gt; /dev/null; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        log_message &quot;MySQL重启成功&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        log_message &quot;ERROR: MySQL重启失败&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        echo &quot;MySQL自动重启失败&quot; | mail -s &quot;数据库服务告警&quot; admin@company.com</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fi</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fi</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/web_auto_recovery.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置定时检查（每分钟检查一次）</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;* * * * * /usr/local/bin/web_auto_recovery.sh&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">crontab</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="三、故障报告编写详细指南" tabindex="-1"><a class="header-anchor" href="#三、故障报告编写详细指南"><span>三、故障报告编写详细指南</span></a></h2><h3 id="_3-1-故障报告模板" tabindex="-1"><a class="header-anchor" href="#_3-1-故障报告模板"><span>3.1 故障报告模板</span></a></h3><h4 id="标准故障报告格式" tabindex="-1"><a class="header-anchor" href="#标准故障报告格式"><span>标准故障报告格式：</span></a></h4><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-markdown"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"># 故障报告</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 基本信息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 故障编号：INC-2024-08-16-001</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 报告人：张三</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 处理人：李四、王五</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 故障等级：P1（紧急）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 发生时间：2024-08-16 14:30:00</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 恢复时间：2024-08-16 16:15:00</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 持续时间：1小时45分钟</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 故障描述</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">### 故障现象</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">用户反映无法访问公司官网，所有页面返回502错误</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">### 影响范围</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 影响用户：所有外部用户</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 影响业务：官网展示、在线咨询、产品介绍</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 影响系统：Web前端服务器、负载均衡器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">### 业务损失评估</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 预估损失用户：约5000人次</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 业务损失：约50万元</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 品牌影响：中等</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 故障时间线</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| 时间 | 事件 | 操作人 |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|------|------|--------|</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| 14:30 | 监控系统发现502错误告警 | 系统自动 |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| 14:32 | 值班人员接收告警并开始处理 | 张三 |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| 14:35 | 确认所有Web服务器返回502错误 | 张三 |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| 14:40 | 检查后端应用服务器，发现Tomcat服务停止 | 李四 |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| 14:45 | 尝试启动Tomcat服务失败 | 李四 |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| 14:50 | 检查系统资源，发现磁盘空间满 | 王五 |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| 15:00 | 清理日志文件，释放磁盘空间 | 王五 |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| 15:15 | 成功启动Tomcat服务 | 李四 |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| 15:20 | Web服务恢复正常，开始监控 | 张三 |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| 16:15 | 确认服务稳定运行，故障解除 | 张三 |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 根因分析</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">### 直接原因</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">应用服务器磁盘空间不足，导致Tomcat服务无法启动</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">### 根本原因</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">1.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 日志轮转配置不当，导致日志文件持续增长</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">2.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 磁盘空间监控阈值设置过高（95%），未能及时告警</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">3.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 日常巡检中未发现磁盘空间增长趋势</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 解决方案</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">### 临时解决方案</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">1.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 手动清理历史日志文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">2.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 重启Tomcat服务</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">3.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 恢复Web服务</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">### 永久解决方案</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">1.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 优化日志轮转配置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">2.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 调整磁盘空间监控阈值至85%</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">3.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 建立自动清理机制</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 预防措施</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">### 技术措施</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">1.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 配置logrotate自动日志轮转</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">2.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 降低磁盘监控阈值并增加告警级别</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">3.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 部署自动清理脚本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">### 管理措施</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">1.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 完善日常巡检清单</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">2.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 建立磁盘空间增长趋势分析机制</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">3.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 定期审查监控告警配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 经验教训</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">1.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 磁盘空间监控应该更加主动</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">2.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 日志管理策略需要定期评估和优化</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">3.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 应急响应中应该更快速地检查基础资源</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 后续跟进</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ ] 在所有服务器上配置日志轮转（负责人：王五，完成时间：2024-08-20）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ ] 调整磁盘空间监控阈值（负责人：张三，完成时间：2024-08-18）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ ] 编写磁盘空间自动清理脚本（负责人：李四，完成时间：2024-08-22）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ ] 更新应急响应手册（负责人：张三，完成时间：2024-08-25）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="面试重点问题详解" tabindex="-1"><a class="header-anchor" href="#面试重点问题详解"><span>面试重点问题详解</span></a></h2><h3 id="q1-描述一次复杂故障的处理过程" tabindex="-1"><a class="header-anchor" href="#q1-描述一次复杂故障的处理过程"><span>Q1: 描述一次复杂故障的处理过程</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>A: 故障处理案例分享：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>故障背景：</span></span>
<span class="line"><span>电商网站在促销活动期间出现大量用户无法下单的问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>处理过程：</span></span>
<span class="line"><span>1. 故障发现（15:30）</span></span>
<span class="line"><span>   - 监控系统显示订单处理成功率下降至30%</span></span>
<span class="line"><span>   - 用户投诉增加，客服部门反馈</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 初步诊断（15:32-15:40）</span></span>
<span class="line"><span>   - 检查Web服务器：正常运行</span></span>
<span class="line"><span>   - 检查应用服务器：CPU使用率正常</span></span>
<span class="line"><span>   - 检查数据库：发现大量锁等待</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 深入分析（15:40-15:50）</span></span>
<span class="line"><span>   - 查看数据库慢查询日志</span></span>
<span class="line"><span>   - 发现orders表上的查询大量超时</span></span>
<span class="line"><span>   - 分析发现缺少订单状态字段的索引</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 解决方案（15:50-16:00）</span></span>
<span class="line"><span>   - 立即添加索引：CREATE INDEX idx_order_status ON orders(status)</span></span>
<span class="line"><span>   - 监控系统性能恢复情况</span></span>
<span class="line"><span>   - 订单处理成功率恢复至98%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 后续优化（次日）</span></span>
<span class="line"><span>   - 全面审查数据库索引策略</span></span>
<span class="line"><span>   - 优化高频查询SQL语句</span></span>
<span class="line"><span>   - 建立性能测试环境</span></span>
<span class="line"><span></span></span>
<span class="line"><span>关键点：</span></span>
<span class="line"><span>- 快速定位到数据库层面</span></span>
<span class="line"><span>- 准确识别索引缺失问题</span></span>
<span class="line"><span>- 及时应用临时解决方案</span></span>
<span class="line"><span>- 制定长期优化计划</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="q2-如何建立有效的故障响应机制" tabindex="-1"><a class="header-anchor" href="#q2-如何建立有效的故障响应机制"><span>Q2: 如何建立有效的故障响应机制？</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>A: 故障响应机制建设：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 监控告警体系：</span></span>
<span class="line"><span>   - 多层次监控：基础设施、应用、业务</span></span>
<span class="line"><span>   - 智能告警：避免告警风暴，减少误报</span></span>
<span class="line"><span>   - 多渠道通知：邮件、短信、企业微信</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 值班体系：</span></span>
<span class="line"><span>   - 分层值班：一线、二线、三线</span></span>
<span class="line"><span>   - 轮班制度：7×24小时覆盖</span></span>
<span class="line"><span>   - 升级机制：明确升级条件和流程</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 应急流程：</span></span>
<span class="line"><span>   - 标准化流程：故障分级、响应时间、处理步骤</span></span>
<span class="line"><span>   - 责任分工：明确各角色职责</span></span>
<span class="line"><span>   - 沟通机制：建立故障沟通群组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 工具平台：</span></span>
<span class="line"><span>   - 工单系统：故障记录和跟踪</span></span>
<span class="line"><span>   - 知识库：常见问题解决方案</span></span>
<span class="line"><span>   - 远程工具：VPN、堡垒机、监控平台</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 持续改进：</span></span>
<span class="line"><span>   - 故障复盘：每次故障后进行总结</span></span>
<span class="line"><span>   - 流程优化：根据经验不断完善</span></span>
<span class="line"><span>   - 培训演练：定期进行故障演练</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="实战练习建议" tabindex="-1"><a class="header-anchor" href="#实战练习建议"><span>实战练习建议</span></a></h2><h3 id="技能提升路径" tabindex="-1"><a class="header-anchor" href="#技能提升路径"><span>技能提升路径</span></a></h3><ol><li><strong>故障模拟实战</strong>：在测试环境中人为制造各种故障</li><li><strong>日志分析训练</strong>：分析真实的生产环境日志</li><li><strong>应急响应演练</strong>：定期进行故障处理演练</li><li><strong>根因分析练习</strong>：分析历史故障案例</li></ol><h3 id="面试准备要点" tabindex="-1"><a class="header-anchor" href="#面试准备要点"><span>面试准备要点</span></a></h3><ol><li><strong>故障案例准备</strong>：准备3-5个真实的故障处理案例</li><li><strong>工具熟练度</strong>：熟练使用各种诊断和分析工具</li><li><strong>沟通表达</strong>：能够清晰地描述故障处理过程</li><li><strong>持续改进</strong>：展示从故障中学习和改进的能力</li></ol><hr><p><em>建议结合实际工作环境进行深入实践，积累丰富的故障处理经验。</em></p>`,47)]))}const d=i(e,[["render",h]]),r=JSON.parse('{"path":"/%E8%BF%90%E7%BB%B4%E7%AC%94%E8%AE%B0/%E5%BA%94%E8%81%98%E6%8C%87%E5%8D%9703-%E6%95%85%E9%9A%9C%E5%A4%84%E7%90%86%E4%B8%8E%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81.html","title":"IT系统运维工程师应聘指南：故障处理与技术支持专项","lang":"zh-CN","frontmatter":{"title":"IT系统运维工程师应聘指南：故障处理与技术支持专项","icon":"tools","date":"2024-01-14T00:00:00.000Z","category":["运维笔记","职业发展","面试指导"],"tags":["运维工程师","故障处理","技术支持","应急响应","问题排查"],"description":"全面解析IT运维工程师故障处理和技术支持职责，包含故障诊断流程、应急响应机制和技术支持最佳实践。","index":true,"cover":"/images/backgrounds/background3-min.png"},"git":{"createdTime":1755445140000,"updatedTime":1755445140000,"contributors":[{"name":"SunshineCloud","username":"SunshineCloud","email":"jamesmith0817@gmail.com","commits":1,"url":"https://github.com/SunshineCloud"}]},"readingTime":{"minutes":13.02,"words":3905},"filePathRelative":"运维笔记/应聘指南03-故障处理与技术支持.md","excerpt":"\\n<h2>岗位职责重点</h2>\\n<p><strong>快速响应并解决系统故障、网络中断等问题，确保业务连续性;提供技术支持，协助开发人员解决硬件、软件及网络问题;记录故障处理过程，编写故障报告，分析根本原因并制定预防措施</strong></p>\\n<hr>\\n<h2>一、故障诊断详细操作指南</h2>\\n<h3>1.1 系统故障诊断流程</h3>\\n<h4>故障分类和优先级定义：</h4>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code class=\\"language-bash\\"><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 故障等级分类</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">P1</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> -</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 紧急故障（影响全业务）：4小时内解决</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">P2</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> -</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 重要故障（影响部分业务）：8小时内解决</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">P3</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> -</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 一般故障（功能缺陷）：24小时内解决</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">P4</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> -</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 轻微故障（改进建议）：72小时内解决</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 故障类型分类</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">-</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 硬件故障：服务器、网络设备、存储设备</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">-</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 软件故障：操作系统、应用程序、数据库</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">-</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 网络故障：连通性、性能、安全</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">-</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 人为故障：误操作、配置错误</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{d as comp,r as data};
