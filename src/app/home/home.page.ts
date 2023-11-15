import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  nombreProyecto: string = '';
  tiempoProyecto: string = '';
  cantidadRecursos?: number;

  proyectos: any[] = [];

  agregarProyecto() {
    const nuevoProyecto = {
      nombre: this.nombreProyecto,
      tiempo: this.tiempoProyecto,
      recursos: this.cantidadRecursos
    };

    this.proyectos.push(nuevoProyecto);

    this.nombreProyecto = '';
    this.tiempoProyecto = '';
    this.cantidadRecursos = undefined;
  }
}
