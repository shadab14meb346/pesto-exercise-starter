const isSum = number => number % 2 === 0;
const sumEvenArgs = (...args) => {

  let onlySumArguments = args.filter(isSum);
  return onlySumArguments.reduce((sumEvenArgs, currentValue) => {
    return sumEvenArgs + currentValue;
  }, 0);
};

export {
  sumEvenArgs
};