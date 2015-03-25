describe 'square function', ->
  beforeEach ->
    try
      fs = require('fs')
      squareFs = fs.readFileSync('square.js', 'utf-8')
    catch e
      console.log 'File not found!'
    return
  it 'should square a number', ->
    eval squareFs
    expect(square(3)).toEqual 9
    return
  return
