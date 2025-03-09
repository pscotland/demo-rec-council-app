import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, RouterOutlet],
  template: `
  <app-navigation></app-navigation>
  <router-outlet></router-outlet>
`,
  styleUrl: './app.component.scss'
})
export class AppComponent {}
