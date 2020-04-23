const createFrequencyMap = wordsArray => {
  const wordFrequencyMap = new Map();
  for (const word of wordsArray) {
    if (wordFrequencyMap.has(word)) {
      const frequency = wordFrequencyMap.get(word);
      wordFrequencyMap.set(word, frequency + 1);
    } else {
      wordFrequencyMap.set(word, 1);
    }
  }
  return wordFrequencyMap;
};
const sortAlphabetically = word => word.split('').sort().join().replace(/,/g, '');
const countingAnagrams = str => {
  if (typeof str !== 'string') {
    throw new Error(`Expected argument string received ${typeof str}`);
  }
  const arrayOfWords = str.split(' ');
  const arrayOfWordsGreaterThanOneLetter = arrayOfWords.filter(word => word.length > 1);
  const arrayOfSortedWords = arrayOfWordsGreaterThanOneLetter.map(word => sortAlphabetically(word));
  const wordFrequencyMap = createFrequencyMap(arrayOfSortedWords);
  const setOfUniqueWords = new Set(arrayOfSortedWords);
  let anagramsCount = 0;
  for (const word of setOfUniqueWords) {
    if (wordFrequencyMap.get(word) > 1) {
      anagramsCount += 1;
    }
  }
  return anagramsCount;
};

export {
  countingAnagrams,
};
