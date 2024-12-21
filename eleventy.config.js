// See: www.11ty.dev/docs/config/

// See: github.com/kentaroi/eleventy-sass
const eleventySass = require("eleventy-sass");
const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItFootnote = require('markdown-it-footnote')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// ----------------------------------------------------------------------------
// Main entry point
// ----------------------------------------------------------------------------
module.exports = async function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass);
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/img");

    eleventyConfig.addPlugin(syntaxHighlight);

    // Debugging helper. This enables things like the following in your nunjuck
    // templates: {{ article | log }}
    eleventyConfig.addFilter('log', value => {
        console.log(value)
    })

    // Markdown to HTML configuration.
    const markdownItOptions = {
        html: true,
        breaks: true,
        linkify: true
    }
    const markdownLib = markdownIt(markdownItOptions)
          .use(markdownItAttrs)
          .use(markdownItFootnote);
    eleventyConfig.setLibrary('md', markdownLib)

    return {
        dir: {
            // Controls the top level directory/file/glob that we’ll
            // use to look for templates.
            input: "src",

            // The includes directory is meant for Eleventy layouts,
            // include files, extends files, partials, or
            // macros. These files will not be processed as full
            // template files, but can be consumed by other templates.
            includes: "layouts/partials",

            // This configuration option is optional but useful if you
            // want your Eleventy layouts to live outside of the
            // Includes directory. Just like the Includes directory,
            // these files will not be processed as full template
            // files, but can be consumed by other templates.
      	    layouts: "layouts",

            // Controls the directory inside which the global data
            // template files, available to all templates, can be
            // found. See www.11ty.dev/docs/data-global.
            data: "data",

            // Controls the directory inside which the finished
            // templates will be written to.
            output: "_site",
        },
    };
};
