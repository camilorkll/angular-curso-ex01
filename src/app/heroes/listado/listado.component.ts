import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  private _heroes: string[] = ['Superman', 'SuperWoman', 'WonderWoman', 'Capitán America', 'Pinocho', 'Hulk'];
  public get heroes(): string[] {
    return this._heroes;
  }
  public set heroes(value: string[]) {
    this._heroes = value;
  }

  public heroeBorrado: string = "";
 
  borrarHeroe(): void {

    this.heroeBorrado = this._heroes.shift() || "";
 
  }
}
