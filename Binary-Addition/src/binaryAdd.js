module.exports = function binaryAdd(num1, num2){
    let addedNum = num1 + num2;
    let binaryCheck = [256, 128, 64, 32, 16, 8, 4, 2, 1];
    let finalBinaryNum = [];

    for (let i = 0; i < binaryCheck.length; i++) {
        const binaryNum = binaryCheck[i];
        if (addedNum >= binaryNum) {
            addedNum -= binaryNum;
            finalBinaryNum.push(1);
        } else if (finalBinaryNum.length > 0) {
            finalBinaryNum.push(0);
        }
    }

    console.log('actual: ', finalBinaryNum.join(''))
    return finalBinaryNum.join('');
}