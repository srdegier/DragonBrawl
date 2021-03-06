import { Ability } from "./ability.js";
import { Firebolt } from "./firebolt.js";
export class FireboltAbility extends Ability {
    constructor(player) {
        super();
        this.player = player;
        this.cooldown = 2;
        this.currentCooldown = 150;
    }
    resetCooldown() {
        this.currentCooldown = 0;
    }
    attack() {
        if (this.currentCooldown == 0) {
            this.player.addProjectile(new Firebolt(this.player.name, this.player.getPosition()));
            this.currentCooldown = (this.cooldown * 60);
            console.log(this.currentCooldown);
        }
    }
    update() {
        if (this.currentCooldown != 0) {
            this.checkCooldown();
            this.player.playerUI.fireboltCooldown(this.currentCooldown);
        }
    }
}
//# sourceMappingURL=fireboltAbility.js.map