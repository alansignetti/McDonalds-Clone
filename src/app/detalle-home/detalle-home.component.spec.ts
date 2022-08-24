import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHomeComponent } from './detalle-home.component';

describe('DetalleHomeComponent', () => {
  let component: DetalleHomeComponent;
  let fixture: ComponentFixture<DetalleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleHomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
