---
title: Projects
navigation_id: projects
layout: base.njk
---

# Projects

<eminor-project-list>

{% for post in collections['projects'] %}

<eminor-project-list-entry>

<img class="blurb-image" width=200 alt="oscillator app screenshot"
src="{{post.data.blurb.image}}" /> <eminor-blurb-text><a href="{{ post.url }}">{{
post.data.title }}</a> : {{ post.data.blurb.summary }} </eminor-blurb-text>

</eminor-project-list-entry>

{% endfor %}

</eminor-project-list>

