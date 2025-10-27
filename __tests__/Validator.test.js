import { template } from "@babel/core";
import Validator from "../src/Validator.js";
import { ERROR } from "../src/constants/Messages.js";

describe("입력 유효성 검사 (Validator)", () => {
  describe("자동차 이름 정상 파싱", () => {
    test.each([
      [" pobi, woni, jun ", ["pobi", "woni", "jun"]],
      ["su ji, pobi, 123", ["su ji", "pobi", "123"]],
      ["short", ["short"]],
    ])(
      "정상적인 입력은 trim 후 이름 배열을 반환해야 한다: %s",
      (input, expected) => {
        const result = Validator.validateAndParseNames(input);
        expect(result).toEqual(expected);
      }
    );
  });

  describe("자동차 이름 길이가 5자 초과하는 경우 예외 발생", () => {
    test.each(["pobi,woni,toolong", "안녕나는루피", "안녕나는포비,자동차"])(
      "이름이 5자 초과인 경우, 에러를 발생시킨다: %s",
      (input) => {
        expect(() => Validator.validateAndParseNames(input)).toThrow(
          ERROR.NAME_LENGTH
        );
      }
    );
  });

  describe("자동차 이름이 중복되는 경우 예외 발생", () => {
    test.each(["pobi, woni, pobi", "수진,수진", " pobi,  pobi "])(
      "이름이 중복되는 경우, 에러를 발생시킨다: %s",
      (input) => {
        expect(() => Validator.validateAndParseNames(input)).toThrow(
          ERROR.NAME_DUPLICATE
        );
      }
    );
  });

  describe("자동차 이름에 허용되지 않은 문자가 포함된 경우 예외 발생", () => {
    test.each(["pobi, woni!", "pobi,woni@", "pobi,수진#", "pobi, w123-"])(
      "허용되지 않은 문자가 포함된 경우, 에러를 발생시킨다: %s",
      (input) => {
        expect(() => Validator.validateAndParseNames(input)).toThrow(
          ERROR.NAME_INVALID_CHAR
        );
      }
    );
  });

  describe("유효한 자동차 이름이 1개 미만인 경우 예외 발생", () => {
    test.each(["", " ", ", ,"])(
      "유효한 이름이 한 개도 없는 경우, 예외 발생: %s",
      (input) => {
        expect(() => Validator.validateAndParseNames(input)).toThrow(
          ERROR.NAME_COUNT
        );
      }
    );
  });

  describe("시도 횟수가 빈 문자열인 경우 예외 발생", () => {
    test.each(["", " ", "\t\n"])(
      "시도 횟수가 빈 문자열인 경우 예외 발생: %s",
      (input) => {
        expect(() => Validator.validateCount(input)).toThrow(ERROR.COUNT_EMPTY);
      }
    );
  });

  describe("시도 횟수가 숫자가 아닌 경우 예외 발생", () => {
    test.each(["a", "5회", "1.5", " 5 5"])(
      "시도 횟수가 숫자가 아닌 경우, 예외 발생: %s",
      (input) => {
        expect(() => Validator.validateCount(input)).toThrow(
          ERROR.COUNT_NOT_NUMBER
        );
      }
    );
  });

  describe("시도 횟수가 1 미만인 경우 예외 발생", () => {
    test.each(["0", "-10", " 0", " -5"])(
      "시도 횟수가 1 미만인 경우, 예외 발생: %s",
      (input) => {
        expect(() => Validator.validateCount(input)).toThrow(
          ERROR.COUNT_INVALID_RANGE
        );
      }
    );
  });
});
