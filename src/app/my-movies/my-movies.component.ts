import { Component, OnInit } from '@angular/core';
import myMovies from '../../assets/myMovies.json';
import { Movie } from '../models/movie.model';
import { FirebaseRes, SavedMovie } from '../models/savedMovie.model';
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

  constructor(public movies: MoviesService) { }

  ngOnInit(): void {
    this.movies.getSavedMovie('sophearithsaing123@gmail.com').subscribe((res) => {
      res.docs.forEach(element => {
        this.myMovies.push(element.data());
      });
      this.sortMovies();
      this.organizeMovie();
    });
    this.movies.getSavedTopMovie('sophearithsaing123@gmail.com').subscribe((res) => {
      res.docs.forEach(element => {
        this.topMovies.push(element.data());
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
            console.log(`Adding ${movie.movie.original_title} to year ${item.year}`);
          }
        });
      });
    });
  }

  getYear = (date: string) => {
    const newDate = new Date(date);
    return newDate.getFullYear();
  }

  enumerate = (num: number) => {
    num = Math.round(num);
    return Array(num).fill(num);
  }
}
