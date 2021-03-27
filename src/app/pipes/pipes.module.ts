import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoserPipe } from './poser.pipe';



@NgModule({
  declarations: [PoserPipe],
  imports: [
    CommonModule
  ],
  exports:[
    PoserPipe
  ]
})
export class PipesModule { }
