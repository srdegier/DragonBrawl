import { Arena } from "./arena.js"

export class Game {

    private arena: Arena
    
    constructor() {
        console.log("Game was created!")
        // create arena
        this.arena = new Arena()
        this.gameLoop()
    }

    private gameLoop() {
        if (this.arena.pause === true) {
            this.arena.update();
        }
        requestAnimationFrame(() => this.gameLoop())
    }
} 

new Game()