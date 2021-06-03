import { Arena } from "./arena.js";
class Game {
    constructor() {
        console.log("Game was created!");
        this.arena = new Arena();
        this.gameLoop();
    }
    gameLoop() {
        this.arena.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map