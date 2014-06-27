var Tecsst = require('./')

var tecsst = new Tecsst('test/test.css')

var selector = '.btn-danger'

var expected  = [
    "display: inline-block",
    "text-align: center",
    "padding: 6px 12px",
    "font-size: 14px",
    "color: #fff",
    "background-color: #d2322d",
    "width: 95%"
]

var result = tecsst.parse(selector, '480px')

tecsst.equal(expected, result, ".btn-danger test")

tecsst.end()
