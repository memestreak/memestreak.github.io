---
title: Things I've learned
navigation_id: notes
description: Short notes by Jeremy Ellington on things he has learned.
layout: base.njk
---

# Things I've learned

Short notes on things I've picked up along the way, newest first.

{% set notes = collections['notes'] | reverse %}
{%- if notes.length %}
<ul class="note-list">
{%- for note in notes %}
  <li>
    <a href="{{ note.url }}">{{ note.data.title }}</a>
    <time datetime="{{ note.date.toISOString().slice(0, 10) }}">{{ note.date.toISOString().slice(0, 10) }}</time>
  </li>
{%- endfor %}
</ul>
{%- else %}
Nothing here yet. Check back soon.
{%- endif %}
