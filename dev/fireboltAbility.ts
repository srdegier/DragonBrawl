import { Ability} from "./ability.js"
import { Firebolt } from "./firebolt.js"
import { Player } from "./player.js"

export class FireboltAbility extends Ability {

    private firebolt : Firebolt

    constructor(player: Player) {
        super()
        console.log('Firebolt ability created')
    }

    attack() : void {
        console.log("Firebolt Attack!")
        this.firebolt = new Firebolt()
    }
}