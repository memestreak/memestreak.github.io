---
title: Projects
navigation_id: projects
layout: base.njk
---

# Projects

{% for post in collections['projects'] %}

<img width=200 alt="oscillator app screenshot" src="{{post.data.blurb.image}}" />

<a href="{{ post.url }}">{{ post.data.title }}</a> : {{ post.data.blurb.summary }}

{% endfor %}
