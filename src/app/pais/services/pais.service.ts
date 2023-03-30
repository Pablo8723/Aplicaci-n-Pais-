import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url: string ='https://restcountries.com/v3.1'

  constructor( private http:HttpClient) { }


  buscarPais( termino: string ): Observable<Pais[]>{
    const apiUrl =`${ this.url }/name/${ termino }`
    return this.http.get<Pais[]>(apiUrl);    
  }

  buscarCapital( termino: string ): Observable<Pais[]>{
    const apiUrl =`${ this.url }/capital/${ termino }`
    return this.http.get<Pais[]>(apiUrl);    
  }
  
  buscarPaisID( id: string ): Observable<Pais[]>{
    const apiUrl =`${ this.url }/alpha/${ id }`
    return this.http.get<Pais[]>(apiUrl);    
  }
}
