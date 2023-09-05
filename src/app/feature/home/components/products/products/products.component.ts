import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      name: 'RELOJ CLÁSICO PARA HOMBRE INVICTA',
      price: 100,
      discountPrice: 80,
      discountPercentage: 20,
      imageUrl: 'assets/imagenes/reloj/reloj1.jpg',
    },
    {
      id: 2,
      name: 'RELOJ CLÁSICO PARA HOMBRE INVICTA',
      price: 120,
      discountPrice: 70,
      discountPercentage: 60,
      imageUrl: 'assets/imagenes/reloj/reloj2.jpg',
    },
    {
      id: 3,
      name: 'RELOJ CLÁSICO PARA HOMBRE INVICTA',
      price: 90,
      discountPrice: 70,
      discountPercentage: 22,
      imageUrl: 'assets/imagenes/reloj/reloj3.jpg',
    },
    {
      id: 4,
      name: 'RELOJ CLÁSICO PARA HOMBRE INVICTA',
      price: 110,
      discountPrice: 70,
      discountPercentage: 60,
      imageUrl: 'assets/imagenes/reloj/reloj4.jpg',
    },
    {
      id: 5,
      name: 'RELOJ CLÁSICO PARA HOMBRE INVICTA',
      price: 110,
      discountPrice: 70,
      discountPercentage: 60,
      imageUrl: 'assets/imagenes/reloj/reloj2.jpg',
    },
    {
      id: 6,
      name: 'RELOJ CLÁSICO PARA HOMBRE INVICTA',
      price: 110,
      discountPrice: 70,
      discountPercentage: 60,
      imageUrl: 'assets/imagenes/reloj/reloj6.jpg',
    },
    {
      id: 6,
      name: 'RELOJ CLÁSICO PARA HOMBRE INVICTA',
      price: 110,
      discountPrice: 70,
      discountPercentage: 60,
      imageUrl: 'assets/imagenes/reloj/reloj1.jpg',
    },
    {
      id: 6,
      name: 'RELOJ CLÁSICO PARA HOMBRE INVICTA',
      price: 110,
      discountPrice: 70,
      discountPercentage: 60,
      imageUrl: 'assets/imagenes/reloj/reloj3.jpg',
    },
  ];
  productsPerSlide = 4;
  productGroups: Product[][] = [];
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    const customXSmallBreakpoint = '(max-width: 500px)';
    this.breakpointObserver.observe([Breakpoints.Small, customXSmallBreakpoint])
    .subscribe((state) => {
      if (state.breakpoints[Breakpoints.Small]) {
        // Pantalla pequeña o mediana
        this.adjustProductsPerSlide(3);
      } else if (state.breakpoints[customXSmallBreakpoint]) {
        // Pantalla grande: Muestra 4 
        this.adjustProductsPerSlide(2);
      } else {
        // Pantalla grande o de otro tipo
        this.adjustProductsPerSlide(4);
      }
    });

    this.productGroups = this.chunkArray(this.products, this.productsPerSlide);
  }
  adjustProductsPerSlide(productsToShow: number): void {
    this.productsPerSlide = productsToShow;

    // Divide nuevamente los productos en grupos 
    this.productGroups = this.chunkArray(this.products, this.productsPerSlide);
  }

  chunkArray(arr: any[], chunkSize: number): any[] {
    const resultArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      resultArray.push(arr.slice(i, i + chunkSize));
    }
    return resultArray;
  }

}
export interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice?: number; 
  discountPercentage?: number; 
  imageUrl: string;
}