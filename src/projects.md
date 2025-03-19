---
title: Projects
navigation_id: projects
layout: base.njk
---

# Projects

<ul>
  {% for post in collections['projects'] %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
  {% endfor %}
</ul>
