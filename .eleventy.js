const {EleventyI18nPlugin} = require('@11ty/eleventy');
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'fr' // Required
  });
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents)); 
  eleventyConfig.addPassthroughCopy("./src/styles/");
  eleventyConfig.addCollection("en", function(collectionApi) {
    return collectionApi.getAll();
  });
  return {
    dir: {
      input: 'src/',
      output: 'dist',
      includes: "_includes",
    },
    templateFormats:        ['md', 'njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine:     'njk',
    passtroughFileCopy:     true,
  };
};
