const url = require('url');

const leerUrl = (urlStr) => {
try {
const { protocol, host, pathname } = url.parse(urlStr, true, true)
console.log(`
Protocol: ${protocol}
Host: ${host}
Path name: ${pathname}
`)
} catch (err) {
console.log(err)
}
}

module.exports = {
leerUrl
}