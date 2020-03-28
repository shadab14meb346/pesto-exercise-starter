const fibonacciValue = fibonacciCount => {
  if (fibonacciCount === 1) return 1;
  if (fibonacciCount === 2) return 2;
  return fibonacciValue(fibonacciCount - 1) + fibonacciValue(fibonacciCount - 2);
};
const fibonacciIter = {
  [Symbol.iterator]() {
    let fibonacciCount = 0;
    return {
      next() {
        fibonacciCount += 1;
        return {
          value: fibonacciValue(fibonacciCount),
          done: false,
        };
      },
    };
  },
};

export {
  fibonacciIter,
};
