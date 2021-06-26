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
        //TODO: update arena
        this.arena.update();
        // if(this.arena.round == 5) {
        //     console.log('game over');
        // }
        requestAnimationFrame(() => this.gameLoop())
    }
} 

new Game()