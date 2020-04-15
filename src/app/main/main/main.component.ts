import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ opacity: 0}),
          animate('500ms', style({ opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('500ms', style({ opacity: 0}))
        ])
      ]
    )
  ],
})
export class MainComponent implements OnInit {

  paddingTop: string;

  displayDots: boolean[] = [true, false, false, false, false];

  arrowDisplay = true;

  index = 0;

  constructor() { }

  ngOnInit(): void {
    this.startDotsDisplay();
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    const verticalOffset = window.pageYOffset || 0;
    this.arrowDisplay = verticalOffset === 0;
  }


  startDotsDisplay(): void {
    setTimeout(() => {
      this.index = this.index > 4 ? 0 : this.index;
      this.displayDots[this.index] = false;
      const nextValue = this.index + 1 >= 5 ? 0 : this.index + 1;
      this.displayDots[nextValue] = true;
      this.index++;
      this.startDotsDisplay();
    }, 500);
  }

  setPaddingTop(paddingTop: string) {
    this.paddingTop = paddingTop;
  }

}
