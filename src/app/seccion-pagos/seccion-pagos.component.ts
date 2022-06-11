import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';


@Component({
  selector: 'app-seccion-pagos',
  templateUrl: './seccion-pagos.component.html',
  styleUrls: ['./seccion-pagos.component.css']
})
export class SeccionPagosComponent implements OnInit {
  public dato: number = 1;
  formGroup!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      dni: ['', [Validators.required]],
      cbu: ['', [Validators.required]],
      banco: ['', [Validators.required,Validators.minLength(5), Validators.maxLength(20)]]
    })
  }

  public mostrar(dato: any) {
    this.dato = dato;
  }

  public pagar() {
    localStorage.clear();
    swal("¡Pago realizado!", "", "success");

  }

}
