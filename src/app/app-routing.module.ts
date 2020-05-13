import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  { path: 'quiz', loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule)},
  { path: '**', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
