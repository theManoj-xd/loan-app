import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPage } from './loan-page';

describe('LoanPage', () => {
  let component: LoanPage;
  let fixture: ComponentFixture<LoanPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LoanPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
