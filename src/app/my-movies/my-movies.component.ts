import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {

  myMovies: any[] = [];
  topMovies: any[] = [];

  yearlyList: Array<{
    year: number,
    months: Array<{
      month: string,
      movies: Array<any>,
    }>,
  }> = [];
  selectedYear: number | null = 2021;

  email: string | null | undefined = '';

  constructor(public movies: MoviesService, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUserData().then(userData => {
      this.email = userData?.email;

      this.movies.getSavedMovie(this.email).subscribe((res) => {
        res.docs.forEach(element => {
          this.myMovies.push(element.data());
        });
        this.sortMovies();
        this.organizeMovie();
      });
    });
  }

  sortMovies = () => {
    this.myMovies.sort((a, b) => {
      const dateA = new Date(a.endDate).getTime();
      const dateB = new Date(b.endDate).getTime();
      return dateA - dateB;
    });
  }

  organizeMovie = () => {
    this.myMovies.forEach(movie => {
      const movieMonth = new Date(movie.endDate).toLocaleDateString('en', { month: 'long' });
      const movieYear = new Date(movie.endDate).getFullYear();
      const month = (months: { month: string }) => months.month === movieMonth;
      const year = (years: { year: number }) => years.year === movieYear;
      if (this.yearlyList.some(year) === false) {
        this.yearlyList.push({
          year: movieYear,
          months: [],
        });
      }
      this.yearlyList.forEach(item => {
        if (item.months.some(month) === false && movieYear === item.year) {
          item.months.push({
            month: movieMonth,
            movies: [],
          });
        }
        item.months.forEach(element => {
          if (movieMonth === element.month && movieYear === item.year) {
            element.movies.push(movie);
          }
        });
      });
      this.selectedYear = this.yearlyList[0].year;
    });
  }

  getYear = (date: string) => {
    const newDate = new Date(date);
    return newDate.getFullYear();
  }
}
