const cubeRoot = value => Math.cbrt(value);
const notAnArray = value => !Array.isArray(value);
const arrayCubeRootToJson = arr => {
  if (notAnArray(arr)) throw new Error(`Expected array received ${typeof arr}`);
  const resultObject = {};
  arr.forEach(element => {
    if (isNaN(element)) throw new Error(`Expected number received ${typeof element}`);
    resultObject[element] = cubeRoot(element);
  });
  return resultObject;
};

export {
  arrayCubeRootToJson,
};
