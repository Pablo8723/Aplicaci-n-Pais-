import { Component } from '@angular/core';


import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais-interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {

  termino:string = ''
  error: boolean = false;
  public paises     : Pais[] = [];
  paisesSugeridos   : Pais[] =[];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ) { }

  
  buscar( termino: string ){

    this.mostrarSugerencias = false
    this.error = false;
    this.termino = termino;
    
    this.paisService.buscarPais(this.termino)
      .subscribe( resp => {
        this.paises = resp;
        console.log(this.paises);
      },(err)=> {
        this.error = true;
        this.paises = [];
      })
  }

  sugerencias( termino: string ){

    this.mostrarSugerencias = true;
    this.error = false;

    this.termino = termino;
    
    this.paisService.buscarPais(termino)
      .subscribe( 
        paises => this.paisesSugeridos = paises.splice(0,5),
        (err) => { this.paisesSugeridos = [] }
      )
  }

}
