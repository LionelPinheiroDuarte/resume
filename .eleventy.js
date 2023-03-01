module.exports = function(eleventyConfig) {
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
