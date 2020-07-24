import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  // lo que se pasa del componente padre
  @Input() resultado: number;
  @Input() operacionRealizada: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
