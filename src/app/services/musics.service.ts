import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Music } from '../models/music.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { SavedMusic } from '../models/savedMusic.model';

@Injectable({
  providedIn: 'root',
})
export class MusicsService {
  apiUrl = environment.musicApiUrl;
  apiHost = environment.musicApiHost;
  apiKey = environment.musicApiKey;

  options = {
    headers: {
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': this.apiHost,
    },
  };

  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  searchMusic = (query: string) => {
    const url = `${this.apiUrl}/search?q=${query}`;
    return this.http.get<{ data: Music[] }>(url, this.options);
  };

  saveMusic = (data: SavedMusic) => {
    return new Promise<SavedMusic>((resolve, reject) => {
      this.firestore
        .collection('music')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  };

  getSavedBooks = (email: string | null | undefined) => {
    return this.firestore
      .collection('music', (ref) => ref.where('email', '==', email))
      .get();
  };

  formatDate = (date: string) => {
    const oldDate = new Date(date);
    const str = oldDate.toDateString().split(' ');
    return `${str[0]}, ${str[2]} ${str[1]} ${str[3]}`;
  };
}
