module.exports = function binRota(array){
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let innerArray = array[i];
        if (i % 2 !== 0) {
            for (let k = innerArray.length - 1; k >= 0; k--) {
                let elementReverse = innerArray[k];
                newArray.push(elementReverse);
            }
        } else {
            for (let j = 0; j < innerArray.length; j++) {
                let element = innerArray[j];
                newArray.push(element);
            }
        }
    }

    return newArray;
}

// loop through the array
// each inner array is added to new array
// index of i % 2 != 0, is put into the new array in reversed order