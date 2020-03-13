function bouncer(array) {
  const cloneArray = array.slice(0);
  return cloneArray.filter(element => Boolean(element));
}

export { bouncer };
