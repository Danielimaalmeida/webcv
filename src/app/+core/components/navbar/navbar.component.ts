import { trigger, state, style } from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, Input } from '@angular/core';

import { NavbarRoute } from './../../model/navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '228px',
        backgroundColor: '#3EC1C9',
        borderBottom: '1px solid white'
      })),
      state('closed', style({
        height: '70px',
      }))
    ]),
  ]
})
export class NavbarComponent implements OnInit {

  @Input() routes: NavbarRoute[];
  opened: boolean;
  smartphone = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.observeScreenSize();
  }

  toggleNavbar(isOpen: boolean): void {
    this.opened = isOpen;
  }

  observeScreenSize(): void {
    this.breakpointObserver.observe([
      '(max-width: 520px)'
    ]).subscribe(result => {
      this.smartphone = result.matches ? true : false;
    });
  }
}
