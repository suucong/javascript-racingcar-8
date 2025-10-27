import Car from "../src/Car.js";
import { Random } from "@woowacourse/mission-utils";

describe("Car 클래스 기능 테스트", () => {
  beforeEach(() => {
    jest.spyOn(Random, "pickNumberInRange");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Car 객체는 이름과 초기 위치 0을 가진다.", () => {
    const car = new Car("pobi");
    expect(car.name).toBe("pobi");
    expect(car.position).toBe(0);
  });

  describe("move() 메서드 동작 검증", () => {
    let car;

    beforeEach(() => {
      car = new Car("test");
    });

    test("난수 값이 3 이하일 경우 (멈춤), position은 변하지 않는다.", () => {
      Random.pickNumberInRange.mockReturnValue(3);
      car.move();
      car.move();
      expect(car.position).toBe(0);
    });

    test("난수 값이 4 이상일 경우 (전진), position이 1 증가한다.", () => {
      Random.pickNumberInRange.mockReturnValue(4);
      car.move();
      car.move();
      expect(car.position).toBe(2);
    });

    test("난수 값에 따라 전진과 멈춤이 혼합되어 동작한다.", () => {
      Random.pickNumberInRange
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(4);

      car.move();
      car.move();
      car.move();
      car.move();

      expect(car.position).toBe(2);
    });
  });
});
