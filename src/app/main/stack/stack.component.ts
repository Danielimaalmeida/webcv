import { Component, OnChanges, Input } from '@angular/core';
import { StackContent } from './../../+core/model/stack.model';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnChanges {

  @Input() language: any;
  stackContentList: StackContent[]
  title: string;

  constructor() { }

  ngOnChanges(): void {
    if (this.language) {
      const { tech, title } = this.language?.stack;
      this.stackContentList = tech;
      this.title = title;
    }
  }

}
