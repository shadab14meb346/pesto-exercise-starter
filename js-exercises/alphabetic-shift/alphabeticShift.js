function shiftedAlphabets(alphabet) {
  const shiftBy = 1;
  const alphabetASCIICode = alphabet.charCodeAt(0);
  if (alphabet === 'z') return 'a';
  if (alphabet === 'Z') return 'A';
  return String.fromCharCode(alphabetASCIICode + shiftBy);
}
const alphabeticShift = input => {
  let shiftedInput = '';
  for (const alphabet of input) {
    shiftedInput += shiftedAlphabets(alphabet);
  }
  return shiftedInput;
};

export {
  alphabeticShift,
};
