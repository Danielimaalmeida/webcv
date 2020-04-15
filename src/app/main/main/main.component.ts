import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  scrolleDown = false;

  routes = [
    {label: 'About', route: 'about'},
    {label: 'Quiz', route: 'quiz'},
    {label: 'Contact', route: 'contact'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    const verticalOffset = window.pageYOffset || 0;
    this.scrolleDown = !!verticalOffset;
  }

}
