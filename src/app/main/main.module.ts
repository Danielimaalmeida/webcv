import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { CoreModule } from '../+core/+core.module';
import { MainRoutingModule } from './main-routing.module';




@NgModule({
  declarations: [HomeComponent, AboutComponent, MainComponent],
  imports: [
    CommonModule,
    CoreModule,
    MainRoutingModule
  ],
  exports: [HomeComponent, AboutComponent]
})
export class MainModule { }
