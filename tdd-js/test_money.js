class Currency {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }
  times(multiplier) {
    return new Currency(this.amount * multiplier, this.currency);
  }

  divideBy(divider) {
    return new Currency(this.amount / divider, this.currency);
  }
}
class Dollar extends Currency {
  constructor(amount) {
    super(amount, "USD");
  }
}

class Euro extends Currency {
  constructor(amount) {
    super(amount, "EUR");
  }
}
class Huf extends Currency {
  constructor(amount) {
    super(amount, "HUF");
  }
}

class Portfolio {
  constructor() {
    this.money = [];
  }
  set currencies(values) {
    this.money = [];
    this.money.push(...values);
  }
  get currencies() {
    return this.money.map(x=>x);
  }
  add(currency) {
    this.money.push(currency);
  }
  evaluate(currency) {
    let result = this.money.reduce(function (prev, curr) {
      if (prev.currency !== "USD") {
        prev = Portfolio.convert(prev, "USD");
      }
      if (curr.currency !== "USD") {
        curr = Portfolio.convert(curr, "USD");
      }
      switch (curr.meth) {
        case "add":
          return new Currency(
            prev.amount + curr.amount,
            "USD"
          );
        default:
          return new Currency(
            prev.amount + curr.amount,
            "USD"
          );
      }
    });
    return Portfolio.convert(result, currency);
  }
  static convert(money, currency) {
    switch (money.currency) {
      case "EUR":
        money = new Dollar(money.amount * 1.2);
        break;
      case "HUF":
        money = new Dollar(money.amount / 1100);
        break;
    }
    switch (currency) {
      case "EUR":
        money = new Euro(money.amount / 1.2);
        break;
      case "HUF":
        money = new Huf(money.amount * 1100);
        break;
    }
    return money;
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
tenEUR = new Currency(10, "EUR");
twentyEUR = tenEUR.times(2);
assert.strictEqual(twentyEUR.amount, 20);
assert.strictEqual(twentyEUR.currency, "EUR");

// 4002 HUF / 4 = 1000.5 HUF
let huf = new Huf(4002);
let div = huf.divideBy(4);
let expected = new Currency(1000.5, "HUF");
const epsilon = 0.01;
assert.strictEqual(Math.abs(div.amount - expected.amount) <= epsilon, true);
assert.strictEqual(div.currency, expected.currency);

// 5 USD + 10 USD = 15 USD;
let ftDoll = new Currency(15, "USD");
let fDoll = new Currency(5, "USD");
let tenDoll = new Currency(10, "USD");
let portfolio = new Portfolio();
portfolio.add(fDoll);
portfolio.add(tenDoll);
assert.deepStrictEqual(portfolio.evaluate("USD"), ftDoll);

// 5 USD + 10 EUR = 17 USD
ftDoll = new Currency(17, "USD");
fDoll = new Currency(5, "USD");
tenDoll = new Currency(10, "EUR");
portfolio = new Portfolio();
portfolio.add(fDoll);
portfolio.add(tenDoll);
assert.deepStrictEqual(portfolio.evaluate("USD"), ftDoll);

//1 USD + 1100 HUF = 2200 HUF
let oneusd = new Dollar(1);
let thousHuf = new Huf(1100);
expected = new Huf(2200);
portfolio = new Portfolio();
portfolio.add(oneusd);
portfolio.add(thousHuf);
assert.deepStrictEqual(portfolio.evaluate("HUF"), expected);


let p1 = new Portfolio();
let p2 = new Portfolio();

p1.add(new Dollar(10));
p2.currencies = p1.currencies;
p1.add(new Dollar(10));

assert.deepStrictEqual(p2.evaluate('USD'), new Dollar(10));

{}+[];