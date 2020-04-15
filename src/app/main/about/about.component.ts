import { Component, OnInit } from '@angular/core';
import { BulletColors } from './../../+core/enums/presentation.enums';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  bulletColors = BulletColors;

  techTitle = 'technology';
  techText = 'Technology guided my educational path. The possibilities of the emerging digital processes motivated my research as an Architect and made me persuit an education and career in Software Engeneering.';

  designTitle = 'design';
  designText = 'As a former Architect I love to build beautiful things. Frontend Development gives me the opportunity to gather two of my favourite things: technology and design.';

  animalTitle = 'animals';
  animalText = 'Technology guided my educational path. The possibilities of the emerging digital processes motivated my research as an Architect and made me persuit an education and career in Software Engeneering.';


  constructor() { }

  ngOnInit(): void {
  }

}
