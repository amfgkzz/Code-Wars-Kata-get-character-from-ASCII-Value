module.exports = 
function recoverSecret(triplet){
    let secretValue = new Object();
    let prevLetter;
    let currentLetter;

    const store = function(a, b){
        if (!secretValue[b]) {
            secretValue[b] = [1];
        }
        
        if (a) {
            secretValue[b].push(secretValue[a]);
        }
    }

    const order = function(obj){
        let element;
        let counter = 0;

        const recursive = function(arr){
            while (arr.length > 1) {
                if (typeof arr[counter] == 'array'){
                    arr[counter].concat();
                } 
            }
        }

        for (const letter in obj) {
            element = obj[letter];
            counter = 0;
            // recursive(element);
            console.log(letter, element)
        }
        // console.log('secretValue: ', secretValue)
    }

    for (let i = 0; i < triplet.length; i++) {     
        currentLetter = null;  
        for (let j = 0; j < triplet[i].length; j++) {
            prevLetter = currentLetter;
            currentLetter = triplet[i][j];
            store(prevLetter, currentLetter);
        }
    }

    order(secretValue);
    return secretValue;
}

// first you want to loop the obj
// in obj, loop the arrays
// in arrays, check if array
// if array