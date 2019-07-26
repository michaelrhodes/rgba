# rgba
find the rgba value of any color string

[![build status](https://travis-ci.org/michaelrhodes/rgba.svg?branch=master)](https://travis-ci.org/michaelrhodes/rgba)


## install
```sh
npm install michaelrhodes/rgba#1.0.0 [canvas]
```

## use
```js
var rgba = require('rgba')

rgba('blue')
> [0, 0, 255, 1]

rgba('#00f')
rgba('#0000ff')
rgba('#0000ff80')
rgba('hsl(235, 100%, 50%)')
rgba('hsla(235, 100%, 50%, 0.5)')
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
