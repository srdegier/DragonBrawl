import { Player } from "./player.js";
export class Arena {
    constructor() {
        this.player = [];
        this.create();
    }
    create() {
        console.log('created arena');
        this.div = document.createElement("background");
        document.body.appendChild(this.div);
        let controls = [["w", "s", "a", "d"], ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]];
        this.player.push(new Player("p1", 100, 400, controls[0]));
        this.player.push(new Player("p2", 1600, 400, controls[1]));
    }
    update() {
        for (const player of this.player) {
            player.update();
        }
    }
}
//# sourceMappingURL=arena.js.map