import {
  freqSort
} from './freqSort';

describe('freqSort', () => {
  test('should return sorted array according to frequency and  should remove duplicates', () => {
    const array = ["a", "z", "z", "z", "b", "b", "z"];
    expect(freqSort(array)).toEqual(['z', 'b', 'a']);
  });
});