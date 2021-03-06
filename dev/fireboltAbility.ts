import { Ability} from "./ability.js"
import { Firebolt } from "./firebolt.js"
import { Player } from "./player.js"
import { PlayerUI } from "./playerUI.js"

export class FireboltAbility extends Ability {

    private firebolt : Firebolt 
    private player : Player // determine which player

    constructor(player: Player) {
        super()
        this.player = player
        this.cooldown = 2
        this.currentCooldown = 150
    }

    resetCooldown() {
        this.currentCooldown = 0
    }

    attack() : void {
        if (this.currentCooldown == 0) {
            this.player.addProjectile(new Firebolt(this.player.name, this.player.getPosition()))
            this.currentCooldown = (this.cooldown * 60)
            console.log(this.currentCooldown)
        }
    }

    update() : void {
        if (this.currentCooldown != 0) {
            this.checkCooldown()
            this.player.playerUI.fireboltCooldown(this.currentCooldown)
        }
    }

    //cooldownCheck()
}