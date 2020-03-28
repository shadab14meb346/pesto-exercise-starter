const onChange = (obj, onChangeFn) => {
  const handler = {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);
      if (typeof value === 'object') {
        return new Proxy(value, handler);
      }
      return value;
    },
    set(target, property, receiver) {
      onChangeFn();
      const value = Reflect.set(target, property, receiver);
      if (typeof value === 'object') {
        return new Proxy(value, handler);
      }
      return value;
    },
    deleteProperty(target, property) {
      onChangeFn();
      return Reflect.deleteProperty(target, property);
    },
    defineProperty(target, propertyKey, attributes) {
      onChangeFn();
      return Reflect.defineProperty(target, propertyKey, attributes);
    },
  };
  return new Proxy(obj, handler);
};
export { onChange };
