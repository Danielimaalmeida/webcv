import { Component, OnInit, Input } from '@angular/core';
import { BulletColors } from './../../+core/enums/presentation.enums';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() language: any;

  bulletColors = BulletColors;

  constructor() { }

  ngOnInit(): void {
  }

}
