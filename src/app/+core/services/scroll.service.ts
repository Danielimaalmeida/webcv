import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollService {

  isScrollingDown(): Observable<any> {
    return fromEvent(window, 'scroll').pipe(map(event => {
      const verticalOffset = window.pageYOffset || 0;
      return !!verticalOffset;
    }));
  }

}
