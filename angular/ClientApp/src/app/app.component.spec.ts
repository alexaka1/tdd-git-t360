import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {NewMoneyComponent} from "./components/new-money/new-money.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        NewMoneyComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('new money form', () => {
    it('should be rendered', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
      const newMoneyForm = fixture.nativeElement.querySelector('form');
      expect(newMoneyForm).toBeTruthy();
    });
    // it('should add a new money to our portfolio', () => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   const app = fixture.nativeElement as HTMLElement;
    //   const amountInput = app.querySelector('input[name="amount"]') as HTMLInputElement;
    //   expect(amountInput).withContext('amount input field not found').toBeTruthy();
    //   const currencyInput = app.querySelector('input[name="currency"]') as HTMLInputElement;
    //   expect(currencyInput).withContext('currency input field not found').toBeTruthy();
    //
    //   amountInput.value = '2';
    //   currencyInput.value = 'USD';
    //
    //   amountInput.dispatchEvent(new Event('input'));
    //   currencyInput.dispatchEvent(new Event('input'));
    //   fixture.detectChanges();
    //
    //   const submitButton = app.querySelector('button[type="submit"]') as HTMLButtonElement;
    //   expect(submitButton).withContext('submit button not found').toBeTruthy();
    //   submitButton.click();
    //
    //   const moneyItems = app.querySelectorAll('[data-test="portfolioMoneyItem"]') as NodeListOf<HTMLElement>;
    //   expect(moneyItems.length).withContext('money items not found').toEqual(1);
    //   expect(moneyItems[0].querySelector('[data-test="portfolioMoneyItemAmount"]')?.textContent).toEqual('2');
    //   expect(moneyItems[0].querySelector('[data-test="portfolioMoneyItemCurrency"]')?.textContent).toEqual('USD');
    //
    // });
  });
  it('should use a form to add new money to portfolio', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    const compiled = fixture.nativeElement;
    const newmoneForm = compiled.querySelector('form');
    expect(newmoneForm).toBeTruthy();

  });

});
