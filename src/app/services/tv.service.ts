import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { TV } from '../models/tv.model';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  apiUrl = environment.movieApiUrl;
  apiImageUrl = environment.movieApiImageUrl;
  apiKey = environment.movieApiKey;

  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  searchTV = (query: string) => {
    const url = `${this.apiUrl}/search/tv?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<{ results: TV[] }>(url);
  };

  saveTV = (data: any) => {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('tv')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
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
