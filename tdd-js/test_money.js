class Currency {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }
    times(multiplier){
        return new Currency(this.amount * multiplier, this.currency);
    }

    divideBy(divider){
        return new Currency(this.amount / divider, this.currency);
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

class Portfolio {
    constructor() {
        this.currencies = [];
    }
    add(currency){
        this.currencies.push({currency, meth: 'add'});
    }
    evaluate(currency){
        return this.currencies.reduce(function(prev, curr){
            switch (curr.meth) {
                case 'add':
                    return new Currency(prev.currency.amount + curr.currency.amount, currency);
                default:
                    return new Currency(prev.currency.amount + curr.currency.amount, currency);
            }
        });
    }
}



const assert = require("assert");
const internal = require("stream");

// 5 USD * 2 = 10 USD
let fiveUSD = new Dollar(5);
let tenUSD = fiveUSD.times(2);
assert.strictEqual(tenUSD.amount, 10);

// 10 EUR * 2 = 20 EUR
let tenEUR = new Euro(10);
let twentyEUR = tenEUR.times(2);
assert.strictEqual(twentyEUR.amount, 20);

//10 EUR * 2 = 20 EUR
tenEUR = new Currency(10, 'EUR');
twentyEUR = tenEUR.times(2);
assert.strictEqual(twentyEUR.amount, 20);
assert.strictEqual(twentyEUR.currency, 'EUR');

// 4002 HUF / 4 = 1000.5 HUF
let huf = new Huf(4002);
let div = huf.divideBy(4);
const expected = new Currency(1000.5, 'HUF');
const epsilon = 0.01;
assert.strictEqual(Math.abs(div.amount - expected.amount) <= epsilon, true);
assert.strictEqual(div.currency, expected.currency);

// 5 USD + 10 USD = 15 USD;
let ftDoll = new Currency(15, 'USD');
let fDoll = new Currency(5, 'USD');
let tenDoll = new Currency(10, 'USD');
let portfolio = new Portfolio();
portfolio.add(fDoll);
portfolio.add(tenDoll);
assert.deepStrictEqual(portfolio.evaluate('USD'), ftDoll);