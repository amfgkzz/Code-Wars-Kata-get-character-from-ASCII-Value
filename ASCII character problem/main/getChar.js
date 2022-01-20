// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// first what is an ASCII character?
// From Wikipedia:
// ASCII, abbreviated from American Standard Code for Information Interchange, 
// is a character encoding standard for electronic communication. ASCII codes represent text in computers, telecommunications equipment, 
// and other devices. Most modern character-encoding schemes are based on ASCII, although they support many additional characters.

let ASCII = require('./ASCII')

module.exports = function getChar(number) {
    let char;

    for (const num in ASCII) {
        // use double equal for coercion
        if ( num == number ) {
            const char = ASCII[num];
            return char;
        }
    }
}