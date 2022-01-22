module.exports = function flip(d, array) {
    switch (d) {
        case 'R':
            return array.sort(function(a, b){return a-b})
        case 'L':
            return array.sort(function(a, b){return b-a})
    }
}