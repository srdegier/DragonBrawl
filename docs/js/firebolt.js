import { Projectile } from "./projectile.js";
export class Firebolt extends Projectile {
    constructor(pName, position) {
        super(position.x, position.y, 'firebolt', pName);
        this.projectileSpeed = 10;
        this.position = position;
        this.pName = pName;
        this.create();
    }
    create() {
        this.horizontalSpeed = this.projectileSpeed;
        if (this.pName == "p2") {
            this.x += -10;
            this.y += 50;
            this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        }
        else {
            this.x += 90;
            this.y += 50;
            this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        }
    }
    update() {
    }
}
//# sourceMappingURL=firebolt.js.map