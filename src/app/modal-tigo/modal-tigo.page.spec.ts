import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTigoPage } from './modal-tigo.page';

describe('ModalTigoPage', () => {
  let component: ModalTigoPage;
  let fixture: ComponentFixture<ModalTigoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTigoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
