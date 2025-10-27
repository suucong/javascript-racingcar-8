import Car from "./Car.js";

class RacingGame {
  #cars;
  #tryCount;

  constructor(carNames, tryCount) {
    this.#cars = carNames.map((name) => new Car(name));
    this.#tryCount = tryCount;
  }

  getCars() {
    return this.#cars;
  }

  getTryCount() {
    return this.#tryCount;
  }
}

export default RacingGame;
