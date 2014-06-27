# tecsst [![Build Status](https://travis-ci.org/morishitter/tecsst.svg)](https://travis-ci.org/morishitter/tecsst)

CSS testing framework without taking screenshots

## Installation

```shell
$ npm install tecsst
```

## Example

```javascript
var Tecsst = require('tecsst')

var tecsst = new Tecsst('test/test.css')

var selector = '.btn-danger'

var browserWidth = '480px'

var expected  = [
    "display: inline-block",
    "text-align: center",
    "padding: 6px 12px",
    "font-size: 14px",
    "color: #fff",
    "background-color: #d2322d",
    "width: 95%"
]

var result = tecsst.parse(selector, browserWidth)

tecsst.equal(expected, result, ".btn-danger test")

tecsst.end()
```

result:

```
Tecsst version: 0.0.5

Browser width: 480px
# .btn-danger test:
ok

# tests 1
# pass 1

all green, test clear!
```

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
