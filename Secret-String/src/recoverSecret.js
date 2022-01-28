module.exports = 
function recoverSecret(triplet){
    let secretValue = new Object();
    let value = 0;

    for (let i = 0; i < triplet.length; i++) {
        let randomTriplet = triplet[i];
        let prevLetter = null;
        let currentLetter = null;
        for (let j = 0; j < randomTriplet.length; j++) {
            prevLetter = currentLetter;
            currentLetter = randomTriplet[j];
            if (secretValue[currentLetter]) {
            } else {
                value++; 
                secretValue[currentLetter] = value;
            }

            if (secretValue[prevLetter] > secretValue[currentLetter]) {
                // console.log('prevLetter: ', prevLetter, ', currentLetter: ', currentLetter, ' value:', value)
                console.log(`${currentLetter}: ${secretValue[currentLetter]} < ${prevLetter}: ${secretValue[prevLetter]}`)
                secretValue[prevLetter] = secretValue[currentLetter];
                console.log(secretValue);
                // secretValue[currentLetter]++;
                // console.log(`${currentLetter}: ${secretValue[currentLetter]} < ${prevLetter}: ${secretValue[prevLetter]}`)
                for (let letter in secretValue) {
                    if (secretValue[prevLetter] < secretValue[letter]) {
                        secretValue[letter]++;
                    }
                }
            }
        }
    }

    return sort(secretValue, value);
    // console.log('secretWord: ', secretWord)
    // console.log('secretValue: ', secretValue)
}

function sort(object, length){
    let sortedArray = new Array(length);
    for (const key in object) {
        const element = object[key];
        sortedArray[element] = key;
    }
    // console.log(sortedArray);
    return sortedArray.join('');
}