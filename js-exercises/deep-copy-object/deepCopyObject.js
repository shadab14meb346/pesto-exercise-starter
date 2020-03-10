const deepCopyObject = objToCopy => {
  if (typeof objToCopy !== "object" || objToCopy === null) {
    return objToCopy;
  }
  const copyObject = {};
  for (const key in objToCopy) {
    copyObject[key] = deepCopyObject(objToCopy[key]);
  }
  return copyObject;
};
export {
  deepCopyObject
};