# consolert
[![Build Status](https://travis-ci.org/rvrheenen/consolert.svg?branch=master)](https://travis-ci.org/rvrheenen/consolert)

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
console.error("Something is definetly broken!")
```

terminal:
``` console
foo@bar:~$ node logs/index.js 
LOG   2020-04-17 15:52:53 [APP] Tagged by Consolert
DEBUG 2020-04-17 15:52:53 [APP] eee bugses!
WARN  2020-04-17 15:52:53 [APP] Something might be broken..
ERROR 2020-04-17 15:52:53 [APP] Something is definetly broken!
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