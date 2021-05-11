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

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  search = () => {
    this.moviesService.searchMovies(this.query).subscribe(res => {
      this.results = res.results;
      console.log(this.results);
    });
  }

}
