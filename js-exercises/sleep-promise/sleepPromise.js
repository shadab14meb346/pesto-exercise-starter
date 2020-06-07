const sleep = ms => {
  const promise = new Promise(resolve => setTimeout(resolve, ms));
  const innerFunction = value => promise.then(() => value);
  innerFunction.then = promise.then.bind(promise);
  innerFunction.catch = promise.catch.bind(promise);
  return innerFunction;
};

export {
  sleep,
};
