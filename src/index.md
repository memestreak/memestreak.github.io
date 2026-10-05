---
title: eminor.net
layout: base.njk
---

# Hello

I'm Jeremy Ellington. I do software, hardware, music, and other
buildy-makey things.

## Recent projects

{% for post in collections['projects'] | reverse %}
* [{{ post.data.title }}]({{ post.url }}): {{ post.data.blurb.summary }}
{%- endfor %}

See all [projects](/projects), or read [about this site](/colophon).
