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

    // 010001001
    // will need to rework the function for big numbers,
    // function should divide addedNum by 2, check if remainder is 1 or 0,
    // if 1, add 1 to finalBinaryNum, parseInt addedNum then divide addedNum by 2
    // if 0, add 0 to finalBinaryNum, divide addedNum by 2
    // keep going until parseInt = 0? test this use https://byjus.com/maths/binary-number-system/ to help
    return finalBinaryNum.join('');
}