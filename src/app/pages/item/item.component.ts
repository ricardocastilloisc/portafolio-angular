import { ProductoDescripcion } from './../../interfaces/producto-descripcion.interfaces';
import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto:ProductoDescripcion;
  id:string;

  constructor(private route: ActivatedRoute,
      public productosService: ProductosService) { }

  ngOnInit() {

    this.route.params
    .subscribe(parametros =>
      {
        //console.log(parametros['id']);
        this.productosService.getProducto(parametros['id'])
        .subscribe
        (
          (producto:ProductoDescripcion) =>
          {
            this.id = parametros['id'];
            this.producto = producto;



          }
        );
      }
      );
  }

}
