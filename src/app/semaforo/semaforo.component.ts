import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {
  
  cadenaDeClases:string;
  arrClases:string[];

  EsRedondo:boolean = false;
  constructor() { 
    this.cadenaDeClases = 'semaforo redondo rojo'
    this.arrClases = ['semaforo', 'rojo'];

  }

  ngOnInit(): void {
  }

  redondo(){
    this.EsRedondo = !this.EsRedondo;
  }

}
