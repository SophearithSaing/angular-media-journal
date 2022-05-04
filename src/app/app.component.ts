import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Media Journal';

  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home',
    },
    {
      title: 'Movies',
      icon: 'film-outline',
      link: '/movies',
    },
    // {
    //   title: 'TV Shows',
    //   icon: 'tv-outline',
    //   link: '/tv',
    // },
    {
      title: 'Music',
      icon: 'music-outline',
      link: '/music',
    },
    {
      title: 'Books',
      icon: 'book-outline',
      link: '/books',
    },
    // {
    //   title: 'Profile',
    //   icon: 'person-outline',
    //   link: '/profile',
    // },
  ];

  constructor(
    public auth: AuthService,
    private sidebarService: NbSidebarService
  ) {}

  closeNav() {
    this.sidebarService.collapse();
  }
}
