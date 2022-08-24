import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOfertasComponent } from './detalle-ofertas.component';

describe('DetalleOfertasComponent', () => {
  let component: DetalleOfertasComponent;
  let fixture: ComponentFixture<DetalleOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleOfertasComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
