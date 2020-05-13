import { ScrollService } from './+core/services/scroll.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dan-app';
  scrollDown$: Observable<boolean>;

  constructor(private scrollService: ScrollService) {
   this.scrollDown$ = this.scrollService.isScrollingDown();
  }
}
