import { Player } from "./player.js";
export class Arena {
    constructor() {
        this.player = [];
        this.doomClock = 3600;
        this._round = 1;
        this.pause = true;
        this.create();
    }
    create() {
        console.log('created arena');
        this.div = document.createElement("background");
        document.body.appendChild(this.div);
        this.div = document.createElement("border");
        document.body.appendChild(this.div);
        this.timerElement = document.createElement("h1");
        this.timerElement.classList.add("timer");
        document.body.appendChild(this.timerElement);
        this.winMessage = document.createElement("win-message");
        document.body.appendChild(this.winMessage);
        let controls = [["KeyW", "KeyS", "KeyA", "KeyD", "KeyF", "ShiftLeft"], ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter", "ShiftRight"]];
        this.player.push(new Player("p1", 100, 400, controls[0]));
        this.player.push(new Player("p2", 1600, 400, controls[1]));
    }
    update() {
        for (const [indexP, player] of this.player.entries()) {
            player.update();
            const enemyP = ((indexP == 0) ? 1 : 0);
            if (player.healthPoint == 0) {
                this.player[enemyP].wins = 1;
                this.checkWin();
                this.round = 1;
                if (this.player[enemyP].wins == 3) {
                    this.pause = true;
                    this.winMessage.classList.add('visible');
                    this.winMessage.innerText = `${this.player[enemyP].name} wins!`;
                    setTimeout(function () { location.reload(); }, 3000);
                }
                console.log("Round " + this.round);
                for (const player of this.player) {
                    player.respawn();
                }
            }
            for (const [index, projectile] of this.player[indexP].projecticles.entries()) {
                const hit = this.checkCollision(projectile.getClientRect(), this.player[enemyP].getClientRect());
                if (hit) {
                    this.player[indexP].removeProjectile(index);
                    projectile.remove();
                    this.player[enemyP].hit();
                }
            }
        }
        this.timer();
    }
    set round(value) {
        this._round += value;
    }
    get round() {
        return this._round;
    }
    timer() {
        this.doomClock--;
        let secondsLeft = Math.floor(this.doomClock / 60);
        this.timerElement.innerText = String(secondsLeft);
        if (this.doomClock <= 0) {
            this.checkWin();
        }
    }
    checkWin() {
        if (this.player[0].healthPoint == this.player[1].healthPoint) {
            this.winMessage.classList.add('visible');
            this.winMessage.innerText = `draw`;
            for (const player of this.player) {
                player.respawn();
            }
        }
        else if (this.player[0].healthPoint > this.player[1].healthPoint) {
            this.winMessage.classList.add('visible');
            this.winMessage.innerText = `p1 wins round ${this.round}`;
            this.player[1].healthPoint = 0;
        }
        else {
            this.winMessage.classList.add('visible');
            this.winMessage.innerText = `p2 wins round ${this.round}`;
            this.player[0].healthPoint = 0;
        }
        this.pause = false;
        setTimeout(() => {
            this.doomClock = 3600;
            this.winMessage.innerText = '';
            this.winMessage.classList.remove('visible');
            this.pause = true;
        }, 3000);
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
//# sourceMappingURL=arena.js.map