import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { TimelineCard } from './../../model/timeline.model';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1100ms', keyframes([
          style({ transform: 'translateY(-200px)', animationTimingFunction: 'ease-in', opacity: 0, offset: 0 }),
          style({ transform: 'translateY(0)', animationTimingFunction: 'ease-out', opacity: 1, offset: 0.38 }),
          style({ transform: 'translateY(-65px)', animationTimingFunction: 'ease-in', opacity: 1, offset: 0.55 }),
          style({ transform: 'translateY(0)', animationTimingFunction: 'ease-out', opacity: 1, offset: 0.72 }),
          style({ transform: 'translateY(-28px)', animationTimingFunction: 'ease-in', opacity: 1, offset: 0.81 }),
          style({ transform: 'translateY(0)', animationTimingFunction: 'ease-out', opacity: 1, offset: 0.9 }),
          style({ transform: 'translateY(-8px)', animationTimingFunction: 'ease-in', opacity: 1, offset: 0.95 }),
          style({ transform: 'translateY(0)', animationTimingFunction: 'ease-out', opacity: 1, offset: 1 }),
        ]))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1100ms', style({ opacity: 0 }))
      ])
    ]
    )
  ],
})
export class TimelineCardComponent {

  @ViewChild('card', { static: false }) card: ElementRef;

  @Input() right: boolean;
  @Input() isFirst: boolean;
  @Input() color: 'primary' | 'secondary' | 'third' = 'primary';
  @Input() tags: Array<string> = ['Angular', 'RxJS', 'NgRx', 'Typescript', 'Jasmine'];
  @Input() scrollingDown: boolean;
  @Input() isVisible: boolean;
  @Input() content: TimelineCard;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (this.isElementVisible(this.card.nativeElement)) {
      setTimeout(() => {
        this.isVisible = true;
      }, 500);
    }

  }

  isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    const vWidth = window.innerWidth || document.documentElement.clientWidth;
    const vHeight = window.innerHeight || document.documentElement.clientHeight;
    const efp = (x, y) => document.elementFromPoint(x, y);

    if (rect.right < 0 || rect.bottom < 0
      || rect.left > vWidth || rect.top > vHeight) {
      return false;
    }

    return (
      el.contains(efp(rect.left, rect.top))
      || el.contains(efp(rect.right, rect.top))
      || el.contains(efp(rect.right, rect.bottom))
      || el.contains(efp(rect.left, rect.bottom))
    );
  }
}
