import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, tap } from 'rxjs';
import { Pais } from '../interfaces/pais-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url: string ='https://restcountries.com/v3.1'

  get httpParams(){
    return  new HttpParams().set('fields','name,capital,altSpellings,flag,population');
  }

  constructor( private http:HttpClient) { }


  buscarPais( termino: string ): Observable<Pais[]>{
    const apiUrl =`${ this.url }/name/${ termino }`
    return this.http.get<Pais[]>(apiUrl, { params: this.httpParams });    
  }

  buscarCapital( termino: string ): Observable<Pais[]>{
    
    const apiUrl =`${ this.url }/capital/${ termino }`
    return this.http.get<Pais[]>(apiUrl, { params: this.httpParams });    
  }
  
  buscarPaisID( id: string ): Observable<Pais[]>{
    const apiUrl =`${ this.url }/alpha/${ id }`
    return this.http.get<Pais[]>(apiUrl);    
  }
  
  
  buscarRegion( region: string ): Observable<Pais[]>{
    
    const apiUrl =`${ this.url }/region/${ region }`

    return this.http.get<Pais[]>(apiUrl, { params: this.httpParams })
      .pipe(
        tap(console.log)
      )  
  }


}
