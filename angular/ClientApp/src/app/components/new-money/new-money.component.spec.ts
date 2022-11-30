import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMoneyComponent } from './new-money.component';

describe('NewMoneyComponent', () => {
  let component: NewMoneyComponent;
  let fixture: ComponentFixture<NewMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
