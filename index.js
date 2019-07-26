module.exports = rgba

var canvas = document.createElement('canvas')
var context = canvas.getContext('2d')

function rgba (color, c) {
  context.clearRect(0, 0, 1, 1)
  context.fillStyle = color
  context.fillRect(0, 0, 1, 1)
  c = context.getImageData(0, 0, 1, 1).data
  return [c[0], c[1], c[2], c[3] / 255]
}
