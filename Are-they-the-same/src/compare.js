function compare(arr1, arr2) {

    arr1.sort(function(a, b){return a-b});
    arr2.sort(function(a, b){return a-b});

    for (let i = 0; i < arr1.length; i++) {
        const elementOne = arr1[i];
        const elementTwo = arr2[i];
        
        if (Math.sqrt(elementTwo) !== elementOne) {
            return false;
        }
    }
}

function check(a, b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;
    } else {
        return a-b;
    }
}