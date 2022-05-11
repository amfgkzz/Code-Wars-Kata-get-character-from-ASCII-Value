function compare(arr1, arr2) {
    let check = false;

    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        if (typeof element !== 'number' ) {
            return;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];
        if (typeof element !== 'number' ) {
            return;
        }
    }

    arr1.sort(function(a, b){return a-b});
    arr2.sort(function(a, b){return a-b});

    for (let i = 0; i < arr1.length; i++) {
        const elementOne = arr1[i];
        const elementTwo = arr2[i];
        
        if (typeof elementOne !== 'number' || typeof elementTwo !== 'number') {
            return false;
        }

        if (Math.sqrt(elementTwo) !== elementOne) {
            return false;
        }
    }
}
