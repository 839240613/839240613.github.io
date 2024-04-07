import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-e4bb05b4.js";const p={},e=t(`<h2 id="mdiarea��о��" tabindex="-1"><a class="header-anchor" href="#mdiarea��о��" aria-hidden="true">#</a> MdiArea��Ӧ��</h2><p>�Զ�����࣬��Ҫ�˽ⳣ�õĽӿڣ�����statci_case&lt;&gt;�ǱȽϳ��õģ���Ϊ�Զ������һ�㶼��Ҫǿת��</p><h3 id="��������ͷ�l�" tabindex="-1"><a class="header-anchor" href="#��������ͷ�l�" aria-hidden="true">#</a> ��������ͷ�ļ�</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">FORMDOC_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">FORMDOC_H</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QWidget&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;QFile&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;QDir&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;QTextStream&gt;</span></span>

namespace Ui <span class="token punctuation">{</span>
class FormDoc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

class FormDoc <span class="token operator">:</span> public QWidget
<span class="token punctuation">{</span>
    Q_OBJECT

public<span class="token operator">:</span>
    explicit <span class="token function">FormDoc</span><span class="token punctuation">(</span>QWidget <span class="token operator">*</span>parent <span class="token operator">=</span> nullptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">~</span><span class="token function">FormDoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">loadFormFile</span><span class="token punctuation">(</span>QString<span class="token operator">&amp;</span> aFilename<span class="token punctuation">)</span><span class="token punctuation">;</span>                          <span class="token comment">// ���ļ�</span>
    QString <span class="token function">currentFileName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                                      <span class="token comment">// ���ص�ǰ�ļ���</span>
    bool <span class="token function">isFileOpened</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                                            <span class="token comment">// �ж��ļ��Ƿ��</span>
    <span class="token keyword">void</span> <span class="token function">setEditFont</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                                             <span class="token comment">// ��������</span>
    <span class="token keyword">void</span> <span class="token function">textcut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                                                 <span class="token comment">//</span>
    <span class="token keyword">void</span> <span class="token function">textCopy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">textPaste</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

private<span class="token operator">:</span>
    Ui<span class="token operator">::</span>FormDoc <span class="token operator">*</span>ui<span class="token punctuation">;</span>

    QString mCurrentFile<span class="token punctuation">;</span>                                           <span class="token comment">// ��ǰ���ļ�����</span>
    bool mFileOpened <span class="token operator">=</span> false<span class="token punctuation">;</span>                                       <span class="token comment">// �ļ��Ƿ��</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">// FORMDOC_H</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="��������cpp�l�" tabindex="-1"><a class="header-anchor" href="#��������cpp�l�" aria-hidden="true">#</a> ��������cpp�ļ�</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;formdoc.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;ui_formdoc.h&quot;</span></span>

FormDoc<span class="token operator">::</span><span class="token function">FormDoc</span><span class="token punctuation">(</span>QWidget <span class="token operator">*</span>parent<span class="token punctuation">)</span> <span class="token operator">:</span>
    <span class="token function">QWidget</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">ui</span><span class="token punctuation">(</span>new Ui<span class="token operator">::</span>FormDoc<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    ui<span class="token operator">-&gt;</span><span class="token function">setupUi</span><span class="token punctuation">(</span>this<span class="token punctuation">)</span><span class="token punctuation">;</span>
    this<span class="token operator">-&gt;</span><span class="token function">setWindowTitle</span><span class="token punctuation">(</span><span class="token string">&quot;New Doc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    this<span class="token operator">-&gt;</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>Qt<span class="token operator">::</span>WA_DeleteOnClose<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

FormDoc<span class="token operator">::</span><span class="token operator">~</span><span class="token function">FormDoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    delete ui<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> FormDoc<span class="token operator">::</span><span class="token function">loadFormFile</span><span class="token punctuation">(</span>QString <span class="token operator">&amp;</span>aFilename<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    QFile <span class="token function">file</span><span class="token punctuation">(</span>aFilename<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>QIODevice<span class="token operator">::</span>ReadOnly<span class="token operator">|</span>QIODevice<span class="token operator">::</span>Text<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        QTextStream <span class="token function">iss</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        ui<span class="token operator">-&gt;</span>plainTextEdit<span class="token operator">-&gt;</span><span class="token function">appendPlainText</span><span class="token punctuation">(</span>iss<span class="token punctuation">.</span><span class="token function">readAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        file<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        this<span class="token operator">-&gt;</span>mFileOpened <span class="token operator">=</span> true<span class="token punctuation">;</span>
        QFileInfo <span class="token function">fileInfo</span><span class="token punctuation">(</span>aFilename<span class="token punctuation">)</span><span class="token punctuation">;</span>                              <span class="token comment">//��ȡ�ļ���Ϣ</span>
        this<span class="token operator">-&gt;</span>mCurrentFile <span class="token operator">=</span> aFilename<span class="token punctuation">;</span>
        this<span class="token operator">-&gt;</span><span class="token function">setWindowTitle</span><span class="token punctuation">(</span>fileInfo<span class="token punctuation">.</span><span class="token function">fileName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

QString FormDoc<span class="token operator">::</span><span class="token function">currentFileName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                      <span class="token comment">// ���ص�ǰ�ļ���</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> this<span class="token operator">-&gt;</span>mCurrentFile<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
bool FormDoc<span class="token operator">::</span><span class="token function">isFileOpened</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                            <span class="token comment">// �ж��ļ��Ƿ��</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> this<span class="token operator">-&gt;</span>mFileOpened<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> FormDoc<span class="token operator">::</span><span class="token function">setEditFont</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                             <span class="token comment">// ��������</span>
<span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">void</span> FormDoc<span class="token operator">::</span><span class="token function">textcut</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                                 <span class="token comment">//</span>
<span class="token punctuation">{</span>
    ui<span class="token operator">-&gt;</span>plainTextEdit<span class="token operator">-&gt;</span><span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> FormDoc<span class="token operator">::</span><span class="token function">textCopy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    ui<span class="token operator">-&gt;</span>plainTextEdit<span class="token operator">-&gt;</span><span class="token function">copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> FormDoc<span class="token operator">::</span><span class="token function">textPaste</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    ui<span class="token operator">-&gt;</span>plainTextEdit<span class="token operator">-&gt;</span><span class="token function">paste</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="������-h�l�" tabindex="-1"><a class="header-anchor" href="#������-h�l�" aria-hidden="true">#</a> ������.h�ļ�</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">MAINWINDOW_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAINWINDOW_H</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QMainWindow&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;formdoc.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;QFileDialog&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QMdiSubWindow&gt;</span></span>

QT_BEGIN_NAMESPACE
namespace Ui <span class="token punctuation">{</span> class MainWindow<span class="token punctuation">;</span> <span class="token punctuation">}</span>
QT_END_NAMESPACE

class MainWindow <span class="token operator">:</span> public QMainWindow
<span class="token punctuation">{</span>
    Q_OBJECT

public<span class="token operator">:</span>
    <span class="token function">MainWindow</span><span class="token punctuation">(</span>QWidget <span class="token operator">*</span>parent <span class="token operator">=</span> nullptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">~</span><span class="token function">MainWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

private slots<span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">on_actNew_triggered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">on_actOpen_triggered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">on_actCascade_triggered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">on_actTile_triggered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">on_actCloseALL_triggered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">void</span> <span class="token function">on_actViewMode_triggered</span><span class="token punctuation">(</span>bool checked<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">on_mdiArea_subWindowActivated</span><span class="token punctuation">(</span>QMdiSubWindow <span class="token operator">*</span>arg1<span class="token punctuation">)</span><span class="token punctuation">;</span>

private<span class="token operator">:</span>
    Ui<span class="token operator">::</span>MainWindow <span class="token operator">*</span>ui<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">// MAINWINDOW_H</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="������cpp�l�" tabindex="-1"><a class="header-anchor" href="#������cpp�l�" aria-hidden="true">#</a> ������cpp�ļ�</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;mainwindow.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;ui_mainwindow.h&quot;</span></span>

MainWindow<span class="token operator">::</span><span class="token function">MainWindow</span><span class="token punctuation">(</span>QWidget <span class="token operator">*</span>parent<span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token function">QMainWindow</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span>
    <span class="token punctuation">,</span> <span class="token function">ui</span><span class="token punctuation">(</span>new Ui<span class="token operator">::</span>MainWindow<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    ui<span class="token operator">-&gt;</span><span class="token function">setupUi</span><span class="token punctuation">(</span>this<span class="token punctuation">)</span><span class="token punctuation">;</span>
    this<span class="token operator">-&gt;</span><span class="token function">setCentralWidget</span><span class="token punctuation">(</span>ui<span class="token operator">-&gt;</span>mdiArea<span class="token punctuation">)</span><span class="token punctuation">;</span>
    this<span class="token operator">-&gt;</span><span class="token function">setWindowState</span><span class="token punctuation">(</span>Qt<span class="token operator">::</span>WindowMaximized<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ui<span class="token operator">-&gt;</span>toolBar<span class="token operator">-&gt;</span><span class="token function">setToolButtonStyle</span><span class="token punctuation">(</span>Qt<span class="token operator">::</span>ToolButtonTextUnderIcon<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

MainWindow<span class="token operator">::</span><span class="token operator">~</span><span class="token function">MainWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    delete ui<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> MainWindow<span class="token operator">::</span><span class="token function">on_actNew_triggered</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    FormDoc<span class="token operator">*</span> formDoc <span class="token operator">=</span> new <span class="token function">FormDoc</span><span class="token punctuation">(</span>this<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ui<span class="token operator">-&gt;</span>mdiArea<span class="token operator">-&gt;</span><span class="token function">addSubWindow</span><span class="token punctuation">(</span>formDoc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    formDoc<span class="token operator">-&gt;</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> MainWindow<span class="token operator">::</span><span class="token function">on_actOpen_triggered</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    bool needNew <span class="token operator">=</span> false<span class="token punctuation">;</span>
    FormDoc<span class="token operator">*</span> formDoc<span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>ui<span class="token operator">-&gt;</span>mdiArea<span class="token operator">-&gt;</span><span class="token function">subWindowList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span>                  <span class="token comment">//����ڴ���0</span>
    <span class="token punctuation">{</span>
        formDoc <span class="token operator">=</span> <span class="token punctuation">(</span>FormDoc<span class="token operator">*</span><span class="token punctuation">)</span> ui<span class="token operator">-&gt;</span>mdiArea<span class="token operator">-&gt;</span><span class="token function">activeSubWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">widget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        needNew <span class="token operator">=</span> formDoc<span class="token operator">-&gt;</span><span class="token function">isFileOpened</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                      <span class="token comment">// �ļ��Ѿ�����Ҫ���µĴ���</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> needNew<span class="token operator">=</span>true<span class="token punctuation">;</span>

    QString curPath <span class="token operator">=</span> QDir<span class="token operator">::</span><span class="token function">currentPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    QString aFilename <span class="token operator">=</span> QFileDialog<span class="token operator">::</span><span class="token function">getOpenFileName</span><span class="token punctuation">(</span>this<span class="token punctuation">,</span><span class="token string">&quot;��һ���ļ�&quot;</span><span class="token punctuation">,</span>curPath<span class="token punctuation">,</span><span class="token string">&quot;C�����ļ�(*.c);;�����ļ�(*.*)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>aFilename<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>needNew<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        FormDoc<span class="token operator">*</span> formDoc <span class="token operator">=</span> new <span class="token function">FormDoc</span><span class="token punctuation">(</span>this<span class="token punctuation">)</span><span class="token punctuation">;</span>
        ui<span class="token operator">-&gt;</span>mdiArea<span class="token operator">-&gt;</span><span class="token function">addSubWindow</span><span class="token punctuation">(</span>formDoc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    formDoc<span class="token operator">-&gt;</span><span class="token function">loadFormFile</span><span class="token punctuation">(</span>aFilename<span class="token punctuation">)</span><span class="token punctuation">;</span>
    formDoc<span class="token operator">-&gt;</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> MainWindow<span class="token operator">::</span><span class="token function">on_actCascade_triggered</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span><span class="token comment">//���ڼ���չ��</span>
    ui<span class="token operator">-&gt;</span>mdiArea<span class="token operator">-&gt;</span><span class="token function">cascadeSubWindows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> MainWindow<span class="token operator">::</span><span class="token function">on_actTile_triggered</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span><span class="token comment">//ƽ��չ��</span>
    ui<span class="token operator">-&gt;</span>mdiArea<span class="token operator">-&gt;</span><span class="token function">tileSubWindows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> MainWindow<span class="token operator">::</span><span class="token function">on_actCloseALL_triggered</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    ui<span class="token operator">-&gt;</span>mdiArea<span class="token operator">-&gt;</span><span class="token function">closeAllSubWindows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



<span class="token keyword">void</span> MainWindow<span class="token operator">::</span><span class="token function">on_actViewMode_triggered</span><span class="token punctuation">(</span>bool checked<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//MIDģʽ</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ui<span class="token operator">-&gt;</span>mdiArea<span class="token operator">-&gt;</span><span class="token function">setViewMode</span><span class="token punctuation">(</span>QMdiArea<span class="token operator">::</span>TabbedView<span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">// Tab��ҳ��ʾģʽ</span>
        ui<span class="token operator">-&gt;</span>mdiArea<span class="token operator">-&gt;</span><span class="token function">setTabsClosable</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                            <span class="token comment">// ҳ��ɹر�</span>
        ui<span class="token operator">-&gt;</span>actCascade<span class="token operator">-&gt;</span><span class="token function">setEnabled</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ui<span class="token operator">-&gt;</span>actTile<span class="token operator">-&gt;</span><span class="token function">setEnabled</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        ui<span class="token operator">-&gt;</span>mdiArea<span class="token operator">-&gt;</span><span class="token function">setViewMode</span><span class="token punctuation">(</span>QMdiArea<span class="token operator">::</span>SubWindowView<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// �Ӵ���ģʽ</span>
        ui<span class="token operator">-&gt;</span>actCascade<span class="token operator">-&gt;</span><span class="token function">setEnabled</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ui<span class="token operator">-&gt;</span>actTile<span class="token operator">-&gt;</span><span class="token function">setEnabled</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> MainWindow<span class="token operator">::</span><span class="token function">on_mdiArea_subWindowActivated</span><span class="token punctuation">(</span>QMdiSubWindow <span class="token operator">*</span>arg1<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ui<span class="token operator">-&gt;</span>mdiArea<span class="token operator">-&gt;</span><span class="token function">subWindowList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        FormDoc <span class="token operator">*</span> formDoc <span class="token operator">=</span> static_cast<span class="token operator">&lt;</span>FormDoc<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>ui<span class="token operator">-&gt;</span>mdiArea<span class="token operator">-&gt;</span><span class="token function">activeSubWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">widget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ui<span class="token operator">-&gt;</span>statusbar<span class="token operator">-&gt;</span><span class="token function">showMessage</span><span class="token punctuation">(</span>formDoc<span class="token operator">-&gt;</span><span class="token function">currentFileName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="splash��l��о��" tabindex="-1"><a class="header-anchor" href="#splash��l��о��" aria-hidden="true">#</a> splash��Ļ��Ӧ��</h2><h3 id="h�l�" tabindex="-1"><a class="header-anchor" href="#h�l�" aria-hidden="true">#</a> .h�ļ�</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">MDIALOG_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MDIALOG_H</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QDialog&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QPoint&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QMouseEvent&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QSettings&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;QByteArray&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;QCryptographicHash&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;QMessageBox&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;Qt&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;QMouseEvent&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;QDebug&gt;</span></span>
namespace Ui <span class="token punctuation">{</span>
class Mdialog<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

class Mdialog <span class="token operator">:</span> public QDialog
<span class="token punctuation">{</span>
    Q_OBJECT

public<span class="token operator">:</span>
    explicit <span class="token function">Mdialog</span><span class="token punctuation">(</span>QWidget <span class="token operator">*</span>parent <span class="token operator">=</span> nullptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">~</span><span class="token function">Mdialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



protected<span class="token operator">:</span>
    <span class="token comment">// ��������϶����ڵ�����¼�</span>
    <span class="token keyword">void</span> <span class="token function">mousePressEvent</span><span class="token punctuation">(</span>QMouseEvent<span class="token operator">*</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">mouseMoveEvent</span><span class="token punctuation">(</span>QMouseEvent<span class="token operator">*</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">mouseReleaseEvent</span><span class="token punctuation">(</span>QMouseEvent<span class="token operator">*</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>

private slots<span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">on_pushButton_clicked</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



private<span class="token operator">:</span>
    Ui<span class="token operator">::</span>Mdialog <span class="token operator">*</span>ui<span class="token punctuation">;</span>

    bool m_Moving <span class="token operator">=</span> false<span class="token punctuation">;</span>                          <span class="token comment">// ��ʾ�����Ƿ������������ƶ���</span>
    QPoint m_lastPos<span class="token punctuation">;</span>                               <span class="token comment">// ��һ�ε����λ�á�</span>
    QString m_user <span class="token operator">=</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">;</span>                        <span class="token comment">// ��ʼ���û�����</span>
    QString m_pswd <span class="token operator">=</span> <span class="token string">&quot;12345&quot;</span><span class="token punctuation">;</span>                       <span class="token comment">// ��ʼ�����룬δ���ܵġ�</span>
    <span class="token keyword">int</span> m_tryCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>                             <span class="token comment">// �Դ�������</span>
    <span class="token keyword">void</span> <span class="token function">readSetting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                             <span class="token comment">// ��ȡ���ã�ע�����</span>
    <span class="token keyword">void</span> <span class="token function">writeSetting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                            <span class="token comment">// д�����ã�ע�����</span>
    QString <span class="token function">encrypt</span><span class="token punctuation">(</span><span class="token keyword">const</span> QString<span class="token operator">&amp;</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">// �ַ�������</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">// MDIALOG_H</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cpp�l�" tabindex="-1"><a class="header-anchor" href="#cpp�l�" aria-hidden="true">#</a> .cpp�ļ�</h3><h4 id="���캯��" tabindex="-1"><a class="header-anchor" href="#���캯��" aria-hidden="true">#</a> ���캯��</h4><p>��������ģ����˵��û������Լ������ǿ�����regersty��ƥ��ġ�</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;mdialog.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;ui_mdialog.h&quot;</span></span>

Mdialog<span class="token operator">::</span><span class="token function">Mdialog</span><span class="token punctuation">(</span>QWidget <span class="token operator">*</span>parent<span class="token punctuation">)</span> <span class="token operator">:</span>
    <span class="token function">QDialog</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">ui</span><span class="token punctuation">(</span>new Ui<span class="token operator">::</span>Mdialog<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    ui<span class="token operator">-&gt;</span><span class="token function">setupUi</span><span class="token punctuation">(</span>this<span class="token punctuation">)</span><span class="token punctuation">;</span>

    ui<span class="token operator">-&gt;</span>lineEdit_2<span class="token operator">-&gt;</span><span class="token function">setEchoMode</span><span class="token punctuation">(</span>QLineEdit<span class="token operator">::</span>Password<span class="token punctuation">)</span><span class="token punctuation">;</span>                   <span class="token comment">// ����Ϊ��������ģʽ</span>
    this<span class="token operator">-&gt;</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>Qt<span class="token operator">::</span>WA_DeleteOnClose<span class="token punctuation">)</span><span class="token punctuation">;</span>                           <span class="token comment">// ����Ϊ�ر�ʱɾ��</span>
    this<span class="token operator">-&gt;</span><span class="token function">setWindowFlags</span><span class="token punctuation">(</span>Qt<span class="token operator">::</span>SplashScreen<span class="token punctuation">)</span><span class="token punctuation">;</span>                             <span class="token comment">// ����ΪSplashScreen</span>
    <span class="token function">readSetting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                                                      <span class="token comment">//��ȡ�洢���û���������</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="��ȡregersty�е��u���������" tabindex="-1"><a class="header-anchor" href="#��ȡregersty�е��u���������" aria-hidden="true">#</a> ��ȡregersty�е��û���������</h4><p>ʹ�����QSettings��</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> Mdialog<span class="token operator">::</span><span class="token function">readSetting</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// ��ȡ�洢���û��������룬�����Ǿ������ܵ�</span>
    QString organization <span class="token operator">=</span> <span class="token string">&quot;WWB-Qt&quot;</span><span class="token punctuation">;</span>                                    <span class="token comment">// ����ע���</span>
    QString appName <span class="token operator">=</span> <span class="token string">&quot;MDI&quot;</span><span class="token punctuation">;</span>
    QSettings <span class="token function">settings</span><span class="token punctuation">(</span>organization<span class="token punctuation">,</span>appName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    bool saved <span class="token operator">=</span> settings<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token string">&quot;saved&quot;</span><span class="token punctuation">,</span>false<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">// ��ȡ saved</span>
    this<span class="token operator">-&gt;</span>m_user <span class="token operator">=</span> settings<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token string">&quot;Username&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// ��ȡ Username</span>
    QString defaulPSWD <span class="token operator">=</span> <span class="token function">encrypt</span><span class="token punctuation">(</span><span class="token string">&quot;12345&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                              <span class="token comment">// ȱʡ����&quot;12345&quot;���ܺ������</span>
    this<span class="token operator">-&gt;</span>m_pswd <span class="token operator">=</span> settings<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token string">&quot;PWSD&quot;</span><span class="token punctuation">,</span>defaulPSWD<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// ��ȡPSWD</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>saved<span class="token punctuation">)</span> ui<span class="token operator">-&gt;</span>lineEdit<span class="token operator">-&gt;</span><span class="token function">setText</span><span class="token punctuation">(</span>m_user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ui<span class="token operator">-&gt;</span>checkBox<span class="token operator">-&gt;</span><span class="token function">setChecked</span><span class="token punctuation">(</span>saved<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="�����u�����������regersty" tabindex="-1"><a class="header-anchor" href="#�����u�����������regersty" aria-hidden="true">#</a> �����û�����������regersty</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> Mdialog<span class="token operator">::</span><span class="token function">writeSetting</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// �����û��������������</span>
    QSettings <span class="token function">settings</span><span class="token punctuation">(</span><span class="token string">&quot;WWB-Qt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;MDI&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                                 <span class="token comment">// ע�������</span>
    settings<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token string">&quot;Username&quot;</span><span class="token punctuation">,</span>m_user<span class="token punctuation">)</span><span class="token punctuation">;</span>                               <span class="token comment">// �û���</span>
    settings<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token string">&quot;PSWD&quot;</span><span class="token punctuation">,</span>m_pswd<span class="token punctuation">)</span><span class="token punctuation">;</span>                                   <span class="token comment">// ���룬�������ܵ�</span>
    settings<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token string">&quot;saved&quot;</span><span class="token punctuation">,</span>ui<span class="token operator">-&gt;</span>checkBox<span class="token operator">-&gt;</span><span class="token function">isChecked</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">// ��֪�������</span>

<span class="token punctuation">}</span>

#### ����


\`\`\`c

QString Mdialog<span class="token operator">::</span><span class="token function">encrypt</span><span class="token punctuation">(</span><span class="token keyword">const</span> QString <span class="token operator">&amp;</span>str<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// �ַ���MD5�㷨����</span>
    QByteArray btArray<span class="token punctuation">;</span>
    btArray<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    QCryptographicHash <span class="token function">hash</span><span class="token punctuation">(</span>QCryptographicHash<span class="token operator">::</span>Md5<span class="token punctuation">)</span><span class="token punctuation">;</span>                   <span class="token comment">// Md5�����㷨</span>
    hash<span class="token punctuation">.</span><span class="token function">addData</span><span class="token punctuation">(</span>btArray<span class="token punctuation">)</span><span class="token punctuation">;</span>                                              <span class="token comment">// ��������</span>
    QByteArray resultArray <span class="token operator">=</span> hash<span class="token punctuation">.</span><span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                             <span class="token comment">// �������յ�ɢ��ֵ</span>
    QString md5 <span class="token operator">=</span> resultArray<span class="token punctuation">.</span><span class="token function">toHex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> md5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ȷ�κ�t" tabindex="-1"><a class="header-anchor" href="#ȷ�κ�t" aria-hidden="true">#</a> ȷ�ϰ�ť</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> Mdialog<span class="token operator">::</span><span class="token function">on_pushButton_clicked</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    QString user <span class="token operator">=</span> ui<span class="token operator">-&gt;</span>lineEdit<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trimmed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    QString pswd <span class="token operator">=</span> ui<span class="token operator">-&gt;</span>lineEdit_2<span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trimmed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    QString encrptPSWD <span class="token operator">=</span> <span class="token function">encrypt</span><span class="token punctuation">(</span>pswd<span class="token punctuation">)</span><span class="token punctuation">;</span>                                 <span class="token comment">// ��������м���</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>user <span class="token operator">==</span> m_user<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>encrptPSWD <span class="token operator">==</span> m_pswd<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">writeSetting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        this<span class="token operator">-&gt;</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        m_tryCount<span class="token operator">++</span><span class="token punctuation">;</span>                                                   <span class="token comment">//�������</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>m_tryCount<span class="token operator">&gt;</span><span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            QMessageBox<span class="token operator">::</span><span class="token function">critical</span><span class="token punctuation">(</span>this<span class="token punctuation">,</span><span class="token string">&quot;����&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;����������̫�࣬ǿ���˳�&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            this<span class="token operator">-&gt;</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                                             <span class="token comment">// �˳�</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> QMessageBox<span class="token operator">::</span><span class="token function">warning</span><span class="token punctuation">(</span>this<span class="token punctuation">,</span><span class="token string">&quot;������ʾ&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;�û������������&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="����϶�����" tabindex="-1"><a class="header-anchor" href="#����϶�����" aria-hidden="true">#</a> ����϶�����</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> Mdialog<span class="token operator">::</span><span class="token function">mousePressEvent</span><span class="token punctuation">(</span>QMouseEvent <span class="token operator">*</span>event<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//��갴��������</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>event<span class="token operator">-&gt;</span><span class="token function">button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> Qt<span class="token operator">::</span>LeftButton<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        m_Moving <span class="token operator">=</span> true<span class="token punctuation">;</span>
        m_lastPos <span class="token operator">=</span> event<span class="token operator">-&gt;</span><span class="token function">globalPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">pos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// ��¼���������ڴ��ڵ�λ��</span>
        <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>event<span class="token operator">-&gt;</span><span class="token function">globalPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">// globalPosΪȫ�ֵ�λ��</span>
        <span class="token function">qDebug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span><span class="token function">pos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                            <span class="token comment">// Ϊ������ȫ�ֵ�λ��</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="����ƶ�" tabindex="-1"><a class="header-anchor" href="#����ƶ�" aria-hidden="true">#</a> ����ƶ�</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> Mdialog<span class="token operator">::</span><span class="token function">mouseMoveEvent</span><span class="token punctuation">(</span>QMouseEvent <span class="token operator">*</span>event<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//��갴������ƶ�</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>m_Moving <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>event<span class="token operator">-&gt;</span><span class="token function">buttons</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> Qt<span class="token operator">::</span>LeftButton<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>event<span class="token operator">-&gt;</span><span class="token function">globalPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span>m_lastPos<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">manhattanLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span>QApplication<span class="token operator">::</span><span class="token function">startDragDistance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">move</span><span class="token punctuation">(</span>event<span class="token operator">-&gt;</span><span class="token function">globalPos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span>m_lastPos<span class="token punctuation">)</span><span class="token punctuation">;</span>                                    <span class="token comment">//  �ƶ�����</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="����ͷ�" tabindex="-1"><a class="header-anchor" href="#����ͷ�" aria-hidden="true">#</a> ����ͷ�</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> Mdialog<span class="token operator">::</span><span class="token function">mouseReleaseEvent</span><span class="token punctuation">(</span>QMouseEvent<span class="token operator">*</span> event<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//��갴���ͷ�</span>
    this<span class="token operator">-&gt;</span>m_Moving <span class="token operator">=</span> false<span class="token punctuation">;</span>                                             <span class="token comment">// ֹͣ�ƶ�</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>�麯��Ҳ��Ҫ��д��</p>`,31),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","MDI.html.vue"]]);export{d as default};
