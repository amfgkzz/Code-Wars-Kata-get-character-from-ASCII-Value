module.exports = function flip(d, array) {
    switch (d) {
        case 'R':
            console.log('you got R!')
            return 'R'
        case 'L':
            console.log('you got L!')
            return 'L'
        default:
            break;
    }
}