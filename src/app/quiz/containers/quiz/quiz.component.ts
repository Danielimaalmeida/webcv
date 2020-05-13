import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CountriesFacade } from './../../api/facade/countries.facade';
import { LanguageFacade } from './../../../+core/languages/language.facade';
import { ICountry } from '../../api/entities/country.model';

@Component({
  selector: 'da-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  languageFile$: Observable<any>;
  countries$: Observable<Array<ICountry>>;
  displayGame: boolean;
  tryAgain: boolean;

  constructor(private languageFacade: LanguageFacade, private countriesFacade: CountriesFacade) {
    this.languageFile$ = this.languageFacade.language$;
    this.countries$ = this.countriesFacade.countries$;
  }

  ngOnInit(): void {
    this.languageFacade.get();
    this.countriesFacade.getCountries();
  }

  initializeGame(): void {
    this.displayGame = true;
  }

  handleTryAgain(): void {
    this.displayGame = false;
  }
}
