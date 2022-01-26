module.exports = function maskify(string) {
    return string.length > 4 
    ?
    hash(string)
    : 
    string
}

function hash(string){
    let hash = string.slice(0, -4).replace(/./g, '#');
    let keepText = string.slice(string.length - 4);
    return string.slice(0, -4).replace(/./g, '#') + string.slice(string.length - 4);
}