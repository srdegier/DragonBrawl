import { GameObject } from "./gameObject.js";
import { PlayerUI } from "./playerUI.js";
import { FireboltAbility } from "./fireboltAbility.js";
import { SuperboltAbility } from "./superboltAbility.js";
export class Player extends GameObject {
    constructor(name, x, y, control) {
        super(x, y, 'player', name);
        this._healthPoint = 4;
        this._wins = 0;
        this.projecticles = [];
        this.name = name;
        this.controlUp = control[0];
        this.controlDown = control[1];
        this.controlLeft = control[2];
        this.controlRight = control[3];
        this.controlFirebolt = control[4];
        this.controlSuperbolt = control[5];
        this.create();
    }
    addProjectile(projectile) {
        this.projecticles.push(projectile);
        console.log(this.projecticles);
    }
    removeProjectile(index) {
        this.projecticles.splice(index, 1);
    }
    removeProjectiles() {
        for (const [index, projectile] of this.projecticles.entries()) {
            projectile.remove();
            this.projecticles.splice(index, 1);
        }
    }
    set healthPoint(newHP) {
        this._healthPoint = newHP;
    }
    get healthPoint() {
        return this._healthPoint;
    }
    hit() {
        this.healthPoint = this.healthPoint - 1;
        this.playerUI.removeHealth();
    }
    respawn() {
        this.healthPoint = 4;
        this.playerUI.resetUI();
        this.removeProjectiles();
        this.superboltAbility.resetCooldown();
        this.fireboltAbility.resetCooldown();
        this.spawn();
    }
    set wins(value) {
        this._wins += value;
        console.log(this.wins);
    }
    getWin() {
        return this.wins;
    }
    get wins() {
        return this._wins;
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
        this.playerUI = new PlayerUI(this);
        this.fireboltAbility = new FireboltAbility(this);
        this.superboltAbility = new SuperboltAbility(this);
    }
    update() {
        if (this.checkOutOfMap()) {
            this.y += this.verticalSpeed;
            this.x += this.horizontalSpeed;
            this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
            if (this.name == "p2") {
                this.div.style.transform += "scaleX(-1)";
            }
        }
        for (const [index, projectile] of this.projecticles.entries()) {
            projectile.moveForward();
            if (!projectile.isInViewport()) {
                projectile.remove();
                this.removeProjectile(index);
            }
        }
        this.fireboltAbility.update();
        this.superboltAbility.update();
    }
    onKeyDown(e) {
        switch (e.code) {
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
            case this.controlSuperbolt:
                this.superboltAbility.attack();
                break;
        }
    }
    onKeyUp(e) {
        if (e.code == this.controlUp || e.code == this.controlDown) {
            this.verticalSpeed = 0;
        }
        if (e.code == this.controlRight || e.code == this.controlLeft) {
            this.horizontalSpeed = 0;
        }
    }
}
//# sourceMappingURL=player.js.map