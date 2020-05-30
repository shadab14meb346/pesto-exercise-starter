function getOnlyNumbers(string) {
  let onlyNumbersStringed = '';
  const charactersArray = string.split('');
  const reversedCharacterArray = charactersArray.reverse();
  for (const character of reversedCharacterArray) {
    if (isNaN(parseInt(character))) {
      return onlyNumbersStringed.split('').reverse().join('');
    }
    onlyNumbersStringed += character;
  }
}

function incremented(stringedNumbers, incrementBy = 1) {
  const stringedNumberArray = stringedNumbers.split('');
  const reversedStringedNumberArray = stringedNumberArray.reverse();
  const reversedNumberArray = reversedStringedNumberArray.map(stringedNumber => parseInt(stringedNumber));
  let carry = 0;
  const result = [];
  if (reversedNumberArray.length === 1) {
    result.push(reversedNumberArray[0] + incrementBy);
    return result.reverse().join('');
  }
  for (const number of reversedNumberArray) {
    if (number + incrementBy + carry >= 10) {
      result.push(0);
      carry = 1;
    } else {
      result.push(number + incrementBy + carry);
      carry = 0;
    }
    incrementBy = 0;
  }
  return result.reverse().join('');
}

function bizarreStringIncrementer(string) {
  const lastCharector = string[string.length - 1];
  if (isNaN(parseInt(lastCharector))) return string + '1';
  const onlyNumbersPart = getOnlyNumbers(string);
  const incrementedNumbersPart = incremented(onlyNumbersPart);
  return string.slice(0, string.length - onlyNumbersPart.length) + incrementedNumbersPart;
}

export {
  bizarreStringIncrementer,
};