const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
    if (word == null) return undefined;
    return (startWord === word.slice(0,startWord.length) ? word : startWord+word);
}
module.exports = fillStartWord
