import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-buscar-pais',
  templateUrl: './buscar-pais.component.html',
  styleUrls: ['./buscar-pais.component.css']
})
export class BuscarPaisComponent implements OnInit {
  

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = "";

  debounce: Subject<string> = new Subject();

  termino:string = '';

    
  ngOnInit() {
    this.debounce
      .pipe(
        debounceTime(500)
      )
      .subscribe( termino => {
        this.onDebounce.emit(termino);
      })
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debounce.next( this.termino );
  }

}
