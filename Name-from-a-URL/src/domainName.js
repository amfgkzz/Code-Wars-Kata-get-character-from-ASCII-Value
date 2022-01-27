module.exports = function domainName(url){
    let parsedUrl = '';

    for (let i = 0; i < url.length; i++) {
        let element = url[i];
        if (parsedUrl == 'www.' || parsedUrl == 'http://' || parsedUrl == 'https://') {
            parsedUrl = '';
            parsedUrl += element;
        } else if (element == '.' && parsedUrl !== 'www') {
            return parsedUrl;
        } else {
            parsedUrl += element;
        }
    }
}

