import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
  
  opcionNumero:number;
  arrBtn: number[];
  constructor() {
    this.opcionNumero = 0;
    this.arrBtn = [1, 2, 3, 4, 5]; 
  }

  ngOnInit(): void {
  }
  cambiar( valor ){
    this.opcionNumero = valor;
  }

}
