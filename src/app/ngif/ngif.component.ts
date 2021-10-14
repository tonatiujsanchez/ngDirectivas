import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  mostrar:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarOcultar(){
    this.mostrar = !this.mostrar;
  }

}
