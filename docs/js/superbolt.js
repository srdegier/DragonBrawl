import { Projectile } from "./projectile.js";
export class Superbolt extends Projectile {
    constructor(pName, position) {
        super(position.x, position.y, 'superbolt', pName);
        this.projectileSpeed = 20;
        this.position = position;
        this.pName = pName;
        this.create();
    }
    create() {
        console.log('Superbolt added');
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
//# sourceMappingURL=superbolt.js.map