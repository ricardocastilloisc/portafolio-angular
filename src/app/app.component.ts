import { ProductosService } from './services/productos.service';
import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _infoPaginaService: InfoPaginaService,
    public productosService: ProductosService)
  {

  }
}
