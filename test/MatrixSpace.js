var algebra = require('algebra')

var notDefined = require('not-defined')

var MatrixSpace = algebra.MatrixSpace
var Real = algebra.Real

var methodBinaryOperator = require('./features/methodBinaryOperator')
var methodUnaryOperator = require('./features/methodUnaryOperator')
var staticBinaryOperator = require('./features/staticBinaryOperator')
var staticUnaryOperator = require('./features/staticUnaryOperator')

describe('MatrixSpace', () => {
  var R2x3 = MatrixSpace(Real)(2, 3)
  var R2x2 = MatrixSpace(Real)(2)
  var R3x2 = MatrixSpace(Real)(3, 2)

  it('has signature (Scalar)(numRows, numCols)', () => {
    R2x3.numRows.should.be.eql(2)
    R2x3.numCols.should.be.eql(3)
  })

  it('has signature (Scalar)(numRows) and numCols defaults to numRows', () => {
    R2x2.numRows.should.be.eql(2)
    R2x2.numCols.should.be.eql(2)
  })

  var matrix1  = new R2x2([ 2, 3,
                            1, 1 ])
  var matrix2  = new R2x2([ 0, 1,
                           -1, 0 ])
  var matrix3  = new R2x3([ 0, 1, 2,
                           -2, 1, 0 ])

  describe('numRows', function () {
    it('returns the number of rows', function () {
      matrix1.numRows.should.be.eql(2)
      matrix2.numRows.should.be.eql(2)
      matrix3.numRows.should.be.eql(2)
    })
  })

  describe('numCols', function () {
    it('returns the number of cols', function () {
      matrix1.numCols.should.be.eql(2)
      matrix2.numCols.should.be.eql(2)
      matrix3.numCols.should.be.eql(3)
    })
  })

  describe('determinant', function () {
    it('returns a Scalar'/*, function () {
      matrix1.determinant.should.be.instanceOf(Real)
      matrix2.determinant.should.be.instanceOf(Real)

      matrix1.determinant.data.should.be.eql(-1)
      matrix2.determinant.data.should.be.eql(1)
    }*/)
  })

  describe('addition()', function () {
    operator = 'addition'

    it('is a static method', staticBinaryOperator(R2x2, operator,
        [ 2, 3,
          1, 1 ],
        [ 0, 1,
         -1, 0 ],
        [ 2, 4,
          0, 1 ]
    ))

    it('is a class method', methodBinaryOperator(R2x2, operator,
        [ 2, 3,
          1, 1 ],
        [ 0, 1,
         -1, 0 ],
        [ 2, 4,
          0, 1 ]
    ))
  })

  describe('subtraction()', function () {
    operator = 'subtraction'

    it('is a static method', staticBinaryOperator(R2x2, operator,
        [ 2, 3,
          1, 1 ],
        [ 0, 1,
         -1, 0 ],
        [ 2, 2,
          2, 1 ]
    ))

    it('is a class method', methodBinaryOperator(R2x2, operator,
        [ 2, 3,
          1, 1 ],
        [ 0, 1,
         -1, 0 ],
        [ 2, 2,
          2, 1 ]
    ))
  })

  describe('multiplication()', function () {
    operator = 'multiplication'

    it('is a static method'/*, staticBinaryOperator(R3x2, operator,
        [ 2, 3,
          1, 1,
          1, 1 ],
        [ 0, 1, 1, 1,
         -1, 0, 2, 3 ],
        [ -3, 2, 8, 11,
          -1, 1, 3, 4,
          -1, 1, 3, 4 ]
    )*/)

    it('is a class method for square matrices'/*, methodBinaryOperator(R2x2, operator,
        [ 2, 3,
          1, 1 ],
        [ 0, 1,
         -1, 0 ],
        [ -3, 2,
          -1, 1 ]
    )*/)
  })

  describe('trace()', () => {
    it('is a static method', () => {
      R2x2.trace([1, 2,
                  5, 6]).should.be.eql(7)
    })

    it('is not available for no square matrices', () => {
      notDefined(R3x2.trace).should.be.true
    })
  })

  describe('trace', () => {
    it('is a static attribute', () => {
      var matrix2x2  = new R2x2([1, 2,
                                 5, 6])

      matrix2x2.trace.should.be.eql(7)
    })

    it('is not available for no square matrices', () => {
      var matrix3x2 = new R3x2([1, 2,
                                3, 4,
                                5, 6])

      notDefined(matrix3x2.trace).should.be.true
    })
  })

  describe('transpose()', () => {
    it('is a static operator'/*, () => {
      var matrix3x2a  = new R3x2([1, 2,
                                  3, 4,
                                  5, 6])

      should.deepEqual(R3x2.transpose(matrix3x2a), [1, 3, 5,
                                                    2, 4, 6])
    }*/)

    it('returns a transposed matrix'/*, () => {
      var matrix2x3a  = new R2x3([1, 2, 3,
                                  4, 5, 6])

      var matrixTransposed = matrix2x3a.transpose()

      should.deepEqual(matrixTransposed.data, [1, 4,
                                               2, 5,
                                               3, 6])

      matrix2x3a.numRows.should.be.eql(matrixTransposed.numCols)
      matrix2x3a.numCols.should.be.eql(matrixTransposed.numRows)
    }*/)

    it('is a class method')

    it('is chainable for square matrices'/*, () => {
      var matrix2x2a  = new R2x2([1, 2,
                                  3, 4])

      var matrix2x2b = matrix2x2a.transpose().transpose()

      should.deepEqual(matrix2x2a.data, matrix2x2b.data)
    }*/)

    it('returns a vector if the Matrix has one column')
  })
})
