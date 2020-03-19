function codePointOf(character) {
  return character.codePointAt(0);
}

function getCodePointsArray(string) {
  const arrayCodePoint = [];
  for (const character of string) {
    arrayCodePoint.push(codePointOf(character));
  }
  return arrayCodePoint;
}

function reverse(string) {
  const codePoints = getCodePointsArray(string);
  const reversedCodePoint = codePoints.reverse();
  return String.fromCodePoint(...reversedCodePoint);
}

function equal(string1, string2) {
  const string1CodePoints = getCodePointsArray(string1);
  const string2CodePoints = getCodePointsArray(string2);
  return JSON.stringify(string1CodePoints) === JSON.stringify(string2CodePoints);
}
export {
  reverse,
  equal,
};
