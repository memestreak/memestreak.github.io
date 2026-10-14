---
title: fmlab
navigation_id: projects
layout: base.njk
date: 2026-10-14
tags: projects
blurb:
  summary: "An interactive guide to FM synthesis with Web Audio"
  image: /assets/img/fmlab-bessel.png
  image_width: 1200
  image_height: 400
---

# fmlab

![fmlab's Bessel function plot, showing how tall each pair of sidebands is at every modulation index](/assets/img/fmlab-bessel.png){width=500 height=167}

fmlab is an interactive guide to FM synthesis. Short chapters go from a
single sine wave up to the Yamaha DX7's operator algorithms, each with
controls you can play with while you hear the sound and watch its
waveform and spectrum change. A sandbox at the end has every control
and an on-screen keyboard.

It's written in vanilla TypeScript with [Vite], drawing with Canvas 2D,
and the sound comes from a phase-modulation engine in a Web Audio
[AudioWorklet].

* [Demo]{target="_blank"}
* [Source code]

[Vite]: https://vite.dev
[AudioWorklet]: https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet
[Demo]: https://fmlab.pages.dev
[Source code]: https://github.com/memestreak/fmlab
