import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  @Output() enviarTodo: EventEmitter<Todo>; 

  
  todo:Todo;
  constructor() {
    this.todo = new Todo();
    this.enviarTodo = new EventEmitter();
  }
   

  ngOnInit(): void {
  }

  agregarTodo(){
    if( this.todo.titulo === '' || this.todo.desc==='' ){
      return;
    }
    
    this.enviarTodo.emit( this.todo );
    this.todo = new Todo();
  }

}
