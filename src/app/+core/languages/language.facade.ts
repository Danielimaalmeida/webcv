import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LanguageService } from './language.service';

@Injectable({ providedIn: 'root' })
export class LanguageFacade {
  private languageSubject$ = new BehaviorSubject<any>(null);
  public language$ = this.languageSubject$.asObservable();

  constructor(private languageService: LanguageService) { }

  get(): void {
    this.languageService.loadCV().subscribe(response =>
      this.languageSubject$.next(response)
    );
  }
}
