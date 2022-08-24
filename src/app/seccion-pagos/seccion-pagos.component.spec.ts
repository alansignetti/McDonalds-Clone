import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPagosComponent } from './seccion-pagos.component';

describe('SeccionPagosComponent', () => {
  let component: SeccionPagosComponent;
  let fixture: ComponentFixture<SeccionPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeccionPagosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
