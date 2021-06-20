import { Ability} from "./ability.js"
import { Firebolt } from "./firebolt.js"
import { Player } from "./player.js"

export class FireboltAbility extends Ability {

    private firebolt : Firebolt // array?
    private player : Player // determine which player

    constructor(player: Player) {
        super()
        this.player = player
        console.log('Firebolt ability created')
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