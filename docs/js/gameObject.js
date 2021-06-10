export class GameObject {
    constructor(x, y) {
        this.verticalSpeed = 0;
        this.horizontalSpeed = 0;
        this.x = x;
        this.y = y;
    }
    getClientRect() {
        return this.div.getBoundingClientRect();
    }
    getPosition() {
        return { x: this.x, y: this.y };
    }
}
//# sourceMappingURL=gameObject.js.map