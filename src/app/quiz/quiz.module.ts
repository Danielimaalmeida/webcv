import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../+core/+core.module';
import { QuizRoutingModule } from './quiz.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './presentation/welcome/welcome.component';
import { QuizComponent } from './containers/quiz/quiz.component';
import { CountriesService } from './api/services/countries.service';
import { CountriesFacade } from './api/facade/countries.facade';
import { GameComponent } from './presentation/game/game.component';

@NgModule({
  declarations: [QuizComponent, WelcomeComponent, GameComponent],
  imports: [
    CommonModule,
    CoreModule,
    QuizRoutingModule,
    ReactiveFormsModule
  ]
})

export class QuizModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: QuizModule,
      providers: [CountriesService, CountriesFacade],
    };
  }
}
