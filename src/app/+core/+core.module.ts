import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HamburguerButtonComponent } from './components/hamburguer-button/hamburguer-button.component';



@NgModule({
  declarations: [NavbarComponent, HamburguerButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
