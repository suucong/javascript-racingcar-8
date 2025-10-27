import RacingGameController from "../src/controller/RacingGameController.js";

class App {
  async run() {
    await new RacingGameController().run();
  }
}

export default App;
