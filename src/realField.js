const realField = {
  zero: 0,
  one: 1,
  // NaN, Infinity and -Infinity are not allowed.
  contains: (a) => (typeof a === 'number' && isFinite(a)),
  equality: (a, b) => a === b,
  addition: (a, b) => a + b,
  negation: (a) => -a,
  multiplication: (a, b) => a * b,
  inversion: (a) => 1 / a
}

module.exports = realField
