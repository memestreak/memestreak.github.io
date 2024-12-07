// See: www.11ty.dev/docs/config/

const eleventySass = require("eleventy-sass");


//
// Main entry point
//
module.exports = async function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass);

    return {
        dir: {
            input: "src",
            includes: "layouts/partials",
      	    layouts: "layouts",
            data: "globals",
            output: "_site",
        },
    };
};
