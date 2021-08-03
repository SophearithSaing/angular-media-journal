import { Component } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuItem, NbSidebarService } from '@nebular/theme';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Media Journal';

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person-outline',
      link: '/profile'
    },
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home'
    },
    {
      title: 'Movies',
      icon: 'film-outline',
      link: '/movies'
    },
    {
      title: 'TV Shows',
      icon: 'tv-outline',
      link: '/tv'
    },
    {
      title: 'Musics',
      icon: 'music-outline',
      link: '/musics'
    },
    {
      title: 'Books',
      icon: 'book-outline',
      link: '/books'
    },
  ];

  constructor(public auth: AuthService) { }
}
