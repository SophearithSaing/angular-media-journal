import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Movie } from '../models/movie.model';
import { Music } from '../models/music.model';
import { BooksService } from '../services/books.service';
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
  bookResults: Book[] = [];
  selectedItem: Movie | Music | Book | undefined;
  query = '';
  loading = false;
  showQuote = true;
  openModal = false;

  selectValue = 'movies';

  constructor(public movies: MoviesService, private music: MusicsService, private books: BooksService) { }

  ngOnInit(): void {
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
    } else if (this.selectValue === 'books') {
      this.books.searchBooks(this.query).subscribe(res => {
        this.bookResults = res.items;
        this.loading = false;
      });
    }
  }

  selectItem = (item: Movie | Music | Book) => {
    this.openModal = true;
    this.selectedItem = item;
  }

  saveItem = () => {
    this.openModal = false;
  }

  closeModal = () => {
    this.openModal = false;
  }

}
