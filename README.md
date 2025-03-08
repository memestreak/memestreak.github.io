# Site source

## Development

### Checkout / Install

One time step for bootstrapping

```sh
git clone $THIS_REPO
cd $THIS_REPO

# Create and populate dependencies under node_modules/
npm install
```

### Running

```sh
# Run locally on :8080
npm run serve

# Just build _site/ artifacts
npm build
```

## References

*   Built using [Eleventy].
*   Support for SCSS formatted stylesheets comes from [eleventy-sass].
*   Hosting on GitHub Pages: See [hosting-eleventy-on-github-pages]
*   [Configuring GitHub apex domains]

[Eleventy]: https://www.11ty.dev/
[eleventy-sass]: https://github.com/kentaroi/eleventy-sass
[hosting-eleventy-on-github-pages]: https://quinndombrowski.com/blog/2022/05/07/hosting-eleventy-on-github-pages/
[Configuring GitHub apex domains]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain
