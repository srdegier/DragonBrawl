import { Player } from "./player.js"
// import { GameObject } from "./gameObject.js"

export class Arena {

    protected div : HTMLElement
    protected player: Player[] = []
    private doomClock:number = 3600
    private _round: number = 1
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
        this.div = document.createElement("h1")

        this.div.classList.add("timer");

        document.body.appendChild(this.div)
        
        let controls = [["w","s", "a", "d", "f"], ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter"]]
        // insert 2 players
        this.player.push(new Player("p1", 100, 400, controls[0]))
        this.player.push(new Player("p2", 1600, 400, controls[1]))

    }

    update() : void  {
        // update the player
        for (const [indexP, player] of this.player.entries()) {
            // update player
            player.update()

            const enemyP = ((indexP == 0) ? 1 : 0); // determine opposing player

            // determine new round and respawn do in function later
            if(player.healthPoint == 0) {
                this.round = 1
                this.player[enemyP].wins = 1
                console.log("Round " + this.round);
                for (const player of this.player) {
                    player.respawn()
                }
            }
            
            // check colission player
            for (const [index, projectile] of this.player[indexP].projecticles.entries()) {
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
        // timer
        // this.timer();
    }

    public set round (value : number) {
        this._round += value;
    }

    public get round () {
        return this._round
    }

    private timer() {
        this.doomClock--
        let secondsLeft = Math.floor(this.doomClock / 60)
        document.querySelector('.timer')
        // console.log(`Only ${secondsLeft} seconds left!`)
        if(this.doomClock <= 0) {
            console.log("Doomsday has come!")
        }
    }

    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
}