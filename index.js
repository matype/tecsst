var fs = require('fs')
var parse = require('css-parse')
var deepEqual = require('deep-equal')


module.exports = Tecsst

function Tecsst (cssPath) {
    if (!(this instanceof Tecsst)) return new Tecsst(cssPath);

    this.cssPath = cssPath
    this.css = fs.readFileSync(cssPath, 'utf-8').trim()
    this.ast = parse(this.css)
}

Tecsst.prototype.parse = function (s) {
    var re = new RegExp(s)
    var properties = []
    var values = []
    var ret = []

    this.ast.stylesheet.rules.forEach(function (rule) {
        rule.selectors.forEach(function (selector) {
            if (selector.match(re)) {
                rule.declarations.forEach(function (declaration) {
                    properties.push(declaration.property)
                    values.push(declaration.value)
                })
            }
        })
    })

    for (var i = 0; i < properties.length; i++) {
        ret.push(properties[i] + ": " + values[i]);
    }

    return ret
}

Tecsst.prototype.equal = function (expected, result) {
    if (deepEqual(expected, result)) {
        console.log("ok")
        return "ok"
    } else {
        console.log("failed")
        return "failed"
    }
}
