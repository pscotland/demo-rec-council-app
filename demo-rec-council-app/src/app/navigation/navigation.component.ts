import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterModule, MenubarModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  menuItems = [
    { label: 'Home', routerLink: '/' },
    { label: 'Programs', routerLink: '/programs' },
    { label: 'About Us', routerLink: '/about' },
    { label: 'Contact', routerLink: '/contact' },
    { label: 'News & Events', routerLink: '/news-events' }
  ];
}
