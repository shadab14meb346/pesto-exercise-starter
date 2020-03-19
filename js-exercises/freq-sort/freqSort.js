function createFrequencyMap(array) {
  const frequencyMap = new Map();
  array.forEach(element => {
    if (frequencyMap.has(element)) {
      const frequency = frequencyMap.get(element);
      frequencyMap.set(element, frequency + 1);
    } else {
      frequencyMap.set(element, 1);
    }
  });
  return frequencyMap;
}

function freqSort(array) {
  const frequencyMap = createFrequencyMap(array);
  const uniqueCharacterSet = new Set(array);
  const uniqueCharacterArray = Array.from(uniqueCharacterSet);
  const frequency = element => frequencyMap.get(element);
  const sortingLogic = (element1, element2) => frequency(element2) - frequency(element1);
  return uniqueCharacterArray.sort(sortingLogic);
}

export {
  freqSort,
};
