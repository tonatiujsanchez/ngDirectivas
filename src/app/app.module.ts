import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SemaforoComponent } from './semaforo/semaforo.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';

import { TasksComponent } from './tasks/tasks.component';
import { FormularioComponent } from './tasks/formulario/formulario.component';
import { TareasComponent } from './tasks/tareas/tareas.component';
import { SubrayadoDirective } from './directivas/subrayado.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    TasksComponent,
    FormularioComponent,
    TareasComponent,
    SubrayadoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
