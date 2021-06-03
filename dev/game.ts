import { Arena } from "./arena.js"

class Game {

    arena: Arena
    
    constructor() {
        console.log("Game was created!")
        // create arena
        this.arena = new Arena()
        this.gameLoop()
    }

    gameLoop() {
        //TODO: update aquarium
        this.arena.update();
        requestAnimationFrame(() => this.gameLoop())
    }
} 

new Game()