import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poser'
})
export class PoserPipe implements PipeTransform {

  transform(poster: string): string {
    // https://arqa.com/wp-content/uploads/2019/04/moederscheimmoonenarchitects_officepbtec_maasdijk_02-530x398.jpg
    console.log(poster);
    if( poster ){
      return `https://arqa.com/wp-content/uploads/2019/04/moederscheimmoonenarchitects_officepbtec_maasdijk_02-530x398.jpg`;
    }else{
      return `../../assets/no-image.jpg`;
    }

    return poster;
  }

}
