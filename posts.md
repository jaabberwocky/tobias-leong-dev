---
layout: base-layout.njk
tags: ["home"]
title: "Posts Home"
pagination:
  data: collections.post
  size: 5
  alias: posts
  reverse: true
---

<h1>Latest Posts</h1>

{%- for post in posts -%}

<article>
<h3><a href="{{ post.url | url}}">{{ post.data.title }}</a></h3> - {{ post.date | postDate }}
</article>
{%- endfor -%}

{% if pagination.hrefs.length > 5 %}
<<a href="{{pagination.href.previous}}">Back</a> /
<a href="{{pagination.href.next}}">More</a>>
{% endif %}
