const n=JSON.parse('{"key":"v-7bd391f3","path":"/bookList/Zosan%20algorithm/seven.html","title":"二叉树","lang":"zh-CN","frontmatter":{"title":"二叉树","icon":"fab fa-markdown","order":7,"category":["数据结构"],"tag":["数据结构"],"next":"eight.md","prev":"six.md"},"headers":[{"level":2,"title":"二叉树的分类","slug":"二叉树的分类","link":"#二叉树的分类","children":[{"level":3,"title":"搜索二叉树","slug":"搜索二叉树","link":"#搜索二叉树","children":[]},{"level":3,"title":"完全二叉树","slug":"完全二叉树","link":"#完全二叉树","children":[]},{"level":3,"title":"平衡二叉树","slug":"平衡二叉树","link":"#平衡二叉树","children":[]}]},{"level":2,"title":"通过遍历构建二叉树","slug":"通过遍历构建二叉树","link":"#通过遍历构建二叉树","children":[]},{"level":2,"title":"二叉树的递归序","slug":"二叉树的递归序","link":"#二叉树的递归序","children":[{"level":3,"title":"前序遍历模型","slug":"前序遍历模型","link":"#前序遍历模型","children":[]},{"level":3,"title":"中序遍历模型","slug":"中序遍历模型","link":"#中序遍历模型","children":[]},{"level":3,"title":"后序遍历模型","slug":"后序遍历模型","link":"#后序遍历模型","children":[]}]},{"level":2,"title":"非递归排序（自己压栈）","slug":"非递归排序-自己压栈","link":"#非递归排序-自己压栈","children":[{"level":3,"title":"前序遍历","slug":"前序遍历","link":"#前序遍历","children":[]},{"level":3,"title":"中序遍历","slug":"中序遍历","link":"#中序遍历","children":[]},{"level":3,"title":"后序遍历","slug":"后序遍历","link":"#后序遍历","children":[]},{"level":3,"title":"总体思路：","slug":"总体思路","link":"#总体思路","children":[]}]},{"level":2,"title":"层序遍历","slug":"层序遍历","link":"#层序遍历","children":[{"level":3,"title":"通过队列来帮助实现","slug":"通过队列来帮助实现","link":"#通过队列来帮助实现","children":[]}]},{"level":2,"title":"找到最宽的层","slug":"找到最宽的层","link":"#找到最宽的层","children":[]},{"level":2,"title":"找到最低的公共结点。","slug":"找到最低的公共结点。","link":"#找到最低的公共结点。","children":[{"level":3,"title":"别的方法","slug":"别的方法","link":"#别的方法","children":[]}]},{"level":2,"title":"从结构中找到后继结点","slug":"从结构中找到后继结点","link":"#从结构中找到后继结点","children":[]},{"level":2,"title":"二叉树的序列化和反序列化","slug":"二叉树的序列化和反序列化","link":"#二叉树的序列化和反序列化","children":[{"level":3,"title":"反序列化","slug":"反序列化","link":"#反序列化","children":[]}]},{"level":2,"title":"折纸","slug":"折纸","link":"#折纸","children":[{"level":3,"title":"思维模式","slug":"思维模式","link":"#思维模式","children":[]},{"level":3,"title":"代码","slug":"代码","link":"#代码","children":[]}]},{"level":2,"title":"二叉树板斧","slug":"二叉树板斧","link":"#二叉树板斧","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.99,"words":2397},"filePathRelative":"bookList/Zosan algorithm/seven.md","excerpt":"<h2> 二叉树的分类</h2>\\n<h3> 搜索二叉树</h3>\\n<p>中序遍历为递增的数列。</p>\\n<div style=\\"text-align:center\\">\\n<figure><img src=\\"/assets/images/搜索二叉树建立.svg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</div>\\n<p><strong>构建代码：</strong></p>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code>\\t\\t<span class=\\"token keyword\\">void</span> <span class=\\"token function\\">Creat_SearchBinaryTrees</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">ISempty</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> this<span class=\\"token operator\\">-&gt;</span>root <span class=\\"token operator\\">=</span> new <span class=\\"token function\\">TreeNode</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t\\tTreeNode<span class=\\"token operator\\">*</span> p  <span class=\\"token operator\\">=</span> this<span class=\\"token operator\\">-&gt;</span>root<span class=\\"token punctuation\\">;</span>\\n\\t\\t\\tTreeNode<span class=\\"token operator\\">*</span> pre<span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t<span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span>p<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\tpre <span class=\\"token operator\\">=</span> p<span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t\\tp <span class=\\"token operator\\">=</span> x <span class=\\"token operator\\">&gt;</span> p<span class=\\"token operator\\">-&gt;</span>x <span class=\\"token operator\\">?</span> p<span class=\\"token operator\\">-&gt;</span>right<span class=\\"token operator\\">:</span> p<span class=\\"token operator\\">-&gt;</span>left<span class=\\"token punctuation\\">;</span>\\t\\n\\t\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t\\t\\t\\n\\t\\t\\tTreeNode<span class=\\"token operator\\">*</span> Node  <span class=\\"token operator\\">=</span> new <span class=\\"token function\\">TreeNode</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>pre<span class=\\"token operator\\">-&gt;</span>x <span class=\\"token operator\\">&lt;</span> x<span class=\\"token punctuation\\">)</span> pre<span class=\\"token operator\\">-&gt;</span>right <span class=\\"token operator\\">=</span> Node<span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t<span class=\\"token keyword\\">else</span> pre<span class=\\"token operator\\">-&gt;</span>left <span class=\\"token operator\\">=</span> Node<span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
