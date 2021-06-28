export class Ability {

    protected cooldown : number = 0 
    protected currentCooldown : number = 0

    protected checkCooldown() {
        this.currentCooldown--
        Math.floor(this.currentCooldown / 60)
    }
}