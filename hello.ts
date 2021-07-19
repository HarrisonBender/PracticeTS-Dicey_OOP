let diceArray: Die[] = [];
let container = document.createElement('div');
document.body.appendChild(container);

class Die {
    div!: HTMLDivElement;
    value: number;
    char!: string; 

    
    constructor(value:any) {
        this.value = value;
        this.render();
        diceArray.push(this);
    }
    render() {
        this.div = document.createElement('div');
        this.div.classList.add('dice');
        container.appendChild(this.div);
        let numberGenerator: number = Math.floor((Math.random() * 6) + 1);
        this.div.textContent = numberGenerator.toString();
        this.div.addEventListener('click', () => {
            this.roll();
        });
        this.div.addEventListener('dblclick', () => {
            container.removeChild(this.div);
            diceArray.splice(diceArray.indexOf(this), 1);
        })
        this.roll();
    }

    roll() {
        let numberGenerator = Math.floor((Math.random() * 6) + 1);
        this.value = numberGenerator;
        this.getChar();
        this.div.innerText = this.char;
    }
    getChar() {
        if (this.value === 1) {
            this.char = "⚀";
        } else if (this.value === 2) {
            this.char = "⚁"
        } else if (this.value === 3) {
            this.char = "⚂";
        } else if (this.value === 4) {
            this.char = "⚃";
        } else if (this.value === 5) {
            this.char = "⚄";
        } else {
            this.char = "⚅";
        }
    }
    
}

let sumBtn = <HTMLButtonElement>document.getElementById('sumBtn')
    sumBtn.addEventListener('click', () => {
    let sum = (diceArray.reduce((a, b) => a + b.value, 0)/2);
    alert(sum);
})
let generateBtn = <HTMLButtonElement>document.getElementById('generateBtn')
    generateBtn.addEventListener('click', () => {
    let newDice = new Die(0);
    diceArray.push(newDice);
})

let rollBtn = <HTMLButtonElement>document.getElementById('rollBtn')
    rollBtn.addEventListener('click', () => {
    diceArray.forEach(die => die.roll());
})