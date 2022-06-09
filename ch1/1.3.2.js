// exercise 1.34

// it will run into a type error that 2 is not a function
function f(g) {
  return g(2)
}

console.log(f(f))