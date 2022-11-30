import { TestBed } from '@angular/core/testing';

import { MoneyService } from './money.service';

describe('MoneyService', () => {
    let service: MoneyService;

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(MoneyService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
    // it('should be failed', () => {
    //   expect(false).toBeTruthy();
    // });
    it('should add numbers', () => {
      expect(service.addNumbers(1, 2)).toEqual(3);
    });
    it('should add money', () => {
      service.add({amount: 1, currency: 'USD'});
      service.add({amount: 2, currency: 'USD'});
      service.list().subscribe((moneys) => {
        expect(moneys.length).toEqual(2);
      });
    });
    it('should remove money', () => {
      service.add({amount: 1, currency: 'USD'});
      service.add({amount: 2, currency: 'USD'});
      service.remove(0);
      service.list().subscribe((moneys) => {
        expect(moneys.length).toEqual(1);
      });
    });
    it('should add money contains money', () => {
      service.add({amount: 1, currency: 'USD'});
      service.add({amount: 2, currency: 'USD'});
      service.list().subscribe((moneys) => {
        expect(moneys[0].amount).toEqual(1);
        expect(moneys[0].currency).toEqual('USD');
        expect(moneys[1].amount).toEqual(2);
        expect(moneys[1].currency).toEqual('USD');
      });
    });
    it('should list money', () => {
      service.add({amount: 1, currency: 'USD'});
      service.add({amount: 2, currency: 'USD'});
      service.list().subscribe((moneys) => {
        expect(moneys.length).toEqual(2);
      });
    });
  }
);
