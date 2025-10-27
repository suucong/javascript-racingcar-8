import { Console } from "@woowacourse/mission-utils";
import { PROMPT } from "../constant/Messages.js";

class InputView {
  static async readCarNames() {
    const input = await Console.readLineAsync(PROMPT.CAR_NAMES);
    return input;
  }

  static async readTryCount() {
    const input = await Console.readLineAsync(PROMPT.TRY_COUNT);
    return input;
  }
}

export default InputView;
