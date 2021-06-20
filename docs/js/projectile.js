import { GameObject } from "./gameObject.js";
export class Projectile extends GameObject {
    constructor(x, y, type, direction) {
        super(x, y, type, direction);
    }
    moveForward() {
        const direction = `${this.lookDirection}`;
        const newPosition = eval(this.x + direction + this.horizontalSpeed);
        this.x = parseInt(newPosition);
        this.div.style.transform = `translate(${(this.x)}px, ${(this.y)}px)`;
        this.div.style.transform += `scaleX(${this.lookDirection}1)`;
    }
    remove() {
        this.div.remove();
    }
    create() {
    }
}
//# sourceMappingURL=projectile.js.map