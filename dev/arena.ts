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

        // border
        this.div = document.createElement("border")
        document.body.appendChild(this.div)

        // timer
        this.div = document.createElement("timer")
        document.body.appendChild(this.div)

        let controls = [["w","s", "a", "d", "f"], ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter"]]
        // insert 2 players
        this.player.push(new Player("p1", 100, 400, controls[0]))
        this.player.push(new Player("p2", 1600, 400, controls[1]))

    }

    update() : void  {
        // update the player
        for (const [indexP, player] of this.player.entries()) {
            player.update()
            // check colission player
            for (const [index, projectile] of this.player[indexP].projecticles.entries()) {
                const enemyP = ((indexP == 0) ? 1 : 0); // determine opposing player
                const hit = this.checkCollision(projectile.getClientRect(), this.player[enemyP].getClientRect())
                if(hit){
                    // remove projectile
                    this.player[indexP].removeProjectile(index)
                    projectile.remove();
                    // remove HP of the player
                    this.player[enemyP].hit()
                }
            }
        }
    }

    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
}