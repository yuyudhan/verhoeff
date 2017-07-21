# Verhoeff
Simple implementation of verhoeff checksum implentation in node JS.

## Aadhaar numbers & verhoeff
Did you know aadhaar numbers have last digit as a verhoeff checksum. The idea behind this is to quickly identify typing/data-entry errors on the entry machine.

https://groups.google.com/forum/#!msg/aadhaarauth/eB5hOU-Qtq0/YDcWPdPOXowJ

# Usage
```sh
npm i node-verhoeff --save
```

```js
var verhoeff = require('node-verhoeff');

verhoeff.validateAadhaar('496858245152')
// should return true

verhoeff.generate([4, 9, 6, 8, 5, 8, 2, 4, 5, 1, 5]);
// should return 2, generates verhoeff checksum using the input array
```

##### Original code by
Sergey Petushkov, 2014

##### Understand the math
For more info on the algorithm: http://en.wikipedia.org/wiki/Verhoeff_algorithm
by

#### Implemented by 
@yuyudhan, Ankur Pandey
