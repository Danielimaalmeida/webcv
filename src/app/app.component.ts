import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dan-app';

  routes = [
    {label: 'About', route: 'about'},
    {label: 'Quiz', route: 'quiz'},
    {label: 'Contact', route: 'contact'}
  ]
}
