import RacingGame from "./RacingGame.js";
import InputView from "./InputView.js";
import Validator from "./Validator.js";

class RacingGameController {
  async run() {
    const carNamesString = await InputView.readCarNames();
    const carNames = Validator.validateAndParseNames(carNamesString);

    const tryCountString = await InputView.readTryCount();
    const tryCount = Validator.validateCount(tryCountString);

    const game = new RacingGame(carNames, tryCount);
  }
}

export default RacingGameController;
