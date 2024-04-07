import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-e4bb05b4.js";const i={},c=e(`<h2 id="�զ���ؼ�" tabindex="-1"><a class="header-anchor" href="#�զ���ؼ�" aria-hidden="true">#</a> �Զ���ؼ�</h2><p>��ҪQT�汾��������汾һ�֣���Ҫ��bin/plugin/bin�ļ����м���dll�ļ�</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>CONFIG      <span class="token operator">+=</span> plugin debug_and_release                            <span class="token comment">// config������qkame�������õģ� pluginΪ�����debug_and_releaseΪ���Ժͷ���</span>
TARGET      <span class="token operator">=</span> $$<span class="token function">qtLibraryTarget</span><span class="token punctuation">(</span>myclockplugin<span class="token punctuation">)</span>                     <span class="token comment">// ��ʾ��Ŀ������ط���</span>
TEMPLATE    <span class="token operator">=</span> lib                                                  <span class="token comment">// ��ʾ������Ŀ��һ����</span>

HEADERS     <span class="token operator">=</span> myclockplugin<span class="token punctuation">.</span>h
SOURCES     <span class="token operator">=</span> myclockplugin<span class="token punctuation">.</span>cpp
RESOURCES   <span class="token operator">=</span> icons<span class="token punctuation">.</span>qrc
LIBS        <span class="token operator">+=</span> <span class="token operator">-</span>L<span class="token punctuation">.</span> 

QT <span class="token operator">+=</span> designer

target<span class="token punctuation">.</span>path <span class="token operator">=</span> $$<span class="token punctuation">[</span>QT_INSTALL_PLUGINS<span class="token punctuation">]</span><span class="token operator">/</span>designer
INSTALLS    <span class="token operator">+=</span> target

<span class="token function">include</span><span class="token punctuation">(</span>myclock<span class="token punctuation">.</span>pri<span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="��-h�l�������" tabindex="-1"><a class="header-anchor" href="#��-h�l�������" aria-hidden="true">#</a> ��.h�ļ�������</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">MYCLOCK_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MYCLOCK_H</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QWidget&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;QtUiPlugin/QDesignerExportWidget&gt;</span></span>

class QLabel<span class="token punctuation">;</span>
class QDESIGNER_WIDGET_EXPORT Myclock <span class="token operator">:</span> public QWidget
<span class="token punctuation">{</span>
    Q_OBJECT

public<span class="token operator">:</span>
    explicit <span class="token function">Myclock</span><span class="token punctuation">(</span>QWidget <span class="token operator">*</span>parent <span class="token operator">=</span> nullptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">// MYCLOCK_H</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>һ�������������һ��ͷ�ļ����ڶ�̬�⣬����QLabel��</p><h2 id="������" tabindex="-1"><a class="header-anchor" href="#������" aria-hidden="true">#</a> ������</h2><h3 id="tcp��udp" tabindex="-1"><a class="header-anchor" href="#tcp��udp" aria-hidden="true">#</a> TCP��UDP</h3><p>TCP/IPЭ��ջ</p>`,10),p=[c];function t(l,o){return s(),a("div",null,p)}const u=n(i,[["render",t],["__file","nine.html.vue"]]);export{u as default};
