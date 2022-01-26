module.exports = function maskify(string) {
    return string.slice(0, -4).replace(/./g, '#') + string.slice(string.length - 4);
}