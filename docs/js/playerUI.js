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
        this.addFirebolt();
        this.addSuperbolt();
    }
    addFirebolt() {
        this.firebolt = document.createElement('firebolt-slot');
        this.firebolt.classList.add('circle');
        let control = document.createElement('span');
        control.classList.add('control-text');
        control.appendChild(document.createTextNode(this.player.controlFirebolt));
        let cooldown = document.createElement('span');
        cooldown.classList.add('cooldown');
        this.abilitiesBar.appendChild(this.firebolt);
        this.firebolt.appendChild(cooldown);
        this.firebolt.appendChild(control);
    }
    fireboltCooldown(cooldown) {
        this.firebolt.firstElementChild.textContent = String(cooldown);
    }
    addSuperbolt() {
        this.superbolt = document.createElement('superbolt-slot');
        this.superbolt.classList.add('circle');
        let control = document.createElement('span');
        control.classList.add('control-text');
        control.appendChild(document.createTextNode(this.player.controlSuperbolt));
        let cooldown = document.createElement('span');
        cooldown.classList.add('cooldown');
        this.abilitiesBar.appendChild(this.superbolt);
        this.superbolt.appendChild(cooldown);
        this.superbolt.appendChild(control);
    }
    superboltCooldown(cooldown) {
        this.superbolt.firstElementChild.textContent = String(cooldown);
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