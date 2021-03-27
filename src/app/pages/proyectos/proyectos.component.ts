import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosService } from '../../services/proyectos.service';
import { Proyecto } from '../../interfaces/proyectos-response';
import { Location } from '@angular/common';
import { combineLatest } from 'rxjs/operators';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectos: Proyecto[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private proyectosService: ProyectosService,
               private location: Location,
               private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params.id;
    // console.log(id)

    this.proyectosService.getProyectoDetalleById( id ).subscribe( proyecto => {
      console.log(proyecto);
      if( !proyecto ){
        this.router.navigateByUrl( '/home' );
        return;
      }
      this.proyectos = proyecto;
    } );

  }

  onRegresar(){
    this.location.back();
  }

}
