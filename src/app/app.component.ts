import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  propiedadesParrafo: any;
  color:string;
  size:number = 25;

  constructor(){
    this.propiedadesParrafo = {
      color: 'red',
      fontSize: `${this.size}px`,
      textAlign: 'center'
    }
  }

  carbiarColor(color: string){
    this.propiedadesParrafo.color = color;
    this.color = '#FFF';
  }

  cambiarTamano(e){

    this.propiedadesParrafo.fontSize = `${ e.target.value }px`
    
  }

}
