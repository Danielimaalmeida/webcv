import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { CoreModule } from '../+core/+core.module';
import { MainRoutingModule } from './main-routing.module';
import { TimelineComponent } from './timeline/timeline.component';
import { StackComponent } from './stack/stack.component';
import { QuizModule } from '../quiz/quiz.module';




@NgModule({
  declarations: [HomeComponent, AboutComponent, MainComponent, TimelineComponent, StackComponent],
  imports: [
    CommonModule,
    CoreModule,
    MainRoutingModule,
    QuizModule
  ],
  exports: [HomeComponent, AboutComponent]
})
export class MainModule { }
