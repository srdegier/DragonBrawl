export class PlayerUI {
    constructor(player) {
        this.player = player;
        this.create();
    }
    create() {
        console.log(this.player.name);
        console.log('Building UI player...');
        this.div = document.createElement('player-ui');
        if (this.player.name == 'p1') {
            this.div.classList.add('left');
        }
        else {
            this.div.classList.add('right');
        }
        document.body.appendChild(this.div);
        this.addHealthbar();
        this.addWinCounter();
        this.addAbilitiesBar();
    }
    addAbilitiesBar() {
        this.abilitiesBar = document.createElement('abilities-bar');
        this.div.appendChild(this.abilitiesBar);
        this.addAbilities();
    }
    addAbilities() {
        this.firebolt = document.createElement('firebolt-slot');
        this.abilitiesBar.appendChild(this.firebolt);
    }
    addHealthbar() {
        this.healthbar = document.createElement('healthbar');
        this.addHearts();
    }
    resetUI() {
        this.div.remove();
        this.healthbar.remove();
        this.abilitiesBar.remove();
        this.create();
    }
    addHearts() {
        const totalHealth = this.player.healthPoint;
        for (let index = 0; index < totalHealth; index++) {
            const heart = document.createElement('heart');
            this.healthbar.appendChild(heart);
        }
        this.div.appendChild(this.healthbar);
    }
    removeHealth() {
        this.healthbar.removeChild(this.healthbar.childNodes[0]);
    }
    addWinCounter() {
        this.wincounter = document.createElement('wincounter');
        this.wincounter.appendChild(document.createTextNode(String(this.player.wins)));
        this.div.appendChild(this.wincounter);
    }
}
//# sourceMappingURL=playerUI.js.map