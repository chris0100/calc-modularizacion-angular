import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // la variable que se envia al componente padre
  @Output() resultado = new EventEmitter<number>();

  operA: number;
  operB: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSumar(): void {
    const operacion = this.operA + this.operB;
    this.resultado.emit(operacion);
  }


}
