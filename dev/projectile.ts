import { GameObject } from "./gameObject.js"

export class Projectile extends GameObject {
    constructor(x: any, y: any, type: string, direction: string) {
        super(x, y, type, direction)
    }
    //update the projectile
    moveForward() : void {    
        // determine projectile direction
        const direction = `${this.lookDirection}` 
        const newPosition = eval(this.x +direction+ this.horizontalSpeed) // eval not recommended
        
        this.x = parseInt(newPosition)

        this.div.style.transform = `translate(${(this.x)}px, ${(this.y)}px)`
        this.div.style.transform += `scaleX(${this.lookDirection}1)`;
    }

    remove() : void {
        this.div.remove()
    }
}