---
title: Colophon
navigation_id: about
layout: base.njk
---

# Colophon

## Eleventy

This site is built using [Eleventy], a static site generator. The idea
is that, for non-trivial sites, things like templating and other types
of file preprocessing become worth the cost of framework's complexity.

## GitHub Pages

We use [GitHub Pages] to host the site ([source]). It's currently free
for public repositories.

GitHub Pages assumes the use of Jekyll[^jekyll], and configuring it to use
Eleventy requires a few non-obvious configuration changes. [This
article][hosting-eleventy-on-github-pages] helped me get up and running.

The last bit of complexity comes from using a custom domain name for
the site. By default a user's GitHub Pages repository will be hosted
at `$USER.github.io/`, but this is [customizable][pages-custom-domains].

[^jekyll]: [Jekyll] is an alternative static site generator based on Ruby.

[Eleventy]: https://www.11ty.dev/
[GitHub Pages]: https://pages.github.com/
[source]: https://github.com/memestreak/memestreak.github.io
[hosting-eleventy-on-github-pages]: https://quinndombrowski.com/blog/2022/05/07/hosting-eleventy-on-github-pages/
[pages-custom-domains]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
[Jekyll]: https://jekyllrb.com/


