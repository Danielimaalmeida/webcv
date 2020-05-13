import { ScrollService } from './services/scroll.service';
import { HttpClientModule } from '@angular/common/http';
import { LanguageService } from './languages/language.service';
import { LanguageFacade } from './languages/language.facade';
import { NgModule, ModuleWithProviders } from '@angular/core';
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
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        LanguageFacade,
        LanguageService,
        ScrollService
      ]
    };
  }
}
