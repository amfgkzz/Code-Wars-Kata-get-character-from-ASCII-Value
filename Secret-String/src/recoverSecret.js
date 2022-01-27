module.exports = 
function recoverSecret(triplet){
    let secretWord = '';
    let secretValue = new Object();
    let value = 1;

    for (let i = 0; i < triplet.length; i++) {
        let randomTriplet = triplet[i];
        let prevValue;
        let currentValue;
        for (let j = 0; j < randomTriplet.length; j++) {
            const letter = randomTriplet[j];
            prevValue = currentValue || null;
            // console.log(secretValue[letter], letter)
            if (secretValue[letter]) { // if this letter already exists AND prevValue exists, do something
                console.log('hit')

            } else {
                secretValue[letter] = value;
                value++;
            }

            currentValue = secretValue[letter];
            console.log('prevValue: ', prevValue, 'currentValue: ', currentValue, 'letter: ', letter)
            // if (currentValue < prevValue) {
            //     secretValue[letter] = prevValue;
            //     secretValue[letter] = currentValue;
            // }
        }
    }

    // console.log('secretWord: ', secretWord)
    console.log('secretValue: ', secretValue)
}

// Latest thoughts b4 sleep:
// hatsupwi, tis, hatupwis, whatupis, order matters function could return whatupis instead of whatisup depending on 
// how the algorithm moves the word positions
// could use a while loop, I could see it making the logic easier
// logic may be easier with using arrays n using array methods
// keeping position values may not be needed, either way would work tho