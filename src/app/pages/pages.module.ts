import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [HomeComponent, ProyectosComponent, BuscarComponent],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
