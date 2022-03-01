import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarPage } from './aceptar.page';

describe('AceptarPage', () => {
  let component: AceptarPage;
  let fixture: ComponentFixture<AceptarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceptarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
