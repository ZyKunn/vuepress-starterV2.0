<template><div><h1 id="🦸‍♂-增强版-switch-语句" tabindex="-1"><a class="header-anchor" href="#🦸‍♂-增强版-switch-语句" aria-hidden="true">#</a> 🦸‍♂ 增强版 Switch 语句</h1>
<hr/>
<nav class="table-of-contents"><ul><li><router-link to="#原版">原版</router-link></li><li><router-link to="#增强版">增强版</router-link></li><li><router-link to="#附上代码截图">附上代码截图</router-link><ul><li><router-link to="#原版-1">原版</router-link></li><li><router-link to="#增强版-1">增强版</router-link></li></ul></li></ul></nav>
<blockquote>
<p>今天用到 Switch 语句的时候，发现 IDEA 出现了一条标黄警告：<code v-pre>Switch语句可以替换为增强的&quot;switch&quot;</code>。于是找了一下资料发现在 JAVA12 版本之后，Switch 语句有了新的更为简易的写法，下面对二者的语法进行一个简单的对比：</p>
</blockquote>
<h2 id="原版" tabindex="-1"><a class="header-anchor" href="#原版" aria-hidden="true">#</a> 原版</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">L4_2_4</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Scanner</span> scan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"请输入新员工的姓名："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"请输入新员工应聘的编程语言："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> language <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 旧版Switch语句只支持Java的基本数据类型，
       字符串只能转换成哈希码（hashCode）后再判断。 */</span>

    <span class="token keyword">switch</span> <span class="token punctuation">(</span>language<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">3254818</span><span class="token operator">:</span> <span class="token comment">//java的hashCode</span>
        <span class="token keyword">case</span> <span class="token number">2301506</span><span class="token operator">:</span> <span class="token comment">//Java的hashCode</span>
        <span class="token keyword">case</span> <span class="token number">2269730</span><span class="token operator">:</span> <span class="token comment">//JAVA的hashCode</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"员工"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"被分配到Java程序开发部门。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">3104</span><span class="token operator">:</span> <span class="token comment">//c#的hashCode</span>
        <span class="token keyword">case</span> <span class="token number">2112</span><span class="token operator">:</span> <span class="token comment">//C#的hashCode</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"员工"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"被分配到C#项目维护组。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"本公司不需要"</span> <span class="token operator">+</span> language <span class="token operator">+</span> <span class="token string">"语言的程序开发人员。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增强版" tabindex="-1"><a class="header-anchor" href="#增强版" aria-hidden="true">#</a> 增强版</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">L4_2_4</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Scanner</span> scan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"请输入新员工的姓名："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"请输入新员工应聘的编程语言："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> language <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">switch</span> <span class="token punctuation">(</span>language<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">"Java"</span><span class="token punctuation">,</span><span class="token string">"java"</span><span class="token punctuation">,</span><span class="token string">"JAVA"</span> <span class="token operator">-></span>
        <span class="token comment">//可以直接对多个字符串进行判断，不需要分行，：改为-></span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"员工"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"被分配到Java程序开发部门。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//语句结束后不需要break跳出循环。</span>
        <span class="token keyword">case</span> <span class="token string">"C#"</span><span class="token punctuation">,</span><span class="token string">"c#"</span> <span class="token operator">-></span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"员工"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"被分配到C#项目维护组。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span> <span class="token operator">-></span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"本公司不需要"</span> <span class="token operator">+</span> language <span class="token operator">+</span> <span class="token string">"语言的程序开发人员。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>可见语句的简洁性提升了很多，同时更加直观</p>
<p>case 语句下如果需要使用不止一行的代码时，要在-&gt;后面加上{ }，使代码成块。否则会提示错误：</p>
<p>java: case 中存在意外语句，应为表达式、块或抛出语句</p>
</blockquote>
<h2 id="附上代码截图" tabindex="-1"><a class="header-anchor" href="#附上代码截图" aria-hidden="true">#</a> 附上代码截图</h2>
<h3 id="原版-1" tabindex="-1"><a class="header-anchor" href="#原版-1" aria-hidden="true">#</a> 原版</h3>
<p><img src="@source/notes/record/增强版Switch语句/assets/image-20230921173303724.png" alt="image-20230921173303724"></p>
<h3 id="增强版-1" tabindex="-1"><a class="header-anchor" href="#增强版-1" aria-hidden="true">#</a> 增强版</h3>
<p><img src="@source/notes/record/增强版Switch语句/assets/image-20230921173344004.png" alt="image-20230921173344004"></p>
</div></template>


