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
        let temp;
        let counter;

        // const recursive = function(arr){
        //     while (arr.length > 1) {
        //         if (typeof arr[counter] == 'array'){
        //             arr[counter].concat();
        //         } 
        //     }
        // }

        for (const letter in obj) {
            element = obj[letter];
            temp = [];
            counter = 0;
            if (letter == 'a') {
                do {
                    let tempTwo = [];
                    let item = element[counter];
                    console.log('item assigned: ', item);
                    if (typeof item == 'number'){
                        debugger
                        console.log('element before: ', element);
                        element.shift();
                        console.log('element after: ', element);
                        temp.push(item);
                    } else {
                        console.log('temp before: ',...temp)
                        console.log('item before: ',...item)
                        temp = [...temp, ...item];
                        console.log('temp after: ',...temp)
                        // counter++;
                    }
                } while (0 < element.length);
            }
            
            console.log('temp: ', temp)
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