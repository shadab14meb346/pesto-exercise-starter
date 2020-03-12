function alternatingCharacters(arr) {
  const isNeighboringCharactersEqual = (character1, character2) => character1 === character2;
  const result = arr.map(string => {
    const alternateCharacterDeletedArray = string.split('').filter((element, index, array) => isNeighboringCharactersEqual(element, array[index + 1]));
    return alternateCharacterDeletedArray.length;
  });
  return result;
}

export {
  alternatingCharacters,
};

