import { HttpClientModule } from '@angular/common/http';
import { LanguageService } from './languages/language.service';
import { LanguageFacade } from './languages/language.facade';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HamburguerButtonComponent } from './components/hamburguer-button/hamburguer-button.component';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { TimelineCardComponent } from './components/timeline-card/timeline-card.component';



@NgModule({
  declarations: [NavbarComponent, HamburguerButtonComponent, AboutCardComponent, TimelineCardComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    AboutCardComponent,
    TimelineCardComponent
  ],
  providers: [
    LanguageFacade,
    LanguageService
  ]
})
export class CoreModule { }
