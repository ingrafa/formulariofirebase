import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent {

  title = "Listar Componentes"
constructor(private router: Router){
}  

ngOnInit(): void{

}
  goListProducts(){
console.log("Llamando Crear Productos")
this.router.navigate(['products/create'])

  }
}
