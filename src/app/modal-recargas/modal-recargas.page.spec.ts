import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecargasPage } from './modal-recargas.page';

describe('ModalRecargasPage', () => {
  let component: ModalRecargasPage;
  let fixture: ComponentFixture<ModalRecargasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRecargasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRecargasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
