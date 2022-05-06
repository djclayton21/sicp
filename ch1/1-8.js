function cube_iter(guess, x, prevGuess) {
  return is_good_enough(guess, prevGuess)
    ? guess
    : cube_iter(improve(guess, x), x, guess);
}

function improve(guess, x) {
  return (x / (guess * guess) + 2 * guess) / 3;
}

function is_good_enough(guess, prevGuess) {
  if (!prevGuess) return false;
  return Math.abs(guess - prevGuess) / prevGuess < 0.000000001;
}

console.log(cube_iter(1, 8));
