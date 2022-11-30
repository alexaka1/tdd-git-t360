import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  private moneys: Currency[] = [];
  constructor() { }

  add(money: Money){
    const max = Math.max(...this.moneys.map(m => m.id));
    let id = 0;
    if (max !== NaN && max !== -Infinity && max !== Infinity) {
      id = max + 1;
    }
    this.moneys.push({
      id: id,
      ...money
    });
  }
  remove(id: number){
    this.moneys.splice(this.moneys.findIndex(m=> m.id === id), 1);
  }

  list(): Observable<Currency[]>{
    return of(this.moneys);
  }

  addNumbers(a: number, b: number): number{
    return a + b;
  }
}

export interface Money {
  amount: number;
  currency: string;
  // constructor(id: number, amount: number, currency: string) {
  //   this.id = id;
  //   this.amount = amount;
  //   this.currency = currency;
  // }
}
export class Currency implements Money {
  id: number;
  amount: number;
  currency: string;

  constructor(id: number, amount: number, currency: string) {
    this.id = id;
    this.amount = amount;
    this.currency = currency;
  }
}

export class Portfolio {
  private moneys: Money[];
  constructor(moneys: Money[]){
    this.moneys = moneys;
  }
  // evaluate(currency) {
  //   let result = this.moneys.reduce(function (prev, curr) {
  //     if (prev.currency !== "USD") {
  //       prev = Portfolio.convert(prev, "USD");
  //     }
  //     if (curr.currency !== "USD") {
  //       curr = Portfolio.convert(curr, "USD");
  //     }
  //     switch (curr.meth) {
  //       case "add":
  //         return new Currency(
  //           prev.amount + curr.amount,
  //           "USD"
  //         );
  //       default:
  //         return new Currency(
  //           prev.amount + curr.amount,
  //           "USD"
  //         );
  //     }
  //   });
  //   return Portfolio.convert(result, currency);
  // }
  // static convert(money, currency) {
  //   switch (money.currency) {
  //     case "EUR":
  //       money = new Dollar(money.amount * 1.2);
  //       break;
  //     case "HUF":
  //       money = new Dollar(money.amount / 1100);
  //       break;
  //   }
  //   switch (currency) {
  //     case "EUR":
  //       money = new Euro(money.amount / 1.2);
  //       break;
  //     case "HUF":
  //       money = new Huf(money.amount * 1100);
  //       break;
  //   }
  //   return money;
  // }
}
