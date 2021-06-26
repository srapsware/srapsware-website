---
layout: post
title: Enabling Jekyll Blog Comments with Utterances
date: 2021-06-26T07:19:47.287Z
tags:
  - News
  - How To
categories:
  - How To
  - News
author: shiv
post_image: /assets/uploads/utteranc.png
---
My last blog, also created in Jekyll, used Disqus for handling comments. This time, I wanted to explore new options, and I came across [Utterances](https://utteranc.es/), which stores blog comments on Github Issues. What a strange idea, but anything that boosts activity on my Github is probably a win.

It was incredibly easy to set it up in Jekyll, as you simply add a script tag to your post layout:

```html
<script src="https://utteranc.es/client.js"
        repo="your-github-username/your-github-repo" 
        issue-term="pathname"
        theme="github-dark"
        label="comment"
        crossorigin="anonymous"
        async>
</script>
```

You can customize the format of issues created on the Utterances homepage, and they will customize their own script for you to use. You’ll also have to install the Utterances app on your Github repo to get commenting to work, but Utterances will prompt you when you try to comment below, so it’s hard to forget.

Quick and easy.