import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  
  personajes: any[];
  constructor() { 
    this.personajes = [
      {nombre: 'Homero', edad: 39},
      {nombre: 'Marge', edad: 35},
      {nombre: 'Bart', edad: 10},
      {nombre: 'Lisa', edad: 8},
      {nombre: 'Abraham', edad: 86}
    ];
  }

  ngOnInit(): void {
  }

}
