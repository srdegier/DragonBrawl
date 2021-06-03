
export class GameObject {

    protected div : HTMLElement
    protected x : number
    protected y: number
    protected verticalSpeed: number = 0
    protected horizontalSpeed: number = 0

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    getClientRect() : DOMRect {
        return this.div.getBoundingClientRect();
    }
}