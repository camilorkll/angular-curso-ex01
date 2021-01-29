import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public aaa: string = 'Contador App';
  public bbb: number = 10;
  public ccc: number = 5;

  acumular( valor: number) {
    this.ccc += valor;
  };

}
