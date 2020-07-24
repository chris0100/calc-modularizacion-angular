import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  titulo = 'calculadora modularizacion';
  operacionRealizada = false;
  resultado: number;

  onOperacionFinalizada(resultado: number): void{
    this.resultado = resultado;
    this.operacionRealizada = true;
}


}
