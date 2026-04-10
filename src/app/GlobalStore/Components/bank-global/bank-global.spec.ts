import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankGlobal } from './bank-global';

describe('BankGlobal', () => {
  let component: BankGlobal;
  let fixture: ComponentFixture<BankGlobal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankGlobal],
    }).compileComponents();

    fixture = TestBed.createComponent(BankGlobal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
