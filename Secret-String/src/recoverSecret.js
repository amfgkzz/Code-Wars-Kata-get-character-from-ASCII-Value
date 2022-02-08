module.exports = 
function recoverSecret(triplet){
    let secretValue = new Object();
    let position = 0;
    let prevLetter;
    let currentLetter;
    let randomTriplet;
    let i;
    let j;
    let letter;

    for (i = 0; i < triplet.length; i++) {
        randomTriplet = triplet[i];
        currentLetter = null;
        for (j = 0; j < randomTriplet.length; j++) {
            prevLetter = currentLetter;
            currentLetter = randomTriplet[j];
            if (secretValue[currentLetter]) {
            } else {
                position++; 
                secretValue[currentLetter] = position;
            }

            if (secretValue[currentLetter] < secretValue[prevLetter]) {
                for (letter in secretValue) {
                    if (secretValue[letter] < secretValue[prevLetter] && secretValue[currentLetter] < secretValue[letter]) {
                        secretValue[letter]++;
                    } 
                }
                secretValue[prevLetter] = secretValue[currentLetter];
                secretValue[currentLetter]++;
            }
        }
    }

    for (i = 0; i < triplet.length; i++) {
        randomTriplet = triplet[i];
        currentLetter = null;
        for (j = 0; j < randomTriplet.length; j++) {
            prevLetter = currentLetter;
            currentLetter = randomTriplet[j];
            if (secretValue[currentLetter]) {
            } else {
                position++; 
                secretValue[currentLetter] = position;
            }

            if (secretValue[currentLetter] < secretValue[prevLetter]) {
                for (letter in secretValue) {
                    if (secretValue[letter] < secretValue[prevLetter] && secretValue[currentLetter] < secretValue[letter]) {
                        secretValue[letter]++;
                    } 
                }
                secretValue[prevLetter] = secretValue[currentLetter];
                secretValue[currentLetter]++;
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
    console.log(object)
//     console.log(sortedArray);
    return sortedArray.join('');
}