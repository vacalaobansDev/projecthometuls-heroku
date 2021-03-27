import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'proyecto/:id',
    component: ProyectosComponent
  },
  {
    path: 'buscar/:texto',
    component: BuscarComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  },
];

@NgModule({
  // declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
