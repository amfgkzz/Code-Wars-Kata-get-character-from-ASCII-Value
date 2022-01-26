module.exports = function maskify(string){
    if ( string.length > 4 ) {
        let newString = "";
        let keepText = string.slice(string.length - 4);
        let replaceHash = new RegExp(string.substr(0, string.length - 4), 'i');
        console.log(replaceHash)
        return newString;
    } else {
        return string;
    }
}