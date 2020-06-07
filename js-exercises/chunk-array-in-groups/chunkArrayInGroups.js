function chunkArrayInGroups(array, chunkSize) {
  let lengthOfRequiredArray = Math.ceil(array.length / chunkSize);
  let requiredArray = [];
  let startIndex = 0;
  for (let i = 0; i < lengthOfRequiredArray; i++) {
    requiredArray.push(array.slice(startIndex, startIndex + chunkSize));
    startIndex += chunkSize;
  }
  return requiredArray;
}

export {
  chunkArrayInGroups,
};