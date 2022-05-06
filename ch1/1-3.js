function sumLargestSquares(a, b, c) {
  return a > b
    ? a * a + (b > c ? b * b : c * c)
    : b * b + (a > c ? a * a : c * c);
}

console.log(sumLargestSquares(5, 5, 2));
