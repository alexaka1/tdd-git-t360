import { Component } from '@angular/core';
import {Currency, Money, MoneyService} from "../services/money.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  moneys: Observable<Currency[]>;
  amount: number | null = null;
  currency: string | null = null;
  currencies: string[] = [
    'USD','EUR','GBP','JPY','AUD','CAD','CHF','CNY','HKD','NZD','SEK','SGD','ZAR','HUF'
  ].sort((a, b) => a.localeCompare(b));

  constructor(private moneyService: MoneyService) {
    this.moneys = moneyService.list();
  }
  remove(index: number){
    this.moneyService.remove(index);
  }

}

