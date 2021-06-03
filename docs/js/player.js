import { GameObject } from "./gameObject.js";
export class Player extends GameObject {
    constructor(name, x, y, control) {
        super(x, y);
        this.activeControl = [];
        this.name = name;
        this.healthPoint = 5;
        this.controlUp = control[0];
        this.controlDown = control[1];
        this.controlLeft = control[2];
        this.controlRight = control[3];
        this.create();
    }
    create() {
        console.log(`${this.name} was created!`);
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    update() {
        this.y += this.verticalSpeed;
        this.x += this.horizontalSpeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        if (this.name == "p2") {
            this.div.style.transform += "scaleX(-1)";
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