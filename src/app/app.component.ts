import { Component } from '@angular/core';
import { ProyectosService } from './services/proyectos.service';
import { ProyectosResponse } from './interfaces/proyectos-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projecthometuls';

  // constructor( private proyectosService: ProyectosService ){

  //   // this.proyectosService.getProyectos()
  //   //   .subscribe( (resp: ProyectosResponse) => {
  //   //       console.log(resp);
  //   //       // resp.data[0].
  //   //   } );

  // }

}
