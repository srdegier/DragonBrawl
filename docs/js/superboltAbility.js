import { Ability } from "./ability.js";
import { Superbolt } from "./superbolt.js";
export class SuperboltAbility extends Ability {
    constructor(player) {
        super();
        this.player = player;
        this.cooldown = 10;
        this.currentCooldown = 600;
    }
    resetCooldown() {
        this.currentCooldown = 0;
    }
    attack() {
        if (this.currentCooldown == 0) {
            this.player.addProjectile(new Superbolt(this.player.name, this.player.getPosition()));
            this.currentCooldown = (this.cooldown * 60);
        }
    }
    update() {
        if (this.currentCooldown != 0) {
            this.checkCooldown();
            this.player.playerUI.superboltCooldown(this.currentCooldown);
        }
    }
}
//# sourceMappingURL=superboltAbility.js.map