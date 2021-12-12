import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseRes } from '../models/savedMovie.model';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrl = environment.movieApiUrl;
  apiImageUrl = environment.movieApiImageUrl;
  apiKey = environment.movieApiKey;

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getTrendingMovies = () => {
    const url = `${this.apiUrl}/trending/movie/week?api_key=${this.apiKey}`;
    return this.http.get<Movie>(url);
  }

  getPopularMovies = () => {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get<Movie>(url);
  }

  getOneMovie = (id: number) => {
    const url = `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get<Movie>(url);
  }

  searchMovies = (query: string) => {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<{results: Movie[]}>(url);
  }

  getImage = (path: string, width = '/original') => {
    if (width !== '/original') {
      width = `/w${width}`;
    }
    return `${this.apiImageUrl}${width}${path}`;
  }

  formatDate = (date: string) => {
    const oldDate = new Date(date);
    const str = oldDate.toDateString().split(' ');
    return `${str[0]}, ${str[2]} ${str[1]} ${str[3]}`;
  }

  saveMovie = (data: any) => {
    console.log(data);
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('movies')
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  getSavedMovie = (email: string) => {
    return this.firestore.collection('movies', ref => ref.where('email', '==', email)).get();
  }

  getSavedTopMovie = (email: string) => {
    return this.firestore.collection('movies', ref => ref.where('email', '==', email).orderBy('rating', 'desc').orderBy('movie.original_title', 'asc')).get();
  }
}
