import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Book } from '../models/book.model';
import { Movie } from '../models/movie.model';
import { Music } from '../models/music.model';
import { SavedMovie } from '../models/savedMovie.model';
import { TV } from '../models/tv.model';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { BooksService } from '../services/books.service';
import { MoviesService } from '../services/movies.service';
import { MusicsService } from '../services/musics.service';
import { TvService } from '../services/tv.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  movieResults: Movie[] = [];
  tvResults: TV[] = [];
  musicResults: Music[] = [];
  bookResults: Book[] = [];
  selectedItem: Movie | TV | Music | Book | undefined;
  query = '';
  loading = false;
  showQuote = true;
  openModal = false;

  selectValue = 'movies';

  saveForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    rating: new FormControl(''),
  });

  constructor(
    public movieService: MoviesService,
    public tvService: TvService,
    public musicService: MusicsService,
    public bookService: BooksService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {}

  search = () => {
    this.showQuote = false;
    this.loading = true;
    if (this.selectValue === 'movies') {
      this.movieService.searchMovies(this.query).subscribe((res) => {
        this.movieResults = res.results;
        this.loading = false;
      });
    } else if (this.selectValue === 'tv') {
      this.tvService.searchTV(this.query).subscribe((res) => {
        this.tvResults = res.results;
        this.loading = false;
      });
    } else if (this.selectValue === 'music') {
      this.musicService.searchMusic(this.query).subscribe((res) => {
        this.musicResults = res.data;
        this.loading = false;
      });
    } else if (this.selectValue === 'books') {
      this.bookService.searchBooks(this.query).subscribe((res) => {
        this.bookResults = res.items;
        this.loading = false;
      });
    }
  };

  selectItem = (item: Movie | TV | Music | Book) => {
    this.openModal = true;
    this.selectedItem = item;
  };

  saveItem = () => {
    this.auth.user$.subscribe((user: User | null | undefined) => {
      const endDateValue = new Date(this.saveForm.value.endDate);
      const endDateString = endDateValue.toDateString().split(' ');
      const endDate = `${endDateString[2]} ${endDateString[1]} ${endDateString[3]}`;
      const savedMovie: SavedMovie = {
        email: user?.email,
        movie: this.selectedItem,
        endDate,
        network: '',
        rating: this.saveForm.value.rating,
      };
      this.movieService.saveMovie(savedMovie);
      this.saveForm.reset();
    });
    this.openModal = false;
  };

  closeModal = () => {
    this.openModal = false;
  };
}
