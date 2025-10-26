import Validator from "../src/Validator.js";

describe("입력 유효성 검사 (Validator)", () => {
  test("정상적인 입력은 trim 후 이름 배열을 반환해야 한다.", () => {
    const input = " pobi, woni, jun";
    const result = Validator.validateAndParseNames(input);
    expect(result).toEqual(["pobi", "woni", "jun"]);
  });
});
