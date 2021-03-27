import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ProyectosResponse } from 'src/app/interfaces/proyectos-response';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { Proyecto } from '../../interfaces/proyectos-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public proyectos: Proyecto[] = [];
  public proyectosSlideShow: Proyecto[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if( pos > max ){
      // TODO: llamar el servicio de fetch API... ********************IMPORTANTE PARA SCROLL INFINITO
      if( this.proyectosService.cargando ){ return }

      // Scroll infinito para cargar infinita cantidad de proyectos haciendo llamados a la URL

      // this.proyectosService.getProyectos().subscribe( ( proyectos ) => {
      //   this.proyectos.push( ...proyectos ); //Scroll infinito
      //   console.log(this.proyectos);
      //  } );

      console.log({pos, max });
    }

  };

  constructor( private proyectosService: ProyectosService ) { }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    this.proyectosService.resetProyectosPage();
  }

  ngOnInit(): void {

    this.proyectosService.getProyectos()
      .subscribe( (proyectos) => {
          console.log(proyectos);
          // resp.data[0].
          this.proyectos = proyectos;
          this.proyectosSlideShow = proyectos;
      } );

  }

}
