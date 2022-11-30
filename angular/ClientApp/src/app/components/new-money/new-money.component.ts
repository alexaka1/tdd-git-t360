import { Component } from '@angular/core';
import {MoneyService} from "../../../services/money.service";

@Component({
  selector: 'app-new-money',
  templateUrl: './new-money.component.html',
  styleUrls: ['./new-money.component.scss']
})
export class NewMoneyComponent {
  amount: number | null = null;
  currency: string | null = null;

  constructor(private moneyService: MoneyService) {
  }
  add() {
    if (this.amount && this.currency) {
      this.moneyService.add({
        amount: this.amount,
        currency: this.currency,
      });
      this.reset();
    }

  }

  reset(){
    this.amount = null;
    this.currency = null;
  }
}
