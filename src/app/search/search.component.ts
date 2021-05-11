import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results: Movie[] = [];
  query = '';
  loading = false;

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
    this.loading = true;
    this.moviesService.searchMovies('justice league').subscribe(res => {
      this.results = res.results;
      console.log(this.results);
      this.loading = false;
    });
  }

  search = () => {
    this.moviesService.searchMovies(this.query).subscribe(res => {
      this.results = res.results;
      console.log(this.results);
    });
  }

}
