function minima(noOfElements, array) {
  const sortedArray = array.sort((element1, element2) => element1 - element2);
  return sortedArray.slice(0, noOfElements);
}

export {
  minima,
};
