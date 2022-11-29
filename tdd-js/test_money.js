class Currency{
    constructor(amount) {
        this.amount = amount;
    }
}
class Dollar extends Currency {
}

class Euro extends Currency {
}



const assert = require("assert");

let fiveUSD = new Dollar(5);
let tenUSD = fiveUSD * 2;
assert.strictEqual(tenUSD.amount, 10);

let tenEUR = new Euro(5);
let twentyEUR = tenEUR * 2;
assert.strictEqual(twentyEUR.amount, 20);

