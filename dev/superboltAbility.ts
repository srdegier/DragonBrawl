import { Ability} from "./ability.js"
import { Player } from "./player.js"
import { PlayerUI } from "./playerUI.js"
import { Superbolt } from "./superbolt.js"

export class SuperboltAbility extends Ability {

    private superbolt : Superbolt 
    private player : Player // determine which player

    constructor(player: Player) {
        super()
        this.player = player
        this.cooldown = 10
        this.currentCooldown = 600
        // this.create()
    }

    resetCooldown() {
        this.currentCooldown = 0
    }

    attack() : void {
        if (this.currentCooldown == 0) {
            this.player.addProjectile(new Superbolt(this.player.name, this.player.getPosition()))
            this.currentCooldown = (this.cooldown * 60)
        }
    }

    update() : void {
        if (this.currentCooldown != 0) {
            this.checkCooldown()
            this.player.playerUI.superboltCooldown(this.currentCooldown)
        }
    }

    //cooldownCheck()
}