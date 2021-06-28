import { Player } from "./player.js"
// import { GameObject } from "./gameObject.js"

export class Arena {

    protected div : HTMLElement
    protected player: Player[] = []
    private doomClock:number = 3600
    private timerElement: HTMLElement
    private winMessage: HTMLElement
    //private doomClock:number = 500
    private _round: number = 1
    pause: boolean = true
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
        this.timerElement = document.createElement("h1")
        this.timerElement.classList.add("timer");
        document.body.appendChild(this.timerElement)

        // win message 
        this.winMessage = document.createElement("win-message")
        document.body.appendChild(this.winMessage)
        
        let controls = [["KeyW","KeyS", "KeyA", "KeyD", "KeyF", "ShiftLeft"], ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter", "ShiftRight"]]
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
                this.player[enemyP].wins = 1
                // check win message
                this.checkWin()
                this.round = 1
                // check gameover
                if (this.player[enemyP].wins == 3) {
                    this.pause = true;
                    this.winMessage.classList.add('visible')
                    this.winMessage.innerText = `${this.player[enemyP].name} wins!`;
                    
                    // restart game
                    setTimeout(function(){ location.reload(); }, 3000);                    
                }
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
        this.timer();
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
        this.timerElement!.innerText = String(secondsLeft)
        if(this.doomClock <= 0) {
            // times up check win
            this.checkWin()
        }
    }

    private checkWin() {
        if (this.player[0].healthPoint == this.player[1].healthPoint) {
            this.winMessage.classList.add('visible')
            this.winMessage!.innerText = `draw`
            for (const player of this.player) {
                player.respawn()
            } 
        } else if (this.player[0].healthPoint > this.player[1].healthPoint) {
            this.winMessage.classList.add('visible')
            this.winMessage!.innerText = `p1 wins round ${this.round}`
            this.player[1].healthPoint = 0 
        } else {
            this.winMessage.classList.add('visible')
            this.winMessage!.innerText = `p2 wins round ${this.round}` 
            this.player[0].healthPoint = 0 
        }
        // pause the game
        this.pause = false;

        setTimeout(() => {
            this.doomClock = 3600
            this.winMessage!.innerText = ''
            this.winMessage.classList.remove('visible')
            this.pause = true;
        }, 3000);
    }

    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
}