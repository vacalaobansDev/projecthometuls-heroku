import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Proyecto } from '../../interfaces/proyectos-response';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})


export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() proyectos: Proyecto[];
  public swiper: Swiper; // undifend

  constructor() { }

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      freeMode: true,
      spaceBetween: 15,
      slidesPerView:1
    });

    // this.swiper.slideNext();
  }

  ngOnInit(): void {

    // console.log(this.proyectos);

  }


  onSlideNext(){
    this.swiper.slideNext();
  }
  onSlidePrev(){
    this.swiper.slidePrev();
  }


}
