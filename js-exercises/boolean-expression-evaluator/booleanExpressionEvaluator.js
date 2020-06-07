function everyCharacterIsZero(array) {
  return array.every(element => element === '0');
}

function isValidExpression(expression) {
  const correctExpressionRegex = /true|false|&|\^|\||!/g;
  const replacedWithZero = expression.replace(correctExpressionRegex, 0);
  const array = replacedWithZero.split(' ');
  if (array.length === 1) {
    const charactersArray = array[0].split('');
    return everyCharacterIsZero(charactersArray);
  }
  const validCharactersLengthArray = inputArray => inputArray.map(element => {
    if (element.length > 1) {
      if (everyCharacterIsZero(element.split(''))) {
        return '0';
      }
      return element;
    }
    return element;
  });
  return everyCharacterIsZero(validCharactersLengthArray(array));
}

function booleanExpressionEvaluator(expression) {
  if (typeof expression !== 'string') throw Error(`Expected string received ${typeof expression}`);
  if (!isValidExpression(expression)) throw Error(`Not a valid expression`);
  return Boolean(eval(expression));
}

export {
  booleanExpressionEvaluator,
};
