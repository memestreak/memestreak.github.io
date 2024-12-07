// See: www.11ty.dev/docs/config/

//
// Main entry point
//
module.exports = async function(eleventyConfig) {
    return {
        dir: {
            input: "src",
            includes: "includes",
      	    layouts: "includes/layouts",
            components: "includes/components",
            data: "globals",
            output: "out",
        },
    };
};
