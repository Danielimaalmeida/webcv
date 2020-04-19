import { Component, OnInit, Input } from '@angular/core';
import { BulletColors } from '../../enums/presentation.enums';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  @Input() bulletColor: BulletColors;
  flipped: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onFlipClick(): void {
    this.flipped = !this.flipped;
  }

}
