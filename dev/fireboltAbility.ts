import { Ability} from "./ability.js"
import { Firebolt } from "./firebolt.js"
import { Player } from "./player.js"
import { PlayerUI } from "./playerUI.js"

export class FireboltAbility extends Ability {

    private firebolt : Firebolt 
    private fireboltSlot : PlayerUI
    private player : Player // determine which player

    constructor(player: Player) {
        super()
        this.player = player
        this.create()
    }

    private create () : void {
        console.log('create ability')
        // lmao het is possible
        //this.player.playerUI.update()
    }

    attack() : void {
        console.log("Firebolt Attack!")
        this.player.addProjectile(new Firebolt(this.player.name, this.player.getPosition()))
    }

    update() : void {
        // this.firebolt.update
    }

    delete() : void {}

    //cooldownCheck()

    //attackspeedCheck()
}