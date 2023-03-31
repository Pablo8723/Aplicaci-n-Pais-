import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = ['europe','asia','america','africa','oceania'];

  regionActiva: string = '';

  paises: Pais[] = [];

  constructor( private paisService:PaisService ) { }

  getClaseCSS( region: string ){
    return (region === this.regionActiva ) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion( region: string){

    if( region === this.regionActiva){
      return;
    }
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region)
      .subscribe( paises => {
        this.paises = paises;
      })
  }

}
