module.exports = function maskify(string){
    if ( string.length > 4 ) {
        let hash = '';
        let keepText = string.slice(string.length - 4);

        for (let i = 0; i < string.length - 4; i++) {
            hash += '#';
        }

        return hash + keepText;
    } else {
        return string;
    }
}