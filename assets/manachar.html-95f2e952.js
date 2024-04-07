const n=JSON.parse(`{"key":"v-54676a75","path":"/bookList/Zosan%20algorithm/manachar.html","title":"manachar(马拉车)","lang":"zh-CN","frontmatter":{"title":"manachar(马拉车)","icon":"fab fa-markdown","order":10,"category":["数据结构结构"],"tag":["哈希"],"next":null,"prev":"KMP.md"},"headers":[{"level":2,"title":"manachar","slug":"manachar","link":"#manachar","children":[]},{"level":2,"title":"对字符串的前操作","slug":"对字符串的前操作","link":"#对字符串的前操作","children":[]},{"level":2,"title":"执行情况","slug":"执行情况","link":"#执行情况","children":[{"level":3,"title":"需要记录四个量","slug":"需要记录四个量","link":"#需要记录四个量","children":[]},{"level":3,"title":"运动模式","slug":"运动模式","link":"#运动模式","children":[]},{"level":3,"title":"时间复杂度","slug":"时间复杂度","link":"#时间复杂度","children":[]},{"level":3,"title":"代码","slug":"代码","link":"#代码","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.42,"words":1027},"filePathRelative":"bookList/Zosan algorithm/manachar.md","excerpt":"<h2> manachar</h2>\\n<p>这个算法是解决回文字符串的问题。和KMP一样，</p>\\n<p>通过一些前面的操作获取一些信息，来加速字符串的比对。</p>\\n<p><strong>为此需要有一个想next数组一样的东西制作一个数组，进行迭代优化。</strong></p>\\n<h2> 对字符串的前操作</h2>\\n<p>回文字符串在遇到 abba 偶数字符串的时候，进行中心扩散法需要一定的改进。</p>\\n<p>或者对字符串本身进行一定的改进，把上述abba变成#a#b#b#a#，</p>\\n<p>这样做的好处是无论是奇数还是偶数的字符串，都会通过这样的操作变成奇数的字符串。</p>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token comment\\">// 1234-&gt;#1#2#3#4</span>\\n<span class=\\"token keyword\\">void</span> <span class=\\"token function\\">precess_str</span><span class=\\"token punctuation\\">(</span>string<span class=\\"token operator\\">&amp;</span> s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token comment\\">//boundary</span>\\n\\t<span class=\\"token keyword\\">int</span> n <span class=\\"token operator\\">=</span> s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>n <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n\\tstring str<span class=\\"token punctuation\\">;</span>\\n\\t\\n\\t<span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i<span class=\\"token punctuation\\">;</span>i<span class=\\"token operator\\">&lt;</span>n<span class=\\"token punctuation\\">;</span>i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token punctuation\\">{</span>\\n\\t\\tstr<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push_back</span><span class=\\"token punctuation\\">(</span><span class=\\"token char\\">'#'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\tstr <span class=\\"token operator\\">+=</span> s<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\n\\t<span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token comment\\">//add the last character</span>\\n\\tstr<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push_back</span><span class=\\"token punctuation\\">(</span><span class=\\"token char\\">'#'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token comment\\">//test for find the max palindromic radius</span>\\n\\t<span class=\\"token keyword\\">int</span> len <span class=\\"token operator\\">=</span> str<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">length</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> \\n\\t<span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> j<span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>j<span class=\\"token operator\\">&lt;</span>len<span class=\\"token punctuation\\">;</span>j<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t\\tcout<span class=\\"token operator\\">&lt;&lt;</span>i<span class=\\"token operator\\">++</span><span class=\\"token operator\\">&lt;&lt;</span><span class=\\"token char\\">'-'</span><span class=\\"token punctuation\\">;</span>\\n\\t\\tcout<span class=\\"token operator\\">&lt;&lt;</span>str<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">&lt;&lt;</span><span class=\\"token char\\">'\\\\t'</span><span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">}</span>\\n\\t\\n\\ts<span class=\\"token operator\\">=</span>str<span class=\\"token punctuation\\">;</span>\\n\\t\\n\\t<span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span> \\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};
