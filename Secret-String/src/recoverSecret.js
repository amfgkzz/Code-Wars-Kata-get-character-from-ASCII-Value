module.exports = 
function recoverSecret(triplet){
    let secretValue = new Object();
    let position = 0;

    for (let i = 0; i < triplet.length; i++) {
        let randomTriplet = triplet[i];
        let prevLetter = null;
        let currentLetter = null;
        for (let j = 0; j < randomTriplet.length; j++) {
            prevLetter = currentLetter;
            currentLetter = randomTriplet[j];
            if (secretValue[currentLetter]) {
            } else {
                position++; 
                secretValue[currentLetter] = position;
            }

            if (secretValue[currentLetter] < secretValue[prevLetter]) {
                for (let letter in secretValue) {
                    if (secretValue[letter] < secretValue[prevLetter] && secretValue[currentLetter] < secretValue[letter]) {
                        secretValue[letter]++;
                    } 
                }
                secretValue[prevLetter] = secretValue[currentLetter];
                secretValue[currentLetter]++;
                console.log('2: ',secretValue);
            }
        }
    }

    return sort(secretValue, position);
}

function sort(object, length){
    let sortedArray = new Array(length);
    for (const key in object) {
        const position = object[key];
        sortedArray[position-1] = key;
    }
    console.log(sortedArray);
    return sortedArray.join('');
}