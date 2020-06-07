const animalSort = animals => {
  let sortingByNumberOfLegs = (animal1, animal2) => {
    return animal1.numberOfLegs - animal2.numberOfLegs;
  }
  let sortingByName = (animal1, animal2) => {
    if (animal2.numberOfLegs === animal1.numberOfLegs) {
      if (animal2.name < animal1.name) return 1;
      if (animal2.name > animal1.name) return -1;
    } else return 0
  }
  let animalsSortedByLegs = animals.sort(sortingByNumberOfLegs);
  return animalsSortedByLegs.sort(sortingByName);
}

export {
  animalSort
};