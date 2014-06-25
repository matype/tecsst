var parse = require('css-parse')
var deepEqual = require('deep-equal')


module.exports = Tecsst

function Tecsst (css) {
    this.css = css
    this.ast = parse(css)
}

Tecsst.prototype.parse = function (selector) {

}

Tecsst.prototype.equal = function (expedted, result) {

}
