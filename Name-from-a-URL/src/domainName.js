module.exports = function domainName(url){
    let parsedUrl = '';
    let parsedUrlTwo = '';
    let dotCount = 0;

    for (let i = 0; i < url.length; i++) {
        let element = url[i];
        if ( parsedUrl == 'http://' || parsedUrl == 'https://' ) {
            parsedUrl = ''; // reset
        }

        if ( element == '.' && dotCount > 0 ) {
            return parsedUrl;
        }

        if ( element == '.' && dotCount == 0 ) {
            dotCount++; // count the dots
            parsedUrlTwo = parsedUrl; // store the letters before the first dot
            parsedUrl = ''; // reset
        } else {
            parsedUrl += element;
        }
    }
    // console.log('parsedUrl: ', parsedUrl)
    return parsedUrlTwo;
}