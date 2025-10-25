import InputView from "./InputView.js";

class App {
  async run() {
    const carNames = await InputView.readCarNames();
    const tryCount = await InputView.readTryCount();
  }
}

export default App;
