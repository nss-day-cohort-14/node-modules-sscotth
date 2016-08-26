const { Transform } = require('stream')

const ts = Transform({
  // enhanced object literal
  transform (buff, enc, cb) {
    cb(null, buff.toString().toUpperCase())
  }
  // same as:
  // transform: function (buff, enc, cb) {
  //   cb(null, buff.toString().toUpperCase())
  // }
})

// ts._transform = (buff, enc, cb) => {
//   cb(null, buff.toString().toUpperCase())
// }

module.exports = ts
