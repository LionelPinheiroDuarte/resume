const {EleventyI18nPlugin} = require('@11ty/eleventy');

module.exports = function(eleventyConfig) {
   eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'fr' // Required
  });
  
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: "_includes",
    },
    templateFormats:        ['md', 'njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine:     'njk',
    passtroughFileCopy:     true,
  };
};
