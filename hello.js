var diceArray = [];
var container = document.createElement('div');
document.body.appendChild(container);
var Die = /** @class */ (function () {
    function Die(value) {
        this.value = value;
        this.render();
        diceArray.push(this);
    }
    Die.prototype.render = function () {
        var _this = this;
        this.div = document.createElement('div');
        this.div.classList.add('dice');
        container.appendChild(this.div);
        var numberGenerator = Math.floor((Math.random() * 6) + 1);
        this.div.textContent = numberGenerator.toString();
        this.div.addEventListener('click', function () {
            _this.roll();
        });
        this.div.addEventListener('dblclick', function () {
            container.removeChild(_this.div);
            diceArray.splice(diceArray.indexOf(_this), 1);
        });
        this.roll();
    };
    Die.prototype.roll = function () {
        var numberGenerator = Math.floor((Math.random() * 6) + 1);
        this.value = numberGenerator;
        this.getChar();
        this.div.innerText = this.char;
    };
    Die.prototype.getChar = function () {
        if (this.value === 1) {
            this.char = "⚀";
        }
        else if (this.value === 2) {
            this.char = "⚁";
        }
        else if (this.value === 3) {
            this.char = "⚂";
        }
        else if (this.value === 4) {
            this.char = "⚃";
        }
        else if (this.value === 5) {
            this.char = "⚄";
        }
        else {
            this.char = "⚅";
        }
    };
    return Die;
}());
var sumBtn = document.getElementById('sumBtn');
sumBtn.addEventListener('click', function () {
    var sum = (diceArray.reduce(function (a, b) { return a + b.value; }, 0) / 2);
    alert(sum);
});
var generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', function () {
    var newDice = new Die(0);
    diceArray.push(newDice);
});
var rollBtn = document.getElementById('rollBtn');
rollBtn.addEventListener('click', function () {
    diceArray.forEach(function (die) { return die.roll(); });
});
