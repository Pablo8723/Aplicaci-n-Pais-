import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais-interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;
  error: boolean = false;

  constructor( private activeteRoute: ActivatedRoute,
                private paisService: PaisService ) { }

  ngOnInit(): void {

    this.activeteRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.buscarPaisID(id)),
        tap(console.log)
      )
      .subscribe((pais) => {
        this.pais = pais[0];
      }, (err) => {
        this.error = true;
      })

  }

}
