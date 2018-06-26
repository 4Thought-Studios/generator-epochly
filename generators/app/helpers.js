const toPascalCase = str =>
  str
    .match(/[a-z]+/gi)
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    })
    .join('');

const wordCount = str => str.split(' ').length;

module.exports = {
  toPascalCase: toPascalCase,
  wordCount: wordCount
};
