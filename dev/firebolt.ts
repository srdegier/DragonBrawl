import { Projectile } from "./projectile.js"

export class Firebolt extends Projectile{

    projectileSpeed: number = 10

    position: any
    pName: string

    constructor(pName: string, position: any) {
        super(position.x, position.y, 'firebolt', pName)
        // create html firebolt
        this.position = position
        this.pName = pName
        this.create()

    }
    create() : void {

        // set projectile speed
        this.horizontalSpeed =  this.projectileSpeed
        //correct the placement of the ability
        if (this.pName == "p2") {
            this.x += -10
            this.y += 50
            this.div.style.transform = `translate(${this.x}px, ${this.y}px)` // put back 2 normal later.
            // this.div.style.transform += "scaleX(-1)"
        } else {
            this.x += 90
            this.y += 50
            this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        }
        
    }

    //update
    update() : void {
        // update projectile
        // this.moveForward()
    }
}