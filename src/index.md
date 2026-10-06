---
title: eminor.net
layout: base.njk
---

# Hello

I'm Jeremy Ellington. I do software, hardware, music, and other
buildy-makey things.

## Recent projects

{% set project_list = collections['projects'] | reverse %}
{% include "project-cards.njk" %}

See all [projects](/projects), or read [about this site](/colophon).
