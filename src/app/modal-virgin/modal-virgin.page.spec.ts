import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVirginPage } from './modal-virgin.page';

describe('ModalVirginPage', () => {
  let component: ModalVirginPage;
  let fixture: ComponentFixture<ModalVirginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVirginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVirginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
