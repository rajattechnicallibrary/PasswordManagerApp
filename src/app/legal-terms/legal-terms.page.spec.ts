import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalTermsPage } from './legal-terms.page';

describe('LegalTermsPage', () => {
  let component: LegalTermsPage;
  let fixture: ComponentFixture<LegalTermsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalTermsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalTermsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
