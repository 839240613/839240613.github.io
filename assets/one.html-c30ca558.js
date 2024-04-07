import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as t,c,a as n,b as i,d as s,e as l}from"./app-e4bb05b4.js";const r="/assets/images/UI界面先放再布置好.png",v="/assets/images/QT罪魁祸说.png",u="/assets/images/QT项目的第一行.png",o="/assets/images/删除需要在这里删除.png",m="/assets/images/开始代码.png",p="/assets/images/h文件的相关信息.png",b="/assets/images/Cpp文件开头的东西.png",g={},f={href:"https://lequ7.com/qunused.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://bbs.csdn.net/forums/Qt",target:"_blank",rel:"noopener noreferrer"},k=n("li",null,[n("ol",null,[n("li",null,"UI界面布置的学习")])],-1),h=l('<div style="text-align:center;"><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><p>布置UI界面，先摆好然后根据窗口弄好垂直和水平的设置。</p><ul><li><ol start="2"><li>获取文件的信息操作</li></ol></li></ul><p>需要的头文件</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;QFileDialog&gt;   //读取文件的办法
#include&lt;QMessageBox&gt;  //消息框 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>QString currentpath=QDir::homePath(); //获取系统当前目录
    QString dlgTitle=&quot;请选择视频文件&quot;; //打开文件对话框标题名称
    QString strfilter=&quot;Mp4 Files(*.mp4);;All Files(*.*)&quot;; //文件过滤器
    QString allfiles=QFileDialog::getOpenFileName(this,dlgTitle,currentpath,strfilter);

    if(allfiles.isEmpty())
    {
        QMessageBox::critical(this,&quot;错误&quot;,&quot;打开失败&quot;,QMessageBox::Yes);
        return;
    }

    QFileInfo fileInfos(allfiles); //获取文件信息
    ui-&gt;label_filename-&gt;setText(fileInfos.fileName());

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>project下的QT那个东西就是导致同级目录下生成很多很多文件的罪魁祸首。</p><div style="text-align:center;"><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><p>表示项目中加入core gui模块，如果是console就不需要加入这个模块。</p><p>如果需要使用sql模块，则需要写上QT +=sql</p><div style="text-align:center;"><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><p>删除项目中的文件需要</p><div style="text-align:center;"><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><ul><li>QLabel的textFormat</li></ul>',14),x={href:"https://blog.csdn.net/qq_21438461/article/details/132928080",target:"_blank",rel:"noopener noreferrer"},Q=l('<ul><li>QT的程序</li></ul><div style="text-align:center;"><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><p>H文件的相关信息</p><p>nullptr是C++11新标准中的空指针常量</p><div style="text-align:center;"><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><p>命名空间只是为了在这个空间中防止命名重复。</p><p>namespace用过之后就会一致都处于这个命名空间。</p><ul><li>Cpp文件开头的东西</li></ul><div style="text-align:center;"><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><p>.ui的文件，处于XML文件，和HTML的区别在于HTML注重内容，而XML比较注重存储和传输数据。</p><ul><li><p>ui_???.h的文件做了三件事情</p></li><li><p>第一件 放置组件。</p></li><li><p>第二件 在处理组件放入文字等等。</p></li><li><p>第三件 设置窗口信号和槽。</p></li></ul><p>下方窗口控制的简单控制才会在这里connect</p><ul><li>最终整个文件的关系就是，起始hello_world是从ui那边继承过来的，</li></ul><p>但是自己生成的hello_world类却和ui继承过来的无关，ui继承过来的类只是</p><p>自己生成的这个类的一个成员。</p><ul><li>总的来说就是需要用到自己定义的命名空间的变量需要 空间::变量</li></ul><h2 id="关于makefile文件" tabindex="-1"><a class="header-anchor" href="#关于makefile文件" aria-hidden="true">#</a> 关于makefile文件</h2><p>对于一个源文件 main.cpp来说，编译可执行文件需要以下的命令</p><p>g++ -o main main.cpp</p><p>但是可以使用一个makefile文件来简化这个命令 makefile文件中需要写入以下内容</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code>
<span class="token target symbol">main</span><span class="token punctuation">:</span>main.o
	g++ -o main main.o

  这样在命令行里面写入make即可。


<span class="token comment">## 关于qmake</span>

手写makefile文件太过于麻烦，所以可以使用qmake来简化这个操作。

qmake的文件格式为.pro文件，根据这个文件自动生成makefile文件。

<span class="token comment">## 关于编译的一些东西</span>
ciso

预编译： .c文件变成.i文件
编译： .i文件变成.s文件
汇编： .s文件变成.o文件
链接： .o文件变成可执行文件

<span class="token comment">## 关于GUN，MINGW，MSVC</span>

这三个都是和编译器有关的东西，

GUN是GNU编译器，MINGW是Minimalist GNU for Windows，
MSVC是Microsoft Visual C++

GUN更多的是指系统，GCC和G++在GUN这个系统下的编译器。

<span class="token comment">## 关于库中乱七八糟的东西</span>

.a和.lib文件库都是一个东西，都是静态库

其中.so是动态库

动态库和静态库就是在链接的时候和.o链接在一起的东西。

<span class="token comment">## 关于运行的设置</span>

在项目运行的地方可以设置一些参数信息，argv[]存储了。

<span class="token comment">## 编译的步骤</span>

第一步会使用uic工具，把.ui文件变成.h文件，把XML格式的文件互换。

然后第一步的ui-&gt;stepup<span class="token punctuation">(</span>widget<span class="token punctuation">)</span> 是把我们自己写的窗口导入。

让ui文件上的控件有父窗口。

<span class="token comment">### Connect函数</span>

三种连接方式 自动连接，直接连接，队列连接，阻塞队列连接。

非静态成员函数中的connect有关于this对象的函数，可以直接调用。

C++ 还有一种神奇的写法，void <span class="token punctuation">(</span>*funcptr<span class="token punctuation">)</span><span class="token punctuation">(</span>int a<span class="token punctuation">)</span> <span class="token operator">=</span> func<span class="token punctuation">;</span> 这样就可以直接调用func函数。

<span class="token comment">### 界面设计</span>

为什么需要爱.h文件定义组件

组件需要被一些操作改变。

<span class="token comment">## 出现的问题</span>

- MOC和UIC的QT编译

- 你删除文件没有在pro上弄好的话，会留下// 这样会导致编译的时候说找不到源文件，就是pro出现了问题
- 申明没有实现的话，会导致moc报错
- 鼠标移动的函数再次回调会导致错误。
- QGraphciView没有关于鼠标和按键的槽。
- 删掉组件的办法之一是设置父函数为NULL，那么是这个组件不在这个容器里面。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function q(y,C){const e=d("ExternalLinkIcon");return t(),c("div",null,[n("ul",null,[n("li",null,[n("p",null,[i("相关的消息网站 "),n("a",f,[i("乐趣社区"),s(e)]),n("a",_,[i("csdn-QT社区"),s(e)])])]),k]),h,n("p",null,[n("a",x,[i("相关文本"),s(e)])]),Q])}const T=a(g,[["render",q],["__file","one.html.vue"]]);export{T as default};
