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