import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizarComboComponent } from './personalizar-combo.component';

describe('PersonalizarComboComponent', () => {
  let component: PersonalizarComboComponent;
  let fixture: ComponentFixture<PersonalizarComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalizarComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizarComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
