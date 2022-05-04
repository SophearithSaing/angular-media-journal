import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MusicsService } from '../services/musics.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  email: string | null | undefined = '';
  myMusics: any[] = [];

  yearlyList: Array<{
    year: number;
    months: Array<{
      month: string;
      musics: Array<any>;
    }>;
  }> = [];

  constructor(public musicService: MusicsService, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getUserData().then((userData) => {
      this.email = userData?.email;

      this.musicService.getSavedBooks(this.email).subscribe((res) => {
        res.docs.forEach((element) => {
          this.myMusics.push(element.data());
        });
        this.sortMusics();
        this.organizeMusics();
      });
    });
  }

  sortMusics = () => {
    this.myMusics.sort((a, b) => {
      const dateA = new Date(a.endDate).getTime();
      const dateB = new Date(b.endDate).getTime();
      return dateA - dateB;
    });
  };

  organizeMusics = () => {
    this.myMusics.forEach((music) => {
      const musicMonth = new Date(music.endDate).toLocaleDateString('en', {
        month: 'long',
      });
      const musicYear = new Date(music.endDate).getFullYear();
      const month = (months: { month: string }) => months.month === musicMonth;
      const year = (years: { year: number }) => years.year === musicYear;
      if (this.yearlyList.some(year) === false) {
        this.yearlyList.push({
          year: musicYear,
          months: [],
        });
      }
      this.yearlyList.forEach((item) => {
        if (item.months.some(month) === false && musicYear === item.year) {
          item.months.push({
            month: musicMonth,
            musics: [],
          });
        }
        item.months.forEach((element) => {
          if (musicMonth === element.month && musicYear === item.year) {
            element.musics.push(music);
          }
        });
      });
      console.log(this.yearlyList);
    });
  };
}
