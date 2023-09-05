import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';
import { HeaderMiddleComponent } from './components/header-middle/header-middle/header-middle.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { FooterBottomComponent } from './components/footer-bottom/footer-bottom/footer-bottom.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ButtonWpComponent } from './components/buttonwhatsapp/button-wp/button-wp.component';
import { PopupComponent } from './components/popup/popup/popup.component';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, HeaderMiddleComponent, FooterBottomComponent, ButtonWpComponent, PopupComponent], 
  imports: [CommonModule, MatIconModule,MatSidenavModule,MatToolbarModule,FormsModule,MatExpansionModule],
  exports: [HeaderComponent, FooterComponent,HeaderMiddleComponent,MatToolbarModule,FooterBottomComponent,ButtonWpComponent,PopupComponent],
})
export class SharedModule { }
