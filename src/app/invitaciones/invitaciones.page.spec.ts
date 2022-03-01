import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionesPage } from './invitaciones.page';

describe('InvitacionesPage', () => {
  let component: InvitacionesPage;
  let fixture: ComponentFixture<InvitacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitacionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
