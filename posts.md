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
        <h3><a href="{{ post.url | url}}">{{ post.data.title }}</a></h3> - {{ post.date }}
    </article>
{%- endfor -%}

More can be found in archives.
