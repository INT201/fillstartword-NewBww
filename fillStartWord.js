const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
    if (word === null || word === undefined) return undefined;
    return word?.startsWith(startWord) ? word : startWord+word;
}
module.exports = fillStartWord
