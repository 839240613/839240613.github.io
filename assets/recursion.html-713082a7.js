import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-e4bb05b4.js";const t="/assets/images/苹果问题.png",p={},i=e('<h2 id="苹果" tabindex="-1"><a class="header-anchor" href="#苹果" aria-hidden="true">#</a> 苹果</h2><div style="text-align:center;"><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">s</span><span class="token punctuation">(</span>盘子，苹果<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>盘子或者苹果为<span class="token number">1</span><span class="token punctuation">)</span> 退出

<span class="token keyword">if</span> <span class="token punctuation">(</span>盘子大于苹果<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">s</span><span class="token punctuation">(</span>盘子，盘子<span class="token punctuation">)</span>
<span class="token keyword">else</span> <span class="token punctuation">(</span>盘子小于等于苹果<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">s</span><span class="token punctuation">(</span>盘子<span class="token operator">-</span><span class="token number">1</span> ， 苹果<span class="token punctuation">)</span> <span class="token operator">+</span> s（盘子，盘子<span class="token operator">-</span>苹果）<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>聚焦于数字的累计和。</p><h2 id="汉诺塔" tabindex="-1"><a class="header-anchor" href="#汉诺塔" aria-hidden="true">#</a> 汉诺塔</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">han</span><span class="token punctuation">(</span>数量，起始，辅助，目标<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>数量为<span class="token number">1</span><span class="token punctuation">)</span> 移动盘子<span class="token number">1</span>从起始到目标
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token function">han</span><span class="token punctuation">(</span>数量<span class="token operator">-</span><span class="token number">1</span>，起始，目标，辅助<span class="token punctuation">)</span>
        移动盘子数量从起始到目标
        <span class="token function">han</span><span class="token punctuation">(</span>数量<span class="token operator">-</span><span class="token number">1</span>，辅助，起始，目标<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>聚焦于移动的那一步。</p><h2 id="二分法" tabindex="-1"><a class="header-anchor" href="#二分法" aria-hidden="true">#</a> 二分法</h2><p>左边给最大的我，右边给最大的我，你们下去吧</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>函数<span class="token punctuation">(</span>数组，左边，右边<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>只有一个数<span class="token punctuation">)</span> 返回
        
    左边最大的 <span class="token operator">=</span> 函数<span class="token punctuation">(</span>数组，左边，中间<span class="token punctuation">)</span>；
    右边最大的 <span class="token operator">=</span> 函数<span class="token punctuation">(</span>数组，中间<span class="token operator">+</span><span class="token number">1</span>，右边<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> 左边最大的 与 右边最大的 中最大的
<span class="token punctuation">}</span>
 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,11),c=[i];function o(l,u){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","recursion.html.vue"]]);export{k as default};
