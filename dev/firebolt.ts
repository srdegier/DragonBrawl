import { Projectile } from "./projectile.js"

export class Firebolt extends Projectile{

    position: any

    constructor(position: any) {
        super()
        // create html firebolt
        this.position = position
        this.create()

    }
    create() : void {
        //create the bolt en place it determine player position
        console.log(this.position.x);
        console.log(this.position.y);
    }


    //update
    update() : void {
        // update projectile
        // moveForward()
    }
}