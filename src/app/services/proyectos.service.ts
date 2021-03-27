import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { ProyectosResponse, Proyecto } from '../interfaces/proyectos-response';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private url_proxy: string = '/default/myFirstLambda';
  private url_api: string = 'https://fzb19qr3zj.execute-api.us-west-2.amazonaws.com/default/myFirstLambda';
  private baseUrl: string = 'https://fzb19qr3zj.execute-api.us-west-2.amazonaws.com';
  private proyectoPage = 1;
  public cargando: boolean = false;

  constructor( private http: HttpClient ) {
    // this.url_proxy="/default/myFirstLambda";
    // this.url_api="https://fzb19qr3zj.execute-api.us-west-2.amazonaws.com/default/myFirstLambda";
  }

  get params(  ){
    return {
      api_key: '',
      language: '',
      page: this.proyectoPage.toString()
    };
  }

  resetProyectosPage (){
    this.proyectoPage = 1;
  }


  getProyectos(  ): Observable<Proyecto[]> {
    if( this.cargando ){

      // cargando proyectos
      return of([]);
    }


    this.cargando = true;

    // return this.http.get<ProyectosResponse>('/default/myFirstLambda');
    return this.http.get<ProyectosResponse>(`${this.url_proxy}`)
      .pipe(
          map( (resp) => resp.data ),
          tap( () => {
            this.proyectoPage += 1;
            this.cargando = false;
          } )
        );
  }

  buscarProyectos( texto: string ): Observable<Proyecto[]>{
    // this.url_api="https://fzb19qr3zj.execute-api.us-west-2.amazonaws.com/default/myFirstLambda";
    // this.http.get<ProyectosResponse>(`${this.url_proxy}`, {
    //   params: this.params
    // });
    return this.http.get<ProyectosResponse>(`${this.url_proxy}`)
      .pipe(
        map( resp => resp.data  )
      );

  }

  getProyectoDetalleById( id: string ): Observable<Proyecto[]>{
    // this.url_api="https://fzb19qr3zj.execute-api.us-west-2.amazonaws.com/default/myFirstLambda";
    // this.http.get<ProyectosResponse>(`${this.url_proxy}`, {
    //   params: this.params
    // });
    return this.http.get<ProyectosResponse>(`${this.url_proxy}`)
      .pipe(
        map( resp => resp.data.filter( (p) => ( p.ID.toString() === id.toString() ) )  ),
        catchError( error => of([]) )
      );

  }

}
