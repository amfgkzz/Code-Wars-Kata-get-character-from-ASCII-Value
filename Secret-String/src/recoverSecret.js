module.exports = 
function recoverSecret(triplet){
    let secretValue = new Object();
    let prevLetter;
    let currentLetter;

    const store = function(a, b){
        if (!secretValue[b]) {
            secretValue[b] = [];
        }
        
        if (a) {
            secretValue[b].push(secretValue[a]);
        }
    }

    const order = function(obj){
        for (const letter in obj) {
            console.log(obj[letter]);
            
        }
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