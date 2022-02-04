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

// function sort(object, length){
//     let sortedArray = new Array(length);
//     for (const key in object) {
//         const position = object[key];
//         sortedArray[position-1] = key;
//     }
//     console.log(object)
// //     console.log(sortedArray);
//     return sortedArray.join('');
// }


// Second try at algorithm
// let secretValue = new Object(), prevLetter, currentLetter;

// const store = function(a, b){
//     const obj = {
//         value: {},
//         getValue: function() {

//         }
//     }
//     if (!secretValue[b]) {
//         secretValue[b] = [1];
//     }
    
//     if (a) {
//         secretValue[b].push(secretValue[a]);
//     }
// }

// for (let i = 0; i < triplet.length; i++) {     
//     currentLetter = null;  
//     for (let j = 0; j < triplet[i].length; j++) {
//         prevLetter = currentLetter;
//         currentLetter = triplet[i][j];
//         store(prevLetter, currentLetter);
//     }
// }

// deepCopy(secretValue);

    // const deepCopy = function(object){
    //     let item, letter;
    //     let copyObj = function(item){
    //         debugger
    //         if (typeof item == 'number') {
    //             console.log('number: ', item)
    //         } else if (typeof item == 'object'){
    //             console.log('object: ', item)
    //         } else {
    //             console.log('??: ', item)
    //         }
    //     }

    //     if (typeof object == 'object') {
    //         for (letter in object) {
    //             item = object[letter]
    //             do {
    //                 copyObj(item.shift());
    //             } while (item.length > 0);
    //         }
    //     } else {
    //         return object;
    //     }
    // }

    // const order = function(obj){
    //     let element, temp, counter;
    //     for (const letter in obj) {
    //         element = obj[letter];
    //         temp = [];
    //         counter = 0;
    //         if (letter == 'a') {

    //         }
    //     }
    // }