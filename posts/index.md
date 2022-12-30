---
layout: base-layout.njk
tags: ["home"]
title: "Posts Home"
pagination:
  data: collections.post
  size: 10
  alias: posts
---
<h1>Posts</h1>

{%- for post in posts -%}
    <article>
        <h2><a href="{{ post.url | url}}">{{ post.data.title }}</a></h2>
    </article>
{%- endfor -%}
