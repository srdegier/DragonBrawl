import { Player } from "./player.js"

export class PlayerUI {

    private player : Player // determine which player and ability building?
    private div : HTMLElement
    private wincounter : HTMLElement
    private healthbar : HTMLElement
    public abilitiesBar : HTMLElement
    public firebolt : HTMLElement

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
        this.firebolt = document.createElement('firebolt-slot')
        this.abilitiesBar.appendChild(this.firebolt)
        // document.createElement('superbolt-slot')
        // document.createElement('shield-slot')
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

    // update() {
    //     // update health
    //     console.log(this.player.healthPoint)
    //     // update won rounds
    //     console.log(this.player.wins)
    // }
    
}