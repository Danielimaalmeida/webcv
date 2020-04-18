import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {

  @Input() language: any;
  @Input() arrowDisplay = true;

  paddingTop: string;
  index = 0;

  constructor() { }

  ngOnInit(): void {}

  setPaddingTop(paddingTop: string) {
    this.paddingTop = paddingTop;
  }

}
