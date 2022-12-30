---
layout: base-layout.njk
tags: ["home"]
title: "Posts Home"
pagination:
  data: collections.post
  size: 10
---

{% for post in posts %}

<article>
<h1>
<a href="{{ post.url | url}}">{{ post.data.title }}</a>
</h1>
</article>
{% endfor %}
