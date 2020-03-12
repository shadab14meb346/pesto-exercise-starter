function updateObject(index, valueToReplace, array) {
  let cloneArray = array.slice(0);
  if (index < 0) {
    cloneArray.splice(array.length + index, 1, valueToReplace);
    return cloneArray;
  }
  cloneArray.splice(index, 1, valueToReplace);
  return cloneArray;
}

export {
  updateObject,
};
