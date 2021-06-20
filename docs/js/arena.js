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
        this.div = document.createElement("border");
        document.body.appendChild(this.div);
        this.div = document.createElement("timer");
        document.body.appendChild(this.div);
        let controls = [["w", "s", "a", "d", "f"], ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter"]];
        this.player.push(new Player("p1", 100, 400, controls[0]));
        this.player.push(new Player("p2", 1600, 400, controls[1]));
    }
    update() {
        for (const [indexP, player] of this.player.entries()) {
            player.update();
            for (const [index, projectile] of this.player[indexP].projecticles.entries()) {
                const enemyP = ((indexP == 0) ? 1 : 0);
                const hit = this.checkCollision(projectile.getClientRect(), this.player[enemyP].getClientRect());
                if (hit) {
                    this.player[indexP].removeProjectile(index);
                    projectile.remove();
                    this.player[enemyP].hit();
                }
            }
        }
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
//# sourceMappingURL=arena.js.map