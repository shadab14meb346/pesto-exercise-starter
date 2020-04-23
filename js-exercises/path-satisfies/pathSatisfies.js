function pathSatisfies(conditionFunction, path, object) {
  if (path.length === 0) return false;
  const pathClone = path.slice(0);
  const firstElement = pathClone.shift();
  let visitedPath = object[firstElement];
  pathClone.forEach(element => {
    visitedPath = visitedPath[element];
  });
  if (visitedPath === undefined) return false;
  return conditionFunction(visitedPath);
}

export {
  pathSatisfies,
};
