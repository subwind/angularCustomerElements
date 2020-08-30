import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SameTradeComponent } from './same-trade.component';

describe('SameTradeComponent', () => {
  let component: SameTradeComponent;
  let fixture: ComponentFixture<SameTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SameTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SameTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
