import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ProyectosPosterGridComponent } from './proyectos-poster-grid/proyectos-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';
// import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    ProyectosPosterGridComponent,
  ],
  exports:[
    NavbarComponent,
    SlideshowComponent,
    ProyectosPosterGridComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
    // RatingModule
  ],
})

export class ComponentsModule { }
