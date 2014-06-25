# tecsst [![Build Status](https://travis-ci.org/morishitter/tecsst.svg)](https://travis-ci.org/morishitter/tecsst)

CSS testing framework without taking screenshots

## Installation

```shell
$ npm install tecsst
```

## Example

```javascript
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
]

var result = tecsst.parse(selector)

tecsst.equal(expected, result)
// ok
```

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
