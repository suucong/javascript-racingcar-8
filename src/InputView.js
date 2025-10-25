import { Console } from "@woowacourse/mission-utils";
import { PROMPT } from "./constants/Messages.js";

class InputView {
  static async readCarNames() {
    const input = await Console.readLineAsync(PROMPT.CAR_NAMES);
    const names = input.split(",").map((name) => name.trim());
    return names;
  }

  static async readTryCount() {
    const input = await Console.readLineAsync(PROMPT.TRY_COUNT);
    const tryCount = Number(input);
    return tryCount;
  }
}

export default InputView;
