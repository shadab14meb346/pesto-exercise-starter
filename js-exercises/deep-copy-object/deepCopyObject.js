const deepCopyObject = objToCopy => {
  let objectCopy = {}
  for (const key in objToCopy) {
    if (typeof objToCopy[key] === "object") {
      for (const subKey in objToCopy[key]) {
        let subObjectCopy = {};
        if (typeof objToCopy[key][subKey] === "object") {
          return deepCopyObject(objToCopy[key][subKey]);
        } else {
          subObjectCopy[subKey] = objToCopy[key][subKey];
        }
      }
    } else {
      objectCopy[key] = objToCopy[key];
    }
  }
  return objectCopy;
};

export {
  deepCopyObject
};