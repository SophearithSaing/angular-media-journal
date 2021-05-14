import { Component } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'media-journal';

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person-outline',
    },
    {
      title: 'Home',
      icon: 'home-outline',
    },
    {
      title: 'Movies',
      icon: 'film-outline',
    },
    {
      title: 'TV Shows',
      icon: 'tv-outline',
    },
    {
      title: 'Musics',
      icon: 'music-outline',
    },
    {
      title: 'Books',
      icon: 'book-outline',
    },
  ];
}
