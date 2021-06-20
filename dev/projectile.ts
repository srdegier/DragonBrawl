import { GameObject } from "./gameObject.js"

export class Projectile extends GameObject {
    constructor(x: any, y: any, type: string, direction: string) {
        super(x, y, type, direction)
    }
    //update the projectile
    moveForward() : void {
        // console.log(this)
        // this.lookDirection
        //this.y += this.verticalSpeed
        
        // determine projectile direction
        const direction = `${this.lookDirection}` 
        const newPosition = eval(this.x +direction+ this.horizontalSpeed)
        
        this.x = parseInt(newPosition)
        // console.log(this.x);
        // console.log(this.div.style.transform);
        this.div.style.transform = `translate(${(this.x)}px, ${(this.y)}px)`
        this.div.style.transform += `scaleX(${this.lookDirection}1)`;
    }

    remove() : void {
        this.div.remove()
    }

    create() : void {

    }
}