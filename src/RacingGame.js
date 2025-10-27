import { Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class RacingGame {
  #cars;
  #tryCount;

  constructor(carNames, tryCount) {
    this.#cars = carNames.map((name) => new Car(name));
    this.#tryCount = tryCount;
  }

  runTurn() {
    this.#cars.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      car.move(randomNumber);
    });
  }

  getCars() {
    return this.#cars;
  }

  getTryCount() {
    return this.#tryCount;
  }
}

export default RacingGame;
