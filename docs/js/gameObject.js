export class GameObject {
    constructor(x, y, elementName, pName) {
        this.verticalSpeed = 0;
        this.horizontalSpeed = 0;
        this.x = x;
        this.y = y;
        const gameElement = document.body;
        this.div = document.createElement(elementName);
        gameElement.appendChild(this.div);
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        this.setDirection(pName);
    }
    isInViewport() {
        const rect = this.div.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    }
    setDirection(pName) {
        const direction = (pName == 'p2') ? "-" : "+";
        this.div.style.transform += `scaleX(${direction}1)`;
        this.lookDirection = direction;
    }
    getClientRect() {
        return this.div.getBoundingClientRect();
    }
    getPosition() {
        return { x: this.x, y: this.y };
    }
    checkOutOfMap() {
        let rect = this.div.getBoundingClientRect();
        rect.x += this.horizontalSpeed;
        rect.y += this.verticalSpeed;
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    }
}
//# sourceMappingURL=gameObject.js.map