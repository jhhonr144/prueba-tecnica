import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });

    // Agrega un evento click al botón siguiente
    const nextButton = document.getElementById('swiper-button-next');
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        swiper.slideNext(); // Navega al siguiente slide al hacer clic en el botón
      });
    }

    // Agrega un evento click al botón anterior
    const prevButton = document.getElementById('swiper-button-prev');
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        swiper.slidePrev(); // Navega al slide anterior al hacer clic en el botón
      });
    }
  }
  ngOnInit(): void {
  }

}
