import { Component, OnInit } from '@angular/core';
import myMovies from '../../assets/myMovies.json';
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

  organziedList: Array<{ month: string; movies: any[] }> = [
    {
      month: 'January',
      movies: []
    },
    {
      month: 'February',
      movies: []
    },
    {
      month: 'March',
      movies: []
    },
    {
      month: 'April',
      movies: []
    },
    {
      month: 'May',
      movies: []
    },
    {
      month: 'June',
      movies: []
    },
    {
      month: 'July',
      movies: []
    },
    {
      month: 'August',
      movies: []
    },
    {
      month: 'September',
      movies: []
    },
    {
      month: 'October',
      movies: []
    },
    {
      month: 'November',
      movies: []
    },
    {
      month: 'December',
      movies: []
    },
  ];

  constructor(public movies: MoviesService) { }

  ngOnInit(): void {
    console.log(this.myMovies);
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
      this.organziedList.forEach(item => {
        const movieMonth = new Date(movie.endDate).toLocaleDateString('en', { month: 'long' });
        if (movieMonth === item.month) {
          item.movies.push(movie);
        }
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
