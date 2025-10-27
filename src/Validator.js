import { ERROR } from "./constants/Messages.js";

class Validator {
  static validateAndParseNames(inputString) {
    const names = inputString.split(",").map((name) => name.trim());

    const hasEmptyName = names.some((name) => name.length === 0);
    if (hasEmptyName) {
      throw new Error(ERROR.NAME_EMPTY);
    }

    const isOverFive = names.some((name) => name.length > 5);
    if (isOverFive) {
      throw new Error(ERROR.NAME_LENGTH);
    }

    const uniqueNames = new Set(names);
    if (uniqueNames.size !== names.length) {
      throw new Error(ERROR.NAME_DUPLICATE);
    }

    return names;
  }

  static validateCount(countString) {
    const tryCount = Number(countString);
    return tryCount;
  }
}

export default Validator;
