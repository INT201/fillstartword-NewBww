const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
    if (word == null) return undefined;
    return (word.includes(startWord) ? word : startWord+word);
}
module.exports = fillStartWord
