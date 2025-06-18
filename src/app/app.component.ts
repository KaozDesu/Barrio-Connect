import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Bienvenido a Barrio-Connect</h1>
    <nav>
      <a routerLink="/registro-empresa">Registrar Empresa</a> |
      <a routerLink="/lista-negocios">Ver Negocios</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {}
}