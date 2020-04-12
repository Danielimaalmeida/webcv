import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { trigger, state, style } from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';

import { NavbarRoute } from './../../model/navbar.model';

const openHeight = '228px';
const closeHeight = '70px';
const closePhoneHeight = '60px';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: openHeight,
        backgroundColor: '#3EC1C9',
        borderBottom: '1px solid white'
      })),
      state('closed', style({
        height: closeHeight,
      }))
    ]),
  ]
})
export class NavbarComponent implements OnInit {
  @Output() navbarSize: EventEmitter<string> = new EventEmitter();
  @Input() routes: NavbarRoute[];
  opened: boolean;
  smartphone = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.observeScreenSize();
  }

  toggleNavbar(isOpen: boolean): void {
    this.opened = isOpen;
    this.emmitNavbarHeight();
  }

  observeScreenSize(): void {
    this.breakpointObserver.observe([
      '(max-width: 576px)'
    ]).subscribe(result => {
      this.smartphone = result.matches ? true : false;
      this.emmitNavbarHeight();
    });
  }

  private emmitNavbarHeight(): void {
    const openSize = this.opened ? openHeight : closePhoneHeight;
    this.navbarSize.emit(this.smartphone ? openSize : '0px');
  }
}
