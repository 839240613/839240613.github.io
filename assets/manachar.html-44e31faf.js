import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as i}from"./app-e4bb05b4.js";const t="/assets/images/马拉车1.png",e="/assets/images/马拉车2.png",l="/assets/images/马拉车3.png",p="/assets/images/马拉车4.png",r="/assets/images/马拉车5.png",c="/assets/images/马拉车6.png",o="/assets/images/马拉车7.png",d={},u=i(`<h2 id="manachar" tabindex="-1"><a class="header-anchor" href="#manachar" aria-hidden="true">#</a> manachar</h2><p>这个算法是解决回文字符串的问题。和KMP一样，</p><p>通过一些前面的操作获取一些信息，来加速字符串的比对。</p><p><strong>为此需要有一个想next数组一样的东西制作一个数组，进行迭代优化。</strong></p><h2 id="对字符串的前操作" tabindex="-1"><a class="header-anchor" href="#对字符串的前操作" aria-hidden="true">#</a> 对字符串的前操作</h2><p>回文字符串在遇到 abba 偶数字符串的时候，进行中心扩散法需要一定的改进。</p><p>或者对字符串本身进行一定的改进，把上述abba变成#a#b#b#a#，</p><p>这样做的好处是无论是奇数还是偶数的字符串，都会通过这样的操作变成奇数的字符串。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 1234-&gt;#1#2#3#4</span>
<span class="token keyword">void</span> <span class="token function">precess_str</span><span class="token punctuation">(</span>string<span class="token operator">&amp;</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//boundary</span>
	<span class="token keyword">int</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
	string str<span class="token punctuation">;</span>
	
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		str<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token char">&#39;#&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		str <span class="token operator">+=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		
	<span class="token punctuation">}</span>
  <span class="token comment">//add the last character</span>
	str<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token char">&#39;#&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//test for find the max palindromic radius</span>
	<span class="token keyword">int</span> len <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>len<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		cout<span class="token operator">&lt;&lt;</span>i<span class="token operator">++</span><span class="token operator">&lt;&lt;</span><span class="token char">&#39;-&#39;</span><span class="token punctuation">;</span>
		cout<span class="token operator">&lt;&lt;</span>str<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span><span class="token char">&#39;\\t&#39;</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
	
	s<span class="token operator">=</span>str<span class="token punctuation">;</span>
	
	<span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行情况" tabindex="-1"><a class="header-anchor" href="#执行情况" aria-hidden="true">#</a> 执行情况</h2><h3 id="需要记录四个量" tabindex="-1"><a class="header-anchor" href="#需要记录四个量" aria-hidden="true">#</a> 需要记录四个量</h3><ul><li>回文半径</li><li>回文直径</li><li>最靠近i的最大回文字符串的中心</li><li>最靠近i的最大回文字符串的右边界</li></ul><h3 id="运动模式" tabindex="-1"><a class="header-anchor" href="#运动模式" aria-hidden="true">#</a> 运动模式</h3><p>制作数组时，有四种情况。</p><h4 id="一-i在r外" tabindex="-1"><a class="header-anchor" href="#一-i在r外" aria-hidden="true">#</a> (一) i在R外</h4><div style="text-align:center;"><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><ul><li>当新的字符串出现在R边界外时，像中心扩散法暴力往外扩即可。</li></ul><h4 id="一-i在r内-i-在l内" tabindex="-1"><a class="header-anchor" href="#一-i在r内-i-在l内" aria-hidden="true">#</a> (一) i在R内，i&#39;在L内</h4><div style="text-align:center;"><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><ul><li><p>当新的字符串出现在R边界内时，并且i&#39;的回文半径在L内，那么i&#39;的回文半径就是i的回文半径。</p></li><li><p><strong>解析</strong>：</p></li></ul><div style="text-align:center;"><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><p>C为靠近i的回文字符串的中心，那么x=p，y=z。</p><p>如果z=p，那么i的回文字符串就应该更大。</p><p>假设，z=p，那么x=y，i&#39;的回文字符串就应该更大。</p><p>没有这样的可能性。因为所有的字符串都是通过暴力扩张，然后分析暴力扩张数据而来的，</p><p>i&#39;的数据不可能有错，<strong>所以i的回文半径一定等于i&#39;的回文半径。</strong></p><h4 id="二-i在r内-i-在l外" tabindex="-1"><a class="header-anchor" href="#二-i在r内-i-在l外" aria-hidden="true">#</a> (二) i在R内，i&#39;在L外</h4><div style="text-align:center;"><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><ul><li>当新的字符串出现在R边界内时，并且i&#39;的回文半径在外，那么i&#39;的回文半径正好在R的边界。</li></ul><p><strong>即R-i&#39;的回文半径。</strong></p><ul><li><strong>解释：</strong></li></ul><p>有i&#39;的回文半径，那么x=y，由于C的特性，y=z。</p><p>如果p=x，那么C的回文半径应该变大，同时p=z，i也会更大。</p><p>这两个条件是相等的，也就是说，i的回文半径变大的同时C的最大回文半径也需要变大。</p><p>因此i的回文半径只能在R的边界。</p><h4 id="四-i在r内-i-正好和l重叠。" tabindex="-1"><a class="header-anchor" href="#四-i在r内-i-正好和l重叠。" aria-hidden="true">#</a> (四) i在R内，i&#39;正好和L重叠。</h4><div style="text-align:center;"><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><ul><li><strong>解释：</strong> y=z，只有这个关系是确定的，所以是否i的最长回文字符串是R-i是不确定的，需要查看z=p是否成立。</li></ul><p>因此也需要暴力扩。</p><h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h3><p>o(N)，四种情况中，做了两件事情，</p><p>-第一件事情：暴力扩张，每个字符串都会被要求扩张失败一起O(N)</p><p>-第二件事情，i和R不断变大，</p><div style="text-align:center;"><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><p>时间为2*O(N)。</p><div style="text-align:center;"><p><strong>整个时间复杂度为O(N)</strong></p></div><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><p>代码进行了一定程度的优化，四个行为可以合并为这样的流程图：</p><div style="text-align:center;"><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><p>得到的数组-1就是这个位置或者最大回文半径的字符串长度。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void manachar(string str){
	//boundary
	int len = str.length();
	if(len==1||len==0) return; 
	cout&lt;&lt;len&lt;&lt;endl;
	//initialize
	int C = -1;int R = -1;vector&lt;int&gt; mana_arr;mana_arr.resize(len);
	//execution
	for(int i=0;i&lt;len;i++){
		mana_arr[i] = i &lt; R ? min(R-i,mana_arr[2*C-i]) : 1;
		
		while( i + mana_arr[i] &lt; len &amp;&amp; i - mana_arr[i] &gt; -1){
			if(str[i + mana_arr[i]] == str[i - mana_arr[i] ]){
				mana_arr[i]++;
			}else break; }
			
		if(R&lt;i+mana_arr[i]){
			C = i;
			R = i+mana_arr[i];
			
		}}
		
	int i = 0;
	//show the arr
	for(vector&lt;int&gt;::iterator it = mana_arr.begin();it != mana_arr.end();it++) {
		cout&lt;&lt;i++&lt;&lt;&#39;-&#39;;
		printf(&quot;%d\\t&quot;,*it);}
	
	return;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),v=[u];function m(k,g){return a(),s("div",null,v)}const f=n(d,[["render",m],["__file","manachar.html.vue"]]);export{f as default};
