import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as a}from"./app-82a511c8.js";const s="/assets/images/前缀树样子.jpg",t="/assets/images/前缀树的样子2.jpg",l={},c=a('<h2 id="前缀树" tabindex="-1"><a class="header-anchor" href="#前缀树" aria-hidden="true">#</a> 前缀树</h2><div style="text-align:center;"><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><p>前缀树的用处在于，查看前缀是啥，然后快速给出答案。</p><div style="text-align:center;"><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><p>前缀树的节点有三个参数，</p><ul><li><p>第一个是经过的次数</p></li><li><p>第二个是在这个节点结束的次数</p></li><li><p>第三个是创建下一个节点的节点数组。数组的数量由字符种类决定</p></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>struckct TrieNode {
  private：
    int pass; //经过的次数
    int end; //结束的次数
    TrieNode* next[26]; //下一个节点
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[c];function r(o,p){return i(),n("div",null,d)}const v=e(l,[["render",r],["__file","nine.html.vue"]]);export{v as default};
