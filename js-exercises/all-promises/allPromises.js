const allPromises = iterables => {
  if (iterables === undefined) return new Promise((resolve, reject) => {});
  const onlyPromises = iterables.map(element => Promise.resolve(element));
  const totalLength = iterables.length;
  const result = new Array(totalLength);
  let count = 0;
  return new Promise((resolve, reject) => {
    if (iterables.length === 0) {
      resolve([]);
    }
    for (const [index, promise] of Object.entries(onlyPromises)) {
      promise.then(value => {
        result[index] = value;
        count += 1;
        if (count === totalLength) {
          resolve(result);
        }
      },
      error => {
        reject(error);
      });
    }
  });
};

export {
  allPromises,
};
