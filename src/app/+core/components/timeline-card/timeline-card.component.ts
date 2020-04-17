import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss']
})
export class TimelineCardComponent implements OnInit {

  @Input() right: boolean;
  @Input() isFirst: boolean = true;
  @Input() color: 'primary' | 'secondary' | 'third' = 'primary';
  @Input() tags: Array<string> = ['Angular', 'RxJS', 'NgRx', 'Typescript', 'Jasmine'];

  constructor() { }

  ngOnInit(): void {
    console.log(this.color)
  }

}
