import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormControl } from '@angular/forms';
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'da-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ]
    )
  ],
})
export class WelcomeComponent implements OnInit {

  @Output() initializeGameEmitter: EventEmitter<void> = new EventEmitter();
  @Input() language: any;
  name: FormControl = new FormControl('');
  countdown: boolean;
  counter: number;
  displayGame: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onPLayClick(): void {
    this.countdown = true;
    this.initializeCountdown();
  }

  initializeCountdown(): void {
    const time = 6;
    const timer$ = interval(1000);
    timer$.pipe(
      take(time),
      map((value) => (time - 1) - value))
      .subscribe((count) => {
        this.counter = count;
        if (!this.counter) {
          this.initializeGameEmitter.emit();
        }
      });
  }
}
