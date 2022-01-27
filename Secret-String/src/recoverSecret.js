module.exports = 
function recoverSecret(triplet){
    let secretWord = '';
    let secretValue = new Object();
    let count = 0;

    for (let i = 0; i < triplet.length; i++) {
        let randomTriplet = triplet[i];
        for (let j = 0; j < randomTriplet.length; j++) {
            const letter = randomTriplet[j];
            if (!secretValue[letter]) {
                secretValue[letter] = count;
                count++;
            }


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