import { ScrollService } from './../../+core/services/scroll.service';
import { LanguageFacade } from './../../+core/languages/language.facade';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('about') about: ElementRef;

  languageFile$: Observable<any>;
  scrollDown$: Observable<boolean>;

  constructor(private languageFacade: LanguageFacade, private scrollService: ScrollService) {
    this.languageFile$ = this.languageFacade.language$;
    this.scrollDown$ = this.scrollService.isScrollingDown();
  }

  ngOnInit(): void {
    this.languageFacade.get();
  }
}
