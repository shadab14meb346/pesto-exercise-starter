function rangeIter(lb, ub) {
  if (lb === undefined || ub === undefined) {
    throw new TypeError('undefined is not a number');
  }
  if (typeof ub !== 'number') {
    throw new TypeError(`${ub} is not a number`);
  }
  let start;
  let end;
  if (ub > lb) {
    start = lb;
    end = ub;
  }
  if (ub === lb) {
    start = end = lb;
  }
  if (ub < lb) {
    start = lb;
    end = ub;
  }
  return {
    [Symbol.iterator]() {
      let currentValue = start - 1;
      return {
        next() {
          if (currentValue >= end) return { done: true };
          currentValue += 1;
          return {
            value: currentValue,
            done: false,
          };
        },
      };
    },
  };
}

export {
  rangeIter,
};
