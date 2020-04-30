import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { trigger, state, style } from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';

import { NavbarRoute } from './../../model/navbar.model';
import { scrollTo } from '../../utils';

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
    ])
  ]
})
export class NavbarComponent implements OnInit, OnChanges {
  @Output() navbarSize: EventEmitter<string> = new EventEmitter();
  @Input() scrolledDown: boolean;
  opened: boolean;
  smartphone = false;
  backgroundColor = 'none';
  routes: NavbarRoute[] = [
    { label: 'About', route: 'about', scroll: true },
    { label: 'Timeline', route: 'timeline', scroll: true },
    { label: 'Stack', route: 'stack', scroll: true },
    { label: 'Quiz', route: 'quiz', scroll: false }
  ];

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.observeScreenSize();
  }

  ngOnChanges(): void {
    this.backgroundColor = this.scrolledDown ? '#42228f' : 'transparent';
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


  navigate(routItem: NavbarRoute): void {
    const { scroll, route } = routItem;
    if (scroll) {
      scrollTo(route);
    }
  }

  private emmitNavbarHeight(): void {
    const openSize = this.opened ? openHeight : closePhoneHeight;
    this.navbarSize.emit(this.smartphone ? openSize : '0px');
  }
}
