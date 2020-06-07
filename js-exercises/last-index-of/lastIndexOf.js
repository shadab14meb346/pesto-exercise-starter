function lastIndexOf(value, array) {
  if (array.indexOf(value) === -1) return -1;
  let lastIndex = array.indexOf(value);
  array.forEach((element, index) => {
    if (element === value && index > lastIndex) {
      lastIndex = index;
    }
  });
  return lastIndex;
}

export {
  lastIndexOf,
};