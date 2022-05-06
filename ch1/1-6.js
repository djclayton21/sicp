function conditional(predicate, then_clause, else_clause) {
  return predicate ? then_clause : else_clause;
}

function sqrt_iter(guess, x) {
  return conditional(
    is_good_enough(guess, x),
    guess,
    sqrt_iter(improve(guess, x), x)
  );
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(a, b) {
  return (a + b) / 2;
}

function is_good_enough(guess, x) {
  return Math.abs(guess * guess - x) < 0.001;
}

console.log(sqrt_iter(1, 4))

// max depth exceeded; the else_clause will keep resolving because it will never finish the comparison