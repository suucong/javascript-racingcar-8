import { ERROR } from "./constants/Messages.js";

class Validator {
  static validateAndParseNames(inputString) {
    const names = inputString.split(",").map((name) => name.trim());

    const isOverFive = names.some((name) => name.length > 5);
    if (isOverFive) {
      throw new Error(ERROR.NAME_LENGTH);
    }

    return names;
  }

  static validateCount(countString) {
    const tryCount = Number(countString);
    return tryCount;
  }
}

export default Validator;
