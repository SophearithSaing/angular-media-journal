import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Music } from '../models/music.model';
import { MoviesService } from '../services/movies.service';
import { MusicsService } from '../services/musics.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  movieResults: Movie[] = [];
  musicResults: Music[] = [];
  query = '';
  loading = false;
  showQuote = true;
  openModal = false;

  selectValue = 'movies';

  constructor(public movies: MoviesService, private music: MusicsService) { }

  ngOnInit(): void {
    // this.movies.searchMovies('avengers').subscribe(res => {
    //   this.movieResults = res.results;
    //   this.loading = false;
    // });
  }

  search = () => {
    this.showQuote = false;
    this.loading = true;
    if (this.selectValue === 'movies') {
      this.movies.searchMovies(this.query).subscribe(res => {
        this.movieResults = res.results;
        this.loading = false;
      });
    } else if (this.selectValue === 'music') {
      this.music.searchMusic(this.query).subscribe(res => {
        this.musicResults = res.data;
        this.loading = false;
      });
    }
  }

  selectMovie = () => {
    this.openModal = true;
  }

  saveMovie = () => {
    this.openModal = false;
  }

  selectMusic = () => {
    this.openModal = true;
  }

  saveMusic = () => {
    this.openModal = false;
  }

  closeModal = () => {
    this.openModal = false;
  }

}
