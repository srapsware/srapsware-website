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
Our this blog, also created in Jekyll, used Disqus for comment management. This time I wanted to explore new options, and I ran into Utteranc, that stores blog posts about Github Issues. What an odd idea, but anything that stimulates activity on my Github is probably a win.

It was incredibly easy to set it up in Jekyll, as you just add a scripting tag to your post layout:

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

You can customize the format of the problems created on the home page of Utterances, and they will customize their own script for you to use. You will also need to install Utterances on your Github repo to be able to comment, but the Utteranc will prompt you when you attempt to comment below, so it's hard to forget.

Quick and easy.



You can see below comments from Github issues.