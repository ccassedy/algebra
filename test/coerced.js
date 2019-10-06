/* eslint-env mocha */

const coerced = require('../src/coerced')

const add = coerced((a, b) => a + b)

describe('coerced', () => {
  it('means to extract "data" property, if any', () => {
    add(1, 2).should.eql(3)
    add({ data: 1 }, 2).should.eql(3)
    add({ data: 1 }, 2).should.eql(3)
    add({ data: 1 }, { data: 2 }).should.eql(3)
  })
})
