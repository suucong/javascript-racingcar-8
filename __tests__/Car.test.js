import Car from "../src/Car.js";

describe("Car 클래스 기능 테스트", () => {
  test("Car 객체는 이름과 초기 위치 0을 가진다.", () => {
    const car = new Car("pobi");
    expect(car.getName()).toBe("pobi");
    expect(car.getPosition()).toBe(0);
  });

  describe("move(randomNumber) 메서드 동작 검증", () => {
    let car;

    beforeEach(() => {
      car = new Car("test");
    });

    test.each([0, 1, 2, 3])(
      "난수 값이 3 이하일 경우 (멈춤), position은 변하지 않는다: %s",
      (value) => {
        car.move(value);
        car.move(value);
        expect(car.getPosition()).toBe(0);
      }
    );

    test.each([4, 5, 6, 9])(
      "난수 값이 4 이상일 경우 (전진), position이 1 증가한다: %s",
      (value) => {
        car.move(value);
        car.move(value);
        expect(car.getPosition()).toBe(2);
      }
    );

    test("주입된 난수 값에 따라 전진과 멈춤이 혼합되어 동작한다.", () => {
      car.move(3);
      car.move(4);
      car.move(3);
      car.move(4);

      expect(car.getPosition()).toBe(2);
    });
  });
});
