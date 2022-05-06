function sqrt_iter(guess, x, prevGuess) {
  return is_good_enough(guess, prevGuess)
    ? guess
    : sqrt_iter(improve(guess, x), x, guess);
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(a, b) {
  return (a + b) / 2;
}

function is_good_enough(guess, prevGuess) {
  if (!prevGuess) return false;
  return Math.abs(guess - prevGuess) / prevGuess < 0.000000001;
}

console.log(sqrt_iter(1, 25));

// old version:
// function is_good_enough(guess, x) {
//   return Math.abs(guess * guess - x) < 0.001;
// }

// case: big numbers
  // if the number can't be calculated within the desired precision
  // will never solve ie if you can only calc to the nearest 1000, and the answer is 50
  // but you'll never be within 50 unless you're lucky

// case: small numbers
  // if the number is very small, you'll might meet your precision but be off by an order of magnitude