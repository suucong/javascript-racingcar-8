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

  getWinners() {
    let maxPosition = 0;
    this.#cars.forEach((car) => {
      if (car.getPosition() > maxPosition) {
        maxPosition = car.getPosition();
      }
    });

    const winners = this.#cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());

    return winners;
  }

  getCars() {
    return this.#cars;
  }

  getTryCount() {
    return this.#tryCount;
  }
}

export default RacingGame;
