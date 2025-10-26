class Validator {
  static validateAndParseNames(inputString) {
    const names = inputString.split(",").map((name) => name.trim());
    return names;
  }

  static validateCount(countString) {
    const tryCount = Number(countString);
    return tryCount;
  }
}

export default Validator;
