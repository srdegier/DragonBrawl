import { GameObject } from "./gameObject.js";
import { FireboltAbility } from "./fireboltAbility.js";
export class Player extends GameObject {
    constructor(name, x, y, control) {
        super(x, y, 'player', name);
        this.wins = 0;
        this.projecticles = [];
        this.name = name;
        this.healthPoint = 5;
        this.controlUp = control[0];
        this.controlDown = control[1];
        this.controlLeft = control[2];
        this.controlRight = control[3];
        this.controlFirebolt = control[4];
        this.create();
    }
    addProjectile(projectile) {
        this.projecticles.push(projectile);
        console.log(this.projecticles);
    }
    removeProjectile(index) {
        this.projecticles.splice(index, 1);
    }
    setHP(newHP) {
        this.healthPoint = newHP;
    }
    getHP() {
        return this.healthPoint;
    }
    hit() {
        const newHP = this.getHP() - 1;
        console.log(newHP);
        this.setHP(newHP);
    }
    respawn() {
        this.healthPoint = 5;
        this.spawn();
    }
    setWin() {
        this.wins += 1;
    }
    getWin() {
        return this.wins;
    }
    spawn() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        this.y = h / 2;
        if (this.name == "p1") {
            this.x = w / 19;
        }
        else {
            this.x = w / 1.2;
        }
    }
    create() {
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.spawn();
        this.fireboltAbility = new FireboltAbility(this);
    }
    update() {
        this.y += this.verticalSpeed;
        this.x += this.horizontalSpeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        if (this.name == "p2") {
            this.div.style.transform += "scaleX(-1)";
        }
        for (const [index, projectile] of this.projecticles.entries()) {
            projectile.moveForward();
            if (!projectile.isInViewport()) {
                projectile.remove();
                this.removeProjectile(index);
            }
        }
    }
    onKeyDown(e) {
        switch (e.key) {
            case this.controlUp:
                this.verticalSpeed = -5;
                break;
            case this.controlDown:
                this.verticalSpeed = 5;
                break;
            case this.controlRight:
                this.horizontalSpeed = 5;
                break;
            case this.controlLeft:
                this.horizontalSpeed = -5;
                break;
            case this.controlFirebolt:
                this.fireboltAbility.attack();
                break;
        }
    }
    onKeyUp(e) {
        if (e.key == this.controlUp || e.key == this.controlDown) {
            this.verticalSpeed = 0;
        }
        if (e.key == this.controlRight || e.key == this.controlLeft) {
            this.horizontalSpeed = 0;
        }
    }
}
//# sourceMappingURL=player.js.map