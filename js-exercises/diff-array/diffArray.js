function diffArray(firstArray, secondArray) {

  let firstArrayUniqueElements = firstArray.filter(element => secondArray.indexOf(element) === -1);

  let secondArrayUniqueElements = secondArray.filter(element => firstArray.indexOf(element) === -1);

  return firstArrayUniqueElements.concat(secondArrayUniqueElements);
}

export {
  diffArray,
};