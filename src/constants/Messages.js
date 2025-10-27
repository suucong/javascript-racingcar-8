export const PROMPT = Object.freeze({
  CAR_NAMES: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  TRY_COUNT: "시도할 횟수는 몇 회인가요?\n",
});

const ERROR_PREFIX = "[ERROR]";

export const ERROR = Object.freeze({
  // 자동차 이름 검증 에러
  NAME_LENGTH: `${ERROR_PREFIX} 자동차의 이름은 5자 이하여야합니다.`,
  NAME_DUPLICATE: `${ERROR_PREFIX} 자동차 이름은 중복될 수 없습니다.`,
  NAME_INVALID_CHAR: `${ERROR_PREFIX} 자동차 이름에는 허용되지 않는 문자가 포함되어 있습니다.`,
  NAME_COUNT: `${ERROR_PREFIX} 경주할 자동차 이름은 최소 1개 이상 입력해야 합니다.`,

  // 시도 횟수 관련 에러
  COUNT_NOT_NUMBER: `${ERROR_PREFIX} 시도 횟수에 숫자를 입력해야합니다.`,
  COUNT_INVALID_RANGE: `${ERROR_PREFIX} 시도 횟수는 1 이상이어야 합니다.`,
});
