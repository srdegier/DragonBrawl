import { GameObject } from "./gameObject.js"
import { FireboltAbility } from "./fireboltAbility.js"
import { Projectile } from "./projectile.js"

export class Player extends GameObject { 

    name: string
    healthPoint: number
    dead: boolean
    //abilities
    fireboltAbility: FireboltAbility

    //projectiles: [];

    // controls
    controlUp: string
    controlDown: string
    controlLeft: string
    controlRight: string
    // attack controls
    controlFirebolt: string

    projecticles: Projectile[] = []
    
    // activeControl = []

    addProjectile(projectile: Projectile) : void {
        this.projecticles.push(projectile)
        console.log(this.projecticles);
    }

    constructor(name: string, x: number, y: number, control: string[]) {
        super(x, y)
        this.name = name
        this.healthPoint = 5

        this.controlUp = control[0]
        this.controlDown = control[1]
        this.controlLeft = control[2]
        this.controlRight = control[3]

        //this.projectiles = []

        this.controlFirebolt = control[4]

        this.create()
    }

    create() : void {
        console.log(`${this.name} was created!`)

        // Add the event listeners to the window for the keyboard events
        window.addEventListener("keydown",  (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup",    (e: KeyboardEvent) => this.onKeyUp(e))

        // create abilities
        this.fireboltAbility = new FireboltAbility(this)

        this.div = document.createElement("player")
        document.body.appendChild(this.div)

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    
    }

    update() : void {
        // Add the vertical speed to the y-value
        this.y += this.verticalSpeed
        this.x += this.horizontalSpeed
        // Draw the shark on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`

        //maybe change 2 create f
        if (this.name == "p2") {
            this.div.style.transform += "scaleX(-1)"
        }

        //update projectiles of player

        //this.fireboltAbility.update

    }

    // honestly maybe in a Control class?

    onKeyDown(e: KeyboardEvent): void {
        //TODO: add fix to stop propagation in non active class
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