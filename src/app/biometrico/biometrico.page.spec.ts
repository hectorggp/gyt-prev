import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometricoPage } from './biometrico.page';

describe('BiometricoPage', () => {
  let component: BiometricoPage;
  let fixture: ComponentFixture<BiometricoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiometricoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiometricoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
