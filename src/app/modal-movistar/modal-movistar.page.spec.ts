import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMovistarPage } from './modal-movistar.page';

describe('ModalMovistarPage', () => {
  let component: ModalMovistarPage;
  let fixture: ComponentFixture<ModalMovistarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMovistarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMovistarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
