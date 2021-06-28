import { Player } from "./player.js"

export class PlayerUI {

    private player : Player // determine which player and ability building?
    private div : HTMLElement
    private wincounter : HTMLElement
    private healthbar : HTMLElement
    public abilitiesBar : HTMLElement
    public firebolt : HTMLElement
    public superbolt : HTMLElement

    constructor(player: Player) {
        this.player = player

        this.create()
    }

    private create() {
        console.log(this.player.name)
        console.log('Building UI player...')
        this.div = document.createElement('player-ui')
        // this.abilitiesBar = document.createElement('abilities-bar')
        if (this.player.name == 'p1') {
            this.div.classList.add('left')
        } else {
            this.div.classList.add('right')
        }

        document.body.appendChild(this.div)

        // place healthbar
        this.addHealthbar()
        // place round counter
        this.addWinCounter()
        // placeholder abilities...
        this.addAbilitiesBar()
    }

    private addAbilitiesBar() : void{
        this.abilitiesBar = document.createElement('abilities-bar')
        this.div.appendChild(this.abilitiesBar)
        // insert abilities
        this.addAbilities()
    }

    private addAbilities() : void {
        this.addFirebolt()
        this.addSuperbolt()
    }

    private addFirebolt() {
        
        this.firebolt = document.createElement('firebolt-slot')
        this.firebolt.classList.add('circle');

        let control = document.createElement('span')
        control.classList.add('control-text')
        control.appendChild(document.createTextNode(this.player.controlFirebolt));

        let cooldown = document.createElement('span')
        cooldown.classList.add('cooldown')

        this.abilitiesBar.appendChild(this.firebolt)
        this.firebolt.appendChild(cooldown)
        this.firebolt.appendChild(control)
    }

    public fireboltCooldown(cooldown: number) {
        this.firebolt!.firstElementChild!.textContent = String(cooldown)
    }

    private addSuperbolt() {
        this.superbolt = document.createElement('superbolt-slot')
        this.superbolt.classList.add('circle');

        let control = document.createElement('span')
        control.classList.add('control-text')
        control.appendChild(document.createTextNode(this.player.controlSuperbolt));

        let cooldown = document.createElement('span')
        cooldown.classList.add('cooldown')

        this.abilitiesBar.appendChild(this.superbolt)
        this.superbolt.appendChild(cooldown)
        this.superbolt.appendChild(control)
    }

    public superboltCooldown(cooldown: number) {
        this.superbolt!.firstElementChild!.textContent = String(cooldown)
    }

    private addHealthbar() {
        this.healthbar = document.createElement('healthbar')
        // append to player interface
        this.addHearts()
    }

    // dirty way maybe
    public resetUI() : void {
        this.div.remove();      
        this.healthbar.remove();    
        this.abilitiesBar.remove();
        this.create();
    }
    
    public addHearts() : void {
        // check if 0 health 
        const totalHealth = this.player.healthPoint
        // append hearts
        for (let index = 0; index < totalHealth; index++) {
            const heart = document.createElement('heart')
            this.healthbar.appendChild(heart)
        }
        this.div.appendChild(this.healthbar)
    }

    public removeHealth () {
        this.healthbar!.removeChild(this.healthbar!.childNodes[0]);
    }

    private addWinCounter() {
        this.wincounter = document.createElement('wincounter')
    
        this.wincounter.appendChild(document.createTextNode(String(this.player.wins)))
        
        // append to player interface
        this.div.appendChild(this.wincounter)
    }    
}