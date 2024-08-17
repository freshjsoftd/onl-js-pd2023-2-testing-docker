module.exports.multiply = (a, b) => a * b;

module.exports.asyncSumm = (c, d, cb) => {
  setTimeout(() => {
    cb(c +d)
  }, 1000)
}