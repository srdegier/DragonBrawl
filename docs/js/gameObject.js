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
}
//# sourceMappingURL=gameObject.js.map