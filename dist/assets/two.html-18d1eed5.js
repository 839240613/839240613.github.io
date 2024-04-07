const s=JSON.parse('{"key":"v-82319658","path":"/bookList/Zosan%20algorithm/two.html","title":"排序","lang":"zh-CN","frontmatter":{"title":"排序","icon":"fab fa-markdown","order":2,"category":["算法"],"tag":["排序"],"next":"three.md","prev":"one.md"},"headers":[{"level":2,"title":"#1.各种排序的结论","slug":"_1-各种排序的结论","link":"#_1-各种排序的结论","children":[]},{"level":2,"title":"#2.选择排序","slug":"_2-选择排序","link":"#_2-选择排序","children":[]},{"level":2,"title":"#3.冒泡排序","slug":"_3-冒泡排序","link":"#_3-冒泡排序","children":[]},{"level":2,"title":"#4.插入排序","slug":"_4-插入排序","link":"#_4-插入排序","children":[]},{"level":2,"title":"#5.插入排序-链表","slug":"_5-插入排序-链表","link":"#_5-插入排序-链表","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.77,"words":1732},"filePathRelative":"bookList/Zosan algorithm/two.md","excerpt":"<h2> 1.各种排序的结论</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:center\\">名称</th>\\n<th style=\\"text-align:center\\">时间常数</th>\\n<th style=\\"text-align:center\\">空间常数</th>\\n<th style=\\"text-align:center\\">稳定性</th>\\n<th style=\\"text-align:center\\">描述</th>\\n<th style=\\"text-align:center\\">需要注意的问题</th>\\n<th style=\\"text-align:center\\">具体时间数字</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:center\\"><a href=\\"#_2-%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F\\">选择排序</a></td>\\n<td style=\\"text-align:center\\">O(<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msup><mi>N</mi><mn>2</mn></msup></mrow><annotation encoding=\\"application/x-tex\\">N^{2}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8141em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10903em;\\">N</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span></span>)</td>\\n<td style=\\"text-align:center\\">O(1)</td>\\n<td style=\\"text-align:center\\"><a href=\\"#%E7%A8%B3%E5%AE%9A%E6%80%A7\\">不稳</a></td>\\n<td style=\\"text-align:center\\"><a href=\\"#%E6%8F%8F%E8%BF%B0\\">不常用</a></td>\\n<td style=\\"text-align:center\\"><a href=\\"#%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E7%9A%84%E9%97%AE%E9%A2%98\\">内循环不要越界</a></td>\\n<td style=\\"text-align:center\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mfrac><msup><mi>N</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>N</mi></mrow><annotation encoding=\\"application/x-tex\\">\\\\frac{N^{2} }{2} + \\\\frac{3}{2} N</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.3629em;vertical-align:-0.345em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.0179em;\\"><span style=\\"top:-2.655em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.394em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.10903em;\\">N</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8913em;\\"><span style=\\"top:-2.931em;margin-right:0.0714em;\\"><span class=\\"pstrut\\" style=\\"height:2.5em;\\"></span><span class=\\"sizing reset-size3 size1 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.345em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">+</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.1901em;vertical-align:-0.345em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8451em;\\"><span style=\\"top:-2.655em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.394em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">3</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.345em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10903em;\\">N</span></span></span></span></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\"><a href=\\"#_3-%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F\\">冒泡排序</a></td>\\n<td style=\\"text-align:center\\">O(<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msup><mi>N</mi><mn>2</mn></msup></mrow><annotation encoding=\\"application/x-tex\\">N^{2}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8141em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10903em;\\">N</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span></span>)</td>\\n<td style=\\"text-align:center\\">O(1)</td>\\n<td style=\\"text-align:center\\"><a href=\\"#%E7%A8%B3%E5%AE%9A%E6%80%A7\\">稳定</a></td>\\n<td style=\\"text-align:center\\"><a href=\\"#%E6%8F%8F%E8%BF%B0-1\\">不常用</a></td>\\n<td style=\\"text-align:center\\">无</td>\\n<td style=\\"text-align:center\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mfrac><mn>3</mn><mn>4</mn></mfrac><msup><mi>N</mi><mn>2</mn></msup></mrow><annotation encoding=\\"application/x-tex\\">\\\\frac{3}{4}N^{2}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.1901em;vertical-align:-0.345em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8451em;\\"><span style=\\"top:-2.655em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">4</span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.394em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">3</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.345em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10903em;\\">N</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span></span></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\"><a href=\\"#_4-%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F\\">插入排序</a></td>\\n<td style=\\"text-align:center\\">O(<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msup><mi>N</mi><mn>2</mn></msup></mrow><annotation encoding=\\"application/x-tex\\">N^{2}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8141em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10903em;\\">N</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span></span>)</td>\\n<td style=\\"text-align:center\\">O(1)</td>\\n<td style=\\"text-align:center\\"><a href=\\"#%E7%A8%B3%E5%AE%9A%E6%80%A7\\">稳定</a></td>\\n<td style=\\"text-align:center\\"><a href=\\"#%E6%8F%8F%E8%BF%B0-2\\">不常用</a></td>\\n<td style=\\"text-align:center\\">数组不要越界</td>\\n<td style=\\"text-align:center\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mfrac><msup><mi>N</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow><annotation encoding=\\"application/x-tex\\">\\\\frac{N^{2} }{2}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.3629em;vertical-align:-0.345em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.0179em;\\"><span style=\\"top:-2.655em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.394em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.10903em;\\">N</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8913em;\\"><span style=\\"top:-2.931em;margin-right:0.0714em;\\"><span class=\\"pstrut\\" style=\\"height:2.5em;\\"></span><span class=\\"sizing reset-size3 size1 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.345em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span></span></span></span></td>\\n</tr>\\n</tbody>\\n</table>"}');export{s as data};
