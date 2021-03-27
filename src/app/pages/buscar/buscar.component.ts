import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from '../../services/proyectos.service';
import { Proyecto } from '../../interfaces/proyectos-response';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public texto: string = '';
  public proyectos: Proyecto[] = [];
  public arrayResult: Proyecto[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private proyectosService: ProyectosService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( ( params ) => {
      this.texto =  params.texto;
      // console.log(params.texto);
      this.proyectosService.buscarProyectos( params.texto ).subscribe( (proyectos) => {
        // console.log(proyectos);

        // proyectos.filter( (project) => {
        //   // (project.ID.toString().toLowerCase().includes(this.texto.toString()));
        //   return (project.TITULO.toString().toLowerCase().includes(this.texto.toString().toLowerCase()));
        //   // (project.DESCRIPCION.toString().toLowerCase().includes(this.texto.toString()));
        //   // (project.TIPO_CONTRATO.toString().toLowerCase().includes(this.texto.toString()));
        //   // (project.FASE.toString().toLowerCase().includes(this.texto.toString()));
        //   // (project.ESTADO.toString().toLowerCase().includes(this.texto.toString()));
        //   // (project.PRECIO_TOTAL.toString().toLowerCase().includes(this.texto.toString()));
        // });

        // console.log('Proyectos: ',proyectos);

        proyectos.forEach(element => {
          console.log(element);
          if( (element.ID.toString().toLowerCase().includes(this.texto.toString().toLowerCase())) ){
            this.arrayResult.push( element );
          }else if( (element.TITULO.toString().toLowerCase().includes(this.texto.toString().toLowerCase())) ){
            this.arrayResult.push( element );
          }else if( (element.DESCRIPCION.toString().toLowerCase().includes(this.texto.toString().toLowerCase())) ){
            this.arrayResult.push( element );
          }else if( (element.FASE.toString().toLowerCase().includes(this.texto.toString().toLowerCase())) ){
            this.arrayResult.push( element );
          }else if( (element.ESTADO.toString().toLowerCase().includes(this.texto.toString().toLowerCase())) ){
            this.arrayResult.push( element );
          }else if( (element.PRECIO_TOTAL.toString().toLowerCase().includes(this.texto.toString().toLowerCase())) ){
            this.arrayResult.push( element );
          }
        });
        console.log("Array Result: ",this.arrayResult);
        this.proyectos = this.arrayResult;
        // product.value.title.toLowerCase().includes(searchTerm.toLowerCase());

        // TODO: filtral object por texto buscado
        // this.proyectos = proyectos.filter( (proyecto) => {
        //   if( (proyecto.ID.toString().toUpperCase() === this.texto.toString().toUpperCase()) ||
        //       (proyecto.TITULO.toString().toUpperCase() === this.texto.toString().toUpperCase()) ||
        //       (proyecto.DESCRIPCION.toString().toUpperCase() === this.texto.toString().toUpperCase()) ||
        //       (proyecto.TIPO_CONTRATO.toString().toUpperCase() === this.texto.toString().toUpperCase()) ||
        //       (proyecto.FASE.toString().toUpperCase() === this.texto.toString().toUpperCase()) ||
        //       (proyecto.ESTADO.toString().toUpperCase() === this.texto.toString().toUpperCase()) ||
        //       (proyecto.PRECIO_TOTAL === Number(this.texto))
        //     ){
        //     proyecto;
        //   }
        // } );
      } );
    } );

  }

}
