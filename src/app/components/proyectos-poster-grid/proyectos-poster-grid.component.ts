import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/proyectos-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos-poster-grid',
  templateUrl: './proyectos-poster-grid.component.html',
  styleUrls: ['./proyectos-poster-grid.component.css']
})
export class ProyectosPosterGridComponent implements OnInit {

  @Input() proyectos: Proyecto[];

  constructor( private router: Router ) { }

  ngOnInit(): void {
    console.log(this.proyectos);
  }

  onProyectoClick( proyecto: Proyecto ){
    console.log(proyecto);
    this.router.navigate(['/proyecto',proyecto.ID]);
  }

}
