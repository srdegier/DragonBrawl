import { Projectile } from "./projectile.js";
export class Firebolt extends Projectile {
    constructor(position) {
        super();
        this.position = position;
        this.create();
    }
    create() {
        console.log(this.position.x);
        console.log(this.position.y);
    }
    update() {
    }
}
//# sourceMappingURL=firebolt.js.map