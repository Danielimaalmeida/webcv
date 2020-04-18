import { LanguageFacade } from './../../+core/languages/language.facade';
import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  languageFile$: Observable<any>;
  scrolleDown = false;

  constructor(private languageFacade: LanguageFacade) {
    this.languageFile$ = languageFacade.language$;
  }

  ngOnInit(): void {
    this.languageFacade.get();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const verticalOffset = window.pageYOffset || 0;
    this.scrolleDown = !!verticalOffset;
  }

}
