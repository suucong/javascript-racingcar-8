import Validator from "../src/Validator.js";
import { ERROR } from "../src/constants/Messages.js";

describe("입력 유효성 검사 (Validator)", () => {
  test("정상적인 입력은 trim 후 이름 배열을 반환해야 한다.", () => {
    const input = " pobi, woni, jun";
    const result = Validator.validateAndParseNames(input);
    expect(result).toEqual(["pobi", "woni", "jun"]);
  });

  test.each(["pobi,woni,toolong", "안녕나는루피", "안녕나는포비,자동차"])(
    "이름이 5자 초과인 경우, 에러를 발생시킨다: %s",
    (input) => {
      expect(() => Validator.validateAndParseNames(input)).toThrow(
        ERROR.NAME_LENGTH
      );
    }
  );

  test.each(["pobi, woni, pobi", "수진,수진", " pobi,  pobi "])(
    "이름이 중복되는 경우, 에러를 발생시킨다: %s",
    (input) => {
      expect(() => Validator.validateAndParseNames(input)).toThrow(
        ERROR.NAME_DUPLICATE
      );
    }
  );

  test.each(["pobi,,jun", ",pobi,woni", "pobi,수진, ", ",,"])(
    "이름이 빈 문자열인 경우, 에러를 발생시킨다: %s",
    (input) => {
      expect(() => Validator.validateAndParseNames(input)).toThrow(
        ERROR.NAME_EMPTY
      );
    }
  );

  test.each([
    "pobi, woni!",
    "pobi,woni@",
    "pobi,수진#",
    "a lice, 수진",
    "pobi, w123-",
    "pobi, woni\n",
  ])("허용되지 않은 문자가 포함된 경우, 에러를 발생시킨다: %s", (input) => {
    expect(() => Validator.validateAndParseNames(input)).toThrow(
      ERROR.NAME_INVALID_CHAR
    );
  });
});
