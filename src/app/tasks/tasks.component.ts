import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  todos: Todo[];
  constructor() { }



  ngOnInit(): void {
    this.todos = [
      {
        titulo: 'Hacer la App del Legado de Tlapa',
        desc: 'Desarrollar la aplicacion para dispositivos moviles del medio Legado de Tlapa para IOS y Android.',
        terminada: false
      },
      {
        titulo:'Actualizar la App del Despertar',
        desc: 'Actualizar la App del medio Despertar de la Montaña a IONIC 6.',
        terminada: false
      }
    ];
  }

  agregarTodo( todo:Todo ){
    this.todos.push( todo );
    // console.log(this.todos); 
  }

}
