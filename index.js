var fs = require('fs')
var parse = require('css-parse')
var deepEqual = require('deep-equal')


module.exports = Tecsst

function Tecsst (cssPath) {
    if (!(this instanceof Tecsst)) return new Tecsst(cssPath);

    this.cssPath = cssPath
    this.css = fs.readFileSync(cssPath, 'utf-8').trim()
    this.ast = parse(this.css)
    this.okCount = 0
    this.failedCount = 0
    this.testNum = this.okCount + this.failedCount
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
        this.okCount++
        return "ok"
    } else {
        console.log("failed")
        this.failedCount++
        return "failed"
    }
}

Tecsst.prototype.end = function () {
    if (this.failedCount) {
        console.log("test failed")
    }
    else {
        console.log("all green, test clear!")
    }
}
