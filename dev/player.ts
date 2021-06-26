import { GameObject } from "./gameObject.js"
import { PlayerUI } from "./playerUI.js"
import { FireboltAbility } from "./fireboltAbility.js"
import { Projectile } from "./projectile.js"

export class Player extends GameObject { 

    name: string
    private _healthPoint: number = 4
    private _wins: number = 0
    dead: boolean
    // ui
    playerUI: PlayerUI

    //abilities
    fireboltAbility: FireboltAbility

    // controls
    controlUp: string
    controlDown: string
    controlLeft: string
    controlRight: string
    // attack controls
    controlFirebolt: string

    projecticles: Projectile[] = []

    addProjectile(projectile: Projectile) : void {
        this.projecticles.push(projectile)
        console.log(this.projecticles);
    }

    removeProjectile(index: number) : void {
        // remove instance from array
        this.projecticles.splice(index, 1)
    }

    constructor(name: string, x: number, y: number, control: string[]) {
        super(x, y, 'player', name)
        this.name = name
        // this._healthPoint = 5

        this.controlUp = control[0]
        this.controlDown = control[1]
        this.controlLeft = control[2]
        this.controlRight = control[3]

        this.controlFirebolt = control[4]

        this.create()
    }

    public set healthPoint(newHP: number) {
        this._healthPoint = newHP;
    }

    public get healthPoint() {
        return this._healthPoint;
    }

    hit() : void {
        // set new hp value
        this.healthPoint = this.healthPoint - 1
        // remove health of player
        this.playerUI.removeHealth()
    }

    // maybe delay this in case projectiles are gone
    respawn() : void {
        // back 2 full health
        this.healthPoint = 4 
        // recreate the UI with corresponding new values of player
        this.playerUI.resetUI()
        // empty projectiles make function for this if time
        //this.projecticles = []
        // respawn the player
        this.spawn()
    }

    public set wins(value: number) {
        this._wins += value;
        console.log(this.wins)
    }

    getWin() : number {
        return this.wins;
    }

    public get wins () {
        return this._wins
    }

    private spawn() : void {
        //determine spawn position by viewwindow
        var w = window.innerWidth;
        var h = window.innerHeight;
        // set height for both player
        this.y = h/2;
        // beta
        if (this.name == "p1") {
            this.x = w/19
            // p1 position x
        } else {
            // p2 position x
            this.x = w/1.2        
        }
    }

    private create() : void {

        // Add the event listeners to the window for the keyboard events
        window.addEventListener("keydown",  (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup",    (e: KeyboardEvent) => this.onKeyUp(e))

        // spawnpoint player
        this.spawn();

        // create player UI
        this.playerUI = new PlayerUI(this)

        // create abilities
        this.fireboltAbility = new FireboltAbility(this)
    }

    update() : void {

        this.y += this.verticalSpeed
        this.x += this.horizontalSpeed
        // Draw the dragon on the right coordinate (x, y)
        // if(this.isInViewport()) {
        //     this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        // } else {
        //     //fix this
        // }
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`

        if (this.name == "p2") {
            this.div.style.transform += "scaleX(-1)"
        }

        //update projectiles of player
        for (const [index, projectile] of this.projecticles.entries()) {
            projectile.moveForward()
            if(!projectile.isInViewport()) {
                // delete HTMLElement
                projectile.remove();
                // remove from array
                this.removeProjectile(index)
            }
        }

    }

    onKeyDown(e: KeyboardEvent): void {
        // Check if the key in the event (e.key) matches the desired input
        switch (e.key) {
            // When the "ArrowUp" key is pressed
            case this.controlUp:
                // Give the vertical speed a negative value
                this.verticalSpeed = -5
                break
            // When the "ArrowDown" key is pressed
            case this.controlDown:
                // Give the vertical speed a positive value
                this.verticalSpeed = 5
                break
            // When the "ArrowRight" key is pressed
            case this.controlRight:
                // Give the vertical speed a positive value
                this.horizontalSpeed = 5
                break
            // When the "ArrowRight" key is pressed
            case this.controlLeft:
                // Give the vertical speed a positive value
                this.horizontalSpeed = -5
                break
            // When the "ArrowRight" key is pressed
            case this.controlFirebolt:
                // go to fireboltAbility class and do attack
                this.fireboltAbility.attack()
                break
        }
    }

    onKeyUp(e: KeyboardEvent): void {
        //TODO: add fix to stop propagation in non active class
        
        // Check if ArrowUp or ArrowDown key has been released
        if(e.key == this.controlUp || e.key == this.controlDown) {
            // Make the vertical speed 0
            this.verticalSpeed = 0
        }

        if(e.key == this.controlRight || e.key == this.controlLeft) {
            // Make the vertical speed 0
            this.horizontalSpeed = 0
        }
    }

}