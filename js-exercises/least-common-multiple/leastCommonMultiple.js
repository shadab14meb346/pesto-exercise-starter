function leastCommonMultiple(number1, number2) {
  const greaterNumber = Math.max(number1, number2);
  const smallerNumber = Math.min(number1, number2);
  let i = 1;
  while (true) {
    if ((greaterNumber * i) % smallerNumber === 0) {
      return greaterNumber * i;
    }
    i += 1;
  }
}

export {
  leastCommonMultiple,
};
