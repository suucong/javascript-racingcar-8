import RacingGame from "./RacingGame.js";
import InputView from "./InputView.js";
import Validator from "./Validator.js";
import OutputView from "./OutputView.js";

class RacingGameController {
  async run() {
    const carNamesString = await InputView.readCarNames();
    const carNames = Validator.validateAndParseNames(carNamesString);

    const tryCountString = await InputView.readTryCount();
    const tryCount = Validator.validateCount(tryCountString);

    const game = new RacingGame(carNames, tryCount);

    OutputView.printResultTitle();

    const count = game.getTryCount();
    for (let i = 0; i < count; i++) {
      game.runTurn();
      OutputView.printTurnResult(game.getCars());
    }

    OutputView.printWinner(game.getWinners());
  }
}

export default RacingGameController;
