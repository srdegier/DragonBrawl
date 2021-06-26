
export class GameObject {

    protected div : HTMLElement
    protected x : number
    protected y: number
    protected verticalSpeed: number = 0
    protected horizontalSpeed: number = 0

    protected lookDirection: string

    constructor(x: number, y: number, elementName:string, pName: string){
        this.x = x
        this.y = y

        const gameElement = document.body as HTMLElement
        this.div = document.createElement(elementName)
        gameElement.appendChild(this.div)

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        // determine and set direction of element
        this.setDirection(pName)
    }

    isInViewport() {
        const rect = this.div.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    setDirection(pName: string) : void {
        const direction = (pName == 'p2') ? "-" : "+";
        this.div.style.transform += `scaleX(${direction}1)`
        this.lookDirection = direction
    }
    

    getClientRect() : DOMRect {
        return this.div.getBoundingClientRect();
    }

    // goeie manier doen getter setter...
    getPosition() : any {
        return {x: this.x, y: this.y};
    }
    
}