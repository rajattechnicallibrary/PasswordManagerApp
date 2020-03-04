import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieActivityPage } from './categorie-activity.page';

describe('CategorieActivityPage', () => {
  let component: CategorieActivityPage;
  let fixture: ComponentFixture<CategorieActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieActivityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
