import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as c,c as u,a as l,d as o,w as e,b as t,e as a}from"./app-82a511c8.js";const p="/assets/images/位图.png",h="/assets/images/文件存储系统.png",f="/assets/images/霍尔曼树.png",m={},b={class:"table-of-contents"},g={id:"_1-图灵机和lambda与编译",tabindex:"-1"},w=l("a",{class:"header-anchor",href:"#_1-图灵机和lambda与编译","aria-hidden":"true"},"#",-1),x=a('<p>λ的思想在于：</p><ul><li>1.创建</li><li>2.选取</li><li>3.替换</li></ul><p>构成：</p><ul><li><ol><li>无限长的带子 ：命令实体和寄存器。</li></ol></li><li><ol start="2"><li>读写头 ：读写头在带子上移动，读写头可以读取或者写入。</li></ol></li><li><ol start="3"><li>状态机 ：CPU，根据带子相应的内容和指令集的内容执行动作。</li></ol></li><li><ol start="4"><li>指令集 ：状态的具体行为指定。</li></ol></li></ul><p>解决的问题：</p><ul><li><ol><li>哪些问题是可计算的，哪些问题是不可计算的。</li></ol></li><li><ol start="2"><li>可以解决死循环。</li></ol></li></ul><p>图灵的伟大在于，创建了一个理论，让整个编程创造了可行性的分析。</p><p>比如造船，一开始都以为用木头，知道浮力公式的出现，才知道与面积这些东西有关。</p><p>图灵是编程人员的祖师爷。</p>',9),v={href:"https://www.bilibili.com/video/BV1VN4y1N7kJ/?p=2&spm_id_from=pageDriver",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.bilibili.com/video/BV1R4411E7RH/?spm_id_from=333.1007.top_right_bar_window_history.content.click",target:"_blank",rel:"noopener noreferrer"},B=l("p",null,"具体相关的请参考编译原理，这门课程。",-1),V=l("p",null,"https://www.bilibili.com/video/BV1JZ4y1i7az?p=18&vd_source=80dd998adf6419478f40a8a950edd07e 有两个结晶：",-1),I=l("ol",null,[l("li",null,[l("p",null,"把所有的细节都隐藏起来")]),l("li",null,[l("p",null,"选择性的暴露一些东西，使用接口，可以不破坏一些东西。")])],-1),C={id:"_3-操作系统",tabindex:"-1"},N=l("a",{class:"header-anchor",href:"#_3-操作系统","aria-hidden":"true"},"#",-1),y=a('<p>本视频通过计算器越来越快的运算，导致读卡片的时间远远长于运算的时间，引入需要一个自动执行下一个程序的功能。</p><ul><li><ol><li>这个功能叫做：批处理。</li></ol></li></ul><p>因为所有的cpu和硬件，外设的地址都不一样，这种情况下，程序员想要调用外设都是通过读产品手册模拟写代码的，</p><p>这种方式非常的折磨人。</p><ul><li><ol start="2"><li>因此操作系统充当了硬件和软件的媒介，它通过提供接口，API：（Application Programming interface） 【应用程序接口】，</li></ol></li></ul><p>抽象硬件叫做 device driver（设备驱动程序）使程序员可以用标准化的机制，和IO口交互。</p><ul><li><ol start="3"><li>因为电能越来越快了，所以CPU很多的时候都是空闲的，就使CPU具有“多任务处理”（Multitasking）的能力。</li></ol></li><li><ol start="4"><li>电脑运行多个任务就会出现一些内存的问题，哪些应用会占用哪些内存，并且内存很可能是碎片化的，比较难以控制。</li></ol></li></ul><p>因此具有虚拟化内存的功能。用虚拟内存，程序就可以每个程序都假定内存0开始，把实际的内存物理位置被系统隐藏和抽象起来，</p><p>在软件看来就是整和的，虚拟内存的地址和物理内存的地址是映射的。</p><p>这种机制叫做dynamic memory allocation（动态内存分配）。</p><ul><li><ol start="5"><li>并且这个行为可以使程序和程序之间是互不影响的，这个功能叫做“内存保护”。</li></ol></li></ul><p>以上就是一个操作程序需要的简单的功能。</p>',12),P={id:"_3-文件",tabindex:"-1"},A=l("a",{class:"header-anchor",href:"#_3-文件","aria-hidden":"true"},"#",-1),E=a('<p>以特定格式排列数据，叫做文件格式</p><p>简单文件的类型</p><ol><li><p>TXT ASICII编写的文件</p></li><li><p>波形文件（Wave） .wave 在读取这个文件之前，需要知道一些消息，如码率，单声道还是立体声</p></li></ol><p>关于数据的数据放在文件的开头，称为文件头，上述的信息都在这里面。</p><ol start="3"><li>位图（Bitmap） .bmp</li></ol><p>和上述的波形文件一样，在获取文件头之后，就可以简单的对文件进行解读。</p><p>位图简单的描述图片如下图所示：</p>',7),L=l("img",{src:p},null,-1),T={id:"_4-文件系统",tabindex:"-1"},z=l("a",{class:"header-anchor",href:"#_4-文件系统","aria-hidden":"true"},"#",-1),U={id:"_4-1-平面管理系统",tabindex:"-1"},D=l("a",{class:"header-anchor",href:"#_4-1-平面管理系统","aria-hidden":"true"},"#",-1),J=l("p",null,"因为磁带上需要知道文件的大小，是从哪里到那里，或者格外添加的时候又是那里到哪里，所以需要在磁带的最前面加上一个目录文件，来规定一些东西。",-1),R=l("img",{src:h},null,-1),S={id:"_4-2-多层管理系统",tabindex:"-1"},F=l("a",{class:"header-anchor",href:"#_4-2-多层管理系统","aria-hidden":"true"},"#",-1),H=l("p",null,"在文件头加上是否是文件夹的选项就可以实现了。",-1),M=l("p",null,"特别说明的是，剪切比复制会快一点，剪切和删除都是直接对目录进行更改的。",-1),O={id:"_5-压缩",tabindex:"-1"},W=l("a",{class:"header-anchor",href:"#_5-压缩","aria-hidden":"true"},"#",-1),X=l("b",null,"无损压缩",-1),Z=l("ul",null,[l("li",null,[l("ol",null,[l("li",null,"游程编码")])])],-1),j=l("p",null,"把重复的整合到一起，如8888，变成48。",-1),q=l("ul",null,[l("li",null,[l("ol",{start:"2"},[l("li",null,"DFTBA 霍尔曼树")])])],-1),G=l("img",{src:f},null,-1),K=l("p",null,"根据频率生成一颗树，然后编码就记录这颗树的编码和这棵树。",-1),Q=l("b",null,"有损压缩",-1),Y=l("p",null,"声音和图片的压缩都是感知编码的，都是有损的编码。",-1),$=l("p",null,"因为这些东西很多的频率或者人眼都是无法察觉的。",-1),ll=l("p",null,"在视频中有一种时间沉余的东西。",-1),tl=l("p",null,"当帧和帧的改变很小的时候，只存变化的部分。",-1),ol=l("p",null,"压缩的太严重就是产生运动的花屏现象。",-1);function el(il,nl){const i=s("font"),n=s("router-link"),d=s("ExternalLinkIcon"),_=s("center");return c(),u("div",null,[l("nav",b,[l("ul",null,[l("li",null,[o(n,{to:"#_1-图灵机和lambda与编译"},{default:e(()=>[o(i,{color:"red"},{default:e(()=>[t("#")]),_:1}),t("1.图灵机和Lambda与编译")]),_:1})]),l("li",null,[o(n,{to:"#_3-操作系统"},{default:e(()=>[o(i,{color:"red"},{default:e(()=>[t("#")]),_:1}),t("3.操作系统")]),_:1})]),l("li",null,[o(n,{to:"#_3-文件"},{default:e(()=>[o(i,{color:"red"},{default:e(()=>[t("#")]),_:1}),t("3.文件")]),_:1})]),l("li",null,[o(n,{to:"#_4-文件系统"},{default:e(()=>[o(i,{color:"red"},{default:e(()=>[t("#")]),_:1}),t("4.文件系统")]),_:1}),l("ul",null,[l("li",null,[o(n,{to:"#_4-1-平面管理系统"},{default:e(()=>[t("4.1   "),o(i,{color:"red"},{default:e(()=>[t("|")]),_:1}),t("平面管理系统")]),_:1})]),l("li",null,[o(n,{to:"#_4-2-多层管理系统"},{default:e(()=>[t("4.2   "),o(i,{color:"red"},{default:e(()=>[t("|")]),_:1}),t("多层管理系统")]),_:1})])])]),l("li",null,[o(n,{to:"#_5-压缩"},{default:e(()=>[o(i,{color:"red"},{default:e(()=>[t("#")]),_:1}),t("5.压缩")]),_:1})])])]),l("h2",g,[w,t(),o(i,{color:"red"},{default:e(()=>[t("#")]),_:1}),t("1.图灵机和Lambda与编译")]),x,l("p",null,[l("a",v,[t("说是图灵机，感觉更像是深入理解汇编和编程"),o(d)])]),l("p",null,[l("a",k,[t("解析器和编译器的区别"),o(d)])]),B,V,I,l("h2",C,[N,t(),o(i,{color:"red"},{default:e(()=>[t("#")]),_:1}),t("3.操作系统")]),y,l("h2",P,[A,t(),o(i,{color:"red"},{default:e(()=>[t("#")]),_:1}),t("3.文件")]),E,o(_,null,{default:e(()=>[L]),_:1}),l("h2",T,[z,t(),o(i,{color:"red"},{default:e(()=>[t("#")]),_:1}),t("4.文件系统")]),l("h3",U,[D,t(" 4.1   "),o(i,{color:"red"},{default:e(()=>[t("|")]),_:1}),t("平面管理系统")]),J,o(_,null,{default:e(()=>[R]),_:1}),l("h3",S,[F,t(" 4.2   "),o(i,{color:"red"},{default:e(()=>[t("|")]),_:1}),t("多层管理系统")]),H,M,l("h2",O,[W,t(),o(i,{color:"red"},{default:e(()=>[t("#")]),_:1}),t("5.压缩")]),o(_,null,{default:e(()=>[o(i,{size:"+2"},{default:e(()=>[X]),_:1})]),_:1}),Z,j,q,o(_,null,{default:e(()=>[G]),_:1}),K,o(_,null,{default:e(()=>[o(i,{size:"+2"},{default:e(()=>[Q]),_:1})]),_:1}),Y,$,ll,tl,ol])}const al=r(m,[["render",el],["__file","two.html.vue"]]);export{al as default};