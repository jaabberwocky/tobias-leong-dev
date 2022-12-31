const { DateTime } = require("luxon");

const postDate = (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
}

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy({
    "./node_modules/typewriter-effect/dist/core.js": "assets/js/core.js",
  });
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addFilter("postDate", postDate);

  return {
    dir: {
      input: "./",
      output: "_site",
      layouts: "layouts",
      includes: "includes",
      data: "_data",
    },
    passthroughFileCopy: true,
  };
};
