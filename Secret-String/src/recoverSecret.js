module.exports = 
function recoverSecret(triplet){
    let secretValue = new Object();
    let prevLetter;
    let currentLetter;
    // let counter;

    for (let i = 0; i < triplet.length; i++) {
        prevLetter = null;
        currentLetter = null;
        // counter = 0;
        
        for (let j = 0; j < triplet.length; j++) {
            prevLetter = currentLetter;
            currentLetter = triplet[i][j];
            // counter++;
            
            if (secretValue[currentLetter]) {
                // secretValue[currentLetter] += secretValue[prevLetter];
                // console.log(secretValue);
            } else {
                // secretValue[currentLetter] = counter;
                // console.log(`${currentLetter}: `, secretValue[currentLetter]);
            }
        }

        return secretValue;
    }
}