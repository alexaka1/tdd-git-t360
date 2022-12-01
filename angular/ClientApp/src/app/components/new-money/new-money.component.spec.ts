import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMoneyComponent } from './new-money.component';
import {FormsModule} from "@angular/forms";

describe('NewMoneyComponent', () => {
  let component: NewMoneyComponent;
  let fixture: ComponentFixture<NewMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMoneyComponent ], imports: [FormsModule]
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
