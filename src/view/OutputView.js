import { Console } from "@woowacourse/mission-utils";
import { OUTPUT } from "../constant/Messages.js";

class OutputView {
  static printResultTitle() {
    Console.print(OUTPUT.RESULT_TITLE);
  }

  static printTurnResult(cars) {
    cars.forEach((car) => {
      const positionDisplay = OUTPUT.POSITION_MARK.repeat(car.getPosition());
      Console.print(`${car.getName()} : ${positionDisplay}`);
    });
    Console.print("");
  }

  static printWinner(winners) {
    const winnerNames = winners.join(", ");
    Console.print(`${OUTPUT.FINAL_WINNER} : ${winnerNames}`);
  }
}

export default OutputView;
