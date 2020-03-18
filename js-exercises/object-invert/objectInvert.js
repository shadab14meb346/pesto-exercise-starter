
function reversedEntries(object) {
  return Object.entries(object).map(element => {
    const [key, value] = element;
    return [value, key];
  });
}
function objectInvert(object) {
  const reversedObjectEntries = reversedEntries(object);
  return Object.fromEntries(reversedObjectEntries);
}

export {
  objectInvert,
};
