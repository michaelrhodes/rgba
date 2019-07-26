var rgba = require('./')

var named = rgba('blue')

console.assert(
  ie(named[0], 0) &&
  ie(named[1], 0) &&
  ie(named[2], 255) &&
  fe(named[3], 1),
  'it works with named colors'
)

var hex = rgba('#888888')

console.assert(
  ie(hex[0], 136) &&
  ie(hex[1], 136) &&
  ie(hex[2], 136) &&
  fe(hex[3], 1),
  'it works with hexcodes'
)

var shorthex = rgba('#888')

console.assert(
  ie(shorthex[0], 136) &&
  ie(shorthex[1], 136) &&
  ie(shorthex[2], 136) &&
  fe(shorthex[3], 1),
  'it works with short hexcodes'
)

var longhex = rgba('#88888888')

console.assert(
  ie(longhex[0], 136) &&
  ie(longhex[1], 136) &&
  ie(longhex[2], 136) &&
  fe(longhex[3], 0.5),
  'it works with long hexcodes'
)

var hsl = rgba('hsl(350, 50%, 50%)')

console.assert(
  ie(hsl[0], 191) &&
  ie(hsl[1], 63) &&
  ie(hsl[2], 85) &&
  fe(hsl[3], 1),
  'it works with hsl colours'
)

var hsla = rgba('hsla(350, 50%, 50%, 0.5)')

console.assert(
  ie(hsla[0], 191) &&
  ie(hsla[1], 63) &&
  ie(hsla[2], 85) &&
  fe(hsla[3], 0.5),
  'it works with hsla colours'
)

var rgb = rgba('rgb(10, 20, 30)')

console.assert(
  ie(rgb[0], 10) &&
  ie(rgb[1], 20) &&
  ie(rgb[2], 30) &&
  fe(rgb[3], 1),
  'it works with rgb colours'
)

var rgba_ = rgba('rgba(10, 20, 30, 0.5)')

console.assert(
  ie(rgba_[0], 10) &&
  ie(rgba_[1], 20) &&
  ie(rgba_[2], 30) &&
  fe(rgba_[3], 0.5),
  'it works with rgba colours'
)

function ie (a, b) {
  return Math.abs(a - b) < 2
}

function fe (a, b) {
  return Math.abs(a - b) < 0.05
}
