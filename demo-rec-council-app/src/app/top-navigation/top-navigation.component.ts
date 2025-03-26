import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-top-navigation',
  imports: [MenubarModule],
  templateUrl: './top-navigation.component.html',
  styleUrl: './top-navigation.component.scss'
})
export class TopNavigationComponent {
  title = 'Demo Recreational Council';
  menuItems = [
    { label: 'Home', routerLink: '/' },
    { label: 'Programs', routerLink: '/programs' },
    { label: 'About Us', routerLink: '/about' },
    { label: 'Contact', routerLink: '/contact' },
    { label: 'News & Events', routerLink: '/news-events' }
  ];
}
