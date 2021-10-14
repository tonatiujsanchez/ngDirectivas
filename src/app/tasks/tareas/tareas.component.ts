import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
    
  @Input() todos:Todo[] = [];

  constructor() { 
  }
  ngOnInit(): void {
  }

  tareaTerminada( todo:Todo ){
    todo.terminada = !todo.terminada;
    console.log(todo);
  }
  eliminarTodo( idx:number ){
    this.todos.splice(idx, 1); 
  }

}
