import { ERROR } from "./constants/Messages.js";

class Validator {
  static validateAndParseNames(inputString) {
    const names = inputString
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name.length > 0);

    if (names.length === 0) {
      throw new Error(ERROR.NAME_COUNT);
    }

    const VALID_CHARACTERS = /^[a-zA-Z0-9 가-힣]*$/;
    const hasInvalidChars = names.some((name) => !VALID_CHARACTERS.test(name));
    if (hasInvalidChars) {
      throw new Error(ERROR.NAME_INVALID_CHAR);
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
