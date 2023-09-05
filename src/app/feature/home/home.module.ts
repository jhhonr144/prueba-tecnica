import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SliderComponent } from './components/slider/slider/slider.component';
import { BannerComponent } from './components/banners/banner/banner.component';
import { ProductsComponent } from './components/products/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    BannerComponent,
    ProductsComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes),SharedModule],
})
export class HomeModule { }
