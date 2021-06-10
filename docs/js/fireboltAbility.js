import { Ability } from "./ability.js";
import { Firebolt } from "./firebolt.js";
export class FireboltAbility extends Ability {
    constructor(player) {
        super();
        this.player = player;
        console.log('Firebolt ability created');
    }
    attack() {
        console.log("Firebolt Attack!");
        this.player.addProjectile(new Firebolt(this.player.getPosition()));
    }
    update() {
    }
    delete() { }
}
//# sourceMappingURL=fireboltAbility.js.map