module.exports = function flip(d, array) {
    switch (d) {
        case 'R':
            return rightSide = array.sort(function(a, b){return a-b})
        case 'L':
            return leftSide = array.sort(function(a, b){return b-a})
    }
}