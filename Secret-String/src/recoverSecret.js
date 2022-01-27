module.exports = 
function recoverSecret(triplet){
    let secretWord = '';
    let secretValue = new Object();
    let value = 1;

    for (let i = 0; i < triplet.length; i++) {
        let randomTriplet = triplet[i];
        let prevLetter;
        let currentLetter;
        for (let j = 0; j < randomTriplet.length; j++) {
            const letter = randomTriplet[j];
            prevLetter = currentLetter || null;
            if (secretValue[letter]) {
                // console.log('hit')

            } else {
                secretValue[letter] = value;
                value++;
            }

            currentLetter = letter;
            // console.log('prevLetter: ', prevLetter, ', currentLetter: ', currentLetter)
            if (secretValue[currentLetter] < secretValue[prevLetter]) {
                // console.log(`${currentLetter}: ${secretValue[currentLetter]} < ${prevLetter}: ${secretValue[prevLetter]}`)
                secretValue[prevLetter] = secretValue[currentLetter];
                secretValue[currentLetter]++;
                // console.log(`${currentLetter}: ${secretValue[currentLetter]} < ${prevLetter}: ${secretValue[prevLetter]}`)
                for (let letter in secretValue) {
                    if ( secretValue[currentLetter] <= secretValue[letter] ) {
                    //     console.log(`${prevLetter}: ${secretValue[prevLetter]}`, ' currentLetter: ', currentLetter, ', secretValue[currentLetter]: ', secretValue[currentLetter], ', letter: ', letter, `, secretValue[letter]: `, secretValue[letter])
                        secretValue[letter]++;
                    }
                    console.log(secretValue);
                }
            }
        }
    }

    // console.log('secretWord: ', secretWord)
    // console.log('secretValue: ', secretValue)
}

// Latest thoughts b4 sleep:
// hatsupwi, tis, hatupwis, whatupis, order matters function could return whatupis instead of whatisup depending on 
// how the algorithm moves the letter positions
// could use a while loop, I could see it making the logic easier
// logic may be easier with using arrays n using array methods
// keeping position values may not be needed, either way would work tho