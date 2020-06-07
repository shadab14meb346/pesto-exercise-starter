function privateProps(obj, isPrivate) {
  const handler = {
    get(target, property, receiver) {
      return Reflect.get(target, property, receiver);
    },
    set(target, property, receiver) {
      if (isPrivate(property)) {
        throw new TypeError(`Can't set property '_private'`);
      }
      return Reflect.set(target, property, receiver);
    },
    has(target, property) {
      if (isPrivate(property)) return false;
      return Reflect.has(target, property);
    },
    ownKeys(target) {
      return Object.keys(target).filter(key => !isPrivate(key));
    },
  };
  return new Proxy(obj, handler);
}

export {
  privateProps,
};
