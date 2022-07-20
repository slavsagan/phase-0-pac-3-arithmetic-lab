function add() {
}
function subtract() {
}
function multiply() {
}
function divide () {
}

function add(a, b) {
  return a + b
}
console.log (add(1, 3))

function subtract(a, b) {
  return a - b
}
console.log (subtract(5, 4))

function multiply(a, b) {
  return a * b
}
console.log (multiply(4, 5))

function divide(a, b) {
  return a / b
}
console.log (divide(8, 4))

function increment(a) {
  return a += 1
}
console.log (increment(5))

function decrement(a) {
  return a -= 1
}
console.log (decrement(5))

//----------------------------------//

function makeInt(string) {
  return parseInt(string, 10)
}
console.log (makeInt('7'))
console.log (makeInt('0x2328'))
console.log (makeInt('sldkjflksjf'))

//----------------------------------//

function preserveDecimal(string) {
  return parseFloat(string)
}
console.log (preserveDecimal(2.222))
console.log (preserveDecimal('sldkjflksjf'))