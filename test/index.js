var test = require('colored-tape')
var Tecsst = require('..')
var tecsst = new Tecsst("test/test.css")

var expected  = [
    "display: inline-block",
    "text-align: center",
    "padding: 6px 12px",
    "font-size: 14px",
    "color: #fff",
    "background-color: #d2322d",
]

var result = tecsst.parse('.btn-danger')

test('parse', function (t) {
    t.same(expected, result)
    t.end()
})

test('equal', function (t) {
    t.equal("ok", tecsst.equal(expected, result))
    t.end()
})
