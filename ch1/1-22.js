function square(x) {
  return x * x;
}

function divides(a, b) {
  return b % a === 0;
}

function find_divisor(n, test_divisor) {
  return square(test_divisor) > n
    ? n
    : divides(test_divisor, n)
    ? test_divisor
    : find_divisor(n, test_divisor + 1);
}

function smallest_divisor(n) {
  return find_divisor(n, 2);
}

function is_prime(n) {
  return n === smallest_divisor(n);
}

function timed_prime_test(n) {
  // display(n);
  return start_prime_test(n, Date.now());
}

function start_prime_test(n, start_time) {
  return is_prime(n) ? report_prime(n, Date.now(), start_time) : true;
}

function report_prime(n, end_time, start_time) {
  console.log(
    `Prime: ${n}. Elapsed: ${end_time}, ${start_time}, ${
      end_time - start_time
    } ms.`
  );
  // display(" *** ");
  // display(elapsed_time);
}

function search_for_primes(lower, upper, primes) {
  // console.log({ lower, upper, primes, prime: timed_prime_test(lower) });
  return lower >= upper
    ? primes
    : !!timed_prime_test(lower)
    ? search_for_primes(lower + 2, upper, [...primes, lower])
    : search_for_primes(lower + 2, upper, primes);
}

// console.log("primes:", is_prime(1009));
// const primes = search_for_primes(100001, 100000000, []);

module.exports = {
  is_prime,
};

// too fast! runs out of memory before showing significant time
