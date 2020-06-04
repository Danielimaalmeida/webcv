import { Component, Output, EventEmitter, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-hamburguer-button',
  templateUrl: './hamburguer-button.component.html',
  styleUrls: ['./hamburguer-button.component.scss'],
  animations: [
    trigger('openCloseSpan1', [
      state('open', style({
        top: '18px',
        width: '0%',
        left: '50%',
        backgroundColor: 'white'
      })),
      state('closed', style({
        top: '0px',
        backgroundColor: 'white'
      })),
      transition('open <=> closed', animate(300))
    ]),
    trigger('openCloseSpan2', [
      state('open', style({
        transform: 'rotate(45deg)',
        top: '12px',
        backgroundColor: 'white'
      })),
      state('closed', style({
        top: '12px',
        backgroundColor: 'white'
      })),
      transition('open <=> closed', animate(300))
    ]),
    trigger('openCloseSpan3', [
      state('open', style({
        transform: 'rotate(-45deg)',
        top: '12px',
        backgroundColor: 'white'
      })),
      state('closed', style({
        top: '24px',
        backgroundColor: 'white'
      })),
      transition('open <=> closed', animate(300))
    ]),
]
})
export class HamburguerButtonComponent {

  @Output() hamburgerIsOpen: EventEmitter<boolean> = new EventEmitter()

  @Input() isOpen = false;

  constructor() { }

  open(): void {
    this.isOpen = !this.isOpen;
    this.hamburgerIsOpen.emit(this.isOpen);
  }
}
