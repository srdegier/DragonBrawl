import { Player } from "./player.js"
// import { GameObject } from "./gameObject.js"

export class Arena {

    protected div : HTMLElement
    protected player: Player[] = []

    constructor() {
        this.create()
    }

    create() : void {
        console.log('created arena');
        this.div = document.createElement("background")
        // this.div.style.filter = `hue-rotate(${Math.random() * 360}deg)`
        document.body.appendChild(this.div)

        let controls = [["w","s", "a", "d"], ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]]
        // insert 2 players
        this.player.push(new Player("p1", 100, 400, controls[0]))
        this.player.push(new Player("p2", 1600, 400, controls[1]))

    }

    update() : void  {
        // update the shark
        for (const player of this.player) {
            player.update()
        }
       
        // }
    }
}