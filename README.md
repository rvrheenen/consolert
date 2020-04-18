# consolert
[![Build Status](https://travis-ci.org/rvrheenen/consolert.svg?branch=master)](https://travis-ci.org/rvrheenen/consolert)
[![Last commit](https://img.shields.io/github/last-commit/rvrheenen/consolert)](https://github.com/rvrheenen/consolert)
[![Downloads](https://img.shields.io/npm/dt/consolert)](https://www.npmjs.com/package/consolert)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/rvrheenen/consolert/blob/master/LICENSE)
[![Donate](https://img.shields.io/badge/Donate-PayPal-informational.svg)](https://paypal.me/rivartech)
[![Donate](https://img.shields.io/badge/Donate-Liberapay-informational.svg)](https://liberapay.com/rvrheenen)
[![Donate](https://img.shields.io/badge/Donate-Crypto-informational.svg)](https://commerce.coinbase.com/checkout/c1219cf1-95da-4bdb-8089-7baddb1a2d34)

Created by: Rick van Rheenen

Improved NodeJS console
Extends console logging by adding prefix and colors.


### Installation
npm install consolert

### Usage
To overwrite the built-in console:
Oneliner:
``` javascript
const console = new (require("consolert"))(options)
```

"Normal" way to do it:
``` javascript
const Consolert = require("consolert")
const console = new Consolert(options)
```

options: optional object containing any or none of the following k/v pairs: 
```
tag      - String   (default: "N/A")
debug    - Boolean  (default: false) 
showTime - Boolean  (default: true) 
showTag  - Boolean  (default: true) 
showType - Boolean  (default: true)
```

#### Working example:

index.js
``` javascript
const Consolert = require("consolert")
const console = new Consolert({tag:"APP", debug:true})

console.log("Tagged by Consolert")
console.debug("eee bugses!")
console.warn("Something might be broken..")
console.error("Something is definitely broken!")
```

terminal:
``` console
foo@bar:~$ node logs/index.js 
LOG   2020-04-17 15:52:53 [APP] Tagged by Consolert
DEBUG 2020-04-17 15:52:53 [APP] eee bugses!
WARN  2020-04-17 15:52:53 [APP] Something might be broken..
ERROR 2020-04-17 15:52:53 [APP] Something is definitely broken!
```
(note these would be colored according to their type, but markdown doesn't let me show that..)

### todo
- [x] publish
- [x] add tests
- [ ] expand debug to be levels instead of boolean
- [ ] allow customizing onlyInDebugMode methods
- [ ] allow for custom stdout and stderr
- [ ] allow for custom colors
- [ ] allow custom timestamp