const n=JSON.parse('{"key":"v-fc6b3004","path":"/bookList/Zosan%20algorithm/six.html","title":"链表","lang":"zh-CN","frontmatter":{"title":"链表","icon":"fab fa-markdown","order":6,"category":["数据结构"],"tag":["数据结构"],"next":"seven.md","prev":"five.md"},"headers":[{"level":2,"title":"链表常用的基本代码：","slug":"链表常用的基本代码","link":"#链表常用的基本代码","children":[]},{"level":2,"title":"链表常用工具","slug":"链表常用工具","link":"#链表常用工具","children":[{"level":3,"title":"链表三指针","slug":"链表三指针","link":"#链表三指针","children":[]},{"level":3,"title":"假头","slug":"假头","link":"#假头","children":[]},{"level":3,"title":"快慢指针找中点","slug":"快慢指针找中点","link":"#快慢指针找中点","children":[]}]},{"level":2,"title":"题目：回文链表","slug":"题目-回文链表","link":"#题目-回文链表","children":[{"level":3,"title":"装回数组","slug":"装回数组","link":"#装回数组","children":[]},{"level":3,"title":"制作一个栈","slug":"制作一个栈","link":"#制作一个栈","children":[]},{"level":3,"title":"改装链表","slug":"改装链表","link":"#改装链表","children":[]}]},{"level":2,"title":"题目：复制含有随机结点的链表","slug":"题目-复制含有随机结点的链表","link":"#题目-复制含有随机结点的链表","children":[{"level":3,"title":"用一个map记录随机节点","slug":"用一个map记录随机节点","link":"#用一个map记录随机节点","children":[]},{"level":3,"title":"折磨链表","slug":"折磨链表","link":"#折磨链表","children":[]}]},{"level":2,"title":"寻找链表是否相交","slug":"寻找链表是否相交","link":"#寻找链表是否相交","children":[{"level":3,"title":"链表的相交点","slug":"链表的相交点","link":"#链表的相交点","children":[]},{"level":3,"title":"思维模式","slug":"思维模式","link":"#思维模式","children":[]},{"level":3,"title":"总体流程图","slug":"总体流程图","link":"#总体流程图","children":[]},{"level":3,"title":"代码：","slug":"代码","link":"#代码","children":[]},{"level":3,"title":"需要注意的问题：","slug":"需要注意的问题","link":"#需要注意的问题","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.68,"words":2304},"filePathRelative":"bookList/Zosan algorithm/six.md","excerpt":"<h2> 链表常用的基本代码：</h2>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token keyword\\">typedef</span> <span class=\\"token keyword\\">struct</span> <span class=\\"token class-name\\">Node</span><span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">int</span> x<span class=\\"token punctuation\\">;</span>\\n\\tNode<span class=\\"token operator\\">*</span> next <span class=\\"token operator\\">=</span> <span class=\\"token constant\\">NULL</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token operator\\">*</span>list<span class=\\"token punctuation\\">,</span>listpoint<span class=\\"token punctuation\\">;</span> \\n\\n<span class=\\"token keyword\\">void</span> <span class=\\"token function\\">show</span><span class=\\"token punctuation\\">(</span>list head<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span>head<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%d\\\\t\\"</span><span class=\\"token punctuation\\">,</span>head<span class=\\"token operator\\">-&gt;</span>x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\thead <span class=\\"token operator\\">=</span> head<span class=\\"token operator\\">-&gt;</span>next<span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">}</span>\\n\\t\\t\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"\\\\r\\\\n\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">}</span>\\n\\nlist <span class=\\"token function\\">creat_head</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\tlist head <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>list<span class=\\"token punctuation\\">)</span><span class=\\"token function\\">malloc</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">sizeof</span><span class=\\"token punctuation\\">(</span>listpoint<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\thead<span class=\\"token operator\\">-&gt;</span>x <span class=\\"token operator\\">=</span> x<span class=\\"token punctuation\\">;</span>head<span class=\\"token operator\\">-&gt;</span>next <span class=\\"token operator\\">=</span> <span class=\\"token constant\\">NULL</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">return</span> head<span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">void</span> <span class=\\"token function\\">creat_Node</span><span class=\\"token punctuation\\">(</span>list head<span class=\\"token punctuation\\">,</span><span class=\\"token keyword\\">int</span> x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\tlist Node <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>list<span class=\\"token punctuation\\">)</span><span class=\\"token function\\">malloc</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">sizeof</span><span class=\\"token punctuation\\">(</span>listpoint<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\tNode<span class=\\"token operator\\">-&gt;</span>x <span class=\\"token operator\\">=</span> x<span class=\\"token punctuation\\">;</span>Node<span class=\\"token operator\\">-&gt;</span>next <span class=\\"token operator\\">=</span> <span class=\\"token constant\\">NULL</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span>head<span class=\\"token operator\\">-&gt;</span>next<span class=\\"token punctuation\\">)</span> head <span class=\\"token operator\\">=</span> head<span class=\\"token operator\\">-&gt;</span>next<span class=\\"token punctuation\\">;</span>\\n\\thead<span class=\\"token operator\\">-&gt;</span>next <span class=\\"token operator\\">=</span> Node<span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
