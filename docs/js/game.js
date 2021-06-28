import { Arena } from "./arena.js";
export class Game {
    constructor() {
        console.log("Game was created!");
        this.arena = new Arena();
        this.gameLoop();
    }
    gameLoop() {
        if (this.arena.pause === true) {
            this.arena.update();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map