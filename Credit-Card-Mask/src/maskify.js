module.exports = function maskify(string) {
    return string.length > 4 
    ?
    hash(string)
    : 
    string
}

function hash(string){
    let hash = '';
    let keepText = string.slice(string.length - 4);

    for (let i = 0; i < string.length - 4; i++) {
        hash += '#';
    }

    return hash + keepText;
}