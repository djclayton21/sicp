function sum(term, a, next, b) {
  return a > b ? 0 : term(a) + sum(term, next(a), next, b);
}

function identity(x) {
  return x;
}

function inc(x) {
  return x + 1;
}

function cube(x) {
  return x * x * x;
}

// 1.29
function simpson_integral(f, a, b, n) {
  const h = (b - a) / n;

  function y_k(k) {
    return f(a + k * h);
  }
  function term(k) {
    return k === 0 || k === n ? y_k(k) : 2 * (1 + (k % 2)) * y_k(k);
  }
  return (h / 3) * sum(term, 0, inc, n);
}

// console.log(simpson_integral(cube, 0, 1, 1000));

// 1.30
function sum_iter(term, a, next, b) {
  function iter(a, result) {
    return a > b ? result : iter(next(a), result + term(a));
  }
  return iter(a, 0);
}

// console.log(sum_iter(identity, 0, inc, 5));

// 1.31

function product(term, a, next, b) {
  return a > b ? 1 : term(a) * product(term, next(a), next, b);
}

function product_iter(term, a, next, b) {
  function iter(a, result) {
    return a > b ? result : iter(next(a), result * term(a));
  }
  return iter(a, 1);
}

function pi_approx(n) {
  function term(k) {
    function num(k) {
      return k + 2 + (k % 2);
    }

    function denom(k) {
      return k + 3 - (k % 2);
    }

    return num(k) / denom(k);
  }

  return 4 * product_iter(term, 0, inc, n);
}
// console.log(product(identity, 1, inc, 3));
// console.log(product_iter(identity, 1, inc, 3));

// console.log(pi_approx(5000));

// 1.32

function accumulate(combiner, null_value, term, a, next, b) {
  return a > b
    ? null_value
    : combiner(
        term(a),
        accumulate(combiner, null_value, term, next(a), next, b)
      );
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function sum_acc(term, a, next, b) {
  return accumulate(add, 0, term, a, next, b);
}

// console.log(sum(identity, 1, inc, 5), sum_acc(identity, 1, inc, 5));

function accumulate_iter(combiner, null_value, term, a, next, b) {
  function iter(a, result) {
    return a > b ? result : iter(next(a), combiner(term(a), result));
  }
  return iter(a, null_value);
}

function prod_acc_iter(term, a, next, b) {
  return accumulate(multiply, 1, term, a, next, b);
}

// console.log(product(identity, 1, inc, 5), prod_acc_iter(identity, 1, inc, 5));

// 1.33

function filtered_accumulate(filter, combiner, null_value, term, a, next, b) {
  return a > b
    ? null_value
    : combiner(
        filter(a) ? term(a) : null_value,
        filtered_accumulate(
          filter,
          combiner,
          null_value,
          term,
          next(a),
          next,
          b
        )
      );
}

const { is_prime } = require("./1-22");
function square(x) {
  return x * x;
}

function sum_squared_primes(a, b) {
  return filtered_accumulate(is_prime, add, 0, square, a, inc, b);
}

// console.log(
//   sum_squared_primes(3, 11),
//   square(3) + square(5) + square(7) + square(11)
// );
