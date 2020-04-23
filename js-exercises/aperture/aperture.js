function aperture(tupleLength, list) {
  if (tupleLength > list.length) return [];
  const iterationLimit = list.length - tupleLength;
  const tupleList = [];
  for (let i = 0; i <= iterationLimit; i = +1) {
    tupleList.push(list.slice(i, i + tupleLength));
  }
  return tupleList;
}

export {
  aperture,
};
