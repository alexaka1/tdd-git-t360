class Currency {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }
    times(multiplier){
        return new Currency(this.amount * multiplier, this.currency);
    }
}
class Dollar extends Currency {
    constructor(amount) {
        super(amount, 'USD');
    }
}

class Euro extends Currency {
    constructor(amount) {
        super(amount, 'EUR');
    }
}
class Huf extends Currency {
    constructor(amount) {
        super(amount, 'HUF');
    }
}



const assert = require("assert");
const internal = require("stream");

let fiveUSD = new Dollar(5);
let tenUSD = fiveUSD.times(2);
assert.strictEqual(tenUSD.amount, 10);

let tenEUR = new Euro(10);
let twentyEUR = tenEUR.times(2);
assert.strictEqual(twentyEUR.amount, 20);

tenEUR = new Currency(10, 'EUR');
twentyEUR = tenEUR.times(2);
assert.strictEqual(twentyEUR.amount, 20);
assert.strictEqual(twentyEUR.currency, 'EUR');