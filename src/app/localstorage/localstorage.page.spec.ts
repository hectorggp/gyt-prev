import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalstoragePage } from './localstorage.page';

describe('LocalstoragePage', () => {
  let component: LocalstoragePage;
  let fixture: ComponentFixture<LocalstoragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalstoragePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalstoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
