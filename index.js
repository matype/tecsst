var fs = require('fs')
var parse = require('css-parse')
var deepEqual = require('deep-equal')

var pkg = require('./package.json')

module.exports = Tecsst

function Tecsst (cssPath) {
    if (!(this instanceof Tecsst)) return new Tecsst(cssPath);

    this.cssPath = cssPath
    this.css = fs.readFileSync(cssPath, 'utf-8').trim()
    this.ast = parse(this.css)
    this.okCount = 0
    this.failedCount = 0
    this.testNum = 0

    console.log("Tecsst version: " + pkg.version + "\n")
}

Tecsst.prototype.parse = function (s) {
    this.selector = s

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

Tecsst.prototype.equal = function (expected, result, desc) {
    if (!desc) desc = this.selector

    if (deepEqual(expected, result)) {
        console.log("# " + desc + ": " + '\033[32m' + "\nok" + '\033[39m')
        this.okCount++
        this.testNum++

        return "ok"
    } else {
        console.log("# " + desc + ": " + '\033[31m' + "\nnot ok" + '\033[39m')
        this.failedCount++
        this.testNum++

        return "not ok"
    }
}

Tecsst.prototype.end = function () {
    console.log("\n# tests " + this.testNum)
    console.log('\033[32m' + "# pass " + this.okCount + '\033[39m')

    if (this.failedCount) {
        console.log('\n\033[31m' + "test failed" + '\033[39m')
    }
    else {
        console.log('\n\033[32m' + "all green, test clear!" + '\033[39m')
    }
}
