import InputView from "./InputView.js";
import Validator from "./Validator.js";

class RacingGame {
  async #readGameInputs() {
    const namesString = await InputView.readCarNames();
    const countString = await InputView.readTryCount();

    const carNames = Validator.validateAndParseNames(namesString);
    const tryCount = Validator.validateCount(countString);

    return { carNames, tryCount };
  }

  async run() {
    const { carNames, tryCount } = await this.#readGameInputs();
  }
}

export default RacingGame;
