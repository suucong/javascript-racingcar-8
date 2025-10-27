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
      expect(() => Validator.validateCarNames(input)).toThrow(
        ERROR.NAME_LENGTH
      );
    }
  );
});
