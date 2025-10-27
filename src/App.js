import RacingGameController from "./RacingGameController.js";

class App {
  async run() {
    await new RacingGameController().run();
  }
}

export default App;
