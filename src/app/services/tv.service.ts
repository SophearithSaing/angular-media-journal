import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TV } from '../models/tv.model';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  apiUrl = environment.movieApiUrl;
  apiImageUrl = environment.movieApiImageUrl;
  apiKey = environment.movieApiKey;

  constructor(private http: HttpClient) {}

  searchTV = (query: string) => {
    const url = `${this.apiUrl}/search/tv?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<{ results: TV[] }>(url);
  };

  getImage = (path: string, width = '/original') => {
    if (width !== '/original') {
      width = `/w${width}`;
    }
    return `${this.apiImageUrl}${width}${path}`;
  };

  formatDate = (date: string) => {
    const oldDate = new Date(date);
    const str = oldDate.toDateString().split(' ');
    return `${str[0]}, ${str[2]} ${str[1]} ${str[3]}`;
  };
}
