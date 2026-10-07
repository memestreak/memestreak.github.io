---
title: Frets
navigation_id: projects
layout: base.njk
date: 2026-10-07
tags: projects
blurb:
  summary: "Guitar fretboard theory trainers and a scale lab in Next.js"
  image: /assets/img/frets-scale-lab.png
  image_width: 1200
  image_height: 400
---

# Frets

![Frets scale lab showing A Dorian on the neck, labeled by scale degree](/assets/img/frets-scale-lab.png){width=500 height=167}

Frets is a set of tools for learning the guitar fretboard. The scale
lab draws any root and scale across the first 15 frets, with each dot
labeled by scale degree or note name, and stacks the scale's triads or
seventh chords so you can see each one's tones against the scale.
There's also a chord library of open and moveable shapes, a chord lab
that names whatever you tap out on the neck, and interval and note
trainers that quiz you until you know the neck cold.

It's a static [Next.js] app written in TypeScript, with the music
theory handled by [Tonal].

* [Demo]{target="_blank"}
* [Source code]

[Next.js]: https://nextjs.org
[Tonal]: https://github.com/tonaljs/tonal
[Demo]: https://fret.eminor.net
[Source code]: https://github.com/memestreak/frets
