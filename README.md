# consolert
Improved NodeJS console
Extends console logging by adding prefix and colors.


### Installation
npm install consolert

### Usage
To overwrite the built-in console:
Oneliner:
``` 
const console = new (require("consolert"))(options)
```

"Normal" way to do it:
``` javascript
const Consolert = require("consolert")
const console = new Consolert(options)
```

options: optional object containing any or none of the following k/v pairs: 
    tag      - String   (default: "N/A")
    debug    - Boolean  (default: false) 
    showTime - Boolean  (default: true) 
    showTag  - Boolean  (default: true) 
    showType - Boolean  (default: true) 