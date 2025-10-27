import RacingGame from "../src/model/RacingGame.js";
import { Random } from "@woowacourse/mission-utils";

describe("RacingGame 클래스 기능 테스트", () => {
  const CAR_NAMES = ["pobi", "woni", "jun"];

  beforeEach(() => {
    Random.pickNumberInRange = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("getWinners() 메서드 동작 검증", () => {
    const TRY_COUNT = 3;

    test("단독 우승자가 있을 경우, 해당 이름만 배열로 반환해야 한다.", () => {
      const game = new RacingGame(CAR_NAMES, TRY_COUNT);

      // 1턴: [pobi: M, woni: S, jun: S] -> pobi: 1
      Random.pickNumberInRange
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(3);
      // 2턴: [pobi: M, woni: S, jun: S] -> pobi: 2
      Random.pickNumberInRange
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(3);
      // 3턴: [pobi: S, woni: S, jun: S] -> pobi: 2 (단독 우승)
      Random.pickNumberInRange
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(3);

      game.runTurn();
      game.runTurn();
      game.runTurn();

      expect(game.getWinners()).toEqual(["pobi"]);
    });

    test("공동 우승자가 있을 경우, 모든 우승자 이름을 배열로 반환해야 한다.", () => {
      const game = new RacingGame(CAR_NAMES, TRY_COUNT);

      // 1턴: [pobi: M, woni: S, jun: M] -> pobi: 1, jun: 1
      Random.pickNumberInRange
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(4);
      // 2턴: [pobi: S, woni: M, jun: S] -> pobi: 1, woni: 1, jun: 1
      Random.pickNumberInRange
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(3);
      // 3턴: [pobi: M, woni: M, jun: M] -> pobi: 2, woni: 2, jun: 2 (공동 우승)
      Random.pickNumberInRange
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(4);

      game.runTurn();
      game.runTurn();
      game.runTurn();

      expect(game.getWinners()).toEqual(["pobi", "woni", "jun"]);
    });
  });
});
