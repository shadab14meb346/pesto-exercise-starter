function balancedBraces(string) {
  let stack = [];
  let openingBrace = closingBrace => {
    if (closingBrace === ")") return "(";
    if (closingBrace === "}") return "{";
    if (closingBrace === "]") return "[";
    return false;
  }
  for (let character of string) {
    if (character === "(" || character === "{" || character === "[") {
      stack.push(character);
    } else if (stack[stack.length - 1] === openingBrace(character)) {
      stack.pop();
    }
  }
  if (!stack.length) return true;
  return false;
}

export {
  balancedBraces,
};