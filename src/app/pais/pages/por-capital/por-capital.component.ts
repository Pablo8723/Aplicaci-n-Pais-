import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais-interfaces';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino:string = ''
  error: boolean = false;
  public capitales: Pais[] = [];

  constructor( private paisService: PaisService ) { }

  
  buscar( termino: string ){

    this.error = false;
    this.termino = termino;
    
    this.paisService.buscarCapital(this.termino)
      .subscribe( resp => {
        this.capitales = resp;
        console.log(this.capitales);
      },(err)=> {
        this.error = true;
        this.capitales = [];
      })
  }

  sugerencias( termino: string ){
    
    //CREAR SUGERENCIAS
  }

}
