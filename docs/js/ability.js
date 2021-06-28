export class Ability {
    constructor() {
        this.cooldown = 0;
        this.currentCooldown = 0;
    }
    checkCooldown() {
        this.currentCooldown--;
        Math.floor(this.currentCooldown / 60);
    }
}
//# sourceMappingURL=ability.js.map